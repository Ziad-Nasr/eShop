/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
//resolver: {
//  file
//}
module.exports = {
  resolver: {
    sourceExts: ['jsx', 'js', 'tsx', 'ts'],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
