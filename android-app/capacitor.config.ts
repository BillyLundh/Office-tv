import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.qualipro.officetv',
  appName: 'Office TV',
  webDir: 'dist',
  android: {
    backgroundColor: '#121315',
    allowMixedContent: false,
  },
};

export default config;
