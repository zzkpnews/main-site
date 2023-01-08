import { ServerConfig } from "types/config";

export const config: ServerConfig = {
  api_server: {
    enableHttps: false,
    hostname: "localhost",
    port: 3000,
  },
  seo: {
    openGraph: {
      type: "website",
      locale: "zh_CN",
      url: "https://www.zzkpnews.com/",
      siteName: "中原科技网",
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    },
    defaultTitle: "中原科技网",
    themeColor: "#B91C1C",
  },
};
