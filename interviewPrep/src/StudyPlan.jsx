import { useState } from "react";

const weeks = [
  {
    number: 1,
    theme: "JavaScript & React Foundations",
    color: "#00C9A7",
    icon: "⚡",
    days: "Days 1–7",
    goal: "Master ES6+ fundamentals and React core concepts that appear in nearly every interview.",
    topics: [
      {
        title: "JavaScript ES6+ Deep Dive",
        hours: 8,
        subtopics: [
          "Arrow functions, destructuring, spread/rest operators",
          "Promises, async/await, event loop & call stack",
          "Closures, hoisting, 'this' keyword, prototypal inheritance",
          "Array methods: map, filter, reduce, find, some, every",
          "Modules (import/export), template literals, optional chaining",
        ],
        resources: [
          { label: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
          { label: "javascript.info", url: "https://javascript.info" },
          { label: "freeCodeCamp JS Algorithms", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
        ],
        interviewQ: "What is the difference between == and ===? Explain event bubbling vs. capturing.",
      },
      {
        title: "React Core Concepts",
        hours: 10,
        subtopics: [
          "Component lifecycle (functional + hooks)",
          "useState, useEffect, useRef, useMemo, useCallback",
          "Prop drilling — why it's a problem and how to solve it",
          "Context API — createContext, Provider, useContext",
          "Controlled vs. uncontrolled components",
        ],
        resources: [
          { label: "React Official Docs", url: "https://react.dev" },
          { label: "freeCodeCamp React Course", url: "https://www.freecodecamp.org/learn/front-end-development-libraries/" },
          { label: "Scrimba React Course (free)", url: "https://scrimba.com/learn/learnreact" },
        ],
        interviewQ: "Explain how Context API solves prop drilling. When would you choose Redux over Context API?",
      },
    ],
  },
  {
    number: 2,
    theme: "Node.js, Express & REST APIs",
    color: "#845EF7",
    icon: "🖥️",
    days: "Days 8–14",
    goal: "Build solid backend fundamentals — the core of both MERN and PERN stacks.",
    topics: [
      {
        title: "Node.js Internals",
        hours: 6,
        subtopics: [
          "Node.js event-driven, non-blocking I/O model",
          "CommonJS vs ES Modules",
          "Built-in modules: fs, path, http, crypto",
          "npm ecosystem — package.json, package-lock, scripts",
          "Environment variables with dotenv",
        ],
        resources: [
          { label: "Node.js Official Docs", url: "https://nodejs.org/en/docs" },
          { label: "The Odin Project — NodeJS", url: "https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs" },
        ],
        interviewQ: "How does Node.js handle multiple concurrent connections with a single thread?",
      },
      {
        title: "Express.js & RESTful API Design",
        hours: 10,
        subtopics: [
          "Middleware chain — how req/res flows through Express",
          "REST principles: statelessness, uniform interface, client-server",
          "HTTP methods: GET, POST, PUT, PATCH, DELETE — when to use each",
          "Status codes: 200, 201, 400, 401, 403, 404, 500",
          "Error handling middleware, input validation (Joi/express-validator)",
          "Authentication: JWT tokens, session vs. token-based auth",
          "CORS, rate limiting, helmet.js for security headers",
        ],
        resources: [
          { label: "Express.js Docs", url: "https://expressjs.com" },
          { label: "REST API Design Guide — restfulapi.net", url: "https://restfulapi.net" },
          { label: "MDN HTTP Overview", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" },
        ],
        interviewQ: "Why must REST APIs be stateless? What are the tradeoffs of JWT vs. sessions?",
      },
    ],
  },
  {
    number: 3,
    theme: "Databases — MongoDB & PostgreSQL",
    color: "#FF6B6B",
    icon: "🗄️",
    days: "Days 15–21",
    goal: "Master both NoSQL and SQL paradigms — the biggest differentiator between MERN and PERN.",
    topics: [
      {
        title: "MongoDB (MERN Stack)",
        hours: 8,
        subtopics: [
          "Document model vs. relational model — tradeoffs",
          "Schema design: embedding vs. referencing documents",
          "Mongoose: schemas, models, validation, middleware hooks",
          "CRUD operations + aggregation pipeline",
          "Indexes, performance optimization, explain()",
          "Transactions in MongoDB (replica sets)",
        ],
        resources: [
          { label: "MongoDB University (free)", url: "https://university.mongodb.com" },
          { label: "Mongoose Docs", url: "https://mongoosejs.com/docs" },
        ],
        interviewQ: "When would you embed a document vs. use a reference in MongoDB? What is the aggregation pipeline?",
      },
      {
        title: "PostgreSQL (PERN Stack)",
        hours: 10,
        subtopics: [
          "Relational model: tables, rows, columns, data types",
          "SQL: SELECT, JOIN (INNER, LEFT, RIGHT, FULL), GROUP BY, HAVING",
          "Primary keys, foreign keys, constraints, indexes",
          "Normalization (1NF, 2NF, 3NF) vs. denormalization",
          "Transactions: ACID properties, BEGIN/COMMIT/ROLLBACK",
          "Query optimization: EXPLAIN ANALYZE, indexing strategies",
          "Using pg (node-postgres) or Prisma ORM with Node",
        ],
        resources: [
          { label: "PostgreSQL Official Docs", url: "https://www.postgresql.org/docs/" },
          { label: "SQLZoo Practice", url: "https://sqlzoo.net" },
          { label: "Prisma Docs", url: "https://www.prisma.io/docs" },
        ],
        interviewQ: "Explain ACID properties. What is the difference between SQL and NoSQL — when would you pick each?",
      },
    ],
  },
  {
    number: 4,
    theme: "Storage, Performance, DSA & Mock Interviews",
    color: "#FFA94D",
    icon: "🚀",
    days: "Days 22–30",
    goal: "Tie everything together, sharpen performance knowledge, and simulate real interviews.",
    topics: [
      {
        title: "Browser Storage & Caching",
        hours: 4,
        subtopics: [
          "localStorage vs. sessionStorage — scope, persistence, size limits",
          "Cookies — HttpOnly, Secure, SameSite flags; session cookies",
          "IndexedDB for larger client-side storage",
          "HTTP caching: Cache-Control, ETags, stale-while-revalidate",
          "When to use each storage mechanism (security implications)",
        ],
        resources: [
          { label: "MDN Web Storage API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" },
          { label: "MDN Cookies", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies" },
        ],
        interviewQ: "What are the security risks of storing JWTs in localStorage vs. httpOnly cookies?",
      },
      {
        title: "Frontend Performance Optimization",
        hours: 4,
        subtopics: [
          "React performance: React.memo, useMemo, useCallback, lazy/Suspense",
          "Code splitting and dynamic imports",
          "Core Web Vitals: LCP, FID/INP, CLS",
          "Image optimization, lazy loading",
          "Bundle analysis with webpack-bundle-analyzer",
        ],
        resources: [
          { label: "web.dev Performance", url: "https://web.dev/performance/" },
          { label: "React Performance Docs", url: "https://react.dev/learn/render-and-commit" },
        ],
        interviewQ: "How would you optimize a React app that re-renders too frequently?",
      },
      {
        title: "Data Structures & Algorithms",
        hours: 8,
        subtopics: [
          "Arrays, strings, hash maps — most common in interviews",
          "Linked lists, stacks, queues",
          "Binary search, two-pointer, sliding window patterns",
          "Tree traversal (BFS/DFS)",
          "Big O time and space complexity analysis",
        ],
        resources: [
          { label: "LeetCode (Easy/Medium)", url: "https://leetcode.com" },
          { label: "HackerRank 30 Days of Code", url: "https://www.hackerrank.com/domains/tutorials/30-days-of-code" },
          { label: "NeetCode Roadmap", url: "https://neetcode.io/roadmap" },
        ],
        interviewQ: "Implement a debounce function. Given an array, find two numbers that sum to a target.",
      },
      {
        title: "Mock Interviews & Review",
        hours: 10,
        subtopics: [
          "System design: design a URL shortener or chat app (full stack)",
          "Behavioral questions: STAR method for experience stories",
          "Code review exercises — read and critique code snippets",
          "Full-stack mini project: CRUD app with auth (MERN or PERN)",
          "Review all weak areas flagged in weeks 1–3",
        ],
        resources: [
          { label: "Pramp (free mock interviews)", url: "https://www.pramp.com" },
          { label: "Interviewing.io", url: "https://interviewing.io" },
          { label: "GreatFrontEnd", url: "https://www.greatfrontend.com" },
        ],
        interviewQ: "Walk me through how you'd architect a full-stack app. Describe a challenging bug you solved.",
      },
    ],
  },
];

const totalHours = weeks.reduce(
  (sum, w) => sum + w.topics.reduce((s, t) => s + t.hours, 0),
  0
);

export default function StudyPlan() {
  const [activeWeek, setActiveWeek] = useState(0);
  const [expandedTopic, setExpandedTopic] = useState(null);

  const week = weeks[activeWeek];

  return (
    <div style={{
      fontFamily: "'Georgia', serif",
      background: "#0f0f14",
      minHeight: "100vh",
      color: "#e8e6e1",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0f0f14 0%, #1a1a2e 50%, #16213e 100%)",
        borderBottom: "1px solid #2a2a3e",
        padding: "40px 32px 32px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(0,201,167,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(132,94,247,0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: 4, color: "#00C9A7", textTransform: "uppercase", marginBottom: 12, fontFamily: "monospace" }}>
            Full Stack Interview Prep
          </div>
          <h1 style={{ margin: "0 0 8px", fontSize: 32, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
            30-Day MERN/PERN Roadmap
          </h1>
          <p style={{ margin: "0 0 28px", color: "#9090aa", fontSize: 15, maxWidth: 560 }}>
            A structured, week-by-week study plan to land your Full Stack Developer role. Covers both stacks simultaneously with curated resources and real interview questions.
          </p>
          {/* Stats row */}
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "Total Study Hours", value: `~${totalHours}h` },
              { label: "Stacks Covered", value: "MERN + PERN" },
              { label: "Weekly Themes", value: "4 phases" },
              { label: "Practice Platforms", value: "5+ sites" },
            ].map((s) => (
              <div key={s.label} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                padding: "10px 20px",
              }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "#6060aa", marginTop: 2, letterSpacing: 0.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 24px" }}>
        {/* Week tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {weeks.map((w, i) => (
            <button
              key={i}
              onClick={() => { setActiveWeek(i); setExpandedTopic(null); }}
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: `1.5px solid ${activeWeek === i ? w.color : "rgba(255,255,255,0.08)"}`,
                background: activeWeek === i ? `${w.color}18` : "rgba(255,255,255,0.03)",
                color: activeWeek === i ? w.color : "#7070a0",
                fontFamily: "monospace",
                fontSize: 13,
                cursor: "pointer",
                fontWeight: activeWeek === i ? 700 : 400,
                transition: "all 0.2s",
                letterSpacing: 0.5,
              }}
            >
              {w.icon} Week {w.number}
            </button>
          ))}
        </div>

        {/* Active week header */}
        <div style={{
          background: `linear-gradient(135deg, ${week.color}14 0%, transparent 60%)`,
          border: `1px solid ${week.color}30`,
          borderRadius: 12,
          padding: "24px 28px",
          marginBottom: 24,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, color: week.color, letterSpacing: 3, fontFamily: "monospace", marginBottom: 6 }}>
                {week.days.toUpperCase()}
              </div>
              <h2 style={{ margin: 0, fontSize: 22, color: "#fff" }}>
                Week {week.number}: {week.theme}
              </h2>
              <p style={{ margin: "8px 0 0", color: "#9090aa", fontSize: 14, maxWidth: 540 }}>
                {week.goal}
              </p>
            </div>
            <div style={{
              background: `${week.color}22`,
              border: `1px solid ${week.color}40`,
              borderRadius: 8,
              padding: "10px 16px",
              textAlign: "center",
              minWidth: 80,
            }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: week.color }}>
                {week.topics.reduce((s, t) => s + t.hours, 0)}h
              </div>
              <div style={{ fontSize: 10, color: "#6060aa", letterSpacing: 1 }}>THIS WEEK</div>
            </div>
          </div>
        </div>

        {/* Topics */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {week.topics.map((topic, ti) => {
            const key = `${activeWeek}-${ti}`;
            const isOpen = expandedTopic === key;
            return (
              <div key={key} style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${isOpen ? week.color + "50" : "rgba(255,255,255,0.07)"}`,
                borderRadius: 12,
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}>
                <button
                  onClick={() => setExpandedTopic(isOpen ? null : key)}
                  style={{
                    width: "100%", textAlign: "left",
                    padding: "18px 24px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                      background: `${week.color}22`,
                      color: week.color,
                      fontFamily: "monospace",
                      fontSize: 12,
                      padding: "4px 10px",
                      borderRadius: 6,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}>{topic.hours}h</div>
                    <span style={{ fontSize: 16, color: "#e8e6e1", fontWeight: 600 }}>{topic.title}</span>
                  </div>
                  <span style={{ color: week.color, fontSize: 18, lineHeight: 1 }}>{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <div style={{ padding: "0 24px 24px", borderTop: `1px solid rgba(255,255,255,0.06)` }}>
                    <div style={{ paddingTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                      {/* Subtopics */}
                      <div>
                        <div style={{ fontSize: 10, letterSpacing: 2, color: "#6060aa", marginBottom: 12, fontFamily: "monospace" }}>TOPICS TO COVER</div>
                        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                          {topic.subtopics.map((s, si) => (
                            <li key={si} style={{ display: "flex", gap: 10, fontSize: 13, color: "#c0bfba", lineHeight: 1.5 }}>
                              <span style={{ color: week.color, marginTop: 2 }}>▸</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Resources + Interview Q */}
                      <div>
                        <div style={{ fontSize: 10, letterSpacing: 2, color: "#6060aa", marginBottom: 12, fontFamily: "monospace" }}>RESOURCES</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                          {topic.resources.map((r, ri) => (
                            <a key={ri} href={r.url} target="_blank" rel="noreferrer" style={{
                              color: week.color,
                              fontSize: 13,
                              textDecoration: "none",
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              padding: "6px 10px",
                              borderRadius: 6,
                              background: `${week.color}10`,
                              border: `1px solid ${week.color}20`,
                              transition: "background 0.15s",
                            }}>
                              <span>↗</span> {r.label}
                            </a>
                          ))}
                        </div>
                        <div style={{ fontSize: 10, letterSpacing: 2, color: "#6060aa", marginBottom: 10, fontFamily: "monospace" }}>INTERVIEW QUESTION</div>
                        <div style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderLeft: `3px solid ${week.color}`,
                          borderRadius: "0 8px 8px 0",
                          padding: "12px 14px",
                          fontSize: 13,
                          color: "#d0cfca",
                          fontStyle: "italic",
                          lineHeight: 1.6,
                        }}>
                          {topic.interviewQ}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tips footer */}
        <div style={{
          marginTop: 32,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12,
          padding: "20px 24px",
        }}>
          <div style={{ fontSize: 10, letterSpacing: 2, color: "#6060aa", marginBottom: 14, fontFamily: "monospace" }}>DAILY STUDY TIPS</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              "🕐 Aim for 3–4 hrs/day on weekdays, 5–6 hrs on weekends",
              "📝 Write code by hand at least once per week — common in whiteboard rounds",
              "🔁 Review notes from 2 days ago each morning (spaced repetition)",
              "🏗️ Build one mini-project per week to reinforce concepts hands-on",
              "🗣️ Explain concepts aloud — if you can't teach it, you don't know it",
              "📋 Track interview questions you can't answer fully — revisit weekly",
            ].map((tip, i) => (
              <div key={i} style={{ fontSize: 13, color: "#9090aa", lineHeight: 1.5 }}>{tip}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}