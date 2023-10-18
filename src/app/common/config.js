// config.js

const isProduction = process.env.NODE_ENV === 'production';

const API_URL = isProduction ? process.env.PROD_API_URL : process.env.LOCAL_API_URL;
const APP_URL = isProduction ? process.env.PROD_APP_URL : process.env.LOCAL_APP_URL;

export { API_URL, APP_URL };
