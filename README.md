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
        ├── Screenshot 2025-08-03 013453.png
        ├── Screenshot 2025-08-03 013555.png
        ├── Screenshot 2025-08-17 214415.png
        ├── Screenshot 2025-08-17 214442.png
└── 📁src   // Main source directory
    └── 📁components    // Reusable UI components
        └── 📁shared    // Shared components
            ├── CharacterCard.tsx
            ├── CounterComponent.tsx
            ├── DragonBallSection.tsx
            ├── RegistrationForm.tsx
            ├── SearchBar.tsx
        └── 📁ui    // Shadcn UI components
            ├── button.tsx
            ├── card.tsx
            ├── form.tsx
            ├── input.tsx
            ├── label.tsx
            ├── select.tsx
            ├── .tsx
            ├── select.tsx
    └── 📁hooks   // Custom hooks
    └── 📁lib   // Library functions
        ├── utils.ts    // Utility functions
    └── 📁context   // context components
        ├── ThemeContext.tsx
    └── 📁store   // store components
        ├── counterStore.ts
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
- [x] Menggunakan event handler di setiap event akan muncul di console
- [x] Menggunakan conditional rendering ketika mau menambahkan notes atau tidakk di form
- [x] Menggunakan toast notification ketika submit
- [x] Toggle dark mode
- [x] Search box karakter dragonball
- [x] Menamilkan karakter dragonball dari hit API => https://dragonball-api.com/api/

---

## Tampilan Aplikasi

Berikut contoh tampilan UI saat aplikasi dijalankan:

![UI Counter](https://github.com/user-attachments/assets/d1fb38ca-ff7d-457b-a5fd-3165df46c96b)

Tombol `+` akan menambah angka, `-` mengurangi, dan `Reset` akan mengatur ulang angka ke 0.

dengan form yang menggunakan tanstack/react-form
