# KinGraph AI - Frontend

Frontend application for KinGraph AI built with React, TypeScript, and Vite.

## 🚀 Features

- Graph visualization using Cytoscape.js
- Table view for person/relationship management
- Real-time sync between graph and table views
- Responsive design with TailwindCSS
- Type-safe state management with Zustand

## 🛠️ Tech Stack

- **React 18+** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool with HMR
- **TailwindCSS** - Styling
- **Cytoscape.js** - Graph rendering
- **TanStack Table** - Table component
- **React Query** - Data fetching
- **Zustand** - State management
- **Zod** - Schema validation (planned)

## 📋 Prerequisites

- Node.js 18+ and npm

## 🚀 Installation & Setup

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The frontend will run at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 🗺️ Project Stages

### Stage 0: Foundation ✅

- Project scaffolding with Vite
- TypeScript configuration
- ESLint setup

### Stage 1-2: Backend API ✅

- Backend services ready for integration

### Stage 3: Base UI 🔄

- Layout and navigation components
- Form components
- Basic styling with TailwindCSS

### Stage 4: Graph Visualization ⏳

- Integrate Cytoscape.js
- Render nodes from API
- Render edges and interactions
- Zoom and drag functionality

### Stage 5: Table View ⏳

- TanStack Table integration
- Display person/relationship data
- Sorting and filtering
- Search functionality

### Stage 6-9: Advanced Features ⏳

- Relationship inference UI
- Natural language input form
- Duplicate detection UI
- Lineage queries

## 📖 Development Guidelines

- Use TypeScript for all new code
- Follow ESLint configuration
- Use Zod for form validation
- Keep components modular and reusable
- Update documentation as needed

## 🤝 Contributing

Please follow the contributing guidelines in the main [README.md](../README.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
