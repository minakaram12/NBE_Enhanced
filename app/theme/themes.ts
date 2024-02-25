import light from '../theme/light/light';
import dark from '../theme/dark/dark';

export const themes = [light, dark];
//  console.log("in light"+themes[0].bg);
//  console.log("in dark" +themes[1].bg);

export const GetTheme = (theme: string) => {
  switch (theme) {
    case "Light":
      return themes[0];
    case "Dark":
      return themes[1];
    default:
      return themes[0];
  }
};
