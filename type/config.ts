export interface FrontServerConfig {
  api_server: {
    protocol: 'http' | 'https';
    hostname: string;
    port: number;
  };
}
