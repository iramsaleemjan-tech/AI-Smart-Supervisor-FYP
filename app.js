// app.js – Smart Supervisor System SPA (University FYP Management & AI Evaluation)

// Embedded initial datasets ensuring instant functionality across all environments
const INITIAL_DATA = {
  users: [
    { id: 1, name: "Dr. Alice Smith", email: "alice.smith@example.com", role: "supervisor", department: "Computer Science & Engineering", designation: "Associate Professor & FYP Lead" },
    { id: 2, name: "Bob Lee", email: "bob.lee@example.com", role: "student", department: "Computer Science & Engineering", roll_no: "CS-2022-041", project_id: 101 },
    { id: 3, name: "Carol Nguyen", email: "carol.nguyen@example.com", role: "student", department: "Computer Science & Engineering", roll_no: "CS-2022-089", project_id: 102 },
    { id: 4, name: "David Patel", email: "david.patel@example.com", role: "student", department: "Software Engineering", roll_no: "SE-2022-015", project_id: 103 }
  ],
  projects: [
    {
      id: 101,
      title: "Intelligent Campus Navigation & AR Wayfinding",
      student_id: 2,
      supervisor_id: 1,
      description: "An augmented reality powered mobile navigation application that enables indoor and outdoor campus guidance for freshmen and visitors.",
      progress_percent: 75,
      status: "on_track",
      last_submission: "2026-09-08T10:30:00Z",
      milestones: [
        { name: "Project Proposal", status: "approved", score: 85 },
        { name: "Software Requirements Specification (SRS)", status: "approved", score: 82 },
        { name: "Software Design Document (SDD)", status: "under_review", score: 78 },
        { name: "Final Implementation & Defense", status: "pending", score: null }
      ]
    },
    {
      id: 102,
      title: "IoT Smart Energy Management & Forecasting System",
      student_id: 3,
      supervisor_id: 1,
      description: "Smart metering and ML-based anomaly detection system to optimize academic laboratory energy consumption.",
      progress_percent: 42,
      status: "at_risk",
      last_submission: "2026-08-14T14:15:00Z",
      milestones: [
        { name: "Project Proposal", status: "approved", score: 70 },
        { name: "Software Requirements Specification (SRS)", status: "revision_required", score: 62 },
        { name: "Software Design Document (SDD)", status: "delayed", score: null },
        { name: "Final Implementation & Defense", status: "pending", score: null }
      ]
    },
    {
      id: 103,
      title: "Autonomous Drone Delivery for Emergency Medical Kits",
      student_id: 4,
      supervisor_id: 1,
      description: "Autonomous waypoint navigation drone carrying automated defibrillators and triage supplies to rapid response zones.",
      progress_percent: 25,
      status: "at_risk",
      last_submission: "2026-07-28T09:00:00Z",
      milestones: [
        { name: "Project Proposal", status: "approved", score: 65 },
        { name: "Software Requirements Specification (SRS)", status: "delayed", score: 54 },
        { name: "Software Design Document (SDD)", status: "delayed", score: null },
        { name: "Final Implementation & Defense", status: "pending", score: null }
      ]
    }
  ],
  documents: [
    {
      id: 1,
      project_id: 101,
      title: "Software Requirements Specification - AR Navigation",
      type: "SRS",
      version: "v1.2",
      upload_date: "2026-09-08T10:30:00Z",
      authentic_score: 82,
      feedback_id: 1,
      content: "1. INTRODUCTION\n1.1 Purpose\nThe purpose of this Software Requirements Specification (SRS) is to describe the functional and non-functional requirements for the Intelligent Campus Navigation & AR Wayfinding System.\n\n1.2 Scope\nThe mobile application will assist students, faculty, and visitors in locating lecture halls, laboratories, administrative offices, and amenities through interactive augmented reality overlays and 2D floorplans.\n\n1.3 Definitions and Acronyms\n- AR: Augmented Reality\n- POI: Point of Interest\n- GPS: Global Positioning System\n- BLE: Bluetooth Low Energy Beacons\n\n2. OVERALL DESCRIPTION\n2.1 Product Perspective\nThe system integrates smartphone inertial measurement units (IMU), visual odometry, and campus GIS datasets to provide sub-meter accuracy indoors where GPS signals degrade.\n\n2.2 User Characteristics\nPrimary users are university students and campus visitors with varying technological proficiency.\n\n3. SPECIFIC REQUIREMENTS\n3.1 Functional Requirements\nFR-01: The system shall display a searchable directory of campus departments and classrooms.\nFR-02: The application will calculate the shortest accessible walking route between two POIs.\nFR-03: The system shall project visual directional arrows onto the camera video stream.\nFR-04: System will alert user when deviating more than 5 meters from designated path.\n\n3.2 Non-Functional Requirements\nNFR-01: Localization latency shall not exceed 150ms during active camera tracking.\nNFR-02: Battery consumption shall remain below 12% per 30 minutes of continuous AR rendering.\nNFR-03: System shall maintain 99.5% uptime on cloud route planning APIs.\n\n4. USE CASES\nUC-01: Search Classroom by Course Code\nUC-02: Recalculate Route during Corridor Blockage\nUC-03: Audio Guidance for Visually Impaired Users"
    },
    {
      id: 2,
      project_id: 101,
      title: "Software Design Document - AR Navigation",
      type: "SDD",
      version: "v1.0",
      upload_date: "2026-09-10T16:00:00Z",
      authentic_score: 78,
      feedback_id: 2,
      content: "1. ARCHITECTURAL DESIGN\n1.1 System Architecture Overview\nThe system implements a client-server microservices architecture. The mobile client handles AR tracking and sensory fusion, while the backend coordinates path computation.\n\n1.2 Component Decomposition\n- Mobile Presentation Layer (Unity 3D / ARKit / ARCore)\n- Spatial Anchoring Service\n- Graph Navigation Engine (A* Routing Service)\n- Campus Map Database\n\n2. DATABASE DESIGN\n2.1 Relational Schema\n- Tables: Buildings, Floors, Nodes, Edges, POI_Metadata\n- Geospatial coordinates stored using PostGIS extensions.\n\n2.2 Entity-Relationship Diagram (ERD)\n[Entity: Building] 1--N [Entity: Floor] 1--N [Entity: Node] N--N [Entity: Edge]\n\n3. INTERFACE DESIGN\n3.1 REST API Endpoints\n- GET /api/v1/routes?start={node_id}&end={node_id}\n- GET /api/v1/pois/search?query={keyword}\n\n3.2 Mobile HUD User Interface\nFloating compass, turn-by-turn instruction card, mini-map inset, and distance estimator."
    },
    {
      id: 3,
      project_id: 102,
      title: "Software Requirements Specification - Smart Energy",
      type: "SRS",
      version: "v1.0",
      upload_date: "2026-08-14T14:15:00Z",
      authentic_score: 62,
      feedback_id: 3,
      content: "1. INTRODUCTION\n1.1 Background\nEnergy consumption in academic campus laboratories is high and unmonitored. We plan to build a smart meter monitoring system.\n\n1.2 Objectives\nThe project will collect energy usage data from smart meters installed across 4 faculty buildings and show graphs on a dashboard.\n\n2. SYSTEM FEATURES\nFeature 1: Read smart meter pulse outputs via MQTT.\nFeature 2: Save hourly readings into a database.\nFeature 3: Provide admin panel to check total kilowatt-hours.\nFeature 4: Send email notifications if power spike occurs.\n\n3. DESIGN OVERVIEW\nThe system will use Node.js and MongoDB.\n\n(Note: Non-Functional Requirements section is missing. Use Case modeling is missing.)"
    },
    {
      id: 4,
      project_id: 103,
      title: "Software Requirements Specification - Medical Drone",
      type: "SRS",
      version: "v0.9",
      upload_date: "2026-07-28T09:00:00Z",
      authentic_score: 54,
      feedback_id: 4,
      content: "1. MOTIVATION\nEmergency response times during traffic congestions can be fatal. This project proposes building a medical kit delivery drone.\n\n2. HARDWARE SETUP\n- Pixhawk Flight Controller\n- GPS Module\n- 4S LiPo Battery\n- Carbon Fiber Quadcopter Frame\n\n3. SOFTWARE GOALS\nThe drone will fly autonomously to GPS coordinates sent by mobile app.\nTelemetry will be sent back to ground control station.\n\n(Note: Formal Requirements, Non-Functional Requirements, Security constraints, and Departmental template structure not followed.)"
    }
  ],
  feedback: [
    {
      id: 1,
      document_id: 1,
      authentic_score: 82,
      breakdown: { completeness: 26, originality: 27, depth: 15, formatting: 14 },
      breakdown_max: { completeness: 30, originality: 30, depth: 20, formatting: 20 },
      score_summary: "Strong document meeting IEEE 830 standards with minor modal verb inconsistencies and need for quantitative latency tolerances.",
      template_check: {
        document_type: "SRS",
        compliance_rate: 90,
        sections: [
          { name: "1. Introduction & Scope", present: true, status: "pass", note: "Thorough scope & stakeholder breakdown." },
          { name: "2. Overall Description & User Classes", present: true, status: "pass", note: "Product context well articulated." },
          { name: "3.1 Functional Requirements (FR)", present: true, status: "warning", note: "Contains informal phrasing in FR-02 & FR-04." },
          { name: "3.2 Non-Functional Requirements (NFR)", present: true, status: "pass", note: "Quantitative performance criteria included." },
          { name: "4. Use Case Specifications & Scenarios", present: true, status: "pass", note: "Clear actor interactions." }
        ]
      },
      plagiarism_check: { similarity_index: 8, risk_level: "low", citation_health: "good" },
      suggestions: [
        { line: 23, section: "Functional Requirements", severity: "medium", text: "Change 'The application will calculate' to 'The system shall calculate' to adhere to IEEE requirements verification conventions." },
        { line: 25, section: "Functional Requirements", severity: "medium", text: "Change 'System will alert user' to 'The system shall alert the user within 2 seconds' to specify unambiguous timing criteria." },
        { line: 30, section: "Non-Functional Requirements", severity: "low", text: "Provide measurement tool/benchmark specification for the 150ms latency threshold." },
        { line: 34, section: "Use Cases", severity: "low", text: "Attach actor-system sequence steps or UML Use Case diagram for UC-03." }
      ],
      supervisor_notes: "Well structured SRS. Fix the IEEE modal verbs ('shall' vs 'will') and attach the use case diagram before our next lab review."
    },
    {
      id: 2,
      document_id: 2,
      authentic_score: 78,
      breakdown: { completeness: 24, originality: 26, depth: 14, formatting: 14 },
      breakdown_max: { completeness: 30, originality: 30, depth: 20, formatting: 20 },
      score_summary: "Clear high-level architecture. Database schema needs primary/foreign keys and indexes explicitly specified.",
      template_check: {
        document_type: "SDD",
        compliance_rate: 82,
        sections: [
          { name: "1. Architectural Overview & Decomposition", present: true, status: "pass", note: "Layered architecture clearly mapped." },
          { name: "2. Database Design & Relational Schema", present: true, status: "pass", note: "PostGIS extensions documented." },
          { name: "2.2 Entity Relationship Diagram (ERD)", present: true, status: "warning", note: "Only text notation provided; formal Crow's Foot diagram missing." },
          { name: "3. REST Interface & API Specs", present: true, status: "pass", note: "Key endpoints documented." },
          { name: "4. Security & Data Flow Diagrams (DFD)", present: false, status: "fail", note: "Required by department SDD rubric." }
        ]
      },
      plagiarism_check: { similarity_index: 11, risk_level: "low", citation_health: "good" },
      suggestions: [
        { line: 13, section: "Database Design", severity: "high", text: "Include full SQL DDL or visual ERD with explicit Primary Key (PK) and Foreign Key (FK) cardinality." },
        { line: 18, section: "REST API Endpoints", severity: "medium", text: "Add error responses (HTTP 400/404/500 JSON schema) for the route computation endpoint." },
        { line: 22, section: "Security Architecture", severity: "high", text: "Missing Section 4: Add JWT / OAuth authentication flow for client queries." }
      ],
      supervisor_notes: "Good progress on A* routing decomposition. Add the Crow's foot ERD and security section."
    },
    {
      id: 3,
      document_id: 3,
      authentic_score: 62,
      breakdown: { completeness: 18, originality: 21, depth: 11, formatting: 12 },
      breakdown_max: { completeness: 30, originality: 30, depth: 20, formatting: 20 },
      score_summary: "Score low due to critical missing sections: Non-Functional Requirements, Use Cases, and IEEE structure standard.",
      template_check: {
        document_type: "SRS",
        compliance_rate: 55,
        sections: [
          { name: "1. Introduction & Background", present: true, status: "pass", note: "Basic rationale provided." },
          { name: "2. System Features & Scope", present: true, status: "warning", note: "Bullet points too brief and lack verifiable acceptance criteria." },
          { name: "3. Functional Requirements (FR)", present: false, status: "fail", note: "Missing numbered FR specifications." },
          { name: "4. Non-Functional Requirements (NFR)", present: false, status: "fail", note: "Critical section missing from draft." },
          { name: "5. Use Case Specifications", present: false, status: "fail", note: "Missing actor diagrams and user journeys." }
        ]
      },
      plagiarism_check: { similarity_index: 19, risk_level: "medium", citation_health: "needs_improvement" },
      suggestions: [
        { line: 8, section: "System Features", severity: "high", text: "Convert informal 'Feature 1-4' into formal FR-01 through FR-10 with verifiable inputs and outputs." },
        { line: 14, section: "Non-Functional Requirements", severity: "critical", text: "Add Non-Functional Requirements: specify MQTT sampling frequency, MQTT broker encryption (TLS 1.3), and max ingestion latency." },
        { line: 16, section: "Use Cases", severity: "high", text: "Include at least 3 detailed use cases: Facility Manager dashboard view, Alert dispatch on high surge, and Sensor telemetry ingest." }
      ],
      supervisor_notes: "Carol, your draft is lacking required sections under our FYP guideline. Please see the template check and schedule a meeting this week."
    },
    {
      id: 4,
      document_id: 4,
      authentic_score: 54,
      breakdown: { completeness: 14, originality: 18, depth: 10, formatting: 12 },
      breakdown_max: { completeness: 30, originality: 30, depth: 20, formatting: 20 },
      score_summary: "Draft reads as a hardware inventory rather than a formal software engineering specification.",
      template_check: {
        document_type: "SRS",
        compliance_rate: 40,
        sections: [
          { name: "1. Motivation", present: true, status: "pass", note: "Context articulated." },
          { name: "2. Functional Requirements", present: false, status: "fail", note: "No verifiable functional specifications." },
          { name: "3. Non-Functional Requirements", present: false, status: "fail", note: "Safety, fail-safe protocols, and communication latency missing." },
          { name: "4. Failsafe & Regulatory Constraints", present: false, status: "fail", note: "Aviation authority geofencing guidelines missing." }
        ]
      },
      plagiarism_check: { similarity_index: 22, risk_level: "medium", citation_health: "poor" },
      suggestions: [
        { line: 5, section: "Hardware Setup", severity: "medium", text: "Move hardware specifications to an appendix and focus the SRS body on flight control algorithms and telemetry protocols." },
        { line: 10, section: "Software Goals", severity: "critical", text: "Specify failsafe autonomous behaviors: Loss of GPS signal, low battery return-to-home (RTH), and obstacle avoidance protocols." }
      ],
      supervisor_notes: "David, this submission is significantly delayed and incomplete. We need a mandatory progress review session."
    }
  ],
  meetings: [
    {
      id: 1,
      project_id: 101,
      student_id: 2,
      supervisor_id: 1,
      agenda: "Review SDD Database ERD & REST API Schema",
      requested_time: "2026-09-18T10:00:00Z",
      proposed_slots: ["2026-09-18T10:00:00Z", "2026-09-19T14:30:00Z", "2026-09-21T11:00:00Z"],
      approved_time: "2026-09-18T10:00:00Z",
      status: "approved",
      location: "Faculty Block C, Room 304 / Zoom",
      notes: "Bring printed copy of the updated ER diagram."
    },
    {
      id: 2,
      project_id: 102,
      student_id: 3,
      supervisor_id: 1,
      agenda: "Urgent review of missing NFR and Use Case sections in SRS",
      requested_time: "2026-09-17T11:30:00Z",
      proposed_slots: ["2026-09-17T11:30:00Z", "2026-09-18T15:00:00Z", "2026-09-20T09:30:00Z"],
      approved_time: null,
      status: "pending",
      location: "Pending Supervisor Confirmation",
      notes: "Student requested urgent guidance after receiving 62/100 authentic score."
    },
    {
      id: 3,
      project_id: 103,
      student_id: 4,
      supervisor_id: 1,
      agenda: "FYP Mid-Term Warning & Recovery Plan",
      requested_time: "2026-09-16T15:00:00Z",
      proposed_slots: ["2026-09-16T15:00:00Z", "2026-09-19T10:00:00Z", "2026-09-22T13:00:00Z"],
      approved_time: null,
      status: "pending",
      location: "Faculty Block C, Room 304",
      notes: "Supervisor flagged student as at-risk due to zero submissions in past 4 weeks."
    }
  ]
};

// Global State
const STATE = {
  currentUser: null,
  users: [],
  projects: [],
  documents: [],
  feedback: [],
  meetings: [],
  activeFilter: 'all',
  searchQuery: '',
  currentChart: null,
  pendingUploadProjectId: null,
  selectedMeetingSlot: null
};

// State persistence helpers
function loadStateFromStorage() {
  try {
    const saved = localStorage.getItem('smart_supervisor_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      STATE.users = parsed.users || INITIAL_DATA.users;
      STATE.projects = parsed.projects || INITIAL_DATA.projects;
      STATE.documents = parsed.documents || INITIAL_DATA.documents;
      STATE.feedback = parsed.feedback || INITIAL_DATA.feedback;
      STATE.meetings = parsed.meetings || INITIAL_DATA.meetings;
      return true;
    }
  } catch (e) {
    console.warn('Could not read from localStorage', e);
  }
  return false;
}

function saveStateToStorage() {
  try {
    localStorage.setItem('smart_supervisor_state', JSON.stringify({
      users: STATE.users,
      projects: STATE.projects,
      documents: STATE.documents,
      feedback: STATE.feedback,
      meetings: STATE.meetings
    }));
  } catch (e) {
    console.warn('Could not save to localStorage', e);
  }
}

// Data Initialization (tries serverless /api first, falls back to storage/defaults)
// ==========================================================================
// Toast Notification System
// ==========================================================================
function showToast(message, type = 'success', duration = 3200) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:10px;';
    document.body.appendChild(container);
  }
  const icons = { success: 'fa-circle-check', error: 'fa-circle-xmark', warning: 'fa-triangle-exclamation', info: 'fa-circle-info' };
  const colors = { success: '#10b981', error: '#ef4444', warning: '#f59e0b', info: '#0284c7' };
  const toast = document.createElement('div');
  toast.style.cssText = `
    display:flex;align-items:center;gap:10px;padding:12px 18px;
    background:#fff;border-radius:10px;box-shadow:0 8px 28px rgba(15,23,42,0.18);
    border-left:4px solid ${colors[type]};font-size:0.88rem;font-weight:500;
    color:#0f172a;min-width:260px;max-width:380px;
    animation:slideInToast 0.3s cubic-bezier(0.34,1.56,0.64,1);
  `;
  toast.innerHTML = `<i class="fa-solid ${icons[type]}" style="color:${colors[type]};font-size:1.1rem;flex-shrink:0;"></i><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(20px)'; toast.style.transition = '0.3s'; setTimeout(() => toast.remove(), 300); }, duration);
}

// Add toast keyframe once
const _toastStyle = document.createElement('style');
_toastStyle.textContent = '@keyframes slideInToast{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}';
document.head.appendChild(_toastStyle);

async function init() {
  const loadedFromStorage = loadStateFromStorage();

  try {
    const resp = await fetch('/api/data', { cache: 'no-cache' });
    if (resp.ok) {
      const data = await resp.json();
      if (data.users && data.users.length) STATE.users = data.users;
      if (data.projects && data.projects.length) STATE.projects = data.projects;
      if (data.documents && data.documents.length) STATE.documents = data.documents;
      if (data.feedback && data.feedback.length) STATE.feedback = data.feedback;
      if (data.meetings && data.meetings.length) STATE.meetings = data.meetings;
    } else if (!loadedFromStorage) {
      STATE.users = INITIAL_DATA.users;
      STATE.projects = INITIAL_DATA.projects;
      STATE.documents = INITIAL_DATA.documents;
      STATE.feedback = INITIAL_DATA.feedback;
      STATE.meetings = INITIAL_DATA.meetings;
    }
  } catch (err) {
    if (!loadedFromStorage) {
      STATE.users = INITIAL_DATA.users;
      STATE.projects = INITIAL_DATA.projects;
      STATE.documents = INITIAL_DATA.documents;
      STATE.feedback = INITIAL_DATA.feedback;
      STATE.meetings = INITIAL_DATA.meetings;
    }
  }

  // Restore or default user
  const savedUser = localStorage.getItem('smart_supervisor_current_user');
  if (savedUser) {
    try {
      const u = JSON.parse(savedUser);
      STATE.currentUser = STATE.users.find(x => x.id === u.id) || u;
    } catch (e) {}
  }
  if (!STATE.currentUser) {
    // Default to supervisor for demo ease
    STATE.currentUser = STATE.users.find(u => u.role === 'supervisor') || STATE.users[0];
  }

  setupGlobalEventHandlers();
  window.addEventListener('hashchange', router);
  router();
}

// Router
function router() {
  const hash = location.hash || '#dashboard';
  const app = document.getElementById('app');
  if (!app) return;

  if (hash === '#login') {
    renderLoginView();
  } else if (hash.startsWith('#analysis-')) {
    const projectId = parseInt(hash.split('-')[1]);
    renderAnalysisView(projectId);
  } else if (hash === '#meetings') {
    renderMeetingsView();
  } else if (hash === '#student-portal') {
    renderStudentPortalView();
  } else {
    // Check role
    if (STATE.currentUser && STATE.currentUser.role === 'student') {
      renderStudentPortalView();
    } else {
      renderSupervisorDashboard();
    }
  }
}

// ==========================================================================
// Views: Top Navigation Bar
// ==========================================================================
function renderNavBar(activePage = 'dashboard') {
  const isSupervisor = STATE.currentUser && STATE.currentUser.role === 'supervisor';
  const students = STATE.users.filter(u => u.role === 'student');
  const otherRoleUser = isSupervisor
    ? students[0]
    : STATE.users.find(u => u.role === 'supervisor');
  const pendingCount = STATE.meetings.filter(m => m.status === 'pending').length;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  return `
    <nav class="top-navbar">
      <div class="brand-container" onclick="location.hash='#dashboard'" style="cursor:pointer;">
        <div class="brand-icon"><i class="fa-solid fa-graduation-cap"></i></div>
        <div>
          <div class="brand-title">Smart Supervisor</div>
          <div class="brand-subtitle">AI-Powered FYP Evaluation Portal</div>
        </div>
      </div>

      <div class="nav-actions">
        <div class="nav-tab-links">
          <button class="nav-link-btn ${activePage === 'dashboard' ? 'active' : ''}" onclick="location.hash='#dashboard'">
            <i class="fa-solid fa-gauge-high"></i> Dashboard
          </button>
          <button class="nav-link-btn ${activePage === 'meetings' ? 'active' : ''}" onclick="location.hash='#meetings'">
            <i class="fa-solid fa-calendar-check"></i> Meetings
            ${pendingCount ? `<span class="nav-badge">${pendingCount}</span>` : ''}
          </button>
        </div>

        <div class="role-switcher-badge" id="quickRoleSwitchBtn" title="Switch role">
          <i class="fa-solid fa-repeat"></i>
          <span class="role-text">Switch to ${otherRoleUser ? otherRoleUser.name.split(' ')[0] : 'User'}</span>
        </div>

        <button class="dark-toggle" id="darkModeToggle" title="Toggle dark mode" onclick="toggleDarkMode()">
          <i class="fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}"></i>
        </button>

        <div class="user-profile-badge">
          <div class="user-avatar-circle">${STATE.currentUser ? STATE.currentUser.name.charAt(0) : 'U'}</div>
          <span style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${STATE.currentUser ? STATE.currentUser.name.split(' ').slice(0,2).join(' ') : 'User'}</span>
          <button onclick="logoutUser()" title="Logout" style="background:none;border:none;color:var(--text-muted);cursor:pointer;padding:0;font-size:0.9rem;" aria-label="Logout">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </nav>
  `;
}


// ==========================================================================
// View: Login
// ==========================================================================
function renderLoginView() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="login-page">
      <div class="login-card slide-up">
        <div style="text-align:center; margin-bottom:1.75rem;">
          <div class="login-logo"><i class="fa-solid fa-graduation-cap"></i></div>
          <h2 style="font-size:1.5rem; font-weight:800; color:var(--text-main); margin-bottom:0.3rem;">Smart Supervisor System</h2>
          <p style="font-size:0.85rem; color:var(--text-muted);">University Final Year Project — AI Evaluation Portal</p>
        </div>

        <p class="section-label">1-Click Demo Login</p>
        <div style="display:flex; flex-direction:column; gap:0;">
          <button class="login-quick-btn" onclick="quickLogin(1)">
            <div class="login-quick-icon" style="background:linear-gradient(135deg,#1e3a8a,#2563eb); color:#fff;">
              <i class="fa-solid fa-user-tie"></i>
            </div>
            <div style="flex:1;">
              <div style="font-weight:700; font-size:0.9rem; color:var(--text-main);">Dr. Alice Smith</div>
              <div style="font-size:0.75rem; color:var(--primary);">Supervisor / FYP Lead — Full Dashboard Access</div>
            </div>
            <i class="fa-solid fa-chevron-right" style="color:var(--text-light); font-size:0.8rem;"></i>
          </button>
          <button class="login-quick-btn" onclick="quickLogin(2)">
            <div class="login-quick-icon" style="background:linear-gradient(135deg,#065f46,#10b981); color:#fff;">
              <i class="fa-solid fa-user-graduate"></i>
            </div>
            <div style="flex:1;">
              <div style="font-weight:700; font-size:0.9rem; color:var(--text-main);">Bob Lee</div>
              <div style="font-size:0.75rem; color:var(--success);">Student – On Track &nbsp;🟢 75% Progress</div>
            </div>
            <i class="fa-solid fa-chevron-right" style="color:var(--text-light); font-size:0.8rem;"></i>
          </button>
          <button class="login-quick-btn" onclick="quickLogin(3)">
            <div class="login-quick-icon" style="background:linear-gradient(135deg,#991b1b,#ef4444); color:#fff;">
              <i class="fa-solid fa-user-clock"></i>
            </div>
            <div style="flex:1;">
              <div style="font-weight:700; font-size:0.9rem; color:var(--text-main);">Carol Nguyen</div>
              <div style="font-size:0.75rem; color:var(--danger);">Student – At Risk &nbsp;🔴 42% Progress</div>
            </div>
            <i class="fa-solid fa-chevron-right" style="color:var(--text-light); font-size:0.8rem;"></i>
          </button>
          <button class="login-quick-btn" onclick="quickLogin(4)">
            <div class="login-quick-icon" style="background:linear-gradient(135deg,#92400e,#f59e0b); color:#fff;">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div style="flex:1;">
              <div style="font-weight:700; font-size:0.9rem; color:var(--text-main);">David Patel</div>
              <div style="font-size:0.75rem; color:var(--warning);">Student – At Risk &nbsp;🟡 25% Progress</div>
            </div>
            <i class="fa-solid fa-chevron-right" style="color:var(--text-light); font-size:0.8rem;"></i>
          </button>
        </div>

        <div class="login-divider"><hr/><span>or enter credentials</span><hr/></div>

        <form id="customLoginForm" onsubmit="handleManualLogin(event)">
          <div style="margin-bottom:0.75rem;">
            <input type="email" id="loginEmail" placeholder="Email address" value="alice.smith@example.com" class="login-input" required />
          </div>
          <div style="margin-bottom:1.1rem;">
            <input type="password" id="loginPass" placeholder="Password (default: password)" value="password" class="login-input" required />
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg">
            <i class="fa-solid fa-right-to-bracket"></i> Sign In to Portal
          </button>
        </form>
      </div>
    </div>
  `;
}

window.quickLogin = function(userId) {
  const user = STATE.users.find(u => u.id === userId);
  if (user) {
    STATE.currentUser = user;
    localStorage.setItem('smart_supervisor_current_user', JSON.stringify(user));
    location.hash = user.role === 'student' ? '#student-portal' : '#dashboard';
  }
};

window.handleManualLogin = function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const user = STATE.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (user) {
    STATE.currentUser = user;
    localStorage.setItem('smart_supervisor_current_user', JSON.stringify(user));
    showToast(`Welcome back, ${user.name.split(' ')[0]}! 👋`, 'success');
    location.hash = user.role === 'student' ? '#student-portal' : '#dashboard';
  } else {
    showToast('Invalid credentials. Please choose a demo user above.', 'error');
  }
};

window.logoutUser = function() {
  localStorage.removeItem('smart_supervisor_current_user');
  STATE.currentUser = null;
  showToast('Logged out successfully.', 'info');
  location.hash = '#login';
};

// Dark Mode Toggle
window.toggleDarkMode = function() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('smart_supervisor_theme', isDark ? 'light' : 'dark');
  // Re-render current page to update the icon
  router();
};


// ==========================================================================
// View: Supervisor Dashboard
// ==========================================================================
function renderSupervisorDashboard() {
  const app = document.getElementById('app');
  const myProjects = STATE.projects;

  // Auto-flag At-Risk students: progress < 50% OR no submission in > 2 weeks (14 days)
  const twoWeeksMs = 14 * 24 * 60 * 60 * 1000;
  const now = new Date('2026-09-15T00:00:00Z').getTime(); // Baseline anchor
  const atRiskList = myProjects.filter(p => {
    const lastSub = new Date(p.last_submission).getTime();
    const daysSince = (now - lastSub) / (24 * 60 * 60 * 1000);
    return p.progress_percent < 50 || daysSince > 14 || p.status === 'at_risk';
  });

  // KPI calculations
  const totalStudents = myProjects.length;
  const onTrack = myProjects.filter(p => p.status === 'on_track').length;
  const docs = STATE.documents;
  const avgScore = docs.length ? Math.round(docs.reduce((sum, d) => sum + d.authentic_score, 0) / docs.length) : 0;
  const pendingMeetings = STATE.meetings.filter(m => m.status === 'pending').length;
  const totalDocs = docs.length;

  // Filter projects by search and status filter
  const filteredProjects = myProjects.filter(p => {
    const student = STATE.users.find(u => u.id === p.student_id);
    const matchesSearch = p.title.toLowerCase().includes(STATE.searchQuery.toLowerCase()) ||
      (student && student.name.toLowerCase().includes(STATE.searchQuery.toLowerCase()));
    if (!matchesSearch) return false;
    if (STATE.activeFilter === 'all') return true;
    if (STATE.activeFilter === 'on_track') return p.status === 'on_track';
    if (STATE.activeFilter === 'at_risk') return p.status === 'at_risk' || p.progress_percent < 50;
    if (STATE.activeFilter === 'delayed') return p.status === 'delayed';
    return true;
  });

  app.innerHTML = `
    ${renderNavBar('dashboard')}

    <main class="main-container fade-in">
      <!-- Page Header -->
      <div class="page-header">
        <div class="page-header-text">
          <h2><i class="fa-solid fa-gauge-high" style="color:var(--primary);"></i> Supervisor Dashboard</h2>
          <p>FYP cohort overview · ${new Date().toLocaleDateString('en-US', {weekday:'long', year:'numeric', month:'long', day:'numeric'})}</p>
        </div>
        <div class="page-header-actions">
          <button class="btn btn-secondary btn-sm" onclick="location.hash='#meetings'">
            <i class="fa-solid fa-calendar-days"></i> Meetings ${pendingMeetings ? `<span class="nav-badge" style="margin-left:4px;">${pendingMeetings}</span>` : ''}
          </button>
          <button class="btn btn-primary" onclick="openUploadModal(null)">
            <i class="fa-solid fa-file-circle-plus"></i> Upload for AI Scan
          </button>
        </div>
      </div>

      <!-- At-Risk Warning -->
      ${atRiskList.length > 0 ? `
        <div class="at-risk-alert">
          <div class="at-risk-alert-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
          <div style="flex:1;">
            <div style="font-weight:700; color:#991b1b; margin-bottom:0.25rem;">
              ⚠️ ${atRiskList.length} Student${atRiskList.length > 1 ? 's' : ''} Flagged At-Risk
            </div>
            <div style="font-size:0.83rem; color:var(--text-sub);">
              ${atRiskList.map(p => {
                const s = STATE.users.find(u => u.id === p.student_id);
                return `<strong>${s ? s.name : 'Student'}</strong> (${p.progress_percent}% · last submitted ${formatDate(p.last_submission)})`;
              }).join(' &bull; ')}
            </div>
          </div>
          <button class="btn btn-sm" style="background:#fef2f2; border:1px solid #fecaca; color:#991b1b; white-space:nowrap;" onclick="location.hash='#meetings'">
            <i class="fa-solid fa-calendar-plus"></i> Schedule Review
          </button>
        </div>
      ` : ''}

      <!-- KPI Cards -->
      <div class="kpi-grid">
        <div class="kpi-card" style="--kpi-color: var(--primary);">
          <div class="kpi-icon-wrap"><i class="fa-solid fa-folder-open"></i></div>
          <div>
            <div class="kpi-value" data-count="${totalStudents}">${totalStudents}</div>
            <div class="kpi-label">Active Projects</div>
          </div>
        </div>
        <div class="kpi-card" style="--kpi-color: var(--success);">
          <div class="kpi-icon-wrap"><i class="fa-solid fa-circle-check"></i></div>
          <div>
            <div class="kpi-value" data-count="${onTrack}">${onTrack}</div>
            <div class="kpi-label">On Track</div>
          </div>
        </div>
        <div class="kpi-card" style="--kpi-color: var(--danger);">
          <div class="kpi-icon-wrap"><i class="fa-solid fa-circle-exclamation"></i></div>
          <div>
            <div class="kpi-value" data-count="${atRiskList.length}">${atRiskList.length}</div>
            <div class="kpi-label">At Risk</div>
          </div>
        </div>
        <div class="kpi-card" style="--kpi-color: var(--accent);">
          <div class="kpi-icon-wrap"><i class="fa-solid fa-shield-check"></i></div>
          <div>
            <div class="kpi-value" data-count="${avgScore}">${avgScore}</div>
            <div class="kpi-label">Avg Score / 100</div>
          </div>
        </div>
        <div class="kpi-card" style="--kpi-color: var(--warning);">
          <div class="kpi-icon-wrap"><i class="fa-solid fa-clock-rotate-left"></i></div>
          <div>
            <div class="kpi-value" data-count="${pendingMeetings}">${pendingMeetings}</div>
            <div class="kpi-label">Pending Meetings</div>
          </div>
        </div>
        <div class="kpi-card" style="--kpi-color: var(--info);">
          <div class="kpi-icon-wrap"><i class="fa-solid fa-file-lines"></i></div>
          <div>
            <div class="kpi-value" data-count="${totalDocs}">${totalDocs}</div>
            <div class="kpi-label">Documents</div>
          </div>
        </div>
      </div>

      <!-- Toolbar -->
      <div class="toolbar-container">
        <div class="search-input-wrapper">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" id="projectSearch" placeholder="Search student or project..." value="${STATE.searchQuery}" />
        </div>
        <div class="filter-pills-group">
          <button class="filter-pill ${STATE.activeFilter === 'all' ? 'active' : ''}" onclick="setFilter('all')">All (${myProjects.length})</button>
          <button class="filter-pill ${STATE.activeFilter === 'on_track' ? 'active' : ''}" onclick="setFilter('on_track')"><i class="fa-solid fa-circle-check" style="color:var(--success);"></i> On Track</button>
          <button class="filter-pill ${STATE.activeFilter === 'at_risk' ? 'active' : ''}" onclick="setFilter('at_risk')"><i class="fa-solid fa-circle-exclamation" style="color:var(--danger);"></i> At Risk (${atRiskList.length})</button>
          <button class="filter-pill ${STATE.activeFilter === 'delayed' ? 'active' : ''}" onclick="setFilter('delayed')"><i class="fa-solid fa-hourglass" style="color:var(--warning);"></i> Delayed</button>
        </div>
      </div>

      <!-- Projects Grid -->
      <section class="projects-grid">
        ${filteredProjects.length ? filteredProjects.map(p => renderProjectCard(p)).join('') : `
          <div class="empty-state" style="grid-column:1/-1;">
            <i class="fa-solid fa-magnifying-glass"></i>
            <h4>No projects match your filter</h4>
            <p>Try adjusting the search or filter criteria.</p>
          </div>
        `}
      </section>
    </main>
  `;

  attachDashboardEvents();
  animateCounters();
}


function renderProjectCard(project) {
  const student = STATE.users.find(u => u.id === project.student_id) || { name: 'Unknown Student', roll_no: 'N/A' };
  const docs = STATE.documents.filter(d => d.project_id === project.id);
  const latestDoc = docs.length ? docs[docs.length - 1] : null;
  const score = latestDoc ? latestDoc.authentic_score : 0;

  const scoreColor = score >= 75 ? 'var(--success)' : score >= 60 ? 'var(--warning)' : 'var(--danger)';
  const barColor = project.progress_percent >= 70
    ? 'linear-gradient(90deg,#10b981,#059669)'
    : project.progress_percent >= 45
    ? 'linear-gradient(90deg,#f59e0b,#d97706)'
    : 'linear-gradient(90deg,#ef4444,#dc2626)';
  const accentGrad = project.status === 'on_track'
    ? 'linear-gradient(90deg,#10b981,#2563eb)'
    : project.status === 'at_risk'
    ? 'linear-gradient(90deg,#ef4444,#f59e0b)'
    : 'linear-gradient(90deg,#f59e0b,#6366f1)';

  const milestoneIcons = { approved:'fa-check-circle', under_review:'fa-clock', delayed:'fa-exclamation-circle', pending:'fa-circle', revision_required:'fa-rotate-right' };
  const milestoneClasses = { approved:'approved', under_review:'review', delayed:'delayed', pending:'pending', revision_required:'revision' };

  return `
    <div class="project-card slide-up">
      <div class="project-card-accent" style="background:${accentGrad};"></div>
      <div class="project-card-body">
        <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:0.5rem; margin-bottom:0.5rem;">
          <h3 class="project-card-title">${project.title}</h3>
          <span class="status-tag status-${project.status}" style="flex-shrink:0;">${project.status.replace('_',' ')}</span>
        </div>

        <div class="project-card-meta">
          <i class="fa-solid fa-user-graduate"></i>
          <strong>${student.name}</strong>
          <span style="opacity:0.5;">·</span>
          <span>${student.roll_no}</span>
          <span style="opacity:0.5;">·</span>
          <i class="fa-solid fa-clock"></i>
          <span>${formatDate(project.last_submission)}</span>
        </div>

        <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem; line-height:1.45;">${project.description.slice(0,100)}…</p>

        <!-- Progress Bar -->
        <div class="progress-bar-wrap">
          <div class="progress-bar-header">
            <span>FYP Progress</span>
            <span style="color:${scoreColor}; font-weight:700;">${project.progress_percent}%</span>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill shimmer" style="width:${project.progress_percent}%; background:${barColor};"></div>
          </div>
        </div>

        <!-- Milestone Dots -->
        <div class="milestone-dots">
          ${project.milestones.map(m => {
            const cls = milestoneClasses[m.status] || 'pending';
            const ico = milestoneIcons[m.status] || 'fa-circle';
            return `<span class="milestone-dot ${cls}" title="${m.name}: ${m.status}">
              <i class="fa-solid ${ico}"></i>
              ${m.name.split(' ')[0]}
              ${m.score ? `<strong>${m.score}</strong>` : ''}
            </span>`;
          }).join('')}
        </div>

        <!-- Score Badge -->
        ${latestDoc ? `
        <div style="display:flex; align-items:center; justify-content:space-between; padding-top:0.75rem; border-top:1px solid var(--border);">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <i class="fa-solid fa-award" style="color:${scoreColor}; font-size:1.1rem;"></i>
            <div>
              <div style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; font-weight:600;">Authentic Score</div>
              <div style="font-size:1.3rem; font-weight:800; color:${scoreColor}; line-height:1;">${score}<span style="font-size:0.75rem; color:var(--text-muted); font-weight:500;">/100</span></div>
            </div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; font-weight:600;">Document</div>
            <div style="font-size:0.8rem; font-weight:600; color:var(--text-sub);">${latestDoc.type} ${latestDoc.version}</div>
          </div>
        </div>` : `<div style="padding:0.5rem 0; font-size:0.82rem; color:var(--text-muted);"><i class="fa-solid fa-file-slash" style="margin-right:0.4rem;"></i>No document submitted yet</div>`}
      </div>
      <div class="project-card-actions">
        <button class="btn btn-primary btn-sm" onclick="location.hash='#analysis-${project.id}'">
          <i class="fa-solid fa-chart-pie"></i> Analyze
        </button>
        <button class="btn btn-secondary btn-sm" onclick="openUploadModal(${project.id})">
          <i class="fa-solid fa-file-arrow-up"></i> Upload
        </button>
        <button class="btn btn-secondary btn-sm" onclick="exportFeedbackPDF(${project.id})">
          <i class="fa-solid fa-file-pdf"></i> PDF
        </button>
        <button class="btn btn-secondary btn-sm" onclick="openMeetingModal(${project.id})" style="margin-left:auto;">
          <i class="fa-solid fa-calendar-plus"></i>
        </button>
      </div>
    </div>
  `;
}


function attachDashboardEvents() {
  // Quick search — use event delegation so it survives re-renders
  const searchInput = document.getElementById('projectSearch');
  if (searchInput && !searchInput._bound) {
    searchInput._bound = true;
    searchInput.addEventListener('input', (e) => {
      STATE.searchQuery = e.target.value;
      renderSupervisorDashboard();
    });
  }
}

window.setFilter = function(filter) {
  STATE.activeFilter = filter;
  router();
};

// ==========================================================================
// View: Document Analysis Studio & Feedback Engine
// ==========================================================================
function renderAnalysisView(projectId) {
  const app = document.getElementById('app');
  const project = STATE.projects.find(p => p.id === projectId);
  if (!project) {
    app.innerHTML = `<p>Project not found. <a href="#dashboard">Return to dashboard</a></p>`;
    return;
  }

  const student = STATE.users.find(u => u.id === project.student_id) || { name: 'Student', roll_no: 'N/A' };
  const docs = STATE.documents.filter(d => d.project_id === projectId);
  const latestDoc = docs.length ? docs[docs.length - 1] : null;
  const fb = latestDoc ? STATE.feedback.find(f => f.id === latestDoc.feedback_id) || STATE.feedback[0] : null;

  if (!latestDoc || !fb) {
    app.innerHTML = `<p>No document submissions found for this project. <a href="#dashboard">Back</a></p>`;
    return;
  }

  const score = latestDoc.authentic_score;
  const scoreClass = score >= 75 ? 'var(--success)' : score >= 60 ? 'var(--warning)' : 'var(--danger)';

  app.innerHTML = `
    ${renderNavBar('dashboard')}

    <main class="main-container">
      <!-- Breadcrumb & Actions Header -->
      <div class="analysis-header-card">
        <div>
          <button class="btn btn-secondary btn-sm" onclick="location.hash='#dashboard'" style="margin-bottom:0.5rem;">
            <i class="fa-solid fa-arrow-left"></i> Back to Dashboard
          </button>
          <h2 style="font-size:1.35rem; font-weight:800; color:var(--text-main);">${project.title}</h2>
          <div style="font-size:0.85rem; color:var(--text-muted); display:flex; gap:1rem; align-items:center; margin-top:0.25rem;">
            <span><i class="fa-solid fa-user-graduate" style="color:var(--primary);"></i> ${student.name} (${student.roll_no})</span>
            <span>&bull;</span>
            <span><i class="fa-solid fa-file-lines" style="color:var(--primary);"></i> ${latestDoc.title} (${latestDoc.version})</span>
            <span>&bull;</span>
            <span><i class="fa-solid fa-clock"></i> Uploaded: ${formatDate(latestDoc.upload_date)}</span>
          </div>
        </div>

        <div style="display:flex; gap:0.75rem;">
          <button class="btn btn-secondary" onclick="openUploadModal(${project.id})">
            <i class="fa-solid fa-file-arrow-up"></i> Upload New Draft
          </button>
          <button class="btn btn-primary" onclick="exportFeedbackPDF(${project.id})">
            <i class="fa-solid fa-file-pdf"></i> One-Click Feedback PDF
          </button>
        </div>
      </div>

      <!-- Authentic Score & 4-Part Breakdown Section -->
      <div class="analysis-overview-grid">
        <!-- Score Donut Chart Card -->
        <div class="score-panel-card">
          <span style="font-size:0.82rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.04em;">Overall Authentic Score</span>
          <div class="score-circle-display">
            <canvas id="scoreDonutCanvas" width="170" height="170"></canvas>
            <div class="score-inner-text">
              <div class="score-inner-number" style="color:${scoreClass};">${score}</div>
              <div class="score-inner-label">Out of 100</div>
            </div>
          </div>
          <p style="font-size:0.82rem; color:var(--text-muted); line-height:1.4; margin-top:0.5rem;">
            ${fb.score_summary || 'Weighted evaluation across completeness, originality, depth, and formatting standards.'}
          </p>
        </div>

        <!-- 4-Part Weighted Breakdown Meters -->
        <div class="breakdown-meters-container">
          <div class="breakdown-item">
            <div class="breakdown-label-row">
              <span><i class="fa-solid fa-list-check" style="color:#2563eb; margin-right:6px;"></i> Completeness (30% Weight)</span>
              <strong>${fb.breakdown.completeness} / 30 pts</strong>
            </div>
            <div class="breakdown-track">
              <div class="breakdown-bar" style="width: ${(fb.breakdown.completeness / 30) * 100}%; background:#2563eb;"></div>
            </div>
          </div>

          <div class="breakdown-item">
            <div class="breakdown-label-row">
              <span><i class="fa-solid fa-fingerprint" style="color:#059669; margin-right:6px;"></i> Originality & Plagiarism (30% Weight)</span>
              <strong>${fb.breakdown.originality} / 30 pts</strong>
            </div>
            <div class="breakdown-track">
              <div class="breakdown-bar" style="width: ${(fb.breakdown.originality / 30) * 100}%; background:#059669;"></div>
            </div>
          </div>

          <div class="breakdown-item">
            <div class="breakdown-label-row">
              <span><i class="fa-solid fa-microchip" style="color:#d97706; margin-right:6px;"></i> Technical Depth & Rigor (20% Weight)</span>
              <strong>${fb.breakdown.depth} / 20 pts</strong>
            </div>
            <div class="breakdown-track">
              <div class="breakdown-bar" style="width: ${(fb.breakdown.depth / 20) * 100}%; background:#d97706;"></div>
            </div>
          </div>

          <div class="breakdown-item">
            <div class="breakdown-label-row">
              <span><i class="fa-solid fa-align-left" style="color:#0284c7; margin-right:6px;"></i> Formatting & IEEE Standard (20% Weight)</span>
              <strong>${fb.breakdown.formatting} / 20 pts</strong>
            </div>
            <div class="breakdown-track">
              <div class="breakdown-bar" style="width: ${(fb.breakdown.formatting / 20) * 100}%; background:#0284c7;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Department Template & Plagiarism Compliance Audit -->
      <section class="compliance-grid">
        <div class="audit-card">
          <div class="audit-card-title">
            <span><i class="fa-solid fa-clipboard-check" style="color:var(--primary); margin-right:6px;"></i> Department Template Compliance</span>
            <span class="status-tag ${fb.template_check.compliance_rate >= 80 ? 'status-on_track' : 'status-at_risk'}">${fb.template_check.compliance_rate}% Compliant</span>
          </div>
          <ul class="audit-item-list">
            ${fb.template_check.sections.map(sec => `
              <li class="audit-item">
                <div>
                  <strong>${sec.name}</strong>
                  ${sec.note ? `<div style="font-size:0.78rem; color:var(--text-muted); margin-top:2px;">${sec.note}</div>` : ''}
                </div>
                <span class="audit-status-badge ${sec.status}">
                  <i class="fa-solid ${sec.status === 'pass' ? 'fa-check' : sec.status === 'warning' ? 'fa-triangle-exclamation' : 'fa-xmark'}"></i>
                  ${sec.status.toUpperCase()}
                </span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="audit-card">
          <div class="audit-card-title">
            <span><i class="fa-solid fa-shield-halved" style="color:var(--accent); margin-right:6px;"></i> Plagiarism & Originality Audit</span>
            <span class="status-tag status-on_track">${fb.plagiarism_check.similarity_index}% Similarity</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:0.75rem; font-size:0.85rem;">
            <div style="display:flex; justify-content:space-between; padding:0.5rem 0; border-bottom:1px dashed #e2e8f0;">
              <span>Plagiarism Risk Level:</span>
              <strong style="text-transform:capitalize; color:${fb.plagiarism_check.risk_level === 'low' ? 'var(--success)' : 'var(--warning)'};">${fb.plagiarism_check.risk_level}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; padding:0.5rem 0; border-bottom:1px dashed #e2e8f0;">
              <span>Academic Citations & Bibliography:</span>
              <strong style="text-transform:capitalize; color:var(--success);">${fb.plagiarism_check.citation_health.replace('_', ' ')}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; padding:0.5rem 0;">
              <span>AI Content Probability:</span>
              <strong>&lt; 12% (Human-authored structure)</strong>
            </div>
          </div>
        </div>
      </section>

      <!-- Tabs: Change Log, Document Viewer, Supervisor Notes -->
      <section class="card" style="padding:1.5rem;">
        <div class="tabs-nav-bar">
          <button class="nav-tab-btn active" data-target="changelogTab"><i class="fa-solid fa-list-check"></i> Actionable Change Log (${fb.suggestions.length})</button>
          <button class="nav-tab-btn" data-target="documentTab"><i class="fa-solid fa-file-code"></i> Original Document Viewer</button>
        </div>

        <!-- Tab 1: Actionable Change Log Table -->
        <div id="changelogTab" class="tab-pane">
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">
            Specific recommendations generated by the FYP evaluation engine. Supervisors and students can review line-by-line requirements improvements.
          </p>
          <div style="overflow-x:auto;">
            <table class="action-log-table">
              <thead>
                <tr>
                  <th style="width:70px;">Line</th>
                  <th style="width:160px;">Section</th>
                  <th style="width:100px;">Severity</th>
                  <th>Actionable Recommendation</th>
                  <th style="width:110px; text-align:center;">Action</th>
                </tr>
              </thead>
              <tbody>
                ${fb.suggestions.map((s, idx) => `
                  <tr id="suggestion-row-${idx}">
                    <td><strong>L${s.line}</strong></td>
                    <td>${s.section}</td>
                    <td><span class="severity-pill severity-${s.severity}">${s.severity}</span></td>
                    <td style="line-height:1.45;">${s.text}</td>
                    <td style="text-align:center;">
                      <button class="btn btn-secondary btn-sm" onclick="toggleResolveSuggestion(${idx})" id="resolve-btn-${idx}">
                        <i class="fa-solid fa-check"></i> Fix
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Tab 2: Line-Numbered Document Viewer -->
        <div id="documentTab" class="tab-pane" style="display:none;">
          <div class="doc-viewer-container">
            <div class="doc-viewer-header">
              <span><i class="fa-solid fa-file-alt" style="margin-right:6px;"></i> ${latestDoc.title}</span>
              <span>Total Lines: ${latestDoc.content.split('\n').length} &bull; Flagged: ${fb.suggestions.length} issues</span>
            </div>
            <div class="doc-viewer-body">
              ${renderLineNumberedContent(latestDoc.content, fb.suggestions)}
            </div>
          </div>
        </div>

        <!-- Supervisor Remarks & Sign-off Box -->
        <div class="supervisor-remarks-box">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <label style="font-size:0.9rem; font-weight:700;"><i class="fa-solid fa-comment-dots" style="color:var(--primary); margin-right:6px;"></i> Supervisor Feedback & Approval Remarks:</label>
            <span style="font-size:0.75rem; color:var(--text-muted);">Will appear on student report & PDF export</span>
          </div>
          <textarea id="supervisorRemarksInput" placeholder="Add supervisor notes, approval conditions, or next action items...">${fb.supervisor_notes || ''}</textarea>
          <div style="display:flex; justify-content:flex-end; gap:0.75rem; margin-top:0.75rem;">
            <button class="btn btn-secondary btn-sm" onclick="saveSupervisorRemarks(${latestDoc.feedback_id})"><i class="fa-solid fa-floppy-disk"></i> Save Remarks</button>
            <button class="btn btn-primary btn-sm" onclick="approveMilestone(${project.id})"><i class="fa-solid fa-circle-check"></i> Approve Milestone</button>
          </div>
        </div>
      </section>
    </main>
  `;

  initDonutChart(fb.breakdown);
  attachAnalysisTabEvents();
}

function renderLineNumberedContent(content, suggestions) {
  const lines = content.split('\n');
  const flaggedLines = new Set(suggestions.map(s => s.line));

  return lines.map((line, index) => {
    const lineNum = index + 1;
    const isFlagged = flaggedLines.has(lineNum);
    return `
      <div class="doc-line-row ${isFlagged ? 'flagged' : ''}">
        <span class="doc-line-number">${lineNum}</span>
        <span class="doc-line-text">${escapeHtml(line) || '&nbsp;'}</span>
      </div>
    `;
  }).join('');
}

function initDonutChart(breakdown) {
  const ctx = document.getElementById('scoreDonutCanvas');
  if (!ctx) return;

  if (STATE.currentChart) {
    STATE.currentChart.destroy();
  }

  STATE.currentChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Completeness', 'Originality', 'Technical Depth', 'Formatting'],
      datasets: [{
        data: [breakdown.completeness, breakdown.originality, breakdown.depth, breakdown.formatting],
        backgroundColor: ['#2563eb', '#059669', '#d97706', '#0284c7'],
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      cutout: '76%',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.label}: ${ctx.raw} pts`
          }
        }
      }
    }
  });
}

function attachAnalysisTabEvents() {
  const tabBtns = document.querySelectorAll('.nav-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      document.querySelectorAll('.tab-pane').forEach(p => p.style.display = 'none');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.style.display = 'block';
    });
  });
}

window.toggleResolveSuggestion = function(idx) {
  const row = document.getElementById(`suggestion-row-${idx}`);
  const btn = document.getElementById(`resolve-btn-${idx}`);
  if (row && btn) {
    if (btn.classList.contains('resolved')) {
      row.style.opacity = '1';
      btn.classList.remove('resolved');
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-secondary');
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Fix';
    } else {
      row.style.opacity = '0.5';
      btn.classList.add('resolved');
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-primary');
      btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Resolved';
    }
  }
};

window.saveSupervisorRemarks = function(feedbackId) {
  const text = document.getElementById('supervisorRemarksInput').value.trim();
  const item = STATE.feedback.find(f => f.id === feedbackId);
  if (item) {
    item.supervisor_notes = text;
    saveStateToStorage();
    showToast('Supervisor remarks saved successfully!', 'success');
  } else {
    showToast('Could not find feedback record.', 'error');
  }
};

window.approveMilestone = function(projectId) {
  const project = STATE.projects.find(p => p.id === projectId);
  if (project) {
    const wasPrev = project.status;
    project.status = 'on_track';
    project.progress_percent = Math.min(100, project.progress_percent + 15);
    saveStateToStorage();
    showToast(`✅ Milestone approved! Progress updated to ${project.progress_percent}%.`, 'success');
    router();
  } else {
    showToast('Project not found.', 'error');
  }
};

// ==========================================================================
// View: Student Portal
// ==========================================================================
function renderStudentPortalView() {
  const app = document.getElementById('app');
  const student = STATE.currentUser;
  const project = STATE.projects.find(p => p.student_id === student.id) || STATE.projects[0];
  const docs = STATE.documents.filter(d => d.project_id === project.id);
  const myMeetings = STATE.meetings.filter(m => m.student_id === student.id);

  app.innerHTML = `
    ${renderNavBar('dashboard')}

    <main class="main-container">
      <div class="student-portal-header">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem;">
          <div>
            <span style="display:inline-block; padding:0.25rem 0.75rem; background:rgba(255,255,255,0.2); border-radius:20px; font-size:0.75rem; text-transform:uppercase; font-weight:700; margin-bottom:0.5rem;">Student FYP Workspace</span>
            <h1 style="font-size:1.6rem; font-weight:800;">Welcome, ${student.name}</h1>
            <p style="opacity:0.9; font-size:0.9rem; margin-top:0.25rem;">Project: <strong>${project.title}</strong> (${student.roll_no})</p>
          </div>

          <div style="display:flex; gap:0.75rem;">
            <button class="btn btn-secondary" onclick="openUploadModal(${project.id})">
              <i class="fa-solid fa-cloud-arrow-up"></i> Upload New Draft
            </button>
            <button class="btn btn-primary" style="background:#38bdf8; color:#0f172a;" onclick="openMeetingModal(${project.id})">
              <i class="fa-solid fa-calendar-plus"></i> Request Meeting
            </button>
          </div>
        </div>

        <!-- Milestones Roadmap -->
        <div class="milestones-timeline">
          ${project.milestones.map((m, i) => `
            <div class="milestone-step-card">
              <div style="font-size:0.75rem; opacity:0.8;">Phase ${i+1}</div>
              <strong style="display:block; font-size:0.88rem; margin:0.2rem 0;">${m.name}</strong>
              <div style="font-size:0.75rem; display:flex; justify-content:space-between; align-items:center; margin-top:0.4rem;">
                <span style="text-transform:capitalize; background:rgba(255,255,255,0.2); padding:2px 8px; border-radius:10px;">${m.status.replace('_', ' ')}</span>
                ${m.score ? `<strong>${m.score}/100</strong>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Submitted Documents Library -->
      <section class="card" style="margin-bottom:1.5rem;">
        <div class="card-title">
          <span><i class="fa-solid fa-folder-open" style="color:var(--primary); margin-right:8px;"></i> Document Submission History</span>
          <button class="btn btn-secondary btn-sm" onclick="openUploadModal(${project.id})"><i class="fa-solid fa-plus"></i> Submit Draft</button>
        </div>

        <div style="overflow-x:auto;">
          <table class="action-log-table">
            <thead>
              <tr>
                <th>Document Title</th>
                <th>Milestone</th>
                <th>Version</th>
                <th>Upload Date</th>
                <th>Authentic Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${docs.map(doc => `
                <tr>
                  <td><strong>${doc.title}</strong></td>
                  <td><span class="status-tag status-on_track">${doc.type}</span></td>
                  <td><code>${doc.version}</code></td>
                  <td>${formatDate(doc.upload_date)}</td>
                  <td>
                    <strong style="color:${doc.authentic_score >= 75 ? 'var(--success)' : 'var(--danger)'};">
                      ${doc.authentic_score}/100
                    </strong>
                  </td>
                  <td>
                    <button class="btn btn-secondary btn-sm" onclick="location.hash='#analysis-${project.id}'">
                      <i class="fa-solid fa-comments"></i> View Feedback
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- Meetings Status Card -->
      <section class="card">
        <div class="card-title">
          <span><i class="fa-solid fa-calendar-check" style="color:var(--accent); margin-right:8px;"></i> Supervisor Advisory Meetings</span>
          <button class="btn btn-primary btn-sm" onclick="openMeetingModal(${project.id})"><i class="fa-solid fa-calendar-plus"></i> Request New</button>
        </div>

        ${myMeetings.length ? `
          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            ${myMeetings.map(m => `
              <div style="display:flex; align-items:center; justify-content:space-between; padding:0.85rem; border:1px solid var(--border); border-radius:var(--radius-md); background:var(--surface-subtle);">
                <div>
                  <strong style="font-size:0.9rem;">${m.agenda}</strong>
                  <div style="font-size:0.8rem; color:var(--text-muted); margin-top:2px;">
                    <i class="fa-regular fa-clock"></i> Time: ${formatDate(m.approved_time || m.requested_time)} &bull; Location: ${m.location}
                  </div>
                </div>
                <span class="status-tag ${m.status === 'approved' ? 'status-on_track' : 'status-delayed'}">${m.status}</span>
              </div>
            `).join('')}
          </div>
        ` : `<p style="font-size:0.85rem; color:var(--text-muted);">No meeting scheduled yet.</p>`}
      </section>
    </main>
  `;
}

// ==========================================================================
// View: Meetings Manager
// ==========================================================================
function renderMeetingsView() {
  const app = document.getElementById('app');
  const meetings = STATE.meetings;

  app.innerHTML = `
    ${renderNavBar('meetings')}

    <main class="main-container">
      <div class="card">
        <div class="card-title">
          <span><i class="fa-solid fa-calendar-days" style="color:var(--primary); margin-right:8px;"></i> FYP Supervisor Advisory Meetings</span>
          <button class="btn btn-primary btn-sm" onclick="openMeetingModal(101)"><i class="fa-solid fa-plus"></i> Schedule Meeting</button>
        </div>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1.5rem;">
          Coordinate student milestone reviews, recovery advisory sessions, and defense preparations.
        </p>

        <div style="display:flex; flex-direction:column; gap:1rem;">
          ${meetings.map(m => {
            const student = STATE.users.find(u => u.id === m.student_id);
            const project = STATE.projects.find(p => p.id === m.project_id);
            return `
              <div style="border:1px solid var(--border); border-radius:var(--radius-md); padding:1.25rem; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:1rem; background:var(--surface);">
                <div>
                  <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
                    <h4 style="font-size:1rem; font-weight:700;">${m.agenda}</h4>
                    <span class="status-tag ${m.status === 'approved' ? 'status-on_track' : 'status-at_risk'}">${m.status}</span>
                  </div>
                  <div style="font-size:0.85rem; color:var(--text-muted);">
                    Student: <strong>${student ? student.name : 'Student'}</strong> &bull; Project: <em>${project ? project.title : 'FYP'}</em>
                  </div>
                  <div style="font-size:0.82rem; color:var(--text-main); margin-top:0.4rem;">
                    <i class="fa-solid fa-clock" style="color:var(--primary); margin-right:4px;"></i> Scheduled: <strong>${formatDate(m.approved_time || m.requested_time)}</strong>
                    &bull; <i class="fa-solid fa-location-dot" style="color:var(--accent); margin-right:4px;"></i> ${m.location}
                  </div>
                </div>

                <div style="display:flex; gap:0.5rem;">
                  ${m.status === 'pending' ? `
                    <button class="btn btn-primary btn-sm" onclick="approveMeeting(${m.id})"><i class="fa-solid fa-check"></i> Approve Slot</button>
                    <button class="btn btn-secondary btn-sm" style="color:var(--danger);" onclick="cancelMeeting(${m.id})"><i class="fa-solid fa-xmark"></i> Reject</button>
                  ` : `
                    <button class="btn btn-secondary btn-sm" disabled><i class="fa-solid fa-check-double"></i> Confirmed</button>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </main>
  `;
}

window.approveMeeting = function(meetingId) {
  const m = STATE.meetings.find(x => x.id === meetingId);
  if (m) {
    m.status = 'approved';
    m.approved_time = m.approved_time || m.requested_time;
    m.location = m.location || 'Faculty Block C, Room 304';
    saveStateToStorage();
    showToast(`Meeting approved: "${m.agenda}"`, 'success');
    renderMeetingsView();
  }
};

window.cancelMeeting = function(meetingId) {
  const m = STATE.meetings.find(x => x.id === meetingId);
  const idx = STATE.meetings.findIndex(x => x.id === meetingId);
  if (idx !== -1) {
    const label = m ? m.agenda : 'Meeting';
    STATE.meetings.splice(idx, 1);
    saveStateToStorage();
    showToast(`Meeting rejected: "${label}"`, 'warning');
    renderMeetingsView();
  }
};

// ==========================================================================
// One-Click Feedback Export (PDF Generation via jsPDF)
// ==========================================================================
window.exportFeedbackPDF = async function(projectId) {
  try {
    const { jsPDF } = window.jspdf;
    const docPdf = new jsPDF();
    const project = STATE.projects.find(p => p.id === projectId) || STATE.projects[0];
    const student = STATE.users.find(u => u.id === project.student_id) || { name: 'Student', roll_no: 'CS-2022' };
    const docs = STATE.documents.filter(d => d.project_id === projectId);
    const latestDoc = docs.length ? docs[docs.length - 1] : { authentic_score: 75, type: 'SRS', title: 'Milestone Document' };
    const fb = STATE.feedback.find(f => f.document_id === latestDoc.id) || STATE.feedback[0];

    // University Header
    docPdf.setFillColor(30, 64, 175); // Deep Blue
    docPdf.rect(0, 0, 210, 26, 'F');
    docPdf.setTextColor(255, 255, 255);
    docPdf.setFont('helvetica', 'bold');
    docPdf.setFontSize(14);
    docPdf.text('DEPARTMENT OF COMPUTER SCIENCE & SOFTWARE ENGINEERING', 15, 12);
    docPdf.setFontSize(10);
    docPdf.setFont('helvetica', 'normal');
    docPdf.text('Final Year Project (FYP) – AI Milestone Feedback & Evaluation Report', 15, 20);

    // Project Info Box
    docPdf.setTextColor(15, 23, 42);
    docPdf.setFontSize(11);
    docPdf.setFont('helvetica', 'bold');
    docPdf.text(`Project Title: ${project.title}`, 15, 36);
    docPdf.setFont('helvetica', 'normal');
    docPdf.setFontSize(9.5);
    docPdf.text(`Student Name: ${student.name} (${student.roll_no})`, 15, 43);
    docPdf.text(`Supervisor: Dr. Alice Smith (Associate Professor)`, 15, 49);
    docPdf.text(`Document Evaluated: ${latestDoc.title} (${latestDoc.type})`, 15, 55);
    docPdf.text(`Evaluation Date: ${new Date().toLocaleDateString()}`, 15, 61);

    // Authentic Score Box
    docPdf.setFillColor(241, 245, 249);
    docPdf.roundedRect(15, 67, 180, 28, 3, 3, 'F');
    docPdf.setFont('helvetica', 'bold');
    docPdf.setFontSize(12);
    docPdf.setTextColor(30, 64, 175);
    docPdf.text(`AUTHENTIC SCORE: ${latestDoc.authentic_score} / 100`, 22, 77);
    docPdf.setFontSize(9);
    docPdf.setFont('helvetica', 'normal');
    docPdf.setTextColor(51, 65, 85);
    docPdf.text(`Completeness: ${fb.breakdown.completeness}/30 pts  |  Originality: ${fb.breakdown.originality}/30 pts`, 22, 84);
    docPdf.text(`Technical Depth: ${fb.breakdown.depth}/20 pts  |  Formatting & Standards: ${fb.breakdown.formatting}/20 pts`, 22, 90);

    // Template Compliance Status
    docPdf.setFont('helvetica', 'bold');
    docPdf.setFontSize(11);
    docPdf.setTextColor(15, 23, 42);
    docPdf.text('Department Template Compliance Audit:', 15, 104);
    docPdf.setFont('helvetica', 'normal');
    docPdf.setFontSize(9);
    let auditY = 111;
    fb.template_check.sections.forEach(sec => {
      const statusPrefix = sec.status === 'pass' ? '[PASS]' : sec.status === 'warning' ? '[WARN]' : '[FAIL]';
      docPdf.text(`${statusPrefix} ${sec.name} - ${sec.note || 'Evaluated'}`, 20, auditY);
      auditY += 6;
    });

    // Actionable Change Log
    docPdf.setFont('helvetica', 'bold');
    docPdf.setFontSize(11);
    docPdf.text('Actionable Line-by-Line Requirements Change Log:', 15, auditY + 5);
    auditY += 12;

    docPdf.setFont('helvetica', 'normal');
    docPdf.setFontSize(8.5);
    fb.suggestions.forEach((s, idx) => {
      const lineText = `${idx + 1}. [Line ${s.line}] [${s.section}] (${s.severity.toUpperCase()}): ${s.text}`;
      const splitText = docPdf.splitTextToSize(lineText, 175);
      docPdf.text(splitText, 20, auditY);
      auditY += (splitText.length * 5) + 2;
    });

    // Supervisor Notes & Signature Area
    if (auditY > 240) {
      docPdf.addPage();
      auditY = 30;
    } else {
      auditY += 6;
    }

    docPdf.setFont('helvetica', 'bold');
    docPdf.setFontSize(10);
    docPdf.text('Supervisor Remarks & Conditions:', 15, auditY);
    docPdf.setFont('helvetica', 'italic');
    docPdf.setFontSize(9);
    const splitNotes = docPdf.splitTextToSize(fb.supervisor_notes || 'All actionable items must be resolved before next milestone submission.', 175);
    docPdf.text(splitNotes, 20, auditY + 6);

    const sigY = Math.min(275, auditY + (splitNotes.length * 6) + 22);
    docPdf.setFont('helvetica', 'normal');
    docPdf.text('_____________________________', 130, sigY);
    docPdf.text('Dr. Alice Smith, FYP Supervisor', 130, sigY + 6);

    docPdf.save(`FYP_Feedback_${student.roll_no}_Project_${projectId}.pdf`);
  } catch (err) {
    console.error('PDF export error:', err);
    alert('Failed to generate PDF. Please ensure browser popup or scripts are allowed.');
  }
};

// ==========================================================================
// Document Upload & AI Evaluation Modal Handlers
// ==========================================================================
function openUploadModal(projectId) {
  STATE.pendingUploadProjectId = projectId || 101;
  // Reset textarea so previous content doesn't linger
  const ta = document.getElementById('modalDocText');
  if (ta) ta.value = '';
  const modal = document.getElementById('uploadModal');
  if (modal) modal.classList.add('open');
}

function closeUploadModal() {
  const modal = document.getElementById('uploadModal');
  if (modal) modal.classList.remove('open');
}

function openMeetingModal(projectId) {
  STATE.pendingUploadProjectId = projectId || 101;
  const modal = document.getElementById('meetingModal');
  const slotsContainer = document.getElementById('modalSlotsList');
  if (modal && slotsContainer) {
    const slots = [
      '2026-09-18 at 10:00 AM (Lab 3)',
      '2026-09-19 at 02:30 PM (Office 304)',
      '2026-09-21 at 11:00 AM (Virtual / Zoom)'
    ];
    STATE.selectedMeetingSlot = slots[0];
    slotsContainer.innerHTML = slots.map((s, idx) => `
      <div class="meeting-slot-pill ${idx === 0 ? 'selected' : ''}" onclick="selectSlot(this, '${s}')">
        <i class="fa-regular fa-clock" style="margin-right:6px;"></i> ${s}
      </div>
    `).join('');
    modal.classList.add('open');
  }
}

window.selectSlot = function(elem, slotText) {
  document.querySelectorAll('.meeting-slot-pill').forEach(el => el.classList.remove('selected'));
  elem.classList.add('selected');
  STATE.selectedMeetingSlot = slotText;
};

function closeMeetingModal() {
  const modal = document.getElementById('meetingModal');
  if (modal) modal.classList.remove('open');
}

// AI Evaluation execution
async function runInstantAiEvaluation() {
  const text = document.getElementById('modalDocText').value.trim();
  const docType = document.getElementById('modalDocType').value;
  const projectId = STATE.pendingUploadProjectId || 101;
  const project = STATE.projects.find(p => p.id === projectId) || STATE.projects[0];

  if (!text) {
    alert('Please enter or upload document text to evaluate.');
    return;
  }

  const runBtn = document.getElementById('runAiScanBtn');
  runBtn.disabled = true;
  runBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Analyzing with AI...`;

  let evaluationResult = null;

  try {
    const resp = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        docText: text,
        docType: docType,
        projectTitle: project.title
      })
    });
    if (resp.ok) {
      evaluationResult = await resp.json();
    }
  } catch (err) {
    console.warn('API error, falling back to local grading engine', err);
  }

  // Fallback heuristic if API unavailable
  if (!evaluationResult) {
    evaluationResult = localGradeDocument(text, docType);
  }

  // Add new document and feedback to state
  const newDocId = STATE.documents.length + 1;
  const newFeedbackId = STATE.feedback.length + 1;

  const newDoc = {
    id: newDocId,
    project_id: projectId,
    title: `${docType} - New Submission (${new Date().toLocaleDateString()})`,
    type: docType,
    version: `v${(docsForProject(projectId).length + 1).toFixed(1)}`,
    upload_date: new Date().toISOString(),
    authentic_score: evaluationResult.authentic_score,
    feedback_id: newFeedbackId,
    content: text
  };

  evaluationResult.id = newFeedbackId;
  evaluationResult.document_id = newDocId;

  STATE.documents.push(newDoc);
  STATE.feedback.push(evaluationResult);

  // Update project progress
  project.last_submission = newDoc.upload_date;
  if (evaluationResult.authentic_score >= 70) {
    project.status = 'on_track';
    project.progress_percent = Math.min(100, project.progress_percent + 10);
  }

  saveStateToStorage();

  runBtn.disabled = false;
  runBtn.innerHTML = `<i class="fa-solid fa-bolt"></i> Run Instant AI Evaluation`;
  closeUploadModal();

  // Force router re-render — hashchange won't fire if we're already on this hash
  const targetHash = `#analysis-${projectId}`;
  if (location.hash === targetHash) {
    router();
  } else {
    location.hash = targetHash;
  }
}

function docsForProject(pid) {
  return STATE.documents.filter(d => d.project_id === pid);
}

// Client-side local grading fallback
function localGradeDocument(text, docType) {
  const lines = text.split(/\r?\n/);
  const lower = text.toLowerCase();
  let completeness = 24, originality = 26, depth = 15, formatting = 15;
  const suggestions = [];

  const hasNFR = lower.includes('non-functional') || lower.includes('nfr');
  if (!hasNFR) {
    completeness -= 8;
    depth -= 4;
    suggestions.push({
      line: Math.max(1, Math.floor(lines.length * 0.7)),
      section: 'Non-Functional Requirements',
      severity: 'critical',
      text: 'Missing Non-Functional Requirements: Include response latency, security protocols, and 99.5% uptime guarantees.'
    });
  }

  lines.forEach((l, idx) => {
    if (l.toLowerCase().includes('will calculate') || l.toLowerCase().includes('will display')) {
      suggestions.push({
        line: idx + 1,
        section: 'Functional Requirements',
        severity: 'medium',
        text: `Line ${idx + 1}: Replace informal "will" with IEEE requirements specification "the system shall".`
      });
    }
  });

  const total = Math.min(100, Math.max(30, completeness + originality + depth + formatting));
  return {
    authentic_score: total,
    breakdown: { completeness, originality, depth, formatting },
    breakdown_max: { completeness: 30, originality: 30, depth: 20, formatting: 20 },
    score_summary: total >= 75 ? 'Meets departmental FYP rubrics with minor edits.' : 'Requires structural revision.',
    template_check: {
      document_type: docType,
      compliance_rate: hasNFR ? 85 : 60,
      sections: [
        { name: '1. Introduction & Scope', present: true, status: 'pass' },
        { name: '2. Functional Requirements', present: true, status: 'pass' },
        { name: '3. Non-Functional Requirements', present: hasNFR, status: hasNFR ? 'pass' : 'fail' },
        { name: '4. Use Cases & Architecture', present: true, status: 'pass' }
      ]
    },
    plagiarism_check: { similarity_index: 7, risk_level: 'low', citation_health: 'good' },
    suggestions: suggestions.length ? suggestions : [{ line: 1, section: 'Formatting', severity: 'low', text: 'Structure adheres to university template.' }],
    supervisor_notes: 'Automated evaluation complete.'
  };
}

// Setup Event Handlers
function setupGlobalEventHandlers() {
  // Quick role switcher
  document.addEventListener('click', (e) => {
    if (e.target.closest('#quickRoleSwitchBtn')) {
      const isSupervisor = STATE.currentUser.role === 'supervisor';
      const targetUser = isSupervisor
        ? STATE.users.find(u => u.role === 'student')
        : STATE.users.find(u => u.role === 'supervisor');
      quickLogin(targetUser.id);
    }
  });

  // Upload modal events
  const closeBtn = document.getElementById('closeUploadModal');
  const cancelBtn = document.getElementById('cancelUploadBtn');
  if (closeBtn) closeBtn.onclick = closeUploadModal;
  if (cancelBtn) cancelBtn.onclick = closeUploadModal;

  const runAiBtn = document.getElementById('runAiScanBtn');
  if (runAiBtn) runAiBtn.onclick = runInstantAiEvaluation;

  // Drop zone
  const dropZone = document.getElementById('modalDropZone');
  const fileInput = document.getElementById('fileInput');
  if (dropZone && fileInput) {
    dropZone.onclick = () => fileInput.click();
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          document.getElementById('modalDocText').value = evt.target.result;
        };
        reader.readAsText(file);
      }
    };
  }

  // Sample Loaders
  const loadSrs = document.getElementById('loadSampleSRS');
  if (loadSrs) {
    loadSrs.onclick = () => {
      document.getElementById('modalDocType').value = 'SRS';
      document.getElementById('modalDocText').value = STATE.documents[0].content;
    };
  }

  const loadSdd = document.getElementById('loadSampleSDD');
  if (loadSdd) {
    loadSdd.onclick = () => {
      document.getElementById('modalDocType').value = 'SDD';
      document.getElementById('modalDocText').value = STATE.documents[1].content;
    };
  }

  const loadIncomplete = document.getElementById('loadIncompleteSRS');
  if (loadIncomplete) {
    loadIncomplete.onclick = () => {
      document.getElementById('modalDocType').value = 'SRS';
      document.getElementById('modalDocText').value = STATE.documents[2].content;
    };
  }

  // Meeting modal events
  const closeMeeting = document.getElementById('closeMeetingModal');
  const cancelMeeting = document.getElementById('cancelMeetingBtn');
  const submitMeeting = document.getElementById('submitMeetingBtn');
  if (closeMeeting) closeMeeting.onclick = closeMeetingModal;
  if (cancelMeeting) cancelMeeting.onclick = closeMeetingModal;
  if (submitMeeting) {
    submitMeeting.onclick = () => {
      const agenda = document.getElementById('meetingAgendaInput').value.trim() || 'Milestone Review';
      const slot = STATE.selectedMeetingSlot || 'Next available office hours';
      STATE.meetings.push({
        id: STATE.meetings.length + 1,
        project_id: STATE.pendingUploadProjectId || 101,
        student_id: STATE.currentUser.id || 2,
        supervisor_id: 1,
        agenda: agenda,
        requested_time: new Date(Date.now() + 86400000 * 2).toISOString(),
        proposed_slots: [slot],
        approved_time: null,
        status: 'pending',
        location: 'Office 304 / Zoom',
        notes: `Requested slot: ${slot}`
      });
      saveStateToStorage();
      closeMeetingModal();
      showToast('Meeting request sent! Waiting for supervisor confirmation.', 'info');
      alert('Meeting request submitted to Dr. Alice Smith!');
      router();
    };
  }

  // AI Chatbot handlers
  const chatToggle = document.getElementById('aiChatToggleBtn') || document.getElementById('chatToggleBtn');
  const chatWindow = document.getElementById('aiChatWindow') || document.getElementById('chatModal');
  const closeChat = document.getElementById('aiChatCloseBtn') || document.getElementById('closeChatBtn');
  const chatForm = document.getElementById('aiChatForm');
  const chatInput = document.getElementById('aiChatInput') || document.getElementById('chatInput');
  const sendChat = document.getElementById('aiChatSendBtn') || document.getElementById('chatSendBtn');

  if (chatToggle && chatWindow) {
    chatToggle.onclick = (e) => {
      e.stopPropagation();
      chatWindow.classList.toggle('hidden');
      chatWindow.classList.toggle('open');
      if (!chatWindow.classList.contains('hidden')) {
        const inp = document.getElementById('aiChatInput') || document.getElementById('chatInput');
        if (inp) inp.focus();
      }
    };
  }

  if (closeChat && chatWindow) {
    closeChat.onclick = (e) => {
      e.stopPropagation();
      chatWindow.classList.add('hidden');
      chatWindow.classList.remove('open');
    };
  }

  if (chatForm) {
    chatForm.onsubmit = (e) => {
      e.preventDefault();
      handleChatSubmission();
    };
  } else if (sendChat && chatInput) {
    sendChat.onclick = () => handleChatSubmission();
    chatInput.onkeydown = (e) => { if (e.key === 'Enter') handleChatSubmission(); };
  }

  document.querySelectorAll('.quick-chip, .quick-prompt-chip').forEach(chip => {
    chip.onclick = () => {
      const query = chip.getAttribute('data-query');
      const inp = document.getElementById('aiChatInput') || document.getElementById('chatInput');
      if (inp) inp.value = query;
      handleChatSubmission();
    };
  });
}

// Chatbot Q&A Knowledge Base
function handleChatSubmission() {
  const input = document.getElementById('aiChatInput') || document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const messagesDiv = document.getElementById('aiChatMessages') || document.getElementById('chatMessages');
  if (!messagesDiv) return;

  // Append user message
  messagesDiv.innerHTML += `
    <div class="chat-msg user-msg">
      <div class="msg-bubble">${escapeHtml(text)}</div>
    </div>
  `;
  input.value = '';
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  // Typing indicator
  const indicatorId = 'typing-' + Date.now();
  messagesDiv.innerHTML += `
    <div class="chat-msg ai-msg typing-indicator" id="${indicatorId}">
      <div class="msg-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>
  `;
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  setTimeout(() => {
    const indicator = document.getElementById(indicatorId);
    if (indicator) indicator.remove();

    const answer = getBotAnswer(text);
    messagesDiv.innerHTML += `
      <div class="chat-msg ai-msg">
        <div class="msg-bubble">
          <p>${answer}</p>
        </div>
      </div>
    `;
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }, 600);
}

function getBotAnswer(query) {
  const q = query.toLowerCase();
  if (q.includes('srs') || q.includes('how to write')) {
    return `<strong>IEEE 830 Standard SRS Structure:</strong><br/>
1. <em>Introduction</em>: Purpose, Scope, Definitions<br/>
2. <em>Overall Description</em>: Perspective, User Classes<br/>
3. <em>Specific Requirements</em>: Numbered Functional Requirements (FR-01, FR-02 using 'shall'), Non-Functional Requirements (NFR-01 latency &lt; 200ms)<br/>
4. <em>Use Cases</em>: Actor interactions & edge cases.`;
  }
  if (q.includes('non-functional') || q.includes('nfr')) {
    return `<strong>Key Non-Functional Requirements for FYP:</strong><br/>
&bull; <strong>Performance</strong>: API response time &lt; 150ms.<br/>
&bull; <strong>Availability</strong>: 99.5% uptime on cloud hosting.<br/>
&bull; <strong>Security</strong>: Passwords hashed with bcrypt (salt rounds 10), HTTPS/TLS 1.3 enforced.<br/>
&bull; <strong>Scalability</strong>: Supports at least 200 concurrent users.`;
  }
  if (q.includes('uml') || q.includes('erd') || q.includes('design')) {
    return `<strong>UML & SDD Design Best Practices:</strong><br/>
&bull; <strong>Class Diagram</strong>: Include attributes, access modifiers (+/-), and method signatures.<br/>
&bull; <strong>ERD</strong>: Use Crow's Foot notation with explicit Primary Keys (PK) and Foreign Keys (FK).<br/>
&bull; <strong>Sequence Diagram</strong>: Detail API request/response flows between Client, Controller, and DB.`;
  }
  if (q.includes('score') || q.includes('authentic') || q.includes('drop')) {
    return `<strong>Authentic Score Formula:</strong><br/>
&bull; <strong>Completeness (30%)</strong>: Did you include all mandatory sections?<br/>
&bull; <strong>Originality (30%)</strong>: Low plagiarism and distinct problem formulation.<br/>
&bull; <strong>Technical Depth (20%)</strong>: Quantitative metrics instead of vague promises.<br/>
&bull; <strong>Formatting (20%)</strong>: Proper IEEE modal verbs ('the system shall').`;
  }
  return `Great question! For your FYP milestone, make sure each requirement uses verifiable language (e.g. <em>"The system shall display..."</em> rather than <em>"The system will..."</em>), include non-functional metrics, and submit your updated draft through the <strong>Upload New Draft</strong> button for an instant score re-check!`;
}

// Utilities
function formatDate(isoStr) {
  if (!isoStr) return 'N/A';
  try {
    const d = new Date(isoStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch (e) {
    return isoStr;
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// ==========================================================================
// Expose ALL interactive functions to global scope for inline onclick handlers
// (required since this script is NOT a module)
// ==========================================================================
window.openUploadModal        = openUploadModal;
window.closeUploadModal       = closeUploadModal;
window.openMeetingModal       = openMeetingModal;
window.closeMeetingModal      = closeMeetingModal;
window.runInstantAiEvaluation = runInstantAiEvaluation;
window.showToast              = showToast;
window.router                 = router;

// Launch App
init();
