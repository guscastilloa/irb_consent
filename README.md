# IRB Consent Site

Static GitHub Pages site for displaying the informed consent form for the
`Garage Churches` study.

## Current scope

- Public website only.
- No participant submission or consent recording through the site.
- Interviewer-only documentation fields are intentionally excluded from the page.

## Files

- `index.html`: page structure and consent text
- `styles.css`: layout, typography, print styles, responsive behavior
- `script.js`: print button, active section highlighting, back-to-top button

## Local preview

From this directory:

```bash
cd /Users/upar/Downloads/irb_consent
python3 -m http.server 8000
```

Then open:

- [http://localhost:8000](http://localhost:8000)

Stop the local server with `Ctrl+C`.

## Publish workflow

1. Edit the local files.
2. Preview locally with the Python server above.
3. Commit and push to the GitHub remote.
4. Let GitHub Pages update the live site.

## Before sharing with participants

Update the placeholder values still present in the consent:

- Study sponsor: `Por confirmar`
