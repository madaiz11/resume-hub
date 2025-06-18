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

## 📦 Database Setup

### Option 1: Using Docker (Recommended)

1. Create a `.env` file in the root directory with the following variables:

   ```env
   MONGODB_URI=mongodb://username:password@localhost:27017/resume-hub
   MONGO_PORT=27017
   MONGO_INITDB_ROOT_USERNAME=your_username
   MONGO_INITDB_ROOT_PASSWORD=your_password
   ```

2. Start the MongoDB container:

   ```bash
   docker-compose up -d
   ```

### Option 2: Local MongoDB Installation

1. Install MongoDB Community Edition on your system
2. Add to your `.env` file:

   ```env
   MONGODB_URI=mongodb://localhost:27017/resume-hub
   ```

### Database Models

The application uses Mongoose with TypeGoose for type-safe MongoDB models:

- **Resume**: Main resume model containing all sections
- **Profile**: Personal information and contact details
- **Experience**: Work experience entries
- **Education**: Educational background
- **Skills**: Technical and professional skills
- **Projects**: Portfolio projects

### Database Migrations and Seeders

The application includes a database migration and seeder system for managing the database schema and initial data.

#### Available Commands

```bash
# Run database migrations
npm run db:migrate

# Rollback migrations
npm run db:rollback

# Seed the database with initial data
npm run db:seed

# Clear all data from the database
npm run db:clear
```

#### Migration Files
Located in `src/infrastructure/database/migrations/`:
- `001_initial_schema.ts` - Creates the initial database schema with collections and validation

#### Seeder Files
Located in `src/infrastructure/database/seeders/`:
- `001_resume_seeder.ts` - Populates the database with sample resume data

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
