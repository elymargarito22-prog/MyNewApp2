# Curated Press — Roadmap

Custom **party labels**, **graduation caps** and **graduation stoles**.

Check items off as they ship. Every wave ends with a **quality check**. Nothing
starts on the next wave until every QC box is ticked and you sign off.

Order of work: make the site as useful as possible as a **static Netlify site**
first (Waves 1–3), then add **database and login** last (Wave 4).

Live site: https://curatedpress.netlify.app/

---

## ✅ Done so far

- [x] Landing page: hero, What we make, How it works, Why us, request form, thank-you page
- [x] Heat press illustration in the hero (colors follow the theme)
- [x] Quick links jump to each section without the top bar covering the heading
- [x] Netlify Forms for design requests (no server needed)
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
- [ ] Send one test request and confirm it shows up in Netlify under **Forms → inquiry**
- [ ] You're happy with the wording, colors and press illustration

---

## Wave 1: Show your work (content and trust)

- [x] Logo: press-and-star icon plus "curatedpress" wordmark, also used as the browser tab icon
- [x] Gallery filterable by product (Party labels, Graduation caps, Graduation stoles, Studio)
- [x] Gallery started with free-license sample photos, including a Cricut machine (see `credits.html`)
- [x] Tap-to-enlarge photo viewer: arrows, keyboard, swipe on phones, Escape to close
- [x] FAQ: ordering ahead, design changes, group orders, rush orders, pickup/delivery, pricing
- [x] Footer links and a photo credits page
- [ ] Replace sample photos with photos of your own labels, caps and stoles
- [ ] Real photo of your press, Cricut or workspace
- [ ] "Starting at" prices for each product (send your prices)
- [ ] 2–3 real customer reviews (send them with permission to post)
- [ ] Short "About the designer" section (send a photo and a few lines about you)
- [ ] Footer: email, Instagram, TikTok and Facebook links (send your handles)

**Quality check: Wave 1**
- [ ] FAQ answers match how you actually work (timing, pickup/delivery, rush orders)
- [ ] All wording and photos approved by you, with no placeholder text left
- [ ] Photos load fast on a phone (under 200 KB each, WebP or AVIF format)
- [ ] Gallery and viewer work on phone, tablet and desktop, in Light and Dark
- [ ] Every image has a description for screen readers

---

## Wave 2: A smarter order form (still no database)

- [ ] Upload inspiration photos with the request (Netlify Forms file upload)
- [ ] Questions that change by product:
  - [ ] Party labels: event type, theme, item type (bottle, favor, jar, bag), quantity, size
  - [ ] Graduation caps: school, colors, text, cap is provided or needed
  - [ ] Graduation stoles: school colors, names or text, flag or symbols, single or set, quantity
- [ ] Needed-by date, budget range, pickup or shipping, best way to contact you
- [ ] Rush order option with a warning when the date is very close
- [ ] Instant price estimate (runs in the browser, no server)
- [ ] Email to you for every new request (Netlify form notifications)
- [ ] Automatic "we got it" reply to the customer
- [ ] Better thank-you page: what happens next and when to expect a reply
- [ ] Spam protection: honeypot (already in place) plus reCAPTCHA if spam appears

**Quality check: Wave 2**
- [ ] One test request for each product arrives with every field and uploaded photo
- [ ] Your notification email and the customer reply both arrive
- [ ] Form errors are clear on a phone, and the keyboard never hides a field
- [ ] Price estimates match your price sheet

---

## Wave 3: Get found, launch polish and payments without a database

- [ ] Your own domain (for example curatedpress.com) connected in Netlify, with HTTPS
- [ ] Link preview image and title for texts and social media (Open Graph)
- [ ] Search basics: page titles, descriptions, `sitemap.xml`, `robots.txt`, Google Business Profile
- [ ] Separate pages for Party labels, Graduation caps and Graduation stoles, each with its own gallery and FAQ
- [ ] Graduation season banner with order-by deadlines
- [ ] Privacy policy and terms pages
- [ ] Privacy-friendly visitor stats (Netlify Analytics or Plausible)
- [ ] Deposits or full payment with Stripe Payment Links (no database needed)
- [ ] Optional: sell ready-made digital label templates as instant downloads
- [ ] Optional: Instagram feed on the site
- [ ] Remove the "Powered by Netlify" badge (Netlify site setting)

**Quality check: Wave 3**
- [ ] Google Lighthouse scores of 90+ for Performance, Accessibility, Best Practices and SEO on phone and desktop
- [ ] A shared link shows the right preview on iMessage, Facebook and Instagram
- [ ] A Stripe test payment works end to end, and the confirmation email arrives
- [ ] Every page checked in Light, Dark and System on phone, tablet and desktop

---

## Wave 4: Database and login

- [ ] Choose the tools: login (Netlify Identity, Clerk or Supabase Auth), data (Supabase or Netlify DB), server code (Netlify Functions)
- [ ] Customer accounts: sign up, log in, reset password (email link or Google sign-in)
- [ ] Orders saved to the database instead of only in emails
- [ ] Customer dashboard: order status (Received → Designing → Design ready → Approved → Making → Ready for pickup/shipped)
- [ ] Design approval online: customer views the design, leaves comments, clicks Approve
- [ ] Admin page for you (login protected): all orders, update status, upload designs, add notes
- [ ] Automatic email when an order's status changes
- [ ] Payments linked to orders (Stripe Checkout and webhooks)
- [ ] Gallery, prices and FAQ editable from the admin page, with no code changes
- [ ] Backups and privacy basics (who can see what, deleting customer data on request)

**Quality check: Wave 4**
- [ ] A customer can see only their own orders; you can see all of them
- [ ] Full test: sign up, place an order, get a design, approve it, pay, and each email arrives
- [ ] Admin page works on phone and desktop
- [ ] Security review of login, database rules and server code before going live
