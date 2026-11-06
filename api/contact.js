// Vercel Serverless Function: POST /api/contact
// Securely handles contact form submissions and routes them to Prince Kumar's Gmail (princeraj.947168@gmail.com)

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

    // 1. Honeypot anti-spam verification
    if (botcheck) {
      // Spam detected silently: return 200 without sending to prevent bot retries
      return res.status(200).json({
        success: true,
        message: 'Message processed successfully.'
      });
    }

    // 2. Strict Input Validation
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
        message: 'Please provide a valid email address where Prince can reply.'
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

    const recipientEmail = 'princeraj.947168@gmail.com';

    // 3. Environment Variables (never exposed to frontend client bundles)
    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_KEY;
    const emailJsServiceId = process.env.EMAILJS_SERVICE_ID;
    const emailJsTemplateId = process.env.EMAILJS_TEMPLATE_ID;
    const emailJsPublicKey = process.env.EMAILJS_PUBLIC_KEY;
    const emailJsPrivateKey = process.env.EMAILJS_PRIVATE_KEY;

    // 4. Primary Provider: Web3Forms (if key is configured)
    if (web3formsAccessKey && web3formsAccessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
      const web3Response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': req.headers?.origin || 'https://prince-portfolio.vercel.app',
          'Referer': req.headers?.referer || 'https://prince-portfolio.vercel.app/'
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          name: cleanName,
          email: cleanEmail,
          subject: `[Portfolio] ${cleanSubject} (from ${cleanName})`,
          message: `Sender Name: ${cleanName}\nSender Email: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}\n\n---\nSent from Prince Kumar Portfolio (LNCTS Bhopal)`,
          from_name: `${cleanName} via Portfolio`,
          to: recipientEmail
        })
      });

      const data = await web3Response.json().catch(() => ({}));

      if (web3Response.ok && data.success) {
        return res.status(200).json({
          success: true,
          message: 'Message delivered successfully to Prince Kumar! Thank you for reaching out.'
        });
      } else {
        return res.status(web3Response.status || 502).json({
          success: false,
          message: data.message || 'Web3Forms service failed to deliver message.',
          provider: 'web3forms'
        });
      }
    }

    // 5. Alternate Provider: EmailJS (if configured)
    if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
      const emailJsPayload = {
        service_id: emailJsServiceId,
        template_id: emailJsTemplateId,
        user_id: emailJsPublicKey,
        ...(emailJsPrivateKey ? { accessToken: emailJsPrivateKey } : {}),
        template_params: {
          name: cleanName,
          from_name: cleanName,
          email: cleanEmail,
          from_email: cleanEmail,
          to_email: recipientEmail,
          subject: cleanSubject,
          message: cleanMessage,
          sent_at: new Date().toISOString()
        }
      };

      const emailJsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailJsPayload)
      });

      if (emailJsResponse.ok) {
        return res.status(200).json({
          success: true,
          message: 'Message delivered successfully to Prince Kumar via EmailJS!'
        });
      } else {
        const errText = await emailJsResponse.text().catch(() => 'EmailJS error');
        return res.status(emailJsResponse.status || 502).json({
          success: false,
          message: `EmailJS dispatch failed: ${errText}`,
          provider: 'emailjs'
        });
      }
    }

    // 6. If no API key is yet set in environment variables
    return res.status(503).json({
      success: false,
      message: 'Email service access key is not yet configured in server environment variables (WEB3FORMS_ACCESS_KEY).',
      recipientEmail
    });

  } catch (error) {
    console.error('Portfolio Contact Handler Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'An unexpected server error occurred while sending your message.'
    });
  }
}
