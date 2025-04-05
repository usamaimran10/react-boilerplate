/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL_DEVELOPMENT: string;
  readonly VITE_API_BASE_URL_PRODUCTION?: string;
  readonly VITE_ENVIRONMENT: "development" | "production";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
