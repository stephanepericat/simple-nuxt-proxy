import httpProxy from "http-proxy";
import fs from "fs";

httpProxy.createServer({
    target: {
      host: '192.168.0.13',
      port: 3000
    },
    ssl: {
      key: fs.readFileSync('./dev.shortwavaudio.co/key.pem', 'utf8'),
      cert: fs.readFileSync('./dev.shortwavaudio.co/cert.pem', 'utf8')
    }
  }).listen(443);
