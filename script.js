/* Tripathi Academy — Learning Management System */

const STORAGE_KEY = "tripathi_academy_lms";
const LEGACY_STORAGE_KEYS = ["dwivedi_classes_lms", "learnforge_lms"];

const SEED = {
  user: {
    name: "Alex Kim",
    email: "alex.kim@tripathiacademy.edu",
    role: "student",
  },
  enrollments: ["web-fundamentals", "data-viz"],
  courses: [
    {
      id: "web-fundamentals",
      title: "Web Development Fundamentals",
      instructor: "Dr. Maya Chen",
      category: "Development",
      level: "Beginner",
      duration: "24h",
      lessonsCount: 8,
      hue: 168,
      description:
        "Master HTML, CSS, and JavaScript from scratch. Build responsive layouts, understand the DOM, and ship your first multi-page projects.",
      lessons: [
        { id: "l1", title: "Introduction to the Web", type: "video", duration: "12 min", content: "<p>Learn how browsers, servers, and HTTP work together. Understand the request-response cycle and what happens when you visit a URL.</p><p>We'll set up your dev environment and create your first HTML file.</p>" },
        { id: "l2", title: "HTML Structure & Semantics", type: "reading", duration: "18 min", content: "<p>Semantic HTML improves accessibility and SEO. Use headings, landmarks, lists, and forms correctly.</p><p>Practice building a blog post layout with proper document outline.</p>" },
        { id: "l3", title: "CSS Layout & Flexbox", type: "video", duration: "22 min", content: "<p>Modern layouts use Flexbox and Grid. Learn alignment, gaps, and responsive patterns without frameworks.</p>" },
        { id: "l4", title: "JavaScript Basics", type: "video", duration: "28 min", content: "<p>Variables, functions, arrays, and objects. Control flow and debugging in the browser console.</p>" },
        { id: "l5", title: "DOM Manipulation", type: "reading", duration: "20 min", content: "<p>Select elements, listen for events, and update the page dynamically. Build an interactive todo list.</p>" },
        { id: "l6", title: "Responsive Design", type: "video", duration: "16 min", content: "<p>Media queries, mobile-first CSS, and fluid typography. Test across device sizes.</p>" },
        { id: "l7", title: "Mini Project: Portfolio", type: "video", duration: "35 min", content: "<p>Combine everything into a personal portfolio site with navigation, projects section, and contact form.</p>" },
        { id: "l8", title: "Module Quiz", type: "quiz", duration: "15 min", content: "" },
      ],
      quiz: {
        title: "Web Fundamentals Quiz",
        questions: [
          { q: "What does HTML primarily describe?", options: ["Page structure and content", "Server routing", "Database schemas", "Network packets"], answer: 0 },
          { q: "Which CSS property creates a flex container?", options: ["display: grid", "display: flex", "position: flex", "layout: flex"], answer: 1 },
          { q: "document.querySelector() returns?", options: ["First matching element", "All elements", "Only IDs", "Window object"], answer: 0 },
        ],
      },
      assignment: { title: "Build a landing page", due: "2026-06-01", type: "Project" },
    },
    {
      id: "data-viz",
      title: "Data Visualization with D3",
      instructor: "Prof. James Okonkwo",
      category: "Data Science",
      level: "Intermediate",
      duration: "18h",
      lessonsCount: 6,
      hue: 245,
      description:
        "Transform datasets into interactive charts. Scales, axes, transitions, and storytelling with data for dashboards and reports.",
      lessons: [
        { id: "l1", title: "Data Types & Loading", type: "video", duration: "14 min", content: "<p>CSV, JSON, and API data. Parsing, cleaning, and preparing arrays for visualization.</p>" },
        { id: "l2", title: "Scales & Axes", type: "reading", duration: "20 min", content: "<p>Linear, time, and ordinal scales. Mapping data domains to pixel ranges.</p>" },
        { id: "l3", title: "Bar & Line Charts", type: "video", duration: "25 min", content: "<p>Build reusable chart components with SVG and D3 selections.</p>" },
        { id: "l4", title: "Interactions & Tooltips", type: "video", duration: "18 min", content: "<p>Hover states, brushing, and linked views for exploratory analysis.</p>" },
        { id: "l5", title: "Maps & Geo Data", type: "reading", duration: "22 min", content: "<p>Projections, paths, and choropleth maps with TopoJSON.</p>" },
        { id: "l6", title: "Final Dashboard", type: "quiz", duration: "20 min", content: "" },
      ],
      quiz: {
        title: "D3 Concepts Quiz",
        questions: [
          { q: "A linear scale maps?", options: ["Continuous domain to range", "Colors only", "Text labels", "Geo coordinates"], answer: 0 },
          { q: "d3.select() binds to?", options: ["DOM elements", "SQL tables", "CSS files", "HTTP headers"], answer: 0 },
        ],
      },
      assignment: { title: "Interactive dashboard", due: "2026-06-15", type: "Project" },
    },
    {
      id: "ux-research",
      title: "UX Research Methods",
      instructor: "Sarah Lindqvist",
      category: "Design",
      level: "Beginner",
      duration: "12h",
      lessonsCount: 5,
      hue: 320,
      description:
        "Plan studies, run interviews, synthesize insights, and present findings that drive product decisions.",
      lessons: [
        { id: "l1", title: "Research Planning", type: "video", duration: "15 min", content: "<p>Define goals, hypotheses, and recruitment criteria before you talk to users.</p>" },
        { id: "l2", title: "Interview Techniques", type: "video", duration: "20 min", content: "<p>Open-ended questions, probing, and avoiding leading questions.</p>" },
        { id: "l3", title: "Affinity Mapping", type: "reading", duration: "12 min", content: "<p>Cluster observations into themes and prioritize opportunities.</p>" },
        { id: "l4", title: "Usability Testing", type: "video", duration: "18 min", content: "<p>Task-based tests, think-aloud protocol, and severity ratings.</p>" },
        { id: "l5", title: "Research Report", type: "reading", duration: "10 min", content: "<p>Structure executive summaries, evidence, and recommendations.</p>" },
      ],
      assignment: { title: "Interview synthesis", due: "2026-05-28", type: "Report" },
    },
    {
      id: "python-ml",
      title: "Python for Machine Learning",
      instructor: "Dr. Arjun Patel",
      category: "Data Science",
      level: "Advanced",
      duration: "32h",
      lessonsCount: 10,
      hue: 35,
      description:
        "NumPy, pandas, scikit-learn, and model evaluation. From exploratory analysis to trained classifiers and regression models.",
      lessons: [
        { id: "l1", title: "Python & NumPy Review", type: "video", duration: "20 min", content: "<p>Arrays, broadcasting, and vectorized operations for fast numerical work.</p>" },
        { id: "l2", title: "pandas DataFrames", type: "reading", duration: "25 min", content: "<p>Loading, filtering, grouping, and merging tabular data.</p>" },
        { id: "l3", title: "Train/Test Splits", type: "video", duration: "15 min", content: "<p>Holdout validation, cross-validation, and avoiding data leakage.</p>" },
        { id: "l4", title: "Classification Models", type: "video", duration: "30 min", content: "<p>Logistic regression, decision trees, and random forests with sklearn.</p>" },
        { id: "l5", title: "Metrics & Confusion Matrix", type: "reading", duration: "18 min", content: "<p>Precision, recall, F1, and when accuracy misleads.</p>" },
      ],
      quiz: {
        title: "ML Foundations Quiz",
        questions: [
          { q: "Overfitting means the model?", options: ["Memorizes training noise", "Always underperforms", "Uses too little data", "Has no parameters"], answer: 0 },
          { q: "Cross-validation helps?", options: ["Estimate generalization", "Increase training size only", "Remove features", "Skip preprocessing"], answer: 0 },
        ],
      },
      assignment: { title: "Classifier benchmark", due: "2026-07-01", type: "Lab" },
    },
    {
      id: "project-mgmt",
      title: "Agile Project Management",
      instructor: "Elena Vasquez",
      category: "Business",
      level: "Intermediate",
      duration: "10h",
      lessonsCount: 4,
      hue: 200,
      description:
        "Scrum ceremonies, backlog refinement, velocity tracking, and leading cross-functional teams in iterative delivery.",
      lessons: [
        { id: "l1", title: "Agile Manifesto Values", type: "reading", duration: "10 min", content: "<p>Individuals over processes, working software, customer collaboration, and responding to change.</p>" },
        { id: "l2", title: "Scrum Roles & Events", type: "video", duration: "22 min", content: "<p>PO, Scrum Master, dev team. Sprints, standups, reviews, retrospectives.</p>" },
        { id: "l3", title: "Estimation & Planning", type: "video", duration: "18 min", content: "<p>Story points, planning poker, and capacity-based sprint planning.</p>" },
        { id: "l4", title: "Metrics That Matter", type: "reading", duration: "12 min", content: "<p>Velocity, cycle time, burndown — and what not to optimize blindly.</p>" },
      ],
      assignment: { title: "Sprint plan draft", due: "2026-05-25", type: "Workshop" },
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Essentials",
      instructor: "Marcus Webb",
      category: "IT & Security",
      level: "Beginner",
      duration: "16h",
      lessonsCount: 7,
      hue: 0,
      description:
        "Threat models, encryption basics, secure authentication, and incident response for developers and IT staff.",
      lessons: [
        { id: "l1", title: "Threat Landscape", type: "video", duration: "16 min", content: "<p>Malware, phishing, social engineering, and supply chain risks.</p>" },
        { id: "l2", title: "Cryptography 101", type: "reading", duration: "20 min", content: "<p>Symmetric vs asymmetric encryption, hashing, and TLS handshakes.</p>" },
        { id: "l3", title: "Auth & OAuth", type: "video", duration: "24 min", content: "<p>Password storage, MFA, sessions, and OAuth 2.0 flows.</p>" },
        { id: "l4", title: "OWASP Top 10", type: "reading", duration: "25 min", content: "<p>Injection, XSS, broken access control — and mitigations.</p>" },
      ],
      assignment: { title: "Security audit checklist", due: "2026-06-20", type: "Assessment" },
    },
  ],
  completedLessons: {},
  quizScores: {},
  completedAssignments: [],
};

let state = loadState();
let activeCategory = "";
let myLearningTab = "active";
let calendarMonth = new Date();
let currentCourseId = null;
let currentLessonId = null;

function loadState() {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      for (const legacyKey of LEGACY_STORAGE_KEYS) {
        raw = localStorage.getItem(legacyKey);
        if (raw) {
          localStorage.setItem(STORAGE_KEY, raw);
          break;
        }
      }
    }
    if (raw) {
      const parsed = JSON.parse(raw);
      return mergeSeed(parsed);
    }
  } catch (_) {}
  return structuredClone(SEED);
}

function mergeSeed(saved) {
  const base = structuredClone(SEED);
  base.user = { ...base.user, ...saved.user };
  base.enrollments = saved.enrollments ?? base.enrollments;
  base.completedLessons = saved.completedLessons ?? {};
  base.quizScores = saved.quizScores ?? {};
  base.completedAssignments = saved.completedAssignments ?? [];
  base.courses = base.courses.map((c) => {
    const savedCourse = saved.courses?.find((x) => x.id === c.id);
    if (!savedCourse?.lessons) return c;
    return {
      ...c,
      lessons: c.lessons.map((l) => {
        const sl = savedCourse.lessons.find((x) => x.id === l.id);
        return sl ? { ...l, completed: sl.completed } : l;
      }),
    };
  });
  return base;
}

function saveState() {
  const toSave = {
    user: state.user,
    enrollments: state.enrollments,
    completedLessons: state.completedLessons,
    quizScores: state.quizScores,
    completedAssignments: state.completedAssignments,
    courses: state.courses.map((c) => ({
      id: c.id,
      lessons: c.lessons.map((l) => ({ id: l.id, completed: l.completed || false })),
    })),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
}

function getCourse(id) {
  return state.courses.find((c) => c.id === id);
}

function isEnrolled(id) {
  return state.enrollments.includes(id);
}

function courseProgress(course) {
  const total = course.lessons.length;
  if (!total) return 0;
  const done = course.lessons.filter((l) => l.completed).length;
  return Math.round((done / total) * 100);
}

function markLessonComplete(courseId, lessonId) {
  const course = getCourse(courseId);
  const lesson = course?.lessons.find((l) => l.id === lessonId);
  if (lesson) {
    lesson.completed = true;
    state.completedLessons[`${courseId}:${lessonId}`] = true;
    saveState();
    showToast("Lesson marked complete!");
  }
}

function enroll(courseId) {
  if (!isEnrolled(courseId)) {
    state.enrollments.push(courseId);
    saveState();
    showToast("Enrolled successfully!");
  }
}

function unenroll(courseId) {
  state.enrollments = state.enrollments.filter((id) => id !== courseId);
  saveState();
  showToast("Unenrolled from course.");
}

function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove("show"), 2800);
}

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function thumbStyle(hue) {
  return `background: linear-gradient(135deg, hsl(${hue} 55% 42%), hsl(${hue + 40} 60% 28%));`;
}

function renderCourseCard(course, opts = {}) {
  const enrolled = isEnrolled(course.id);
  const progress = courseProgress(course);
  const pct = enrolled ? `<span class="course-progress-pct">${progress}%</span>` : "";
  const btn = enrolled
    ? `<button class="btn btn-ghost btn-sm" data-action="open-course" data-id="${course.id}">Continue</button>`
    : `<button class="btn btn-primary btn-sm" data-action="enroll" data-id="${course.id}">Enroll</button>`;

  return `
    <article class="course-card" data-course-id="${course.id}" tabindex="0">
      <div class="course-thumb" style="${thumbStyle(course.hue)}">
        <span class="level-badge">${course.level}</span>
      </div>
      <div class="course-body">
        <span class="course-category">${course.category}</span>
        <h3>${course.title}</h3>
        <p class="course-meta">
          <span>${course.instructor}</span>
          <span>${course.lessons.length} lessons · ${course.duration}</span>
        </p>
        <div class="course-footer">
          ${pct}
          ${btn}
        </div>
      </div>
    </article>
  `;
}

function renderDashboard() {
  const enrolled = state.enrollments.map(getCourse).filter(Boolean);
  const inProgress = enrolled.filter((c) => courseProgress(c) < 100);
  const completed = enrolled.filter((c) => courseProgress(c) >= 100);
  const totalLessons = enrolled.reduce((s, c) => s + c.lessons.filter((l) => l.completed).length, 0);

  document.getElementById("greeting").textContent = `${greeting()} , ${state.user.name.split(" ")[0]}`;
  document.getElementById("dashboardDate").textContent = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  document.getElementById("statsGrid").innerHTML = `
    <div class="stat-card">
      <div class="stat-value">${enrolled.length}</div>
      <div class="stat-label">Enrolled courses</div>
    </div>
    <div class="stat-card accent-2">
      <div class="stat-value">${inProgress.length}</div>
      <div class="stat-label">In progress</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${completed.length}</div>
      <div class="stat-label">Completed</div>
    </div>
    <div class="stat-card accent-2">
      <div class="stat-value">${totalLessons}</div>
      <div class="stat-label">Lessons finished</div>
    </div>
  `;

  const continueList = document.getElementById("continueList");
  if (!inProgress.length) {
    continueList.innerHTML = `<p class="empty-state" style="padding:1rem 0">Enroll in a course to start learning.</p>`;
  } else {
    continueList.innerHTML = inProgress
      .slice(0, 4)
      .map((c) => {
        const p = courseProgress(c);
        const next = c.lessons.find((l) => !l.completed);
        return `
          <div class="course-progress-item" data-action="open-course" data-id="${c.id}">
            <div class="course-thumb-sm" style="${thumbStyle(c.hue)}"></div>
            <div class="course-progress-info">
              <h3>${c.title}</h3>
              <p>${next ? `Next: ${next.title}` : "Almost done!"}</p>
              <div class="progress-bar-wrap"><div class="progress-bar" style="width:${p}%"></div></div>
            </div>
            <span class="course-progress-pct">${p}%</span>
          </div>
        `;
      })
      .join("");
  }

  const deadlines = state.courses
    .filter((c) => isEnrolled(c.id) && c.assignment)
    .map((c) => ({ ...c.assignment, course: c.title, courseId: c.id }))
    .sort((a, b) => new Date(a.due) - new Date(b.due))
    .slice(0, 4);

  document.getElementById("deadlineList").innerHTML = deadlines.length
    ? deadlines
        .map((d) => {
          const dt = new Date(d.due);
          const urgent = (dt - new Date()) / 86400000 < 7;
          return `
            <li class="deadline-item">
              <div class="deadline-date">
                <span class="day">${dt.getDate()}</span>
                <span class="mon">${dt.toLocaleString("en", { month: "short" })}</span>
              </div>
              <div>
                <h3>${d.title}</h3>
                <p>${d.course}</p>
              </div>
              <span class="deadline-tag ${urgent ? "urgent" : ""}">${d.type}</span>
            </li>
          `;
        })
        .join("")
    : `<li class="empty-state" style="padding:1rem 0">No upcoming deadlines.</li>`;

  const notEnrolled = state.courses.filter((c) => !isEnrolled(c.id)).slice(0, 4);
  document.getElementById("recommendedCourses").innerHTML =
    notEnrolled.map((c) => renderCourseCard(c)).join("") ||
    state.courses.slice(0, 3).map((c) => renderCourseCard(c)).join("");
}

function renderCatalog(filter = "") {
  const level = document.getElementById("levelFilter")?.value || "";
  let list = state.courses;

  if (activeCategory) list = list.filter((c) => c.category === activeCategory);
  if (level) list = list.filter((c) => c.level === level);
  if (filter) {
    const q = filter.toLowerCase();
    list = list.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.instructor.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    );
  }

  const el = document.getElementById("catalogCourses");
  const empty = document.getElementById("catalogEmpty");
  if (!list.length) {
    el.innerHTML = "";
    empty.classList.remove("hidden");
  } else {
    empty.classList.add("hidden");
    el.innerHTML = list.map((c) => renderCourseCard(c)).join("");
  }
}

function renderCategoryFilters() {
  const cats = [...new Set(state.courses.map((c) => c.category))];
  document.getElementById("categoryFilters").innerHTML = `
    <button class="chip ${!activeCategory ? "active" : ""}" data-category="">All</button>
    ${cats.map((c) => `<button class="chip ${activeCategory === c ? "active" : ""}" data-category="${c}">${c}</button>`).join("")}
  `;
}

function renderMyLearning() {
  const enrolled = state.enrollments.map(getCourse).filter(Boolean);
  const list =
    myLearningTab === "completed"
      ? enrolled.filter((c) => courseProgress(c) >= 100)
      : enrolled.filter((c) => courseProgress(c) < 100);

  const el = document.getElementById("myCoursesList");
  const empty = document.getElementById("myCoursesEmpty");

  if (!list.length) {
    el.innerHTML = "";
    empty.classList.remove("hidden");
    empty.textContent =
      myLearningTab === "completed"
        ? "No completed courses yet. Keep going!"
        : "You haven't enrolled in any courses yet.";
  } else {
    empty.classList.add("hidden");
    el.innerHTML = list.map((c) => renderCourseCard(c)).join("");
  }
}

function renderCourseDetail(courseId) {
  const course = getCourse(courseId);
  if (!course) return;

  currentCourseId = courseId;
  const enrolled = isEnrolled(courseId);
  const progress = courseProgress(course);

  document.getElementById("courseDetail").innerHTML = `
    <div class="course-hero">
      <div class="course-hero-main">
        <div class="course-hero-banner" style="${thumbStyle(course.hue)}"></div>
        <div class="course-hero-content">
          <span class="course-category">${course.category}</span>
          <h1>${course.title}</h1>
          <p class="desc">${course.description}</p>
          <div class="course-hero-meta">
            <span>👤 ${course.instructor}</span>
            <span>📊 ${course.level}</span>
            <span>⏱ ${course.duration}</span>
            <span>📚 ${course.lessons.length} lessons</span>
          </div>
        </div>
      </div>
      <div class="course-sidebar-card">
        ${enrolled ? `<p style="font-size:0.8rem;color:var(--text-muted);text-align:center">Your progress</p><div class="big-progress">${progress}%</div>` : ""}
        ${
          enrolled
            ? `<button class="btn btn-primary btn-full" data-action="start-next" data-id="${courseId}">Continue course</button>
               <button class="btn btn-ghost btn-full" style="margin-top:0.5rem" data-action="unenroll" data-id="${courseId}">Unenroll</button>`
            : `<button class="btn btn-primary btn-full" data-action="enroll" data-id="${courseId}">Enroll for free</button>`
        }
      </div>
    </div>
    <div class="panel">
      <div class="panel-head"><h2>Curriculum</h2></div>
      <ul class="lesson-list">
        ${course.lessons
          .map(
            (l, i) => `
          <li class="lesson-list-item ${l.completed ? "completed" : ""}" data-action="open-lesson" data-course="${courseId}" data-lesson="${l.id}">
            <span class="lesson-check">${l.completed ? "✓" : i + 1}</span>
            <div class="lesson-info">
              <h4>${l.title}</h4>
              <span>${l.type === "quiz" ? "Quiz" : l.type} · ${l.duration}</span>
            </div>
          </li>
        `
          )
          .join("")}
      </ul>
    </div>
  `;
}

function renderLesson(courseId, lessonId) {
  const course = getCourse(courseId);
  const lesson = course?.lessons.find((l) => l.id === lessonId);
  if (!course || !lesson) return;

  currentCourseId = courseId;
  currentLessonId = lessonId;

  const idx = course.lessons.findIndex((l) => l.id === lessonId);
  const prev = course.lessons[idx - 1];
  const next = course.lessons[idx + 1];

  if (lesson.type === "quiz" && course.quiz) {
    openQuiz(course);
    navigate("course");
    renderCourseDetail(courseId);
    return;
  }

  document.getElementById("lessonView").innerHTML = `
    <a href="#course/${courseId}" class="back-link" data-nav="course">← ${course.title}</a>
    <div class="lesson-layout">
      <div>
        <div class="lesson-player" style="--hue: ${course.hue}">
          <span class="play-btn">${lesson.type === "video" ? "▶" : "📄"}</span>
        </div>
        <article class="lesson-article">
          <span class="course-category">${lesson.type} · ${lesson.duration}</span>
          <h1>${lesson.title}</h1>
          <div class="lesson-content">${lesson.content}</div>
          <div class="lesson-actions">
            ${
              !lesson.completed
                ? `<button class="btn btn-primary" data-action="complete-lesson" data-course="${courseId}" data-lesson="${lessonId}">Mark complete</button>`
                : `<span class="status-done">✓ Completed</span>`
            }
            ${prev ? `<button class="btn btn-ghost" data-action="open-lesson" data-course="${courseId}" data-lesson="${prev.id}">← Previous</button>` : ""}
            ${next ? `<button class="btn btn-outline" data-action="open-lesson" data-course="${courseId}" data-lesson="${next.id}">Next →</button>` : ""}
          </div>
        </article>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Lessons</h2></div>
        <ul class="lesson-list">
          ${course.lessons
            .map(
              (l, i) => `
            <li class="lesson-list-item ${l.id === lessonId ? "active" : ""} ${l.completed ? "completed" : ""}"
                data-action="open-lesson" data-course="${courseId}" data-lesson="${l.id}">
              <span class="lesson-check">${l.completed ? "✓" : i + 1}</span>
              <div class="lesson-info"><h4>${l.title}</h4><span>${l.duration}</span></div>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    </div>
  `;
}

function renderAssignments() {
  const items = state.courses
    .filter((c) => isEnrolled(c.id) && c.assignment)
    .map((c) => ({
      course: c,
      assignment: c.assignment,
      key: `${c.id}-assignment`,
      done: state.completedAssignments.includes(`${c.id}-assignment`),
    }));

  document.getElementById("assignmentsList").innerHTML = items.length
    ? items
        .map(({ course, assignment, key, done }) => {
          const dt = new Date(assignment.due).toLocaleDateString("en-US", { month: "short", day: "numeric" });
          return `
            <div class="assignment-card">
              <div class="assignment-icon">📝</div>
              <div>
                <h3>${assignment.title}</h3>
                <p>${course.title} · Due ${dt} · ${assignment.type}</p>
              </div>
              ${
                done
                  ? `<span class="status-done">Submitted</span>`
                  : `<button class="btn btn-primary btn-sm" data-action="submit-assignment" data-key="${key}">Mark submitted</button>`
              }
              ${course.quiz ? `<button class="btn btn-outline btn-sm" data-action="open-quiz" data-id="${course.id}">Take quiz</button>` : ""}
            </div>
          `;
        })
        .join("")
    : `<p class="empty-state">Enroll in courses to see assignments here.</p>`;
}

function renderCalendar() {
  const y = calendarMonth.getFullYear();
  const m = calendarMonth.getMonth();
  document.getElementById("calMonthLabel").textContent = calendarMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const first = new Date(y, m, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const today = new Date();

  const events = [];
  state.courses.forEach((c) => {
    if (c.assignment && isEnrolled(c.id)) {
      events.push({ date: new Date(c.assignment.due), label: `${c.assignment.title} (${c.title})` });
    }
  });

  const eventDays = new Set(events.map((e) => e.date.toDateString()));

  let html = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => `<div class="cal-dow">${d}</div>`).join("");

  for (let i = 0; i < startDay; i++) html += `<div class="cal-day other"></div>`;

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(y, m, d);
    const isToday = date.toDateString() === today.toDateString();
    const hasEvent = eventDays.has(date.toDateString());
    html += `<div class="cal-day ${isToday ? "today" : ""} ${hasEvent ? "has-event" : ""}">${d}</div>`;
  }

  document.getElementById("calendarGrid").innerHTML = html;

  const upcoming = events
    .filter((e) => e.date >= new Date(today.toDateString()))
    .sort((a, b) => a.date - b.date)
    .slice(0, 6);

  document.getElementById("calendarEvents").innerHTML = upcoming.length
    ? upcoming
        .map(
          (e) =>
            `<li><span class="dot">●</span> ${e.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })} — ${e.label}</li>`
        )
        .join("")
    : "<li>No upcoming events on your calendar.</li>";
}

function renderProfile() {
  document.getElementById("profileName").value = state.user.name;
  document.getElementById("profileEmail").value = state.user.email;
  document.getElementById("profileRole").value = state.user.role;

  const enrolled = state.enrollments.length;
  const certs = state.enrollments.filter((id) => courseProgress(getCourse(id)) >= 100).length;
  const quizzes = Object.keys(state.quizScores).length;

  document.getElementById("achievementStats").innerHTML = `
    <div class="achievement-stat"><strong>${enrolled}</strong><span>Courses enrolled</span></div>
    <div class="achievement-stat"><strong>${certs}</strong><span>Certificates</span></div>
    <div class="achievement-stat"><strong>${quizzes}</strong><span>Quizzes passed</span></div>
    <div class="achievement-stat"><strong>${state.completedAssignments.length}</strong><span>Assignments done</span></div>
  `;
}

function updateUserUI() {
  document.getElementById("userName").textContent = state.user.name;
  document.getElementById("userRole").textContent = state.user.role;
  document.getElementById("userAvatar").textContent = initials(state.user.name);
}

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function openQuiz(course) {
  const modal = document.getElementById("quizModal");
  const submitBtn = modal.querySelector('button[type="submit"]');
  submitBtn.textContent = "Submit answers";
  submitBtn.onclick = null;
  const quiz = course.quiz;
  document.getElementById("quizTitle").textContent = quiz.title;
  document.getElementById("quizBody").innerHTML = quiz.questions
    .map(
      (q, qi) => `
    <div class="quiz-question" data-q="${qi}">
      <p>${qi + 1}. ${q.q}</p>
      ${q.options.map((o, oi) => `<label class="quiz-option"><input type="radio" name="q${qi}" value="${oi}" required /> ${o}</label>`).join("")}
    </div>
  `
    )
    .join("");
  modal.dataset.courseId = course.id;
  modal.showModal();
}

function navigate(view, params = {}) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("view-active"));
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));

  let viewId = `view-${view}`;
  if (view === "course" && params.courseId) {
    viewId = "view-course";
    renderCourseDetail(params.courseId);
  } else if (view === "lesson" && params.courseId && params.lessonId) {
    viewId = "view-lesson";
    renderLesson(params.courseId, params.lessonId);
  }

  const viewEl = document.getElementById(viewId);
  if (viewEl) viewEl.classList.add("view-active");

  const navKey = view === "course" || view === "lesson" ? "my-learning" : view;
  const navEl = document.querySelector(`[data-nav="${navKey}"]`);
  if (navEl && navEl.classList.contains("nav-item")) navEl.classList.add("active");

  if (view === "dashboard") renderDashboard();
  if (view === "courses") {
    renderCategoryFilters();
    renderCatalog(document.getElementById("globalSearch")?.value || "");
  }
  if (view === "my-learning") renderMyLearning();
  if (view === "assignments") renderAssignments();
  if (view === "calendar") renderCalendar();
  if (view === "profile") renderProfile();

  closeSidebar();
}

function parseHash() {
  const hash = location.hash.slice(1) || "dashboard";
  const parts = hash.split("/");
  const view = parts[0];

  if (view === "course" && parts[1]) {
    navigate("course", { courseId: parts[1] });
  } else if (view === "lesson" && parts[1] && parts[2]) {
    if (!isEnrolled(parts[1])) {
      enroll(parts[1]);
    }
    navigate("lesson", { courseId: parts[1], lessonId: parts[2] });
  } else {
    navigate(view);
  }
}

function closeSidebar() {
  document.getElementById("sidebar")?.classList.remove("open");
  document.getElementById("overlay")?.classList.remove("show");
  document.body.style.overflow = "";
}

/* Event delegation */
document.getElementById("content").addEventListener("click", (e) => {
  const t = e.target.closest("[data-action]");
  if (!t) return;

  const action = t.dataset.action;
  const id = t.dataset.id;
  const courseId = t.dataset.course || id;
  const lessonId = t.dataset.lesson;

  switch (action) {
    case "enroll":
      enroll(id);
      renderCatalog();
      renderDashboard();
      if (location.hash.includes("course")) renderCourseDetail(id);
      break;
    case "unenroll":
      unenroll(id);
      location.hash = "my-learning";
      break;
    case "open-course":
      location.hash = `course/${courseId}`;
      break;
    case "open-lesson":
      location.hash = `lesson/${courseId}/${lessonId}`;
      break;
    case "complete-lesson":
      markLessonComplete(courseId, lessonId);
      renderLesson(courseId, lessonId);
      break;
    case "start-next": {
      const c = getCourse(id);
      const next = c?.lessons.find((l) => !l.completed);
      if (next) location.hash = `lesson/${id}/${next.id}`;
      else showToast("All lessons complete!");
      break;
    }
    case "submit-assignment":
      if (!state.completedAssignments.includes(t.dataset.key)) {
        state.completedAssignments.push(t.dataset.key);
        saveState();
        showToast("Assignment marked as submitted!");
        renderAssignments();
      }
      break;
    case "open-quiz":
      openQuiz(getCourse(id));
      break;
  }
});

document.getElementById("content").addEventListener("click", (e) => {
  const card = e.target.closest(".course-card");
  if (card && !e.target.closest("button")) {
    const id = card.dataset.courseId;
    location.hash = isEnrolled(id) ? `course/${id}` : `course/${id}`;
  }
});

document.querySelectorAll("[data-nav]").forEach((el) => {
  el.addEventListener("click", (e) => {
    const nav = el.dataset.nav;
    if (nav && el.getAttribute("href")?.startsWith("#")) {
      e.preventDefault();
      location.hash = nav;
    }
  });
});

window.addEventListener("hashchange", parseHash);

document.getElementById("globalSearch")?.addEventListener("input", (e) => {
  if (location.hash.includes("courses") || location.hash === "#courses" || !location.hash.slice(1)) {
    if (!location.hash.slice(1) || location.hash === "#dashboard") {
      location.hash = "courses";
    }
    renderCatalog(e.target.value);
  }
});

document.getElementById("levelFilter")?.addEventListener("change", () => {
  renderCatalog(document.getElementById("globalSearch")?.value || "");
});

document.getElementById("categoryFilters")?.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  activeCategory = chip.dataset.category || "";
  renderCategoryFilters();
  renderCatalog(document.getElementById("globalSearch")?.value || "");
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    myLearningTab = tab.dataset.tab;
    renderMyLearning();
  });
});

document.getElementById("profileForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  state.user.name = document.getElementById("profileName").value.trim();
  state.user.email = document.getElementById("profileEmail").value.trim();
  state.user.role = document.getElementById("profileRole").value;
  saveState();
  updateUserUI();
  showToast("Profile saved!");
});

document.getElementById("resetProgress")?.addEventListener("click", () => {
  if (confirm("Reset all enrollments and progress? This cannot be undone.")) {
    localStorage.removeItem(STORAGE_KEY);
    state = structuredClone(SEED);
    saveState();
    updateUserUI();
    parseHash();
    showToast("Progress reset to demo defaults.");
  }
});

document.getElementById("quizForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const modal = document.getElementById("quizModal");
  const courseId = modal.dataset.courseId;
  const course = getCourse(courseId);
  if (!course?.quiz) return;

  let correct = 0;
  course.quiz.questions.forEach((q, qi) => {
    const selected = parseInt(document.querySelector(`input[name="q${qi}"]:checked`)?.value, 10);
    if (selected === q.answer) correct++;
  });

  const pct = Math.round((correct / course.quiz.questions.length) * 100);
  const passed = pct >= 70;

  document.getElementById("quizBody").innerHTML = `
    <div class="quiz-result">
      <div class="score">${pct}%</div>
      <p>${passed ? "Great job! You passed the quiz." : "Keep studying — 70% required to pass."}</p>
    </div>
  `;

  if (passed) {
    state.quizScores[courseId] = pct;
    const quizLesson = course.lessons.find((l) => l.type === "quiz");
    if (quizLesson) markLessonComplete(courseId, quizLesson.id);
    saveState();
  }

  modal.querySelector('button[type="submit"]').textContent = "Close";
  modal.querySelector('button[type="submit"]').onclick = () => {
    modal.close();
    modal.querySelector('button[type="submit"]').textContent = "Submit answers";
    modal.querySelector('button[type="submit"]').onclick = null;
    if (courseId) location.hash = `course/${courseId}`;
  };
});

document.getElementById("quizClose")?.addEventListener("click", () => {
  document.getElementById("quizModal").close();
});

document.getElementById("calPrev")?.addEventListener("click", () => {
  calendarMonth.setMonth(calendarMonth.getMonth() - 1);
  renderCalendar();
});

document.getElementById("calNext")?.addEventListener("click", () => {
  calendarMonth.setMonth(calendarMonth.getMonth() + 1);
  renderCalendar();
});

document.getElementById("menuBtn")?.addEventListener("click", () => {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("overlay").classList.add("show");
  document.body.style.overflow = "hidden";
});

document.getElementById("sidebarClose")?.addEventListener("click", closeSidebar);
document.getElementById("overlay")?.addEventListener("click", closeSidebar);

document.getElementById("notifBtn")?.addEventListener("click", () => {
  showToast("You have 3 new announcements: assignment due, live Q&A, and course update.");
});

/* Init */
applyCompletedFromStorage();

function applyCompletedFromStorage() {
  state.courses.forEach((c) => {
    c.lessons.forEach((l) => {
      if (state.completedLessons[`${c.id}:${l.id}`]) l.completed = true;
    });
  });
}

updateUserUI();
parseHash();
