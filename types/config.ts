import { DefaultSeoProps } from "next-seo";

export interface ServerConfig {
  api_server: {
    enableHttps: boolean;
    hostname: string;
    port: number;
  };
  seo?: DefaultSeoProps;
}
