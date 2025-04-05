export const FONT_FAMILY = "Montserrat, sans-serif";
export const BORDER_RADIUS = "5px";
export const TOKEN_KEY = "xyz";
export const CRM_URL =
  import.meta.env.VITE_ENVIRONMENT === "production"
    ? import.meta.env.VITE_CRM_API_BASE_URL_PRODUCTION
    : import.meta.env.VITE_CRM_API_BASE_URL_DEVELOPMENT;
