import { SiderTheme } from 'antd/lib/layout/Sider';
import UrlPattern from 'url-pattern';
import Utils from 'utils';

export const MARKETS = Object.freeze({
  coingecko: 'coingecko',
});

export const END_POINTS = Object.freeze({
  markets: new UrlPattern(
    `/coins/markets(${Utils.getUrlPattern(MARKETS.coingecko)})`
  ),
});

export const BASE_URLS = Object.freeze({
  coingecko: 'https://api.coingecko.com/api/v3',
});

export const FIREBASE_CONFIG = Object.freeze({
  apiKey: 'AIzaSyDFQTJqq7bURFY4qEKgZjjEtbKBJB8Crps',
  authDomain: 'olympus-f5d27.firebaseapp.com',
  databaseURL: 'https://olympus-f5d27-default-rtdb.firebaseio.com',
  projectId: 'olympus-f5d27',
  storageBucket: 'olympus-f5d27.appspot.com',
  messagingSenderId: '779350148307',
  appId: '1:779350148307:web:8aa1ea4492f96fe49c0026',
  measurementId: 'G-E0HKZTE96C',
});

export const THEME_CONFIG = Object.freeze({
  APP_NAME: 'Olympus',
  currentTheme: 'light' as SiderTheme,
  sideNavTheme: 'light' as SiderTheme,
});
