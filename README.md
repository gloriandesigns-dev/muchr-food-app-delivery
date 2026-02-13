# MUNCHR - Food Delivery & Dining App

A premium food delivery and dining application built with React Native, Expo, and TypeScript. This project features a pixel-perfect UI implementation of a dark-themed design system (inspired by Zomato), localized for the USA market.

## Features Implemented

### 1. Onboarding & Auth
- **Splash Screen**: Animated logo entry.
- **Login**: Phone number verification UI.
- **OTP Verification**: 6-digit code input with auto-focus.
- **Bio/Details**: User profile creation (Name, Age, Gender).
- **Onboarding Carousel**: 3-step animated guide.

### 2. Core Navigation
- **Floating Tab Bar**: Custom "Liquid Glass" style bottom navigation.
- **Tabs**: Delivery, Under $25, Dining.

### 3. Home Screen (Delivery)
- **Veg Mode**: Global context toggle that filters the entire app to vegetarian-only content with immersive transition animations.
- **Hero Carousel**: Auto-scrolling promo banners.
- **Dynamic Feeds**: Categories, Featured Restaurants, "New for You", and Continuous Feed.
- **Sticky Filters**: Filter bar that sticks on scroll.

### 4. Dining Tab
- **Collections**: "In the mood for", "Limelight", and "Must-tries".
- **Bank Offers**: Horizontal scroll of payment offers.
- **Popular Hubs**: Featured dining locations.

### 5. Restaurant & Menu
- **Dynamic Listing**: Category-based filtering (e.g., Pizza, Mexican).
- **Restaurant Detail**: Hero image carousel, info header, and sticky menu filters.
- **Menu Customization**: Bottom sheet for selecting add-ons and variants.
- **Floating Cart**: Real-time cart summary bar.

### 6. Checkout & Tracking
- **Cart**: Bill summary, savings banner, and item management.
- **Address & Payment**: Bottom sheets for selecting delivery details.
- **Order Tracking**: Simulated order lifecycle (Placed -> Preparing -> Out for Delivery -> Delivered) with live map UI.
- **Gamification**: "Healthy High-five" and donation cards.

### 7. User Profile
- **Profile Dashboard**: Gold member status, wallet balance, and settings.
- **Preferences**: Global toggle for Veg Mode and Appearance settings.
- **Payment Methods**: Management screen for cards/wallets.

## Tech Stack
- **Framework**: React Native (Expo Managed Workflow)
- **Language**: TypeScript
- **Styling**: StyleSheet, Expo Google Fonts (Outfit & DM Sans)
- **Animations**: React Native Reanimated
- **Icons**: Ionicons, MaterialIcons, Feather, FontAwesome5
- **Images**: Expo Image (with high-performance caching)
- **Navigation**: Expo Router (File-based routing)

## Getting Started

1. Install dependencies:
   \`\`\`bash
   yarn install
   \`\`\`

2. Run the app:
   \`\`\`bash
   yarn run dev
   \`\`\`
