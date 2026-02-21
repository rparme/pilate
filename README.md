# Private Pilates Landing Page

A single-page registration landing page for a private pilates program. Visitors fill in a form (name, email, and optional fields like age range and goals) and submissions are sent directly to a Google Sheet via a Google Apps Script web app. Built with Vue 3, TypeScript, Tailwind CSS, and Vite; designed to be deployed on Vercel with zero backend infrastructure.

## Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | Vue 3 (Composition API, `<script setup>`) |
| Language    | TypeScript 5.7                      |
| Styling     | Tailwind CSS 3.4                    |
| Build       | Vite 6                              |
| Fonts       | Playfair Display, Nunito (Google Fonts) |
| Backend     | Google Sheets + Apps Script (Web App) |
| Hosting     | Vercel (static)                     |

## Local Development

```bash
# 1. Clone the repo
git clone <your-repo-url> private-pilates
cd private-pilates

# 2. Install dependencies
npm install

# 3. Create your local environment file
cp .env.example .env.local
# Edit .env.local and set VITE_GOOGLE_SCRIPT_URL (see "Google Sheets Setup" below)

# 4. Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`. Form submissions will fail until `VITE_GOOGLE_SCRIPT_URL` is configured.

## Google Sheets Setup

1. **Create a Google Sheet** -- this is where form submissions will land. The columns are:
   `Timestamp | Name | Email | Age Range | Biggest Hurdle | Improve in 6 Weeks`

2. **Open the Apps Script editor** -- from the sheet, go to **Extensions > Apps Script**.

3. **Paste the script** -- delete the default `Code.gs` content and paste the entire contents of [`apps-script.js`](apps-script.js) from this repo.

4. **Deploy as a Web App**:
   - Click **Deploy > New deployment**.
   - Set **Type** to **Web app**.
   - Set **Execute as** to **Me**.
   - Set **Who has access** to **Anyone**.
   - Click **Deploy** and authorise when prompted.

5. **Copy the Web App URL** -- it looks like `https://script.google.com/macros/s/.../exec`.

6. **Set the environment variable** -- add the URL to your `.env.local`:
   ```
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/.../exec
   ```

To verify the endpoint is live, open the Web App URL in a browser. You should see: `Private Pilates -- endpoint is live.`

## Environment Variables

| Variable                 | Description                                    | Required |
| ------------------------ | ---------------------------------------------- | -------- |
| `VITE_GOOGLE_SCRIPT_URL` | Google Apps Script Web App URL for form submissions | Yes      |

Set this in `.env.local` for local development and in Vercel project settings for production.

## Deploying to Vercel

1. **Push the repo to GitHub** (or GitLab / Bitbucket).

2. **Import the project in Vercel** -- go to [vercel.com/new](https://vercel.com/new), select your repo, and let Vercel auto-detect the Vite framework preset.

3. **Set the environment variable** -- in the Vercel project **Settings > Environment Variables**, add:
   - **Name:** `VITE_GOOGLE_SCRIPT_URL`
   - **Value:** your Google Apps Script Web App URL

4. **Deploy** -- Vercel will run `vue-tsc -b && vite build` and serve the static output.

Every push to `main` triggers a production deployment. Pull requests get preview deployments automatically.

## Project Structure

```
private-pilates/
├── index.html                  # HTML entry point (loads Google Fonts, mounts Vue app)
├── apps-script.js              # Google Apps Script to paste into your Sheet
├── .env.example                # Template for environment variables
├── package.json                # Dependencies and scripts
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # Tailwind theme (colours, fonts)
├── postcss.config.js           # PostCSS config (Tailwind + Autoprefixer)
├── tsconfig.json               # TypeScript project references
├── tsconfig.app.json           # TS config for app source
├── tsconfig.node.json          # TS config for Node tooling (vite.config.ts)
├── env.d.ts                    # Type declarations for Vite env variables
└── src/
    ├── main.ts                 # App entry -- creates and mounts the Vue app
    ├── App.vue                 # Root component (header, form, footer)
    ├── style.css               # Tailwind directives and reusable component classes
    └── components/
        └── RegistrationForm.vue # Registration form with validation and submission logic
```

## Customisation

### Brand name

The brand name "Private Pilates" appears in:
- `index.html` -- `<title>` and `<meta name="description">`
- `src/App.vue` -- header text and footer copyright

### Colours

All custom colours are defined in `tailwind.config.ts` under `theme.extend.colors`:

| Token    | Default   | Usage                         |
| -------- | --------- | ----------------------------- |
| `sage`   | `#5C7A5F` | Primary accent (buttons, rings, highlights) |
| `sage-dark` | `#4a6350` | Button hover state         |
| `sage-light` | `#7a9e7e` | Light accent variant      |
| `cream`  | `#FDF7F0` | Background gradient start     |
| `cream-dark` | `#E8EFE8` | Background gradient end   |
| `cream-input` | `#FAF6F0` | Form input backgrounds   |
| `warm`   | `#2C2420` | Primary text colour           |
| `warm-muted` | `#6B5E58` | Secondary / muted text   |
| `warm-border` | `#D9CFC8` | Borders and dividers     |

### Fonts

Fonts are loaded from Google Fonts in `index.html` and mapped in `tailwind.config.ts`:

- **Serif** (`font-serif`): Playfair Display -- headings
- **Sans** (`font-sans`): Nunito -- body text, labels, buttons

To swap fonts, update both the `<link>` tag in `index.html` and the `fontFamily` entries in `tailwind.config.ts`.

### Copy and form fields

- **Hero copy** is in `src/App.vue` (headline, subtitle).
- **Form labels, placeholders, and validation messages** are in `src/components/RegistrationForm.vue`.
- **Form field component classes** (`.field-label`, `.field-input`, `.field-error`) are defined in `src/style.css`.

If you add or remove form fields, update the matching `sheet.appendRow` call in `apps-script.js` and redeploy the Apps Script.
