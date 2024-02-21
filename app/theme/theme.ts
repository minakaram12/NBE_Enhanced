import {getTheme} from '../storage/mmkv';
import {GetTheme} from './themes';

const  themeTmp = getTheme() ?? 'Light';

export const theme = GetTheme(themeTmp);
console.log("inthemefile"+getTheme()+"  "+themeTmp +"  " +theme?.bg);
console.log("inthemefile"+theme.bg);
console.log("infile"+theme?.AliceBlue);

