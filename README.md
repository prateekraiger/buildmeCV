# BuildMeCV: Professional Resume Builder

BuildMeCV is a modern, interactive resume builder application built with React, TypeScript, and Vite. It allows users to create professional, ATS-friendly resumes with a real-time live preview and instant PDF export.

## Features

-   **Real-time Live Preview**: See your resume update instantly as you type.
-   **WYSIWYG Editor**: Simulates an actual US Letter-sized page for accurate layout.
-   **Multiple Templates**: Choose between Modern and Classic designs.
-   **Customizable Design**: Change accent colors and layouts to match your style.
-   **PDF Export**: High-quality PDF generation using `@react-pdf/renderer`.
-   **Interactive Builder**: Step-by-step form wizard for easy data entry.
-   **Dynamic Sections**: Reorderable sections (Experience, Education, Projects, etc.).
-   **Local Storage**: Your progress is saved automatically.

## Tech Stack

-   **Frontend Framework**: [React](https://react.dev/) (v18)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **PDF Generation**: [@react-pdf/renderer](https://react-pdf.org/)
-   **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Use a package manager like `npm`, `yarn`, or `pnpm`.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/prateekraiger/buildmeCV.git
    cd buildmeCV
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to view the application.

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── blocks/         # Page sections
│   ├── builder/        # Resume builder logic (Steps, Forms, Preview)
│   ├── pdf/            # PDF templates and document components
│   └── UI/             # Generic UI atoms (Buttons, Inputs, etc.)
├── pages/              # Application pages (Home, Builder, etc.)
├── store/              # Global state (Zustand)
├── types.ts            # TypeScript interfaces
└── App.tsx             # Main application entry
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open-source and available under the [MIT License](LICENSE).
