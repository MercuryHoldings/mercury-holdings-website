# Mercury Holdings DNS Configuration Instructions

## Current Status
- ✅ Website deployed to Render: https://mercury-holdings-website.onrender.com
- ✅ Custom domains added to Render:
  - mercuryholdings.co
  - www.mercuryholdings.co

## DNS Records to Update in NameCheap

### Records to DELETE or MODIFY:

Based on your current NameCheap DNS records, you need to update the following:

1. **Delete or modify existing A Record** (if pointing to old hosting)
   - Current: `@` A Record pointing to old IP
   - Action: Replace with new A record below

2. **Delete or modify existing CNAME Record for www** (if exists)
   - Current: `www` CNAME pointing to old host
   - Action: Replace with new CNAME record below

### Records to ADD:

#### For Root Domain (mercuryholdings.co):

**Option 1: Using ANAME/ALIAS (Preferred if NameCheap supports it)**
- **Type**: ANAME or ALIAS
- **Host**: `@`
- **Value**: `mercury-holdings-website.onrender.com`
- **TTL**: Automatic or 300

**Option 2: Using A Record (If ANAME/ALIAS not supported)**
- **Type**: A Record
- **Host**: `@`
- **Value**: `216.24.57.1`
- **TTL**: Automatic or 300

#### For WWW Subdomain (www.mercuryholdings.co):

- **Type**: CNAME Record
- **Host**: `www`
- **Value**: `mercury-holdings-website.onrender.com`
- **TTL**: Automatic or 300

### Records to KEEP:

Keep all other existing DNS records (MX, TXT, etc.) as they are for email and other services.

## Steps to Update DNS in NameCheap:

1. Log into your NameCheap account
2. Go to Domain List
3. Click "Manage" next to mercuryholdings.co
4. Go to "Advanced DNS" tab
5. Delete or modify the old A record for `@` (root domain)
6. Delete or modify the old CNAME record for `www` (if exists)
7. Add the new records as specified above
8. Save changes

## DNS Propagation:

- DNS changes can take 5-60 minutes to propagate
- After updating, return to Render dashboard and click "Verify" buttons for both domains
- Once verified, your website will be live at mercuryholdings.co

## Verification:

After DNS propagation, you can verify the setup:
- Visit: https://mercuryholdings.co
- Visit: https://www.mercuryholdings.co
- Both should show your Mercury Holdings website

## Render Dashboard Links:

- Main Dashboard: https://dashboard.render.com/static/srv-d4d3jeripnbc739qh570
- Settings (Custom Domains): https://dashboard.render.com/static/srv-d4d3jeripnbc739qh570/settings

---

**Note**: Keep your domain registration at NameCheap. You're only changing the DNS records to point to Render for website hosting.
