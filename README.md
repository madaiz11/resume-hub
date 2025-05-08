# Jareef.dev - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. The website features a clean design, internationalization support, and a comprehensive showcase of skills, experience, and projects.

## 🌟 Features

- **Modern Tech Stack**

  - Next.js 14 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Shadcn/ui for beautiful components

- **Internationalization**

  - Multi-language support (English and Thai)
  - Easy language switching
  - Namespace-based translation management

- **Responsive Design**

  - Mobile-first approach
  - Beautiful UI components
  - Smooth animations and transitions

- **Content Sections**
  - Professional profile
  - Work experience timeline
  - Skills showcase
  - Project portfolio
  - Education background
  - Contact information

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/jareef.dev.git
   cd jareef.dev
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   NEXT_PUBLIC_SITE_URL=your-site-url
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Development

### Project Structure

```
jareef.dev/
├── app/                 # Next.js app directory
├── components/         # React components
│   ├── ui/            # UI components
│   └── ...            # Feature components
├── lib/               # Utility functions and hooks
├── public/            # Static assets
│   └── locales/      # Translation files
└── styles/           # Global styles
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Internationalization

The project uses `next-i18next` for internationalization. Translation files are located in `public/locales/`:

- `en/` - English translations
- `th/` - Thai translations

Each language has its own namespace files:

- `common.json` - Common translations
- `navigation.json` - Navigation-related translations
- `home.json` - Home page translations
- And more...

## 🎨 UI Components

The project uses shadcn/ui components with custom styling. Key components include:

- `Button` - Customizable button component
- `Card` - Card component for content sections
- `DropdownMenu` - Dropdown menu for language selection
- And more...

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/jareef.dev](https://github.com/yourusername/jareef.dev)
