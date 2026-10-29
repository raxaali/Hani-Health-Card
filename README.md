# Hani Health Discount Card — website prototype

A responsive front-end website based on the supplied Hani Health Discount Card requirements. It includes the supplied brand mark, membership-card preview, English/Arabic/Urdu/Hindi/Bengali language selector, provider directory, demo eligibility check, and an admin dashboard with a password gate.

## Run it locally

1. Extract `hani-health-website.zip` (or use this folder).
2. On Windows, double-click `run-local.bat` to start a local web server.
3. Open `http://localhost:8000` in a browser.

You can also run `python -m http.server 8000` from this folder.

## Admin dashboard demo

1. Choose **Admin demo** in the site navigation.
2. Enter the local demo password: **`HaniAdmin@2026`**.
3. Use **Log out** to close the authenticated admin session.

The password gate is implemented in browser-side JavaScript solely to demonstrate the flow. It is not secure authentication: a user with access to the website files or browser developer tools can bypass it. Do not deploy this gate as protection for real member data.

### Member management

- Add a member with a name, unique demo membership ID, optional contact / national-ID placeholder, issue and expiry dates, and status.
- Edit a member's record or remove the record from the demo list.
- Issue or view a card for an active member. The generated preview includes the member name, membership ID, dates, national ID / passport placeholder, and the “SCAN FOR LOCATIONS” QR caption.
- Use **Print / Save as PDF** in the card preview to create a local printable copy.
- Export the current demo member records to CSV.

### Contracted provider management

- List, add, edit and remove hospitals, clinics, health centers and pharmacies.
- Provider changes update the public directory preview and are saved in this browser.
- Provider address/contact/service data is sample information and must be replaced with verified contracted-provider details before launch.

### Demo persistence and sample information

Member and provider changes are stored in the current browser's `localStorage`, so the prototype can retain changes on that browser. They are not sent to a server, do not sync between devices, and may be cleared by deleting browser site data. All seeded members and providers are fictional examples. Do not enter real national IDs, passport numbers, contact details or payment data.

- The public directory searches and filters the sample providers, and Google Maps direction links can be opened for a selected listing.
- Browser geolocation only sorts the demo providers by approximate distance; it does not confirm provider participation.
- The public eligibility-check form checks the prototype's local member dataset; it is not a live membership validation service.
- Digital card registration is a preview only. Payment is not integrated and no charge is taken.
- The card QR image is a prototype location QR. In production, point it at the real locations page and implement the intended member/location routing.

## Required before a real launch

This project is a front-end prototype, not a production membership platform. Before using it with real members:

1. Implement server-side authentication, password hashing, secure sessions, role-based access, CSRF protection, rate limiting and audit logs. Remove the hard-coded demo password from front-end code.
2. Build a secure API and database for members, membership status, expiry dates, renewals, provider contracts and card issuance. Enforce validation and permissions on the server; do not trust browser-side checks.
3. Add appropriate encryption in transit and at rest, privacy notices, retention rules and local data-protection compliance controls.
4. Integrate a payment provider and only activate/issue paid memberships after a verified payment callback.
5. Replace fictional members and provider entries with properly authorized, verified records for contracted hospitals, clinics, health centers and pharmacies.
6. Configure Google Maps or another approved mapping service with the appropriate key and usage restrictions.
7. Generate membership IDs and member QR codes server-side, with a signed or otherwise verifiable QR payload if cards are used for eligibility checks.
8. Replace placeholder support copy, publish approved membership terms, discounts/exclusions and refund/cancellation rules, and review all translations with fluent speakers.

## Files

- `index.html` — website structure and content
- `styles.css` — responsive styling and admin/card print styles
- `script.js` — language switching, provider directory, demo login and browser-side member/provider management
- `assets/hani-health-mark.jpg` — brand mark derived from the supplied requirements document
- `assets/locations-qr.png` — prototype locations QR image
- `run-local.bat` — Windows launch helper
