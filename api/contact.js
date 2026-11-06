import fs from 'fs';
import path from 'path';

// Helper to reliably read WEB3FORMS_ACCESS_KEY across Vercel, Node, and local environments
function resolveWeb3FormsKey() {
  // 1. Check standard environment variables
  const envVars = [
    process.env.WEB3FORMS_ACCESS_KEY,
    process.env.VITE_WEB3FORMS_ACCESS_KEY,
    process.env.VITE_WEB3FORMS_KEY,
    process.env.WEB3FORMS_KEY
  ];

  for (const val of envVars) {
    if (val && typeof val === 'string' && val.trim() && val.trim() !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
      return val.trim();
    }
  }

  // 2. Direct .env / .env.local file parsing for local development
  try {
    const cwd = process.cwd();
    const candidateFiles = ['.env', '.env.local', '.env.development'];
    for (const fileName of candidateFiles) {
      const filePath = path.resolve(cwd, fileName);
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        // Look for WEB3FORMS_ACCESS_KEY or VITE_WEB3FORMS_ACCESS_KEY
        const match = fileContent.match(/(?:VITE_)?WEB3FORMS_(?:ACCESS_)?KEY\s*=\s*["']?([a-zA-Z0-9_-]+)["']?/);
        if (match && match[1] && match[1].trim() && match[1].trim() !== 'your_web3forms_access_key_here') {
          return match[1].trim();
        }
      }
    }
  } catch (err) {
    // Ignore fs errors in strictly sandboxed serverless runtimes
  }

  return null;
}

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Only POST requests are accepted.'
    });
  }

  try {
    const { name, email, subject, message, botcheck } = req.body || {};

    // 1. Anti-spam honeypot verification
    if (botcheck) {
      // Spam bot detected: acknowledge with 200 without sending to prevent retries
      return res.status(200).json({
        success: true,
        message: 'Message processed successfully.'
      });
    }

    // 2. Form field validation
    const cleanName = (name || '').trim();
    const cleanEmail = (email || '').trim();
    const cleanSubject = (subject || '').trim();
    const cleanMessage = (message || '').trim();

    if (!cleanName || cleanName.length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid name (at least 2 characters).'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    if (!cleanSubject || cleanSubject.length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a subject line (at least 2 characters).'
      });
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Message is too short. Please provide at least 10 characters.'
      });
    }

    // 3. Resolve Web3Forms Access Key from environment variables (never hardcoded)
    const accessKey = resolveWeb3FormsKey();

    if (!accessKey) {
      return res.status(503).json({
        success: false,
        message: 'Email service access key is not yet configured in server environment variables (WEB3FORMS_ACCESS_KEY). Please add your key to .env or Vercel Environment Variables.'
      });
    }

    // 4. Submit to Web3Forms API
    const web3Payload = {
      access_key: accessKey,
      name: cleanName,
      email: cleanEmail,
      replyto: cleanEmail,
      subject: `[Portfolio Contact] ${cleanSubject} - from ${cleanName}`,
      message: `Sender Name: ${cleanName}\nSender Email: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}\n\n---\nSent from Prince Kumar Portfolio (LNCTS Bhopal)`,
      from_name: `${cleanName} via Portfolio`
    };

    const origin = req.headers?.origin || 'https://prince-portfolio.vercel.app';
    const referer = req.headers?.referer || 'https://prince-portfolio.vercel.app/';

    const web3Response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': origin,
        'Referer': referer
      },
      body: JSON.stringify(web3Payload)
    });

    const data = await web3Response.json().catch(() => ({}));

    // 5. Strictly verify Web3Forms response before confirming success
    if (web3Response.ok && data.success === true) {
      return res.status(200).json({
        success: true,
        message: 'Message sent successfully! Prince will get back to you soon.'
      });
    } else {
      return res.status(web3Response.status || 400).json({
        success: false,
        message: data.message || 'Web3Forms failed to deliver the message. Please verify your access key.'
      });
    }

  } catch (error) {
    console.error('Contact Form Backend Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'An unexpected error occurred while transmitting your message.'
    });
  }
}
