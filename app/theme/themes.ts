import light from '../theme/light/light';
import dark from '../theme/dark/dark';

export const themes = [light, dark];

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
