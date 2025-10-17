# GAP Backend (complete) - Ready for GitHub & Render

This package contains the full GAP backend scaffold ready for upload and deployment.

## What's included
- Node.js + Express backend
- MongoDB models: User, Product, Order
- Auth routes (register/login)
- Product routes (list/create)
- Order routes (create/upload-payment-proof)
- Mailer utility using SMTP (Gmail) - configure SMTP_USER & SMTP_PASS in Render env
- Seed script to create Super Admin (Excel Blessing), Vendor, Customer and sample product
- Payment provider placeholders (Paystack, Flutterwave, Stripe, PayPal, Coinbase)
- Bank transfer + tracking code + proof upload flow
- `.env.example` with required environment variables (no secrets included)

## Seed accounts (for testing)
- Super Admin: Excel Blessing (gapstoresandlog@gmail.com) / AdminPass123!
- Vendor: vendor@gapstores.test / VendorPass123!
- Customer: customer@gapstores.test / CustomerPass123!

## Quick local start
1. Copy `.env.example` to `.env` and fill values (especially MONGO_URI & SMTP_PASS).
2. npm install
3. npm run seed
4. npm run dev
5. Open http://localhost:5000/api/products

## Deploy to Render
1. Push repo to GitHub (repo name: gap-backend)
2. On Render create a Web Service and connect that GitHub repo.
3. Build command: npm install
4. Start command: node server.js
5. Add environment variables in Render (MONGO_URI, JWT_SECRET, SMTP_PASS, etc.)
6. Deploy and test /api/products

## Gmail SMTP notes
- For Gmail, enable 2FA on the account then create an **App Password** and use it as SMTP_PASS.
- If using Google Workspace, ensure SMTP access is allowed.
