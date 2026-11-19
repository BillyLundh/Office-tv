# Office TV Android

Android app for the Samsung WA65C interactive display. React, TypeScript, and Vite provide the interface; Capacitor hosts it in the native Android app. This folder has its own dependencies and an independent native Gradle project.

## Requirements

- Node.js 22.12 or later
- Android Studio with Android SDK Platform 36 or later installed
- JDK 21 for the included Gradle wrapper

## Develop and build the web app

Run these commands from `android-app/`:

```sh
npm ci
npm run dev
npm run build
```

## Build the Android app

The Capacitor Android project is already included in `android/`. After installing dependencies, build and sync the web app into the native project:

```sh
npm run android:sync
```

To open the project in Android Studio:

```sh
npm run android:open
```

To build a debug APK from macOS or Linux, set `JAVA_HOME` to a JDK 21 installation, ensure Android Studio's SDK is configured, and run:

```sh
cd android
./gradlew assembleDebug
```

The debug APK is written to `android/app/build/outputs/apk/debug/app-debug.apk`.

For a release APK, use Android Studio's **Build > Generate Signed Bundle / APK** flow and select APK. Create or select a signing key. Release artifacts are written under `android/app/build/outputs/apk/release/`.

## App details

- Application ID: `com.qualipro.officetv`
- App name: `Office TV`
- The WA65C runs Android 11; the included app supports API 24 and later.
- The app bundles its photo scenes and QualiPro brand assets for offline use.
- Schedule, weather, and announcement content are local sample content.

The Android native project and build output are separate from the Tizen app in `../tizen/`.
