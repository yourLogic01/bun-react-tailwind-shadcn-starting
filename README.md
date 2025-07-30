# Bun - React - Tailwind - Shadcn | Starting Template

To install dependencies:

```bash
bun install
```

To start a development server:

```bash
bun dev
```

To build the project:

```bash
bun run build
```

To run for production:

```bash
bun start
```

This project was created using `bun init` in bun v1.2.19. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

---

## Project Structure

```ts
└── 📁docs   // documentation directory
    └── 📁images // images docccumentation
        ├── Screenshot 2025-07-30 223510.png
└── 📁src   // Main source directory
    └── 📁components    // Reusable UI components
        └── 📁shared    // Shared components
            ├── ProfileCard.tsx
            ├── index.ts
            ├── CounterComponent.tsx
        └── 📁ui    // Shadcn UI components
            ├── avatar.tsx
            ├── button.tsx
            ├── card.tsx
            ├── form.tsx
            ├── input.tsx
            ├── label.tsx
            ├── select.tsx
    └── 📁hooks   // Custom hooks
    └── 📁interfaces   // Custom interfaces
        ├── profile-card.interface.ts
        ├── index.ts
    └── 📁data   // Custom data
        ├── profile.ts
        ├── index.ts
    └── 📁lib   // Library functions
        ├── utils.ts    // Utility functions
    └── 📁pages   // Page components
    └── 📁public    // Public assets
        └── 📁images    // Image assets
            ├── logo.svg
            ├── react.svg
        └── 📁styles    // CSS Styles directory
            ├── globals.css
        ├── index.html    // Main HTML file
    └── 📁routes    // Application routes
    └── 📁stores    // Global state management (Zustand)
    └── 📁types   // TypeScript type definitions
    ├── APITester.tsx   // API testing component
    ├── App.tsx   // Main application component
    ├── index.ts    // Entry point for the application
    ├── main.tsx    // Main entry file for the React application
├── .env    // Environment variables
├── .gitignore    // Git ignore file
├── build.ts    // Build script
├── bun-env.d.ts    // Type definitions for Bun environment
├── bun.lock    // Bun lock file
├── bunfig.toml   // Bun configuration file
├── components.json   // Shadcn Components configuration
├── package.json    // Project configuration
├── README.md   // Project documentation
└── tsconfig.json   // TypeScript configuration
```

---

## Feature

- [x] Menampilkan nilai counter
- [x] Tombol + untuk menambah nilai
- [x] Tombol - untuk mengurangi nilai
- [x] Tombol Reset untuk mengatur ulang ke 0
- [x] Menggunakan props untuk mengontrol komponen

- [x] UI components menggunakan Shadcn (Card, Avatar, Button)
- [x] Implementasi icon lucide
- [x] Reusable dan typed dengan interface TypeScript
- [x] Responsive & customizable

---

## Tampilan Aplikasi

Berikut contoh tampilan UI saat aplikasi dijalankan:

![UI Counter](https://github.com/user-attachments/assets/fa04a1e1-d133-4351-bad0-38ab9f7b8e12)

Tombol `+` akan menambah angka, `-` mengurangi, dan `Reset` akan mengatur ulang angka ke 0.

Dengan card profile dibawahnya dilengkapi tombol social media
