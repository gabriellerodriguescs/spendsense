# SpendSense
 
**AI-powered personal finance dashboard** — track spending, surface anomalies, forecast next month, and query your finances in plain English.
 
**Live demo:** [spendsense-kappa.vercel.app](https://spendsense-kappa.vercel.app)
 
**Stack:** Next.js (App Router, TypeScript) · PostgreSQL · Redis · Anthropic Claude API · LangChain · Tailwind CSS · Vercel
 
---
 
## Overview
 
SpendSense is a full-stack finance dashboard that turns raw transaction data into insight. It ingests financial data through cloud-native pipelines, runs lightweight ML for anomaly detection and forecasting, and exposes a natural-language **Ask AI** panel backed by the Anthropic Claude API — so a user can ask *"How much did I spend on food?"* and get an answer grounded in their own data.
 
The project was built to demonstrate end-to-end product engineering: data ingestion, storage and caching, applied ML, LLM integration, and production deployment.
 
---
 
## Features
 
- **Dashboard** — total balance, monthly spend, forecast, and flagged anomalies at a glance.
- **Anomaly detection** — Z-score analysis over transaction history flags unusual spending.
- **Expense forecasting** — linear regression projects next month's spend.
- **Ask AI panel** — natural-language querying over the user's finances via the Claude API.
- **Fast reads** — Redis caching keeps repeated queries and AI calls cheap (kept AI API cost under ~$1/month in testing).
---
 
## Architecture
 
```
┌──────────────┐     ┌─────────────────────┐     ┌──────────────┐
│   Browser    │────▶│  Next.js App Router │────▶│  PostgreSQL  │
│  (React UI)  │     │  Pages + API routes │     │ (transactions)│
└──────────────┘     │  (TypeScript)       │     └──────────────┘
                     │                     │     ┌──────────────┐
                     │                     │────▶│    Redis     │
                     │                     │     │  (cache)     │
                     │                     │     └──────────────┘
                     │                     │     ┌──────────────┐
                     │  /api/ask (route)   │────▶│ Anthropic    │
                     │                     │     │ Claude API   │
                     └─────────────────────┘     └──────────────┘
```
 
- **Frontend & backend** live in a single Next.js app; server logic runs in App Router **API routes** (`app/api/...`), so there is no separate Python service.
- **PostgreSQL** stores transactions; **Redis** caches query results and AI responses to cut latency and API cost.
- **Claude API** powers the Ask AI panel; LangChain structures the prompt/query flow.
- **ML** (anomaly detection, forecasting) runs over the stored transaction data to populate the dashboard.
---
 
## Tech Stack
 
| Layer            | Technology                                  |
| ---------------- | ------------------------------------------- |
| Framework        | Next.js (App Router), React, TypeScript     |
| Styling          | Tailwind CSS                                |
| Database         | PostgreSQL                                  |
| Cache            | Redis                                       |
| AI               | Anthropic Claude API, LangChain             |
| ML               | Z-score anomaly detection, linear regression |
| Deployment       | Vercel                                      |
 
---
 
## Getting Started
 
```bash
# 1. Clone
git clone https://github.com/gabriellerodriguescs/spendsense.git
cd spendsense
 
# 2. Install
npm install
 
# 3. Configure environment
cp .env.example .env.local
# set: DATABASE_URL, REDIS_URL, ANTHROPIC_API_KEY
 
# 4. Run
npm run dev
# open http://localhost:3000
```
 
---
 
## Roadmap
 
- Real bank-account linking via a financial data aggregator.
- Category auto-tagging with a trained classifier.
- Retrieval over historical transactions for richer Ask AI answers.
- Test coverage for the ML and API-route layers.
---
 
## Author
 
**Gabrielle Rodrigues** — Software Engineer (AI / Full-Stack)
[LinkedIn](https://www.linkedin.com/in/gabriellerodriguescs) · [GitHub](https://github.com/gabriellerodriguescs)
 
