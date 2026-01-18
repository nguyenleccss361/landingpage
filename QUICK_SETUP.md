# ⚡ Quick Setup - Tawk.to Chat Widget

## 🎯 2-Minute Setup

### Step 1: Sign Up (30 seconds)
1. Open: **https://dashboard.tawk.to/signup**
2. Fill in:
   - Name: Your name
   - Email: Your email (will need verification)
   - Password: Create a password
3. Click "Sign Up for free"
4. **Check your email** and verify your account

### Step 2: Get Your IDs (1 minute)
After logging in:

1. **Create Property**:
   - Click "Add Property" 
   - Name: `Scaters Landing Page`
   - URL: `http://localhost:3100` (or your domain)
   - Click "Create Property"

2. **Get Widget IDs**:
   - Click **Administration** (left sidebar)
   - Click **Channels** → **Chat Widget**
   - Find the embed code section
   - Look for URL: `https://embed.tawk.to/XXXXXXXXX/YYYYYYYY`
   - Copy the **Property ID** (first part: `XXXXXXXXX`)
   - Copy the **Widget ID** (second part: `YYYYYYYY`)

### Step 3: Add to Project (30 seconds)

**Option A: Edit .env.local directly**
```bash
# Open .env.local and add:
NEXT_PUBLIC_TAWK_PROPERTY_ID=your_property_id_here
NEXT_PUBLIC_TAWK_WIDGET_ID=your_widget_id_here
```

**Option B: Use command line**
```bash
# Replace YOUR_PROPERTY_ID and YOUR_WIDGET_ID with actual values
echo "NEXT_PUBLIC_TAWK_PROPERTY_ID=YOUR_PROPERTY_ID" >> .env.local
echo "NEXT_PUBLIC_TAWK_WIDGET_ID=YOUR_WIDGET_ID" >> .env.local
```

### Step 4: Test It!
```bash
npm run dev
```

Visit **http://localhost:3100** - you should see the chat widget in the bottom-right! 🎉

---

## 📍 Where to Find Your IDs

The embed code in Tawk.to dashboard looks like this:

```html
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/67f8a123b1d8c121e83c0e8a/1h9e8q5v5';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
```

From the URL `https://embed.tawk.to/67f8a123b1d8c121e83c0e8a/1h9e8q5v5`:
- **Property ID**: `67f8a123b1d8c121e83c0e8a` (first part)
- **Widget ID**: `1h9e8q5v5` (second part)

---

## ✅ Done!

Once you add your credentials to `.env.local` and restart the dev server, the chat widget will appear automatically.

**Need help?** See `TAWKTO_SETUP.md` for detailed instructions.
