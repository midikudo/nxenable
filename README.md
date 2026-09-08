# NXENABLE Website

Production-ready multi-page corporate landing website for **NXENABLE TECHNOLOGIES CO., LTD.**

## Pages

- `/` — Home
- `/services`
- `/solutions`
- `/industries`
- `/process`
- `/work`
- `/work/retail-pos-platform`
- `/work/booking-membership`
- `/work/operations-dashboard`
- `/about`
- `/contact`
- `/privacy`
- `/terms`

## Stack

- Next.js App Router
- TypeScript
- React
- CSS (no CSS framework dependency)
- lucide-react icons

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production

```bash
npm run build
npm run start
```

## LINE contact notifications

Create `.env.local` with a LINE Messaging API channel access token and the user, group, or room ID that should receive contact notifications:

```env
LINE_CHANNEL_ACCESS_TOKEN=your_channel_access_token
LINE_TO_USER_ID=your_line_user_or_group_id
```

The token is used only by the server-side `/api/contact` route and must not be exposed to the browser.

## Brand

Primary:
- Midnight Navy `#07192F`
- Graphite `#1F2937`
- Electric Blue `#2563EB`
- Cyan `#06B6D4`
- Soft White `#F8FAFC`

Brand line:
**Enable What's Next.**

Main domain:
**nxenable.co**

## Before publishing

1. Confirm the legal company name after DBD registration.
2. Replace placeholder company/legal details if required.
3. Configure the LINE environment variables above before publishing if contact notifications are required.
4. Add analytics/consent only if needed.
5. Add real approved case-study claims before presenting them as client work.
