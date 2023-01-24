import {useTranslation} from 'react-i18next';

const useTranslate = (ns: string) => {
  const translation = useTranslation(ns);

  const tKey = <T>(key: string): keyof T => translation.t(key);

  return {
    ...translation,
    tKey,
  };
};
export default useTranslate;
