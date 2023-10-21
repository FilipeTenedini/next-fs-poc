declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_CLIENT_ID: string;
      NODE_ENV: 'development' | 'production';
      GOOGLE_CLIENT_SECRET: string;
    }
  }
}

export {}