export interface ServerConfig {
  api_server: {
    protocol: 'http' | 'https';
    hostname: string;
    port: number;
  };
}
