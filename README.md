# Megaphone Website

The official landing page for **Megaphone**, a real-time connectivity layer designed to simplify event-driven communication between microservices and frontend clients.

[![Built with React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Built with Vite](https://img.shields.io/badge/Vite-6-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)

---

## 📣 What is Megaphone?

Megaphone abstracts the complexity of long-polling and streaming. It allows developers to build resilient, event-driven architectures without having to manage persistent connections within their business logic.

By acting as a buffer and streaming bridge, Megaphone ensures that your microservices can push updates and your clients can receive them reliably, even across network blips.

## ✨ Key Features

- **Smart Buffering**: Automatic message buffering for temporarily disconnected clients. Never miss an event.
- **Protocol Agnostic**: Standard HTTP streaming support, designed for extensibility.
- **Kubernetes Native**: Easy deployment with a dedicated Operator and standard K8s CRDs.
- **Developer First**: Ready-to-use clients for Rust and TypeScript with clean, typed APIs.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) (using `rolldown-vite`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Syntax Highlighting**: [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dghilardi/megaphone-website.git
   cd megaphone-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
src/
├── components/        # UI Components (Hero, Features, HowItWorks, etc.)
├── assets/           # Images, fonts, and static assets
├── App.tsx           # Main application layout
├── main.tsx          # Application entry point
└── index.css         # Global styles and Tailwind imports
```

## 🏗 How It Works

Megaphone uses a simple **Producer-Consumer** model:

1. **Create a Channel**: Dynamically generate read/write addresses.
2. **Publish Events**: Microservices POST data to the producer address.
3. **Stream to Client**: Frontend clients connect to the consumer address and receive a real-time stream.

## 🌐 Ecosystem

Megaphone is more than just a landing page. It's a complete ecosystem:

- **[Megaphone Server](https://github.com/dghilardi/megaphone)**: The core Rust reverse proxy and streaming server.
- **[Megaphone JS](https://github.com/dghilardi/megaphone-js)**: TypeScript client for browser and Node.js.
- **[Megaphone Operator](https://github.com/dghilardi/megaphone-operator)**: Kubernetes Operator for managing deployments.
- **[Megaphone Client](https://github.com/dghilardi/megaphone-client)**: Rust client library for backend services.

---

Built with ❤️ by the Megaphone team.
