# Office TV

This repository contains two independent applications for QualiPro office displays.

## Tizen

Location: [`tizen/`](tizen/)

Target: Samsung Tizen TVs, including the TU85CU8075. The Tizen source, Vite configuration, packaging metadata, assets, and setup instructions are in that folder. See [`tizen/README.md`](tizen/README.md) for Tizen Studio packaging and deployment.

```sh
cd tizen
npm ci
npm run dev
npm run build
```

## Android

Location: [`android-app/`](android-app/)

Target: Samsung WA65C interactive display running Android 11. This is a separate React, TypeScript, Vite, and Capacitor app with its own native Gradle project and dependencies.

```sh
cd android-app
npm ci
npm run dev
npm run build
npm run android:sync
```

To build a debug APK on macOS or Linux, use JDK 21 and the Android SDK, then run:

```sh
cd android
./gradlew assembleDebug
```

The APK is generated at `android-app/android/app/build/outputs/apk/debug/app-debug.apk`. See [`android-app/README.md`](android-app/README.md) for Android Studio, release signing, and device setup details.

Each app has its own `package.json` and lockfile. Install dependencies and run build commands from the relevant app folder; there is no shared root package manifest.
