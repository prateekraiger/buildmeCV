# BuildMeCV: AI-Powered Resume Builder

BuildMeCV is a modern, feature-rich resume builder with a striking new design. It features a sophisticated dark-themed UI, fluid animations, a live preview, ATS-optimized PDF exporting, and AI-powered content enhancement to help users craft the perfect professional resume in minutes.

## ✨ Key Features

- **Stunning UI:** A bold, high-contrast color palette makes your content pop.
- **Fluid Animations:** Built with Framer Motion, the UI provides a smooth, intuitive, and responsive experience.
- **Live Preview:** See your resume take shape in real-time as you fill out the forms.
- **AI Content Enhancement:** Use the power of Google's Gemini API to automatically rewrite and improve your work experience and project descriptions, making them more professional and impactful.
- **Customizable Templates:** Choose from modern or classic templates and apply a custom accent color to match your style.
- **ATS-Optimized PDF Export:** Download your resume as a high-quality, professionally formatted PDF designed to be parsed correctly by Applicant Tracking Systems (ATS).
- **Persistent Storage:** All resume data is managed in a centralized, efficient state store that persists in your browser.
- **Dynamic Forms:** Easily add, update, or remove multiple entries for experience, education, and projects with slick animations.

## 🚀 Tech Stack

- **Frontend:** [React](https://reactjs.org/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Routing:** [React Router](https://reactrouter.com/)
- **PDF Generation:** [@react-pdf/renderer](https://react-pdf.org/)
- **AI Integration:** [@google/genai (Gemini API)](https://ai.google.dev/)

## ⚙️ Getting Started

This project is designed to run directly in the browser without a complex build step. For the best experience, especially for features like importing/exporting data, it's recommended to serve the files using a local web server.

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/prateekraiger/buildmeCV.git
    cd buildmeCV
    ```

2.  **API Key Configuration:**
    The AI enhancement feature requires a Google Gemini API key. The application is coded to read this key from `process.env.API_KEY`. You must ensure this environment variable is set in the execution context where you are serving the application. **Do not hard-code your API key in the source code.**

3.  **Running the Application with a Local Server:**
    Using a local server is the recommended way to run the application. We'll use `http-server`, which you can run easily with `pnpm`.

    ```bash
    # Run a local server on port 8080
    pnpm exec http-server .
    ```

    If you don't have `http-server`, `pnpm exec` will prompt you to install it. Once running, open your browser and navigate to the address provided (usually `http://127.0.0.1:8080`).

You can now start building your resume!
