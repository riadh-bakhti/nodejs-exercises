# Node.js basics — 5 tasks

Node.js v26 + npm 11 installed. Dependencies: `generate-password`, `nodemailer`.

```bash
npm install          # install dependencies
```

| Task | File | Run | Result |
|------|------|-----|--------|
| 1. Print HELLO WORLD | `hello-world.js` | `node hello-world.js` | `HELLO WORLD` |
| 2. HTTP server on :3000 | `server.js` | `node server.js` | `http://localhost:3000` → `<h1>Hello Node!!!!</h1>` |
| 3a. Create welcome.txt | `create-welcome.js` | `node create-welcome.js` | writes `welcome.txt` = `Hello Node` |
| 3b. Read the file | `read-file.js` | `node read-file.js` | logs the file content |
| 4. Password generator | `password-generator.js` | `node password-generator.js [length]` | random password |
| 5. Email sender | `email-sender.js` | `node email-sender.js` | sends a mail with nodemailer |

## Task 3 note

The exercise says to create `welcome.txt` but then read `hello.txt`. `read-file.js` reads
`hello.txt` when it exists, otherwise falls back to `welcome.txt` (a message says so).
You can also pass a name: `node read-file.js welcome.txt`.

## Task 5 — sending to your own inbox

Without credentials the script uses a temporary Ethereal test account and prints a preview URL.
For a real Gmail delivery, create an **App password** (Google account → Security → 2-Step
Verification → App passwords), then copy `.env.example` to `.env`, fill in your values and run:

```powershell
npm run email
```

`.env` is listed in `.gitignore` and must never be committed. Alternatively set the variables
directly in the shell (`$env:EMAIL_USER`, `$env:EMAIL_PASS`, `$env:EMAIL_TO`).

`EMAIL_SERVICE` (default `gmail`) can be set for another provider.

## Publishing to GitHub

The repo contains no personal data: no usernames, absolute paths, email addresses or
credentials — only `your.address@gmail.com` style placeholders in `.env.example` and the
README. `.gitignore` keeps `node_modules/`, `.env` and generated files out of the commit:

```bash
git init
git add .
git status        # check nothing sensitive is staged
git commit -m "Node.js basics: 5 exercises"
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```
