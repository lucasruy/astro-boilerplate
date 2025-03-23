const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'http://localhost:4321';
const IS_PRODUCTION = import.meta.env.PROD;

export const ENV = {
  SITE_URL,
  IS_PRODUCTION,
} as const;

if (!SITE_URL && IS_PRODUCTION) {
  throw new Error('PUBLIC_SITE_URL não está definida em produção');
}