import '@/styles/globals.css';
import '@arco-themes/react-sorghum/css/arco.css';
import type { AppProps } from 'next/app';
import { configResponsive } from 'ahooks';
import { DefaultSeo } from 'next-seo';
import { default_seo_config } from '@/config/seo.config';
import 'views/BookContentPage/components/BookReader.css';
configResponsive({
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xl2: 1536,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...default_seo_config} />
      <Component {...pageProps} />
    </>
  );
}
