import fs from 'fs';
import path from 'path';

// Helper to reliably read web3forms_access_key (both small letters and uppercase) across Vercel, Node, and local environments
function resolveWeb3FormsKey() {
  // 1. Check small letters and uppercase variables
  const explicitVars = [
    process.env.web3forms_access_key,
    process.env.WEB3FORMS_ACCESS_KEY,
    process.env.vite_web3forms_access_key,
    process.env.VITE_WEB3FORMS_ACCESS_KEY,
    process.env.web3forms_key,
    process.env.WEB3FORMS_KEY,
    process.env.VITE_WEB3FORMS_KEY
  ];

  for (const val of explicitVars) {
    if (val && typeof val === 'string' && val.trim() && !val.toLowerCase().includes('your_web3forms')) {
      return val.trim();
    }
  }

  // 2. Case-insensitive scan over all process.env variables (ideal for Vercel lowercase / uppercase)
  if (process.env && typeof process.env === 'object') {
    for (const [k, v] of Object.entries(process.env)) {
      const lower = k.toLowerCase();
      if (
        lower === 'web3forms_access_key' ||
        lower === 'web3forms_key' ||
        lower === 'vite_web3forms_access_key' ||
        lower === 'web3forms'
      ) {
        if (v && typeof v === 'string' && v.trim() && !v.toLowerCase().includes('your_web3forms')) {
          return v.trim();
        }
      }
    }
  }

  // 3. Direct .env / .env.local file parsing for local development
  try {
    const cwd = process.cwd();
    const candidateFiles = ['.env', '.env.local', '.env.development'];
    for (const fileName of candidateFiles) {
      const filePath = path.resolve(cwd, fileName);
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        // Case-insensitive regex match for web3forms_access_key or WEB3FORMS_ACCESS_KEY
        const match = fileContent.match(/(?:vite_)?web3forms_(?:access_)?key\s*=\s*["']?([a-zA-Z0-9_-]+)["']?/i);
        if (match && match[1] && match[1].trim() && !match[1].toLowerCase().includes('your_web3forms')) {
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
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET /api/contact: Safely provides the active Web3Forms public access key to the client
  if (req.method === 'GET') {
    const accessKey = resolveWeb3FormsKey();
    if (!accessKey) {
      return res.status(503).json({
        configured: false,
        message: 'web3forms_access_key is not yet configured in environment variables.'
      });
    }
    return res.status(200).json({
      configured: true,
      key: accessKey
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Only GET and POST requests are accepted.'
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

    // 3. Resolve Web3Forms Access Key from environment variables
    const accessKey = resolveWeb3FormsKey();

    if (!accessKey) {
      return res.status(503).json({
        success: false,
        message: 'Email service access key is not yet configured in server environment variables (web3forms_access_key). Please add your key to .env or Vercel Environment Variables.'
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
    const userAgent = req.headers?.['user-agent'] || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

    const web3Response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': userAgent,
        'Origin': origin,
        'Referer': referer
      },
      body: JSON.stringify(web3Payload)
    });

    const rawText = await web3Response.text();
    let data = {};
    try {
      data = JSON.parse(rawText);
    } catch (e) {
      // not JSON
    }

    // 5. Strictly verify Web3Forms response before confirming success
    if (web3Response.ok && data.success === true) {
      return res.status(200).json({
        success: true,
        message: 'Message sent successfully! Prince will get back to you soon.'
      });
    } else {
      // If Web3Forms blocked server IP, return key so client can complete direct submit
      return res.status(web3Response.status || 400).json({
        success: false,
        fallbackKey: accessKey,
        message: data.message || 'Web3Forms failed to deliver the message.'
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
