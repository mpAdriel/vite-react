const Environment = {
  mode: import.meta.env.MODE,
  baseUrl: import.meta.env.VITE_BASE_URL,
  isPro: import.meta.env.VITE_PROD,
  isLocal: import.meta.env.VITE_DEV,
  ssr: import.meta.env.SSR,
  appName: import.meta.env.VITE_APP_NAME,
};

export default Environment;
