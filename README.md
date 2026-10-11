# Smart Supervisor System

> **University Final Year Project (FYP) Management & AI Document Evaluation Portal**

A complete, full-stack web application for university supervisors and students to manage FYP milestones, evaluate SRS/SDD documents with AI-powered authentic scoring, and coordinate advisory meetings.

---

## 🚀 Features

| Feature | Description |
|---|---|
| **Authentic Score Engine** | 4-part breakdown: Completeness (30%) + Originality (30%) + Technical Depth (20%) + Formatting (20%) |
| **Template & Plagiarism Audit** | IEEE SRS/SDD checklist compliance with automatic section detection |
| **Actionable Change Log** | Line-specific recommendations (e.g. *Line 12: Change "will" to "the system shall"*) |
| **At-Risk Dashboard Widget** | Auto-flags students with <50% progress or no submission in >2 weeks |
| **Document Analysis Studio** | Line-numbered viewer with highlighted flagged lines + 4-part donut chart |
| **Student Portal** | Submission history, milestone tracker, meeting requests |
| **Meeting Scheduler** | AI-suggested time slots + supervisor approve/reject workflow |
| **AI FYP Chatbot** | Instant guidance on SRS, NFRs, UML, ERD standards |
| **One-Click PDF Export** | University-branded feedback PDF with all scores, audit results & suggestions |

---

## 📁 Project Structure

```
New folder/
├── index.html              # Root SPA entry point
├── styles.css              # Modern university design system
├── app.js                  # Full SPA with router, all views & logic
├── package.json            # Root package (for Vercel & local Express)
├── vercel.json             # Vercel serverless deployment config
├── .env.example            # Environment variable template
│
├── api/                    # Vercel Serverless Functions
│   ├── analyze.js          # POST /api/analyze – AI + heuristic grading
│   ├── data.js             # GET  /api/data   – all datasets combined
│   ├── users.js            # GET  /api/users
│   ├── projects.js         # GET  /api/projects
│   ├── documents.js        # GET  /api/documents
│   ├── feedback.js         # GET  /api/feedback
│   ├── meetings.js         # GET/POST /api/meetings
│   └── store.js            # Shared CORS & JSON loader helper
│
├── backend/                # Local Express dev server
│   ├── server.js           # Full Express API (port 4000)
│   ├── package.json        # Backend-specific dependencies
│   └── data/               # JSON datasets
│       ├── users.json
│       ├── projects.json
│       ├── documents.json
│       ├── feedback.json
│       └── meetings.json
```

---

## 🖥️ Run Locally

### Option A – Open directly in browser (no backend needed)
The app ships with all data embedded. Simply open `index.html` in a browser:
```
file:///path/to/New folder/index.html
```
> All features including AI heuristic scoring, PDF export, chatbot, and meetings work offline.

### Option B – Local Express Backend
```bash
cd backend
npm install
npm start
# Backend runs on http://localhost:4000
```
Then open `index.html` in your browser.

---

## ☁️ Deploy to Vercel (One-Click)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import your repository.
3. **No build configuration needed.** Vercel auto-detects `vercel.json`.
4. *(Optional)* Add environment variable `OPENROUTER_API_KEY` for live GPT-4o-mini AI analysis.
5. Click **Deploy**.

---

## 🔐 Demo Credentials

| Role | Email | Password |
|---|---|---|
| **Supervisor** | alice.smith@example.com | password |
| **Student (On Track)** | bob.lee@example.com | password |
| **Student (At Risk)** | carol.nguyen@example.com | password |

> Use the **1-Click Login** buttons on the login page, or the **Role Switcher badge** in the navbar to quickly switch between supervisor and student views.

---

## 🤖 AI Document Analysis

The system supports two analysis modes:

1. **Live LLM Mode** – Set `OPENROUTER_API_KEY` in Vercel environment variables. Uses GPT-4o-mini via OpenRouter.
2. **Heuristic Engine** (default, no key needed) – Built-in grading engine that checks IEEE modal verbs, NFR presence, section completeness, and plagiarism indicators.

---

## 📄 License
University FYP Submission – Computer Science & Software Engineering Department
