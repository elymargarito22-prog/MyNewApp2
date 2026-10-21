# inkhmn — Roadmap

Check items off as they ship. Every wave ends with a **quality check**. Nothing
starts on the next wave until every QC box is ticked and you sign off.

Order of work: make the site as useful as possible as a **static Netlify site**
first (Waves 1–3), then add **database and login** last (Wave 4).

Live site: https://curatedpress.netlify.app/

---

## ✅ Done so far

- [x] Landing page: hero, Who's this for, How it works, stats, sign-up form, thank-you page
- [x] Netlify Forms for sign-ups (no server needed)
- [x] Light, Dark and System themes (System is the default; choice is remembered)
- [x] Light blue, white and lavender colors in both themes
- [x] Responsive for phones (320px+), tablets and desktops, with a mobile menu
- [x] Bigger tap targets on touch screens
- [x] Readable text contrast in both themes (WCAG AA)

**Quality check: done so far**
- [ ] Theme buttons switch instantly, and the choice survives a reload
- [ ] With System selected, switching your phone's light or dark mode changes the site
- [ ] On your phone, the ☰ menu opens, its links jump to the right section, and it closes
- [ ] Page looks right on your phone, a tablet (or a narrow browser window) and a computer
- [ ] You're happy with the light blue, white and lavender colors

---

## Wave 1: Show the work (content and trust)

- [ ] Final business name and a real logo (replace the text logo and ink-drop icon)
- [ ] Featured artists section: photo, styles, city, short bio for each
- [ ] Portfolio gallery of real tattoos, filterable by style (fine line, blackwork, color, traditional…)
- [ ] Tap-to-enlarge photo viewer that supports swiping on phones
- [ ] Replace placeholder stats ("1 in 10", "3", "0") with real numbers
- [ ] FAQ: pricing, deposits, how matching works, aftercare, cover-ups, age requirement
- [ ] 2–3 real client reviews
- [ ] "About us" section with a founder photo and story
- [ ] Footer: email, Instagram and TikTok links

**Quality check: Wave 1**
- [ ] All wording and photos approved by you, no placeholder text left
- [ ] Photos load fast on a phone (under 200 KB each, WebP or AVIF format)
- [ ] Gallery and viewer work on phone, tablet and desktop, in Light and Dark
- [ ] Every image has a description for screen readers

---

## Wave 2: Smarter request forms (still no database)

- [ ] Separate forms for collectors, artists and studios
- [ ] Collectors: idea, placement, size, style, color or black-and-grey, budget, timeline, city
- [ ] Reference photo upload with the request (Netlify Forms file upload)
- [ ] Artists: portfolio and Instagram link, styles, city, availability, rates
- [ ] Studios: location, number of chairs, guest-spot dates
- [ ] "Find your style" quiz that suggests a style and pre-fills the request form (runs in the browser)
- [ ] Email to you for every new request (Netlify form notifications)
- [ ] Automatic "we got it" reply to the person who wrote in
- [ ] Better thank-you page: what happens next and when to expect a reply
- [ ] Spam protection: honeypot (already in place) plus reCAPTCHA if spam appears

**Quality check: Wave 2**
- [ ] One test request of each type arrives with every field and photo
- [ ] Your notification email and the automatic reply both arrive
- [ ] Form errors are clear on a phone, and the keyboard never hides a field
- [ ] Quiz results make sense for each style

---

## Wave 3: Get found, launch polish and payments without a database

- [ ] Your own domain connected in Netlify, with HTTPS
- [ ] Link preview image and title for texts and social media (Open Graph)
- [ ] Search basics: page titles, descriptions, `sitemap.xml`, `robots.txt`, Google Business Profile
- [ ] One page per artist, with their gallery and a "request this artist" button
- [ ] Separate pages per style (Fine line, Blackwork, Color, Traditional)
- [ ] Aftercare guide page (useful content that also helps search ranking)
- [ ] Privacy policy and terms pages
- [ ] Privacy-friendly visitor stats (Netlify Analytics or Plausible)
- [ ] Consultation deposits with Stripe Payment Links (no database needed)
- [ ] Optional: booking link for consultations (Calendly or Cal.com)
- [ ] Optional: gift cards through Stripe Payment Links
- [ ] Remove the "Powered by Netlify" badge (Netlify site setting)

**Quality check: Wave 3**
- [ ] Google Lighthouse scores of 90+ for Performance, Accessibility, Best Practices and SEO on phone and desktop
- [ ] A shared link shows the right preview on iMessage, Instagram and Facebook
- [ ] A Stripe test payment works end to end, and the confirmation email arrives
- [ ] Every page checked in Light, Dark and System on phone, tablet and desktop

---

## Wave 4: Database and login

- [ ] Choose the tools: login (Netlify Identity, Clerk or Supabase Auth), data (Supabase or Netlify DB), server code (Netlify Functions)
- [ ] Client accounts: sign up, log in, reset password (email link or Google sign-in)
- [ ] Requests saved to the database instead of only in emails
- [ ] Client dashboard: request status (Received → Matched → Consult booked → Session done → Healed)
- [ ] Artist accounts: edit profile, portfolio, availability and rates
- [ ] Admin page for you (login protected): all requests, assign artists, update status, add notes
- [ ] Automatic email when a request's status changes
- [ ] Deposits linked to bookings (Stripe Checkout and webhooks)
- [ ] Gallery, artists and FAQ editable from the admin page, with no code changes
- [ ] Backups and privacy basics (who can see what, deleting someone's data on request)

**Quality check: Wave 4**
- [ ] Clients see only their own requests, artists see only their matches, and you see everything
- [ ] Full test: sign up, request, get matched, book, pay a deposit, and each email arrives
- [ ] Admin page works on phone and desktop
- [ ] Security review of login, database rules and server code before going live
