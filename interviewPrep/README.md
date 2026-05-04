# 30-Day MERN/PERN Interview Prep Roadmap

An interactive React web app that displays a structured 30-day study plan for landing a Full Stack Developer role. The plan covers both the MERN (MongoDB, Express, React, Node.js) and PERN (PostgreSQL, Express, React, Node.js) stacks with curated resources and real interview questions for each topic.

## Live App

Run locally with:

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## What the App Does

The app renders a single-page, dark-themed study dashboard split into **four weekly phases**. Each phase can be selected via tab buttons at the top, and individual topics expand on click to reveal:

- **Subtopics** — a detailed list of concepts to study
- **Resources** — curated links to free learning materials
- **Interview question** — a sample question likely asked in technical interviews

A stats bar at the top tracks total study hours (~80h), stacks covered, weekly themes, and practice platforms.

## Study Plan Overview

| Phase | Days | Theme |
|-------|------|-------|
| Week 1 | 1–7 | JavaScript ES6+ & React Core Concepts |
| Week 2 | 8–14 | Node.js Internals & Express/REST API Design |
| Week 3 | 15–21 | MongoDB (MERN) & PostgreSQL (PERN) |
| Week 4 | 22–30 | Browser Storage, Performance, DSA & Mock Interviews |

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev) | UI components and state (`useState`) |
| [Vite 8](https://vite.dev) | Dev server and build tool |
| [ESLint](https://eslint.org) | Code linting |

No external UI library is used — all styling is done with inline styles.

## Project Structure

```
interviewPrep/
├── src/
│   ├── main.jsx          # React entry point
│   ├── App.jsx           # Root component — renders <StudyPlan />
│   └── StudyPlan.jsx     # Main component: week data, tabs, topic cards
├── public/
│   └── favicon.svg
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview the production build
npm run lint      # Run ESLint
```

## Resources Covered in the Plan

- [MDN Web Docs](https://developer.mozilla.org) — JavaScript, HTTP, Web Storage
- [javascript.info](https://javascript.info) — In-depth JS tutorials
- [React Official Docs](https://react.dev)
- [Node.js Docs](https://nodejs.org/en/docs)
- [Express.js Docs](https://expressjs.com)
- [MongoDB University](https://university.mongodb.com) (free)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [LeetCode](https://leetcode.com), [NeetCode](https://neetcode.io/roadmap), [HackerRank](https://www.hackerrank.com)
- [Pramp](https://www.pramp.com) & [Interviewing.io](https://interviewing.io) — Free mock interviews
