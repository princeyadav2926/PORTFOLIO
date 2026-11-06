// Netlify Serverless Function for Prince Kumar Contact Form
import handler from '../../api/contact.js';

export default async (req, context) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type,Accept',
      }
    });
  }

  let body = {};
  if (req.method === 'POST') {
    try {
      body = await req.json();
    } catch (e) {
      body = {};
    }
  }

  let statusCode = 200;
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  const mockRes = {
    setHeader(k, v) { headers[k] = v; },
    status(code) { statusCode = code; return this; },
    json(data) {
      return new Response(JSON.stringify(data), { status: statusCode, headers });
    },
    end(data) {
      return new Response(data || '', { status: statusCode, headers });
    }
  };

  const mockReq = {
    method: req.method,
    body,
    headers: req.headers ? Object.fromEntries(req.headers.entries()) : {}
  };

  return await handler(mockReq, mockRes);
};

