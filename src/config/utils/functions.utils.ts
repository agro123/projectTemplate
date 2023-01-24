import {Linking} from 'react-native';
import {createNavigationContainerRef} from '@react-navigation/native';

export const openOnBrowser = async (url: string) => {
  try {
    const canOpenUrl = await Linking.canOpenURL(url);
    if (canOpenUrl) {
      Linking.openURL(url);
    }
  } catch (e) {
    throw new Error(`openOnBrowser: ${e}`);
  }
};

/* export const createFormData = (photo: any) => {
  const data = new FormData();
  data.append('file', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  return data;
};
 */

export const navigationRef = createNavigationContainerRef();
export function navigate(name: never, params: never) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
