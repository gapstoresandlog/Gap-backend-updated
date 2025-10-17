const express = require('express');
const router = express.Router();
// Placeholder endpoints for payment provider webhooks / create sessions
router.post('/stripe/webhook', (req, res) => res.json({ ok: true }));
router.post('/paystack/webhook', (req, res) => res.json({ ok: true }));
router.post('/flutterwave/webhook', (req, res) => res.json({ ok: true }));
module.exports = router;
