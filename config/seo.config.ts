import { DefaultSeoProps } from 'next-seo';

const default_seo_config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.zzkpnews.com/',
    siteName: '中原科技网',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  defaultTitle: '中原科技网',
  themeColor: '#B91C1C',
};

export { default_seo_config };
