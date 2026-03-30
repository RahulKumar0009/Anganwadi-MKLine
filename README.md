# Anganwadi MK Line — School Website

A complete school website with an admin panel for managing events and gallery images.

---

## 🗂 File Structure

```
anganwadi-website/
├── index.html          ← Home page (events shown here)
├── about.html          ← About Us & Staff
├── academics.html      ← Academics & Daily Schedule
├── gallery.html        ← Photo Gallery
├── contact.html        ← Contact Page
├── admin.html          ← Admin Panel (password protected)
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── config.js       ← ⭐ YOUR CONFIG — Edit this first!
│   └── main.js         ← Shared JavaScript
└── images/
    └── logo.jfif       ← School logo
```

---

## ⚙️ SETUP STEPS (Do these before going live)

### Step 1: Set up Firebase (Free)

1. Go to **https://console.firebase.google.com**
2. Click **Add Project** → name it (e.g., `anganwadi-mkline`) → Create
3. Click the **Web** icon (`</>`) to add a web app
4. Copy the `firebaseConfig` object shown
5. Open `js/config.js` and paste your values into the `firebaseConfig` section

**Enable Firestore:**
- In Firebase Console → Build → **Firestore Database** → Create database
- Start in **Test mode** (allows read/write for 30 days — change rules later)
- Choose a region → Done

### Step 2: Set up Cloudinary (Free image uploads)

1. Go to **https://cloudinary.com** → Sign up for free
2. On the Dashboard, note your **Cloud Name**
3. Go to **Settings → Upload → Upload Presets**
4. Click **Add upload preset**
   - Set **Signing Mode** to **Unsigned**
   - Save → copy the preset name
5. Open `js/config.js` and fill in:
   ```
   CLOUDINARY_CLOUD_NAME  = "your-cloud-name"
   CLOUDINARY_UPLOAD_PRESET = "your-preset-name"
   ```

### Step 3: Change Admin Password (Optional)

In `js/config.js`, change:
```javascript
const ADMIN_PASSWORD = "MKLine@2024"; // ← Change this!
```

### Step 4: Update Contact Page

In `contact.html`, find this line and replace with your WhatsApp number:
```javascript
const phoneNumber = '91XXXXXXXXXX'; // ← Replace with e.g. '919876543210'
```

---

## 🚀 Deploy to GitHub Pages

1. Create a GitHub account at **https://github.com**
2. Create a new **public repository** (e.g., `anganwadi-mkline`)
3. Upload all files (drag & drop in GitHub's web interface)
4. Go to **Settings → Pages**
5. Under **Source**, select **Deploy from a branch** → `main` → `/ (root)` → Save
6. Wait ~2 minutes — your site will be live at:
   **https://YOUR-USERNAME.github.io/anganwadi-mkline/**

---

## 👩‍💼 How to Use the Admin Panel

1. Go to `yoursite.github.io/anganwadi-mkline/admin.html`
2. Enter password: `MKLine@2024` (or your custom one)
3. **Add Event**: Fill in name, date, description, upload image → Save
4. **Add Gallery Photo**: Upload image → Add to Gallery
5. Events appear automatically on the Home page with animations!

---

## 🔒 Firestore Security Rules (Recommended after setup)

Once your site is live, update Firestore rules to allow only reads publicly and restrict writes:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if false; // Writes only via Admin panel JS which uses config
    }
  }
}
```

> Note: Since the admin panel uses client-side JS, it uses the same Firebase rules. For production, consider using Firebase Authentication to secure writes properly.

---

## 📞 Support

Built for Anganwadi MK Line | Teacher: A Vijay Laxmi | Helper: Punnya Kala
