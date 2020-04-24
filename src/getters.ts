import { warnOnInvalidKey } from './utils';
import constants from './constants';

export const getColorForKey = (colorName: string) => {
  return constants.colors[colorName] || colorName;
};

export const getTextAlign = (name: string) => {
  if (!constants.alignment[name]) {
    warnOnInvalidKey(
      `${name} is not valid alignment property. Try some of this ${Object.keys(
        constants.alignment
      )}, or extend consistencss using the extend method.`
    );
  }
  return constants.alignment[name];
};

export const getSizeForKey = (size: string) => {
  const nSize = Number(size);
  if (isNaN(nSize) && !constants.sizing[size]) {
    warnOnInvalidKey(
      `Size ${size} doesn't exists. Try some of this ${Object.keys(
        constants.sizing
      )}, or extend consistencss using the extend method.`
    );
  }
  return constants.sizing[size] || (nSize / 4) * constants.sizing.base;
};

export const getFontWeigth = (weight: string) => {
  if (!constants.fontWeights[weight]) {
    warnOnInvalidKey(
      `Font weight ${weight} doesn't exists. Try some of this ${Object.keys(
        constants.fontWeights
      )}, or extend consistencss using the extend method.`
    );
  }
  return constants.fontWeights[weight];
};
