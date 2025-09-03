module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    // 'react-native-worklets/plugin',
    ['@babel/plugin-transform-export-namespace-from'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        // alias: {
        //   '@tests': './src/tests',
        //   '@theme': './src/theme',
        //   '@types': './src/types',
        //   '@context': './src/context',
        //   '@utils': './src/utils',
        //   '@styles': './src/styles',
        //   '@navigation': './src/navigation',
        //   '@components': './src/components',
        //   '@icons': './src/components/assets/icons',
        //   '@screens': './src/screens',
        // },
      },
    ],
  ],
};
