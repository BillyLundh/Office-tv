# Qualipro Office TV prototype

A standalone React + TypeScript + Vite signage prototype, designed for a 1920 × 1080 Samsung TV and usable with a keyboard or Samsung remote. Its photo scenes are bundled locally in `public/office-scenes.jpg`, so the interface stays available without a network connection. This is a front-end proof of concept; schedule and status content are sample data.

## Requirements

- Node.js 18+ and npm
- For TV deployment: Samsung Tizen Studio with TV extensions, a Samsung TV with Developer Mode enabled, and SDB available from Tizen Studio

Tizen Studio and SDB were not present in the development environment used for this prototype. No automatic installation was attempted. Actual TV runtime compatibility has not been verified.

## Run in a desktop browser

```sh
npm install
npm run dev
```

Open the local URL Vite prints. Use arrow keys and Enter, and Escape/Backspace to return. The whiteboard also supports mouse and touch input. Production output is generated with:

```sh
npm run build
npm run preview
```

## Tizen packaging and install

The Tizen metadata template is in `public/config.xml`; Vite copies it into `dist/`. The Vite build is not itself a Tizen package.

1. Install Tizen Studio and its TV extensions using Samsung's official installer. In Package Manager install the TV SDK and a TV Emulator if desired.
2. Open Certificate Manager in Tizen Studio and create a Samsung author certificate profile. A Samsung TV distribution certificate may be required for installation on a physical TV.
3. Replace the sample `tizen:application` ID and package in `public/config.xml` with IDs generated for your certificate profile. Keep the application ID, package name and signing profile consistent.
4. Run `npm run build`. In Tizen Studio, import the `dist/` folder as a Tizen Web Application project (or create a TV Web Application and copy the contents of `dist/` into its project root). Ensure `config.xml` sits beside `index.html`, then build/sign the `.wgt` package from Tizen Studio.
5. On the TV, open Apps, enter `12345` with the remote to enable Developer Mode, set the development PC IP address, and restart the TV. TV model menus and developer mode behavior vary.
6. Connect and install from a terminal using the SDB bundled with Tizen Studio (use its full path if it is not on `PATH`):

```sh
sdb connect TV_IP_ADDRESS:26101
sdb devices
# Install the signed widget produced by Tizen Studio
sdb install path/to/QualiproOfficeTV.wgt
```

Use Tizen Studio's Device Manager and Run As workflow if preferred. Samsung's TV remote Back key can be intercepted by the system on some models; test the app on the target TV and tune the Back key behavior if needed.

## Compatibility notes

- The code avoids server rendering, canvas frameworks and newer browser features. Vite's output target is ES2017; older TV models may need a lower build target or transpilation after testing.
- `tizen.tvinputdevice.registerKey` is feature-checked and guarded. TV key registration and delivery differ across Tizen releases. Keyboard equivalents work in desktop browser testing.
- The whiteboard uses a 2D canvas and Pointer Events. Older TV runtimes without Pointer Events will retain remote navigation but may need mouse-event fallback for drawing.
- For wider legacy compatibility, serve the built app from the Tizen Web Application package; do not rely on Vite's development server at runtime.

## Structure

- `src/components/` reusable chrome
- `src/pages/` dashboard, gallery, demo, whiteboard
- `src/hooks/` clock and centralized remote input
- `src/styles/` TV-focused styling
- `src/utils/` local prototype data
- `public/` Tizen metadata and app icon

Future Firebase and device-management services should be introduced behind a data/configuration layer; the TV screens currently import local presentation data only.
