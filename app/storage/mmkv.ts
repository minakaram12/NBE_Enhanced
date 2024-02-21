import {MMKVLoader} from 'react-native-mmkv-storage';

const storage = new MMKVLoader().withEncryption().initialize();

export const getRememberMe = () => storage.getBool('isRememberMe');
export const getUsername = () => storage.getString('username');
export const getPassword = () => storage.getString('password');
export const getTheme = () => storage.getString('theme');

export const setRememberMe = (value: boolean) => storage.setBool('isRememberMe', value);
export const setUsername = (value: string) => storage.setString('username', value);
export const setPassword = (value: string) => storage.setString('password', value);
export const setTheme = (value: string) => storage.setString('theme', value);