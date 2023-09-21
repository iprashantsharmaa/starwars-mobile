import { Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';
export const truncate = (str, maxlength = 15) =>
  str?.length > maxlength ? `${str?.slice(0, maxlength - 1)}..` : str;
