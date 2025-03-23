import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const siteUrl = process.env.PUBLIC_SITE_URL;

if (!siteUrl) {
  throw new Error('PUBLIC_SITE_URL não está definida');
}

const robotsTxt = `
User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteUrl}/sitemap-index.xml
`.trim();

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('robots.txt gerado com sucesso!');