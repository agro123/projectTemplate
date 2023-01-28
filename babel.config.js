module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@hooks': './src/config/hooks',
          '@utils': './src/config/utils',
          '@redux': './src/config/redux',
          '@views': './src/views',
          '@navigation': './src/app/navigation',
          '@components': './src/components',
          '@theme': './src/assets/theme',
          '@localization': './src/config/localization',
          '@interface': './src/config/interface',
        },
      },
    ],
  ],
};
