import { Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';
export const truncate = (str, maxlength) =>
  str?.length > maxlength ? `${str?.slice(0, maxlength - 1)}..` : str;
