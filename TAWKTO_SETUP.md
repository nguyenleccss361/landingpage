# Tawk.to Chat Widget - Complete Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Tawk.to Account

1. **Sign up for free**: Visit https://www.tawk.to/
2. **Click "Sign Up Free"** or go directly to: https://dashboard.tawk.to/signup
3. **Fill in the form**:
   - Enter your name
   - Enter your email address
   - Create a password
   - Complete the captcha
   - Click "Sign Up for free"

### Step 2: Get Your Property ID and Widget ID

After signing up and logging in:

1. **Create a Property** (if you don't have one):
   - Click "Add Property" or select an existing property
   - Enter your website name (e.g., "Scaters Landing Page")
   - Enter your website URL (e.g., "https://scaters.com")
   - Click "Create Property"

2. **Get your Widget IDs**:
   - Go to **Administration** (left sidebar)
   - Click **Channels** > **Chat Widget**
   - You'll see the embed code that looks like:
   ```html
   <script type="text/javascript">
   var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
   (function(){
   var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
   s1.async=true;
   s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
   s1.charset='UTF-8';
   s1.setAttribute('crossorigin','*');
   s0.parentNode.insertBefore(s1,s0);
   })();
   </script>
   ```

3. **Extract the IDs**:
   - From the URL `https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID`
   - Copy the **Property ID** (first part after `/embed.tawk.to/`)
   - Copy the **Widget ID** (second part after the Property ID)

### Step 3: Configure in Your Project

#### Option A: Using Environment Variables (Recommended)

1. **Create `.env.local` file** in your project root:
   ```bash
   touch .env.local
   ```

2. **Add your credentials**:
   ```env
   NEXT_PUBLIC_TAWK_PROPERTY_ID=your_property_id_here
   NEXT_PUBLIC_TAWK_WIDGET_ID=your_widget_id_here
   ```

3. **Replace the values** with your actual Property ID and Widget ID

4. **Restart your dev server**:
   ```bash
   npm run dev
   ```

#### Option B: Direct Configuration (Quick Test)

If you want to test quickly, you can temporarily edit `components/TawkTo.tsx`:

```typescript
const TAWK_PROPERTY_ID = "your_property_id_here";
const TAWK_WIDGET_ID = "your_widget_id_here";
```

⚠️ **Note**: Don't commit credentials directly in code. Use environment variables for production.

### Step 4: Verify Installation

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Visit your site**: http://localhost:3100

3. **Look for the chat widget** in the bottom-right corner

4. **Test the chat** by clicking on it and sending a test message

## Customization

### Via Tawk.to Dashboard

1. **Widget Appearance**:
   - Dashboard > Administration > Channels > Chat Widget > Appearance
   - Customize colors, size, position

2. **Widget Position**:
   - Dashboard > Administration > Channels > Chat Widget > Position
   - Choose: Bottom Right, Bottom Left, Top Right, Top Left

3. **Widget Behavior**:
   - Dashboard > Administration > Channels > Chat Widget > Behavior
   - Set greeting messages, offline messages, etc.

### Via JavaScript API

The component includes hooks for advanced customization. Edit `components/TawkTo.tsx`:

```typescript
window.Tawk_API.onLoad = function () {
  // Customize widget behavior
  window.Tawk_API.setAttributes({
    // Add custom attributes
  });
  
  // Show widget programmatically
  window.Tawk_API.showWidget();
  
  // Hide widget initially
  // window.Tawk_API.hideWidget();
};
```

See full API documentation: https://developer.tawk.to/javascript-api/

## Plugins & Extensions

Tawk.to offers many plugins:

- **Chatbot**: https://plugins.tawk.to/chatbot
- **Knowledge Base**: https://plugins.tawk.to/knowledge-base
- **Video Chat**: https://plugins.tawk.to/video-chat
- **WhatsApp Integration**: https://plugins.tawk.to/whatsapp
- **More plugins**: https://plugins.tawk.to/

Install plugins from: Dashboard > Administration > Plugins

## Features Included

✅ **Free forever** - No credit card required  
✅ **Unlimited agents** - Add as many team members as you need  
✅ **Mobile apps** - iOS & Android apps available  
✅ **Customizable widget** - Colors, position, behavior  
✅ **Chat history** - All conversations saved  
✅ **File sharing** - Share images and files  
✅ **Screen sharing** - Help customers visually  
✅ **Video calls** - One-click video support  
✅ **Chatbots** - AI-powered automated responses  
✅ **Knowledge base** - Self-service help articles  
✅ **Integrations** - Zapier, Slack, WordPress, etc.  
✅ **REST API** - Full API access  
✅ **JavaScript API** - Already integrated  

## Troubleshooting

### Widget not appearing?

1. **Check browser console** for errors
2. **Verify environment variables** are set correctly
3. **Check Property ID and Widget ID** are correct
4. **Clear browser cache** and reload
5. **Check if ad blocker** is blocking the widget

### Console warning about missing credentials?

This is normal if you haven't set up your credentials yet. The widget simply won't load until you add your Property ID and Widget ID.

### Need help?

- **Tawk.to Documentation**: https://developer.tawk.to/
- **Tawk.to Help Center**: https://help.tawk.to/
- **Community Forum**: https://help.tawk.to/community
- **Support**: Available in your dashboard

## Security Notes

- ✅ Environment variables (`.env.local`) are automatically ignored by git
- ✅ Never commit credentials to version control
- ✅ Use different credentials for development and production
- ✅ For production, set environment variables in your hosting platform (Vercel, Netlify, etc.)

## Next Steps

1. ✅ Set up your Tawk.to account
2. ✅ Add your credentials to `.env.local`
3. ✅ Customize the widget appearance in the dashboard
4. ✅ Set up automated responses (chatbots)
5. ✅ Install useful plugins
6. ✅ Train your team on using Tawk.to

---

**Need help?** The Tawk.to widget is now integrated and ready to use. Just add your credentials and you're good to go! 🚀
