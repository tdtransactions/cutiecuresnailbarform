# 💅 Cutiecures Nail Bar - Premium Coupon Issuance System

Welcome to the source code repository of the **Cutiecures Nail Bar Coupon System**. This is a modern, elegantly designed web application optimized for collecting customer information and issuing exclusive discount coupons for the nail salon.

## 🌟 Project Overview

This project is more than just a coupon claiming page; it's a carefully crafted User Experience (UX). Aimed at converting visitors into loyal customers, the system provides a smooth, professional, and trustworthy registration process.

## ✨ Key Features

*   **🎨 Premium Interface:** Minimalist and elegant design with micro-animations and a harmonious color palette reflecting the Cutiecures brand identity.
*   **📱 Mobile Optimized:** Perfect Responsive Design across all devices, from smartphones to desktops.
*   **🔄 Multi-step UX:** Helps users easily provide information without feeling overwhelmed.
*   **📧 Resend API Integration:** Automatically sends instant notifications of customer information and issued codes to the administrator.
*   **🔒 Security & Fraud Prevention:** 
    *   Integrated encryption and local storage (LocalStorage) to ensure each customer receives only one unique code.
    *   Automatic redirection mechanism back to the home page after completion.
*   **⚡ Superior Performance:** Built on the latest Next.js platform, ensuring extremely fast page load speeds and a smooth experience.

## 🛠 Technology Stack

The system is built with industry-leading technologies:

*   **Framework:** [Next.js](https://nextjs.org/) (App Router Architecture)
*   **Frontend:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Email Service:** [Resend](https://resend.com/)
*   **Styling:** Modern Vanilla CSS (Custom Design System)

## 🚀 Installation & Deployment Guide

To run this project in a local environment, please follow these steps:

### 1. Clone the repository
```bash
git clone <repository-url>
cd cutiecures-coupon
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the root directory and configure the API Key from Resend:
```env
RESEND_API_KEY=your_resend_api_key_here
```

### 4. Run the development environment
```bash
npm run dev
```
Then, access [http://localhost:3000](http://localhost:3000) on your browser.

## 🏗 Directory Structure

*   `src/app/`: Contains routes and main page logic.
*   `src/app/api/`: Handles serverless requests (Backend logic for sending emails).
*   `public/`: Contains static assets like images and logos.

## 📝 License

This project is developed exclusively for **Cutiecures Nail Bar**. Any form of unauthorized copying or use of the source code is strictly prohibited.

---
*Developed with ❤️ by TD transactions*
