# Mercury Holdings DNS Records Review

## ✅ CORRECT RECORDS (Keep These)

### Website Hosting (Render):
1. **mercuryholdings.co** → A Record → **216.24.57.1** ✅ PERFECT
2. **www.mercuryholdings.co** → CNAME → **mercury-holdings-website.onrender.com** ✅ PERFECT

### Microsoft Email (Keep All):
3. **mercuryholdings.co** → TXT → **MS=ms36649696** ✅ (Microsoft verification)
4. **mercuryholdings.co** → MX → **mercuryholdings-co.mail.protection.outlook.com** ✅ (Email routing)
5. **autodiscover.mercuryholdings.co** → CNAME → **autodiscover.outlook.com** ✅ (Email autodiscovery)
6. **mercuryholdings.co** → TXT → **v=spf1 include:spf.protection.outlook.com -all** ✅ (SPF record)
7. **default._domainkey.ops.mercuryholdings.co** → TXT → DKIM key ✅ (Email authentication)

### SSL/TLS Certificates:
8. **_acme-challenge.mercuryholdings.co** → TXT → SSL verification ✅ (For SSL certificates)

### cPanel/Control Panel (If still needed):
9. **_cpanel-dcv-test-record.mercuryholdings.co** → TXT → Verification record ✅

### Other Services:
10. **ops.mercuryholdings.co** → CNAME → **ops-platform-frontend.onrender.com** ✅ (Operations platform)

---

## ⚠️ RECORDS TO DELETE (Clutter/Unused)

These records appear to be leftover from old cPanel/hosting setup and are no longer needed:

### Old cPanel Subdomains (All pointing to 203.161.62.9):
1. **ftp.mercuryholdings.co** → A → 203.161.62.9 ❌ DELETE (Old FTP, not needed)
2. **cpcontacts.mercuryholdings.co** → A → 203.161.62.9 ❌ DELETE (Old cPanel contacts)
3. **whm.mercuryholdings.co** → A → 203.161.62.9 ❌ DELETE (Old WHM panel)
4. **webdisk.mercuryholdings.co** → A → 203.161.62.9 ❌ DELETE (Old webdisk)
5. **cpcalendars.mercuryholdings.co** → A → 203.161.62.9 ❌ DELETE (Old cPanel calendars)
6. **cpanel.mercuryholdings.co** → A → 203.161.62.9 ❌ DELETE (Old cPanel access)

**Reason to delete**: These are all cPanel-related subdomains pointing to an old server IP (203.161.62.9). Since you're moving away from cPanel hosting to Render, these are no longer functional or needed.

---

## 📊 SUMMARY

**Total Records**: 17
- **Keep**: 10 records (website + email + SSL + other services)
- **Delete**: 6 records (old cPanel clutter)

**DNS Configuration Status**: ✅ **CORRECT for Render deployment**

Your main website DNS records are configured perfectly:
- Root domain (mercuryholdings.co) → Render IP (216.24.57.1)
- WWW subdomain → Render hostname

All Microsoft email records are intact and should continue working.

---

## 🎯 RECOMMENDED ACTIONS

1. **Delete the 6 old cPanel records** listed above to clean up your DNS
2. **Verify the domains in Render** (click Verify buttons in Render dashboard)
3. **Wait 5-60 minutes** for DNS propagation
4. **Test your website** at mercuryholdings.co and www.mercuryholdings.co

---

## ⏱️ NEXT STEPS

Once DNS propagates (5-60 minutes), you should:
1. Return to Render dashboard
2. Click "Verify" for both domains
3. Test the live website at your custom domain
