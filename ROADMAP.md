# inkhmn — Roadmap

Check items off as they ship. Every phase ends with a **quality check**. Nothing
starts on the next phase until every QC box is ticked and you sign off.

Live site: https://curatedpress.netlify.app/

---

## Phase 0: Themes ✅

- [x] Light theme: beige background, blue accents, grey text
- [x] Dark theme: deep blue-grey background, soft blue accents, beige text
- [x] System theme follows the phone or computer setting, and is the default
- [x] Theme switch (sun / moon / screen) in the top bar; the choice is remembered on that device
- [x] Thank-you page follows the same theme
- [x] Works on phones down to 320px wide with no sideways scrolling

**Quality check: Phase 0**
- [ ] Click each of the three buttons on the live site; the page changes right away
- [ ] Pick Light or Dark, reload the page, and the choice sticks
- [ ] With System selected, switching your phone between light and dark mode changes the site
- [ ] Text is easy to read in both themes, on your phone and on a computer
- [ ] You're happy with the blue, beige and grey colors

---

## Phase 1: Real content and trust

- [ ] Final business name and real logo (replace the text logo and ink-drop icon)
- [ ] Artist gallery: real photos of featured artists' work, filterable by style
- [ ] Tap-to-enlarge photo viewer that supports swiping on phones
- [ ] Replace placeholder stats ("1 in 10", "3", "0") with real numbers
- [ ] FAQ: pricing, deposits, how matching works, aftercare, cover-ups
- [ ] 2–3 real reviews from clients
- [ ] "About us" with a founder photo
- [ ] Footer: email, Instagram and TikTok links

**Quality check: Phase 1**
- [ ] All wording and photos approved by you, no placeholder text left
- [ ] Photos load fast on a phone (under 200 KB each)
- [ ] Gallery and viewer work on phone and desktop, in Light and Dark
- [ ] Every image has a description for screen readers

---

## Phase 2: Smarter request forms (no database yet)

- [ ] Separate forms for collectors, artists and studios
- [ ] Collectors: placement, size, style, color or black-and-grey, budget, timeline, reference photo upload
- [ ] Artists: portfolio link, styles, city, availability
- [ ] Email to you for every new request (Netlify form notifications)
- [ ] Automatic "we got it" reply to the person who wrote in
- [ ] Better thank-you page: what happens next and when to expect a reply
- [ ] Spam protection beyond the existing hidden honeypot field, if spam appears

**Quality check: Phase 2**
- [ ] One test request of each type arrives with every field and photo
- [ ] Your notification email and the automatic reply both arrive
- [ ] Error messages are clear on a phone, and the keyboard doesn't hide fields

---

## Phase 3: Get found and launch

- [ ] Your own domain connected in Netlify, with HTTPS
- [ ] Link preview image for texts and social media
- [ ] Search basics: titles, descriptions, `sitemap.xml`, `robots.txt`, Google Business Profile
- [ ] One page per artist, with their gallery and booking button
- [ ] Privacy policy and terms pages
- [ ] Visitor stats (Netlify Analytics or Plausible)
- [ ] Booking deposits with Stripe Payment Links
- [ ] Remove the "Powered by Netlify" badge

**Quality check: Phase 3**
- [ ] Google Lighthouse scores of 90+ on phone and desktop
- [ ] A shared link shows the right preview on iMessage, Instagram and Facebook
- [ ] A Stripe test payment works end to end
- [ ] Every page checked in Light, Dark and System on phone and desktop

---

## Phase 4: Accounts and database

- [ ] Pick the tools: login (Netlify Identity, Clerk or Supabase Auth), data (Supabase or Netlify DB), server code (Netlify Functions)
- [ ] Client accounts: sign up, log in, reset password
- [ ] Requests saved to the database, not just email
- [ ] Client dashboard: request status (Received → Matched → Consult booked → Session done → Healed)
- [ ] Artist accounts: manage profile, portfolio and availability
- [ ] Admin page for you: all requests, assign artists, update status
- [ ] Automatic emails when a status changes
- [ ] Deposits linked to bookings (Stripe Checkout)

**Quality check: Phase 4**
- [ ] Clients see only their own requests; artists see only their matches; you see everything
- [ ] Full test: sign up, request, match, book, pay deposit, and each email arrives
- [ ] Admin works on phone and desktop
- [ ] Security review of login, database rules and server code before going live
