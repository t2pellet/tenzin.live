import createMiddleware from 'next-intl/middleware';
import { languages } from '@/types/locale';

export default createMiddleware({
  locales: languages,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
