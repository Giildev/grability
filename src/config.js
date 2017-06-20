import CryptoJS from 'crypto-js';

export const PubKey = "30f53129cad6ab1e89e406f839356890";
export const PrivKey = "b732db679c3e897f041f7f4b82e77cdc6777b58a";
export const TS = new Date().getTime();
export const Hash = CryptoJS.MD5(TS + PrivKey + PubKey).toString();
export const UrlCharacters = "http://gateway.marvel.com/v1/public/characters"
export const UrlComic = "http://gateway.marvel.com/v1/public/comics"
