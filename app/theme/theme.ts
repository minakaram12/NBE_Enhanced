import {getTheme} from '../storage/mmkv';
import {GetTheme} from './themes';

const  themeTmp = getTheme()??'Light';

export const theme = GetTheme(themeTmp);


