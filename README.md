# projectTemplate

## Tabla de Contenido
- [Proyecto de SAI | Aplicación movil](#proyecto-de-sai--aplicación-movil)
- [Tabla de Contenido](#tabla-de-contenido)
- [Descripción](#descripción)
- [Prerequisitos:](#prerequisitos)
- [Iniciar aplicación](#iniciar-aplicación)
  - [Paso 1 Instalar dependencias](#paso-1-instalar-dependencias)
  - [Paso 2 Iniciar Metro](#paso-2-iniciar-metro)
  - [Paso 3 Correr en un simulador](#paso-3-correr-en-un-simulador)
- [Firmar aplicación Android](#firmar-aplicación-android)
- [Distribuir aplicación](#distribuir-aplicación)
  - [Android](#android)
- [Sistema de directorios](#sistema-de-directorios)



<a name="descripción"></a>

## Descripción
Aplicación móvil para turistas. 
Permite visualizar servicios, experiencias turísticas, Agenda cultural, eventos; el usuario podrá registrarse, visualizar su información, modificar su información, obtener cupones, visualizar sus cupones,  añadir servicios a favoritos, visualizar sus notificaciones, habilitar factor de doble autenticación, consultar el glosario de términos y preguntas frecuentes; y cuenta con visualización de contenido sin conexión.

Aplicación para usuarios PIT.
Permite a los usuarios PIT, realizar encuestas con o sin conexión a internet y modificar su información de perfil.

<a name="prerequisitos"></a>

## Prerequisitos:

| Nombre | Descripción | Versión |
| -- | -- | -- |
| [NodeJs](https://nodejs.org/) | es un entorno de servidor de código abierto multiplataforma que puede ejecutarse en Windows, Linux, Unix, macOS y más | ``v16.17.0`` | 
| [React Native development enviroment](https://reactnative.dev/docs/environment-setup) | Debes configurar tu pc para trabajar con React Native |  
| [Android Studio](https://developer.android.com/studio) | Entorno de desarrollo (IDE) para el desarrollo de aplicaciones Android. | ``2021.3.1`` | 
| [Xcode](https://developer.apple.com/xcode/) | Todo lo que necesitas para desarrollar, probar y distribuir aplicaciones en todas las plataformas de Apple.  | ``14^`` | 
Android SDK | Kit de desarrollo de software para Android  | ``31 (Android 11)``|
iOS| Versión minima requerida de iOS | ``12`` |

*Para el desarrollo y distribucion de apps para iOS se requiere macOS.

## Iniciar Aplicación

### Paso 1 Instalar dependencias

```bash
npm i
```
ó
```bash
yarn install
```

Es recomendable actualizar el archivo Podfile.lock
```bash
cd ios && pod install
```
*En caso de obtener la siguiente advertencia al actualizar el archivo Podfile.lock:
```bash
WARNING: CocoaPods requires your terminal to be using UTF-8 encoding.
    Consider adding the following to ~/.profile:

    export LANG=en_US.UTF-8
```
Ejecute el siguiente comando en la terminal e intente nuevamente.
```bash
export LANG=en_US.UTF-8
```
### Paso 2 Iniciar Metro:
```bash
npx react-native start --reset-cache
```
### Paso 3 Correr en un simulador: 
Si configuraste correctamente el ambiente de desarrollo para React Native tal como lo explica la documentación [React Native development enviroment](https://reactnative.dev/docs/environment-setup) cada simulador se lanzara automaticamente:
- Emulador de Android: 
```bash
npx react-native run-android
```
- Simulador de iOS: 
```bash
npx react-native run-ios
```
*Mas información: [Running On Simulator iOS](https://reactnative.dev/docs/running-on-simulator-ios)

Otra forma de correr en un simulador es directamente desde la herramienta de desarrollo de cada plataforma.

## Firmar aplicación Android
- [Signed apk android](https://reactnative.dev/docs/signed-apk-android)

## Distribuir aplicación
### Android
- Bundle .aab
```bash
cd android && ./gradlew bundleRelease
```
- APK
```bash
cd android && ./gradlew assembleRelease
```
- Debug
```bash
cd android && ./gradlew assembleDebug
```

## Sistema de directorios

El sistema de directorios está organizado de la siguiente manera:
- `android` Contiene todo el codigo nativo de la aplicación para dispositivos android.
- `ios` Contiene todo el codigo nativo de la aplicacion para dispositivos iOS.
- `jest` Contiene los mocks de algunas librerias para pruebas unitarias.
- `release` Contiene imagenes para el despliegue de la aplicación.
- `src` Contiene el codigo fuente de la apliación.
	- `@sai` Contiene los componentes y otras ayudas de la apliación.
	  - `components` Contiene los componentes React reutilizables.
	  - `context` Contiene el hook y el provider de la base de datos local en sqlite.
	  - `hooks` Contiene los hooks de la aplicacion.
	  - `i18n` Contiene los idiomas de la aplicación.
      - `interface` Contiene las interfaces y los types de la aplicación.
      - `presenter` Contiene el Redux y las llamadas a base de datos de la aplicación.
      - `services` Contiene la configuracion de la base de datos local sqlite.
      - `theme` Contiene los colores de la aplicación.
      - `utils` Contiene funciones y otros elementos auxiliares.
  - `app` Contiene las pantallas y la navegación.
	  - `navigation` Contiene la navegacion en stack y tabs.
	  - `screens` Contiene todas pantallas de la aplicación.
    - `App.tsx` .
  - `assets` Contiene el contenido multimedia de la aplicación.
	  - `media` Contiene imagenes en formato png, jpg y video mp4.
	  - `svg` Contiene todos los componentes SVG de la aplicación.
- `firebase.json` Contiene la configuracion para los push notification enviados desde firebase.
