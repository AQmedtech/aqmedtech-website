# AQMedTech Innovations (v1.0 MVP)

> **Web Dev • Health-Tech • Ads & Insights**  
> A high-converting, mobile-first full-stack web application combining an executive tech agency portfolio, product advertisement showcase, and expert medical & tech publication hub.

---

## 🌟 Architecture & Core Features

### 1. Executive Portfolio & Tech Agency Front Door
- **Sticky Glass Navigation Bar**: Responsive navigation with brand badge, desktop links, and mobile hamburger drawer.
- **Hero Section**: High-impact medical navy `#0F172A` theme with radial gradients, responsive headline, dual conversion buttons, and live trust stats.
- **Core Services Grid**:
  - Custom Website Development
  - Health Application Development
  - Full-Stack Engineering & Maintenance
  - Product & Business Advertising
- **Portfolio Showcase**: Interactive cards featuring flagship apps (*PharmaQuiz AI*, *ClinicFlow Patient Portal*, *Enterprise E-Commerce Suite*, and *AQMedTech Ecosystem*).
- **Traffic Preview Strips**: Live preview of top marketplace product ads and latest doctor articles directly on the home page.
- **Why Choose Us Section**: Highlights medical-grade precision, sub-1.2s load speeds, WhatsApp funnel integration, and 24/7 managed support.

### 2. Featured Product & Business Advertisement Marketplace
- **Category Filtering**: Filter ads across *Health & Wellness*, *Tech & Gadgets*, *Business Services*, and *Fashion & Lifestyle*.
- **Sponsored Ad Cards**: Displays product imagery, price in ₦ and USD, short description, seller name, verified badge, and live view/click metrics.
- **WhatsApp Direct Buy Trigger**: Click-to-chat with seller on WhatsApp featuring a pre-filled product inquiry message, with automatic click incrementing in local storage.
- **Advertise Banner Card**: Direct CTA for business owners to place new ads on the platform.

### 3. Multi-Author News & Doctor Publication Hub
- **Author Credential Badging**: Distinguishes `✅ Verified Medical Doctor` from `✅ Tech Contributor`.
- **Full Article Reader View**:
  - Immersive typography and hero cover images.
  - **1-Click Viral WhatsApp Sharing** at the top and bottom of each article.
  - **Contextual Embedded Ad Slot**: Automatically displays a sponsored product ad and agency hire banner within article paragraphs.
  - **Interactive Reader Comments Section**: Visitors can submit questions or feedback immediately.
  - **Doctor & Author Replies**: Highlights verified replies with distinct styling.

### 4. Contributor Studio & Admin Management Portal
- **Security**: Protected with passcode `aqmedtech2024` (or instant Contributor mode for writers).
- **Doctor / Writer Studio**: Publish new articles with custom author credentials, categories, cover images, and read-time calculation.
- **Ad Manager**: Create new product ads with WhatsApp numbers and prices, and manage existing ads.
- **Portfolio Manager**: Add and manage agency case studies and tech stacks.

### 5. Lead Capture & Direct Contact System
- **Interactive 2-Step Modal**: Select service (*Build a Website*, *Develop a Health App*, *Full-Stack Maintenance*, or *Advertise*), enter budget and details.
- **Dual Submission**: Save inquiries to local storage or launch a pre-formatted WhatsApp quote request directly to AQMedTech's team (`+234 801 234 5678`).

---

## 🚀 How to Launch the Application

### Option A: One-Click Launch (Windows)
Double-click [`start.bat`](start.bat) in this folder. It will start a local server and open `http://localhost:3000` in your default browser.

### Option B: Node.js (Terminal)
```bash
npm start
# or
npx serve . -l 3000
```
Then visit `http://localhost:3000`.

### Option C: Python HTTP Server
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000`.

### Option D: Zero-Server Direct Browser Open
Double-click [`standalone.html`](standalone.html) directly from File Explorer. It has zero external server dependencies and runs in any modern browser immediately.

---

## 🗄️ Data Storage & Supabase / PostgreSQL Ready

The application currently uses modular LocalStorage services (`src/data/seedData.js`) with realistic Nigerian and global health-tech seed data.

To connect this app to a Supabase or PostgreSQL backend:
1. Replace `loadData` and `saveData` in `src/data/seedData.js` with Supabase REST API calls:
   ```javascript
   import { createClient } from '@supabase/supabase-js';
   const supabase = createClient('SUPABASE_URL', 'SUPABASE_ANON_KEY');
   
   // Fetch Articles
   const { data: articles } = await supabase.from('articles').select('*, comments(*)');
   ```
2. The schema matches the exported data models (`articles`, `ads`, `portfolio`, `leads`).

---

## 📞 Agency Contact Information
- **Lead Developer**: AQMedTech Innovations
- **Email**: `abdullahiabdulqaharak@gmail.com`
- **WhatsApp**: `+234 801 234 5678`
- **Location**: Lagos, Nigeria & Remote Worldwide
