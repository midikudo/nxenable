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

## Contact leads and LINE notifications

Create a Supabase project, open the SQL Editor, and run [database/supabase-schema.sql](database/supabase-schema.sql). Then add these variables to `.env.local` for local development and to the Vercel project environment:

```env
LINE_CHANNEL_ACCESS_TOKEN=your_channel_access_token
LINE_TO_USER_ID=your_line_user_or_group_id
IP_HASH_SECRET=replace_with_a_random_secret
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

`LINE_CHANNEL_ACCESS_TOKEN`, `SUPABASE_SERVICE_ROLE_KEY`, and `IP_HASH_SECRET` are server-only secrets. Never use a `NEXT_PUBLIC_` prefix for them. `.env.local` is ignored by Git. The Supabase service-role key bypasses Row Level Security and must only be used in the server-side API/repository.

The lead flow is: validate request → honeypot → rate limit → save to Supabase → send LINE notification → return success. If the database save fails, LINE is not sent. If LINE fails after the database save, the API still returns success and the lead remains in Supabase.

Lead fields are `name`, `company`, `email`, `phone`, `projectType`, `estimatedBudget`, `expectedTimeline`, `existingSystem`, `message`, `status`, `source`, `ipHash`, `userAgent`, `createdAt`, and `updatedAt`. Supported statuses are `NEW`, `CONTACTED`, `QUALIFIED`, `PROPOSAL`, `WON`, `LOST`, and `SPAM`.

When Supabase variables are present, the API uses `SupabaseLeadRepository`. In development only, missing database variables use the in-memory adapter to keep local work convenient. In production, missing database variables return `503 LEAD_STORAGE_UNAVAILABLE`; there is no silent production fallback.

Rate limiting currently uses an in-memory `RateLimiter` adapter and is best effort on Vercel because serverless instances do not share memory. Replace it with an Upstash/Redis adapter through the same interface when distributed enforcement is required.

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
3. Run the Supabase migration and set all environment variables above in Vercel.
4. Confirm the service-role key is configured only in server-side environments.
5. Replace the in-memory rate limiter with a distributed adapter if abuse volume requires it.
6. Add analytics/consent only if needed.
7. Add real approved case-study claims before presenting them as client work.
