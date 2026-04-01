# KinGraph AI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6.svg)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.9+-3776AB.svg)](https://www.python.org/)

KinGraph AI is a relationship intelligence platform that models family structures as a knowledge graph and enhances data entry using AI-powered natural language parsing, duplicate detection, and relationship inference.

Unlike traditional family tree builders that rely on manual node linking, KinGraph AI automatically infers reverse relationships, predicts missing ancestors, detects duplicate individuals using similarity scoring, and validates logical consistency in relationships using graph rules.

The system combines relational database design with graph traversal algorithms to support lineage queries such as paternal ancestry, descendants, and cross-branch relations.

AI components convert unstructured text into structured relational data, reducing manual data entry friction and improving data consistency.

## 🎯 What KinGraph AI Demonstrates

Applied knowledge in:

- Knowledge graphs and graph databases
- Entity resolution and duplicate detection
- Graph traversal algorithms
- NLP pipelines with spaCy
- Microservices architecture
- Data validation heuristics

## 🚀 Features

### Core Functionality

- **Knowledge Graph Modeling**: Family structures represented as interconnected nodes and relationships
- **AI-Powered Data Entry**: Natural language parsing to extract relationships from text
- **Duplicate Detection**: Similarity scoring to identify potential duplicate persons
- **Relationship Inference**: Automatic creation of reverse relationships and logical connections
- **Graph Validation**: Rules-based validation to prevent impossible or inconsistent relationships
- **Lineage Queries**: Support for complex ancestry and descendant queries

### Key Capabilities

- Hybrid graph + table interface for data management
- Natural language relationship input (e.g., "John is the father of Mary")
- Automatic relationship inference and reverse linking
- Duplicate detection with confidence scoring
- Graph traversal for lineage exploration
- Data validation and consistency checks

## 🏗️ Architecture

```
Frontend (React + TypeScript)
    ↓
Backend API (Node.js + Express)
    ↓
PostgreSQL Database
    ↓
AI Service (Python + FastAPI)
    ↓
Inference Engine (NetworkX + spaCy NLP)
```

## 🛠️ Tech Stack

### Frontend

- React 18+
- TypeScript
- Vite
- TailwindCSS
- Cytoscape.js (graph rendering)
- TanStack Table
- React Query
- Zustand (state management)

### Backend

- Node.js 18+
- Express.js
- Prisma ORM
- PostgreSQL

### AI Service

- Python 3.9+
- FastAPI
- spaCy (NLP processing)
- RapidFuzz (duplicate detection)
- NetworkX (relationship inference)
- Pydantic

### Deployment (Free Tier)

- Frontend: Vercel
- Backend: Render
- Database: Neon / Supabase (PostgreSQL)
- AI Service: Docker container

## 📋 Prerequisites

- Node.js 18+ and npm
- Python 3.9+
- PostgreSQL database
- Docker (for AI service deployment)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/SaathvikNS/KinGraphAI.git
cd KinGraphAI
```

### 2. Backend Setup

```bash
cd backend
npm install
# Configure your database in .env (see .env.example)
npx prisma migrate dev
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

### 4. AI Service Setup

```bash
cd ../ai-service
pip install -r requirements.txt
# Download spaCy model
python -m spacy download en_core_web_sm
uvicorn main:app --reload
```

### 5. Database Setup

- Set up a PostgreSQL database (free with Neon or Supabase)
- Update connection strings in backend/.env
- Run migrations: `npx prisma migrate dev`

## 📖 Usage

1. Start all services as described above
2. Open your browser to `http://localhost:5173` (frontend)
3. Backend API available at `http://localhost:3000`
4. AI service at `http://localhost:8000`

### API Endpoints

- `GET /api/persons` - List all persons
- `POST /api/persons` - Create a new person
- `GET /api/relationships` - List relationships
- `POST /api/relationships` - Create relationship
- `POST /api/nlp/parse` - Parse natural language relationship input

## 🗺️ Project Roadmap

### Stage 0: Project Foundation ✅

- Monorepo structure with frontend, backend, AI service
- TypeScript configuration across services
- ESLint + Prettier setup

### Stage 1: Database Design ✅

- Person, Relationship, Event tables with Prisma
- Validation rules for relationships
- Sample data seeding

### Stage 2: Core Backend API 🔄

- Person CRUD endpoints
- Relationship management
- Event tracking

### Stage 3: Frontend Base UI 🔄

- Responsive layout with navigation
- Form validation with Zod
- Basic UI components

### Stage 4: Graph Visualization ⏳

- Cytoscape.js integration
- Interactive graph rendering
- Node/edge interactions

### Stage 5: Table View ⏳

- TanStack table implementation
- Sorting, filtering, search
- Graph-table synchronization

### Stage 6: Relationship Inference Engine ⏳

- Rule-based relationship inference
- Automatic reverse relationship creation
- Graph consistency validation

### Stage 7: Lineage Queries ⏳

- Ancestor/descendant traversal
- Sibling and cousin queries
- Maternal/paternal lineage views

### Stage 8: Natural Language Input AI ⏳

- spaCy-powered NLP pipeline
- Relationship extraction from text
- Automatic person/relationship creation

### Stage 9: Duplicate Detection AI ⏳

- Name and attribute similarity scoring
- Confidence-based duplicate suggestions
- Safe merge functionality

### Stage 10-17: Advanced Features ⏳

- Auto-complete ancestors
- Event intelligence
- Authentication system
- Performance optimization
- Testing suite
- Docker deployment
- CI/CD pipeline
- Documentation

[📋 Complete Feature Tracker](https://www.notion.so/335946acf58780c39aebcc2f548f5a53?pvs=21)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

### Development Guidelines

- Use TypeScript for all new code
- Follow ESLint configuration
- Write tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Author**: SaathvikNS
- **GitHub**: [https://github.com/SaathvikNS/KinGraphAI](https://github.com/SaathvikNS/KinGraphAI)
- **Issues**: [Create an issue](https://github.com/SaathvikNS/KinGraphAI/issues)

## 🙏 Acknowledgments

- Inspired by the need for better family tree management tools
- Built with modern web technologies and open-source AI tools
