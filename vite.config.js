import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    base: '/',
    define: {
      'import.meta.env.VITE_WEB3FORMS_ACCESS_KEY': JSON.stringify(
        env.web3forms_access_key || env.WEB3FORMS_ACCESS_KEY || ''
      )
    },
    plugins: [
      react(),
      {
        name: 'local-api-contact-middleware',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res) => {
            if (req.method === 'OPTIONS') {
              res.writeHead(200, {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type,Accept',
              });
              return res.end();
            }

            if (req.method === 'GET') {
              try {
                const currentEnv = loadEnv(server.config.mode || 'development', process.cwd(), '');
                Object.assign(process.env, currentEnv);
                const { default: handler } = await server.ssrLoadModule('/api/contact.js');
                const mockReq = { method: 'GET', headers: req.headers };
                let statusCode = 200;
                const responseHeaders = {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*'
                };
                const mockRes = {
                  setHeader(k, v) { responseHeaders[k] = v; },
                  status(code) { statusCode = code; return this; },
                  json(data) {
                    res.writeHead(statusCode, responseHeaders);
                    res.end(JSON.stringify(data));
                  },
                  end(data) {
                    res.writeHead(statusCode, responseHeaders);
                    res.end(data || '');
                  }
                };
                return await handler(mockReq, mockRes);
              } catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ success: false, message: error.message }));
              }
            }

            if (req.method === 'POST') {
              let bodyStr = '';
              req.on('data', (chunk) => {
                bodyStr += chunk;
              });

              req.on('end', async () => {
                try {
                  const currentEnv = loadEnv(server.config.mode || 'development', process.cwd(), '');
                  Object.assign(process.env, currentEnv);

                  const body = JSON.parse(bodyStr || '{}');
                  const { default: handler } = await server.ssrLoadModule('/api/contact.js');

                  const mockReq = {
                    method: 'POST',
                    body,
                    headers: req.headers
                  };

                  let statusCode = 200;
                  const responseHeaders = {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                  };

                  const mockRes = {
                    setHeader(k, v) {
                      responseHeaders[k] = v;
                    },
                    status(code) {
                      statusCode = code;
                      return this;
                    },
                    json(data) {
                      res.writeHead(statusCode, responseHeaders);
                      res.end(JSON.stringify(data));
                    },
                    end(data) {
                      res.writeHead(statusCode, responseHeaders);
                      res.end(data || '');
                    }
                  };

                  await handler(mockReq, mockRes);
                } catch (error) {
                  res.writeHead(500, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                  });
                  res.end(JSON.stringify({ success: false, message: error.message }));
                }
              });
            } else {
              res.writeHead(405, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, message: 'Method Not Allowed' }));
            }
          });
        }
      }
    ],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'three-vendor': ['three'],
            'react-vendor': ['react', 'react-dom'],
            'icons': ['lucide-react']
          }
        }
      },
      chunkSizeWarningLimit: 600
    },
    server: {
      port: 3000,
      open: true
    }
  };
});
