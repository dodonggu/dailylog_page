# Daily Log Landing Page

Public landing site for Daily Log.

This project is not the main product experience. It exists to introduce the service, build trust, guide Android installs, and provide support, privacy, and terms pages for public distribution.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- react-qr-code

## Pages

- `/` : product landing page
- `/download` : Android download hub with device-aware CTA priority
- `/roadmap` : product value and roadmap overview
- `/support` : install help, account support, and contact guide
- `/privacy` : privacy policy draft
- `/terms` : terms of service draft

## Project Structure

```text
src/
  app/          App Router routes and metadata
  components/   Shared landing UI
  lib/          Site config and content contracts
  assets/       Local fonts and branding assets
public/
  images/       App screenshots used in the landing site
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in the browser.

## Quick Deploy Commands

```bash
npm run vercel:link
npm run vercel:preview
npm run vercel:prod
```

These commands use `npx vercel`, so the repo is ready even if the Vercel CLI is not installed globally yet.

## APK Delivery

- The landing site is deployed on Vercel.
- Download buttons point to `/download/apk`, which serves the newest `DailyLog*.apk` file found in `release-assets/apk`.
- If `ANDROID_APK_URL` is set in the environment, `/download/apk` redirects there first.
- If no local APK is available, `/download/apk` tries the configured `android-demo-v1.0.14` release first, then the latest GitHub Release APK, and finally the last known asset URL.
- Local APK files such as `DailyLog.apk` or `DailyLog_1.0.14.apk` are release source files only and must not be committed to the repository.
- When the APK changes locally, place the new `DailyLog*.apk` file in `release-assets/apk`. GitHub Releases remain the fallback delivery path.
- Vercel deployments should exclude `release-assets/` so production deploys stay lightweight and rely on the GitHub fallback when no local APK is bundled.

## GitHub + Vercel Release Handoff

For the current release, prepare GitHub and Vercel in this order:

1. Push the site code to `main`.
2. Create a GitHub Release tag named `android-demo-v1.0.14`.
3. Upload `release-assets/apk/DailyLog_1.0.14.apk` as the release asset.
4. Connect the repository in Vercel or run `npm run vercel:link`.
5. Deploy with `npm run vercel:preview` or `npm run vercel:prod`.

Because `.vercelignore` excludes `release-assets/`, Vercel will not bundle the APK itself. The production download route is intentionally prepared to hand off to the GitHub Release asset instead.

If you already host the APK elsewhere, set `ANDROID_APK_URL` in Vercel and the site will always redirect to that exact file before checking GitHub Releases.

## Production Notes

- iOS remains `coming soon` until a real TestFlight or App Store link is available.
- Privacy policy and terms pages are still draft content and should be replaced before public launch.
- Play Store should become the primary Android distribution channel once the app is ready for official release.
