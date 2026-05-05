# Man On Vision 🎬
**Premium Cinematic Wedding & Event Management System**

Man On Vision is a high-fidelity, full-stack platform designed for elite media brands. It combines a stunning cinematic user experience with a robust CRM and client management backend.

---

## 🌟 Key Features

### 💎 Client Experience
- **Cinematic Auth**: Immersive 3D video-background login experience with glassmorphic UI.
- **Real-time Chat**: Direct Socket.io-powered communication channel with the studio team.
- **Client Dashboard**: Personalized portal for tracking event progress and accessing deliverables.

### 🛠️ Admin Management (CRM)
- **Lead Pipeline**: Comprehensive tracking of inquiries from initial contact to conversion.
- **Finance Suite**: Monthly performance tracking, revenue metrics, and invoice management.
- **Smart Gallery**: Seamless management of media assets via Cloudinary and Google Drive.
- **Task Planning**: Advanced internal workflow management with Google Sheets synchronization.
- **Calendar Integration**: Real-time polling and synchronization with Google Calendar.

---

## 🚀 Tech Stack

- **Frontend**: React.js, Vite, Framer Motion, Tailwind CSS, Redux Toolkit.
- **Backend**: Node.js, Express.js, Socket.io (Real-time).
- **Database**: MongoDB (Mongoose).
- **Infrastructure**: Cloudinary (Media), Google APIs (Calendar/Sheets), JWT (Auth).

---

## ✅ Implementation Status

### 🛠️ Core Infrastructure
- [x] **MERN Stack Architecture**: Fully established with high-performance Vite frontend and Express backend.
- [x] **Real-time Engine**: Socket.io integration for instant communication and status updates.
- [x] **Secure Auth System**: JWT-based authentication with separate Admin and Client access levels.
- [x] **Database Optimization**: Cleaned and structured MongoDB schemas for Leads, Finance, and Media.

### 💼 CRM & Business Logic
- [x] **Lead Management**: Full pipeline for tracking inquiries, customer details, and conversion status.
- [x] **Finance Hub**: Integrated dashboard for tracking revenue, expenses, and monthly performance.
- [x] **Digital Invoicing**: System for generating and managing professional client invoices.
- [x] **Service Management**: Dynamic control over photography/event categories and pricing.

### 📅 Automations & Integrations
- [x] **Google Calendar Sync**: Automatic polling and synchronization of event dates with Google Calendar.
- [x] **Task Tracker (Sheets)**: Synchronization of internal tasks with Google Sheets for offline/collaborative management.
- [x] **Automated Reminders**: Cron-based service for event notifications and task deadlines.

### 📸 Client Experience & Media
- [x] **Immersive Dashboard**: High-fidelity, cinematic client portal for event viewing.
- [x] **Smart Chat**: WhatsApp-style real-time chat with delivery/seen status and typing indicators.
- [x] **Cloudinary/Drive Integration**: Unified media management for high-resolution photo/video delivery.

---

## 🎨 Design System & Aesthetics

Man On Vision follows a "Luxury Zen" aesthetic—combining ultra-minimalist layouts with high-performance organic backgrounds.

### 🌊 Dynamic Background (WaveBackground.jsx)
- **Technology**: Custom WebGL Fragment Shader.
- **Visuals**: A sharp, high-fidelity "Liquid Maze" or "Isoline" pattern.
- **Logic**: Uses Simplex Noise (`snoise`) with a `sin` thresholding layer to create thin, organic lines.
- **Interactivity**: Features a localized magnetic distortion field that follows the cursor, creating an organic "push" effect on the lines.

### 🎭 Typography
- **Primary Serif**: Used for branding and headings (`Man On Vision`). Characterized by high contrast and wide tracking.
- **System Sans**: Used for body text, uppercase subheaders, and navigation. Tracking is pushed to `0.4em` - `0.8em` for a premium, airy feel.

### 🌈 Color Palette
- **Primary Gradient**: Pink (`vec3(1.0, 0.35, 0.6)`) to Orange (`vec3(1.0, 0.65, 0.25)`).
- **Accents**: 
  - `Luxury Gold`: `#D4AF37` (used for active states and highlights).
  - `Stone 900`: `#1C1917` (used for deep contrast text).
  - `Pure White`: `#FFFFFF` (used for glassmorphic card backgrounds).

---

## 🧹 Maintenance & Cleanup (Recently Completed)
- **WebGL Refinement**: Optimized the background for 60fps and ultra-thin, sharp minimalist lines.
- **Logo Standardization**: Fixed broken asset paths across AuthPage, Navbar, and Sidebars. All logos now reference `/assets/MOV-logo.png` or `/assets/file.svg`.
- **Hardcoded Data Removal**: Replaced generic "Team Alpha" branding with "Man On Vision" across the entire codebase.
- **Redundant File Purge**: Deleted 20+ temporary test scripts, outdated log files, and one-off maintenance utilities to slim down the repository.
- **Environment Stabilization**: Standardized the `.env` requirements to ensure smooth deployment on platforms like Render or Vercel.
- **Refactored Auth Logic**: Improved the backend admin identification logic for better security and flexibility.

---

## 📂 Project Structure
```text
Man On Vision/
├── frontend/           # React + Vite application
│   ├── src/            # Components, Pages, Store, and Context
│   └── public/         # Static assets (Logos, Videos)
└── backend/            # Express.js Server
    ├── controllers/    # Business logic
    ├── routes/         # API Endpoints
    ├── models/         # MongoDB Schemas
    ├── services/       # External API integrations (Google, Cloudinary)
    └── scripts/        # Database maintenance & cleanup utilities
```

---

## ⚙️ Environment Variables

### Backend (.env)
- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for token generation.
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`: Media storage.
- `VAULT_SECRET`: Encryption key for secure data.
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`: OAuth credentials.
- `ADMIN_EMAIL`, `ADMIN_PASSWORD`: System admin credentials.

### Frontend (.env)
- `VITE_API_URL`: URL of the running backend server.

---

## 🛠️ Getting Started

1.  **Clone the Repository**
2.  **Backend Setup**:
    ```bash
    cd backend
    npm install
    npm run dev
    ```
3.  **Frontend Setup**:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

---

## 📞 Contact & Socials

- **Website**: [Man On Vision](http://localhost:5173)
- **Instagram**: [@man.on.vision](https://www.instagram.com/man.on.vision)
- **WhatsApp**: [+91 63609 54750](https://wa.me/916360954750)

---
© 2026 Man On Vision Studios. All Rights Reserved.
