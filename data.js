/* =====================================================================
   PORTFOLIO DATA  —  edit ONLY this file to change what the site shows.
   - Anything marked  TODO  still needs your real information.
   - Leave a value as "" (empty) if you don't have it; the site hides it.
   - While config.showTodoBadges is true, you will see small orange
     "Add details" tags on the site. Set it to false before submitting.
   ===================================================================== */

const PORTFOLIO = {
  config: {
    showTodoBadges: true, // TODO: change to false when everything is filled in
  },

  /* ---------- 1. PROFESSIONAL PROFILE ---------- */
  profile: {
    firstName: "Lazy-Hanna",
    middleInitial: "L.",
    lastName: "Constantino",
    photo: "assets/photo.jpg",
    roles: ["BSIT Student", "Aspiring QA Tester", "Organization President", "Detail-Oriented Problem Solver"],
    tagline: "Testing systems today, so people can trust them tomorrow.", // TODO: rewrite in your own words if you like
    // TODO: personalise this self-introduction (3–5 sentences)
    intro:
      "Hello! I am Lazy-Hanna L. Constantino, a fourth-year Bachelor of Science in Information Technology student at STI College Alabang, expected to graduate in July 2027. I serve as President of the Computer Society Organization, where I plan events, lead teams, and organize workshops and seminars. I enjoy research, documentation, and presentations, and I want to build a career in quality assurance.",
    careerObjective:
      "A fourth-year Bachelor of Science in Information Technology student at STI College – Alabang seeking an On-the-Job Training (OJT) internship opportunity to apply technical knowledge, problem-solving skills, and teamwork abilities in a professional IT environment. Motivated to gain hands-on industry experience while contributing to the organization's goals and objectives.",
    // TODO: check these match what you want to say in your oral presentation
    immersionGoals: [
      "Turn my basic manual testing knowledge into real testing experience on live projects.",
      "Learn test planning, test case design, and defect reporting, and grow toward test automation.",
      "Build professional habits: punctuality, clear communication, and accepting feedback.",
      "Gain industry-recognised exposure that I can build on toward a QA career after graduation.",
    ],
    stats: [
      { value: 4, suffix: "th", label: "Year BSIT student" },
      { value: 3, suffix: "", label: "“Best in” academic awards" },
      { value: 3, suffix: "", label: "Certifications & trainings" },
      { value: 3, suffix: "", label: "Target HTEs evaluated" },
    ],
  },

  /* ---------- 8. CONTACT INFORMATION ---------- */
  contact: {
    email: "constantinohanna23@gmail.com",
    phone: "09493971571",
    location: "Alabang, Muntinlupa City", // city only on purpose (privacy). Add the full address only if you want to.
    linkedin: "", // TODO: e.g. "https://www.linkedin.com/in/your-name"  (bonus points)
    facebook: "", // optional
    github: "",   // optional
  },

  /* ---------- 2. RESUME ---------- */
  resume: {
    pdf: "assets/resume.pdf",
    image: "assets/resume.jpg",
    education: [
      {
        school: "STI College Alabang (Tertiary)",
        program: "Bachelor of Science in Information Technology",
        period: "Expected graduation: July 2027",
        note: "",
      },
      {
        school: "STI College Alabang (Senior High School)",
        program: "Computer Communication Technology (CCTECH)",
        period: "2021 – 2023",
        note: "",
      },
    ],
    leadership: [
      { role: "President", org: "Computer Society Organization", period: "2023 – 2026" },
      { role: "Treasurer", org: "Student Council Organization", period: "2022 – 2023" },
    ],
    leadershipAchievements: [
      "Recognized as Best Organization (2023–2026)",
      "Organized the Tabulation Team for both Local and Cluster competitions in 2025",
      "Organized and facilitated workshops and seminars",
      "Organized the Tagisan ng Talino Tabulation for 2024–2025",
    ],
  },

  /* ---------- 3. SKILLS SHOWCASE ----------
     "proof" = where you showed this skill. TODO: add more specific proof. */
  skills: [
    { name: "Microsoft Office (Word, Excel, PowerPoint)", type: "Technical", proof: "Used for reports, tabulation and presentations that earned Best in Documentation and Best in Presentation (2025)." },
    { name: "Technical Documentation", type: "Technical", proof: "Awarded Best in Documentation (2025)." },
    { name: "Photo Editing", type: "Technical", proof: "Creative and digital-literacy skill; I also trained in Canva for academic projects." },
    { name: "Video Editing", type: "Technical", proof: "Creative and digital-literacy skill used in school and organization outputs." },
    { name: "Manual Testing (basic)", type: "Technical", proof: "Basic knowledge of manual testing; my main goal for Work Immersion is to grow this on real projects." },
    { name: "Research & Report Writing", type: "Technical", proof: "Researched and wrote the HTE Evaluation Report comparing IBM, Accenture and Concentrix." },
    { name: "Public Speaking & Communication", type: "Soft", proof: "Awarded Best in Presentation (2025); facilitated workshops and seminars." },
    { name: "Leadership", type: "Soft", proof: "President of the Computer Society Organization (2023–2026), recognized as Best Organization." },
    { name: "Project Management", type: "Soft", proof: "Led the tabulation team and organized multi-stage competitions." },
    { name: "Event Planning & Management", type: "Soft", proof: "Organized Local and Cluster competition tabulation (2025) and Tagisan ng Talino Tabulation (2024–2025)." },
    { name: "Teamwork", type: "Soft", proof: "Coordinated officers and members of the organization and the tabulation team." },
    { name: "Problem-Solving", type: "Soft", proof: "Applied in IT coursework and when running competition tabulation under time pressure." },
  ],

  /* ---------- 4. ACADEMIC ACHIEVEMENTS ---------- */
  awards: [
    { title: "Best in PLATECH", year: "2024", detail: "" },
    { title: "Best in Documentation", year: "2025", detail: "" },
    { title: "Best in Presentation", year: "2025", detail: "" },
    { title: "Best Organization (Computer Society Organization)", year: "2023–2026", detail: "Recognition for the organization I lead." },
  ],
  // TODO: add the date, issuer and a picture of each certificate (put the image in assets/ and write its path in "image")
  certifications: [
    { title: "FLEXX Session: The Future of Finance – Trading, AI, FinTech, Crypto, and Web 3", type: "Seminar", date: "", issuer: "", image: "" },
    { title: "Quality Assurance: Key to IT Success", type: "Seminar", date: "", issuer: "", image: "" },
    { title: "Unleash Your Creativity: Mastering Canva for Academic Projects", type: "Training", date: "", issuer: "", image: "" },
  ],

  /* ---------- 5. WORK SAMPLES & PROJECTS ----------
     category: "Leadership" | "Documentation" | "Presentation" | "Community" | "School Project"
     TODO: for each, add a real description, a screenshot in "image" and a link (Google Drive / Canva / PDF) in "link". */
  projects: [
    {
      title: "Tabulation Team – Local & Cluster Competitions",
      category: "Leadership",
      date: "2025",
      role: "Organizer",
      description: "Organized the Tabulation Team that handled scoring and results for both the Local and Cluster competitions in 2025.",
      image: "", link: "", todo: true,
    },
    {
      title: "Tagisan ng Talino Tabulation",
      category: "Leadership",
      date: "2024 – 2025",
      role: "Organizer",
      description: "Organized the tabulation for Tagisan ng Talino, making sure scores were recorded and reported accurately.",
      image: "", link: "", todo: true,
    },
    {
      title: "Workshops and Seminars",
      category: "Community",
      date: "2023 – 2026",
      role: "Organizer & Facilitator",
      description: "Organized and facilitated workshops and seminars for students as President of the Computer Society Organization.",
      image: "", link: "", todo: true,
    },
    {
      title: "Best in Documentation Output",
      category: "Documentation",
      date: "2025",
      role: "Author",
      description: "TODO: Name the project that won Best in Documentation and write 1–2 sentences about it.",
      image: "", link: "", todo: true,
    },
    {
      title: "Best in Presentation Output",
      category: "Presentation",
      date: "2025",
      role: "Presenter",
      description: "TODO: Name the presentation that won Best in Presentation and write 1–2 sentences about it.",
      image: "", link: "", todo: true,
    },
    {
      title: "Best in PLATECH Output",
      category: "School Project",
      date: "2024",
      role: "Developer / Member",
      description: "TODO: Name the PLATECH project that won Best in PLATECH and write 1–2 sentences about it.",
      image: "", link: "", todo: true,
    },
    {
      title: "HTE Evaluation Report (IBM, Accenture, Concentrix)",
      category: "Documentation",
      date: "November 2026",
      role: "Author",
      description: "A researched evaluation of three Host Training Establishments with a comparative table and a final recommendation. See the full comparison further down this page.",
      image: "", link: "#hte", todo: false,
    },
  ],

  /* ---------- 6. COMPANY & HTE EVALUATION ---------- */
  hte: {
    criteria: [
      { key: "reputation", label: "Reputation" },
      { key: "learning", label: "Learning opportunities" },
      { key: "fit", label: "Fit with my QA / testing goal" },
      { key: "access", label: "Accessibility / location" },
      { key: "accept", label: "Chance of being accepted" },
      { key: "growth", label: "Career growth potential" },
    ],
    companies: [
      {
        name: "IBM Philippines",
        short: "IBM",
        rank: 1,
        industry: "IT and consulting",
        industryDetail: "Information technology and consulting: hybrid cloud, artificial intelligence, enterprise software, and IT consulting.",
        background: "IBM (International Business Machines) is one of the oldest technology companies in the world, with roots going back more than a century. In the Philippines its major sites are in Quezon City (Eastwood and UP Ayala Technohub), with additional presence in Taguig and Cebu. Its Philippine internship postings have included consulting interns (developers and testers), test automation, and application development roles.",
        learning: "IBM Philippines has posted consulting internships for developers and testers, including a Test Specialist (Automation) internship, so interns can practice test planning, defect reporting, and automation using enterprise tools and agile practices on real client projects. IBM also offers access to its internal learning platforms and credentials in cloud and AI.",
        pros: ["World-renowned brand that strengthens a résumé", "Exposure to enterprise-grade cloud and AI technology", "Structured consulting and engineering teams", "Strong pathway into IBM Consulting associate roles"],
        cons: ["Internship slots are limited and competitive", "Some roles require client-based schedules (including mid-shift or night-shift)", "Some positions are on-site only"],
        access: "IBM's main Metro Manila office is at One World Place in Bonifacio Global City, Taguig, which is the closest IBM site to my home in Alabang, Muntinlupa City. Technical internship roles have also been posted in Quezon City, where some roles offer hybrid arrangements that reduce travel. Placement in Taguig depends on available openings.",
        growth: "High. IBM Consulting associate roles in the Philippines are a common next step for IT graduates, and the global network allows for specialization in cloud, data, and AI.",
        ratings: { reputation: 5, learning: 5, fit: 5, access: 4, accept: 3, growth: 5 },
        skills: "Test case design, manual and automated testing, defect reporting, agile teamwork.",
      },
      {
        name: "Accenture in the Philippines",
        short: "Accenture",
        rank: 2,
        industry: "Professional services and technology",
        industryDetail: "Professional services: technology consulting, digital transformation, cloud, security, and business process operations.",
        background: "Accenture is a global professional services company serving clients in more than 120 countries. It reports more than 35 years in the Philippines, with offices in Metro Manila (Mandaluyong, Quezon City, Taguig) and Cebu.",
        learning: "Accenture runs the Technology Academy, a program that bridges the gap between industry and academia, and invests heavily in continuous learning, including certifications and online training. Fresh IT graduates often start as associate software engineers or in testing and application support, which fits my QA goal.",
        pros: ["Extremely broad range of projects and industries", "Formal training culture", "Recognized as one of the world's most admired companies", "Flexible and hybrid work culture reported by employees"],
        cons: ["Project assignment can be unpredictable, so a student may not land in a team that matches their specialization", "A large organization can make it harder to get individual attention"],
        access: "Accenture has an office in Taguig, which is closer to my home in Alabang, Muntinlupa City than its Mandaluyong and Quezon City offices. Hybrid work further reduces commuting.",
        growth: "Very high. Defined career levels, rapid promotion for strong performers, and chances to work on international projects.",
        ratings: { reputation: 5, learning: 5, fit: 4, access: 4, accept: 3, growth: 5 },
        skills: "Testing in delivery teams, consulting communication, adaptability across technologies.",
      },
      {
        name: "Concentrix Philippines",
        short: "Concentrix",
        rank: 3,
        industry: "Customer experience, BPO and IT services",
        industryDetail: "Customer experience, business process outsourcing (BPO), and technology services.",
        background: "Concentrix is a global customer experience (CX) and technology services company with a very large Philippine workforce and sites in Quezon City, Pasig, Makati, Cebu, Cagayan de Oro, Pampanga, and Baguio.",
        learning: "Its IT Operations internship covers system-level support, troubleshooting, hardware and software upgrades, patch and antivirus monitoring, inventory reporting, and ticket handling. Interns are paired with mentors for guidance and feedback, and the internship is listed as paid with flexible schedules.",
        pros: ["Many sites and openings, which makes placement more likely", "Hands-on IT support and networking experience", "Paid internship with mentorship", "Sites across several cities, which helps with commute"],
        cons: ["Work leans toward IT operations and support rather than software testing", "Shifts may be irregular", "Less aligned with my QA goal, although troubleshooting and ticket handling still build useful problem-finding skills"],
        access: "Highest of the three, since it has many sites across Metro Manila, including Makati, which is more reachable from my home in Alabang, Muntinlupa City. Exact site and openings must still be confirmed.",
        growth: "Good. Paths exist from IT operations into systems administration, network support, and technical support leadership, and the company promotes from within.",
        ratings: { reputation: 4, learning: 4, fit: 3, access: 5, accept: 4, growth: 4 },
        skills: "Technical troubleshooting, hardware and software support, ticket management, customer-facing communication.",
      },
    ],
    guideQuestions: [
      { q: "Which company best matches my career goals?", a: "IBM, because it has posted tester and test automation internships, which are closest to my goal of becoming a QA tester." },
      { q: "What skills can I develop from each company?", a: "IBM: test case design, manual and automated testing, defect reporting, agile teamwork. Accenture: testing in delivery teams, consulting communication, adaptability across technologies. Concentrix: technical troubleshooting, hardware and software support, ticket management, customer-facing communication." },
      { q: "Which company offers the best learning environment?", a: "Accenture and IBM are close. Accenture has the more formal training programs, while IBM offers deeper technical project work." },
      { q: "Which company would I most likely choose and why?", a: "IBM as my first choice, with Accenture second and Concentrix as my realistic backup." },
      { q: "How will this HTE help prepare me for my future career?", a: "It will let me turn my basic manual testing knowledge into real testing experience, build professional habits, and gain industry-recognized exposure that I can build on toward a QA career after graduation." },
    ],
    recommendation:
      "My top choice is IBM Philippines, followed by Accenture and then Concentrix. IBM best matches my goal of becoming a QA tester who can test any system and offers the strongest brand value. Because IBM and Accenture are competitive and may be harder to reach, I will apply to all three. Concentrix is my safety option: it is easier to access, pays interns, and still builds practical IT skills.",
    sources: [
      { label: "IBM Philippines internships, Prosple", url: "https://pwu.prosple.com/graduate-employers/ibm-philippines/jobs-internships/past?start=36" },
      { label: "IBM Application Developer internship posting, Quezon City", url: "https://be.wizbii.com/company/ibm/job/application-developer-microsoft-net-262" },
      { label: "Accenture in the Philippines, company index", url: "https://www.accenture.com/en/about/company-index?country=ph" },
      { label: "Accenture Technology Academy, Prosple", url: "https://slu.prosple.com/graduate-employers/accenture-in-the-philippines/jobs-internships/technology-academy" },
      { label: "Concentrix Luzon IT Operations Internship, Prosple", url: "https://pwu.prosple.com/graduate-employers/concentrix-philippines/jobs-internships/luzon-it-operations-internship" },
      { label: "Concentrix IT Operations Internship, Concentrix Careers", url: "https://jobs.concentrix.com/global/en/job/CONCGLOBALR1573110EXTERNALENGLOBAL" },
    ],
  },

  /* ---------- 7. REFLECTION (250–300 words) ----------
     TODO: this is a DRAFT built from your resume and HTE report. Rewrite it in your own voice. */
  reflection: [
    "Preparing for Work Immersion has helped me turn a general goal of working in IT into a specific career direction. Researching IBM, Accenture, and Concentrix forced me to ask harder questions: What do interns actually do? Where will I learn the most? Which company fits my goal of becoming a quality assurance tester who can test any system?",
    "Comparing the three companies taught me that an internship is not just a place to finish required hours. It is a place to practice real skills under guidance. I learned to read job postings critically, weigh advantages against disadvantages, and accept that my first choice may not be available. That is why I plan to apply to all three, with Concentrix as a realistic backup that still builds troubleshooting and ticket-handling skills.",
    "My experience as President of the Computer Society Organization and as former Treasurer of the Student Council has also shaped how I see professional responsibility. Organizing the tabulation team for local and cluster competitions showed me that accuracy, deadlines, and teamwork matter, because other people rely on my work being correct. These are the same habits a QA tester needs: attention to detail, clear documentation, and honest reporting of problems.",
    "Looking ahead, I understand that my responsibilities as an intern include being punctual, communicating clearly, asking questions, and accepting feedback. I want to turn my basic manual testing knowledge into real experience and grow toward test automation. Work Immersion is my first step toward that career, and I am ready to learn, contribute, and grow.",
  ],

  /* ---------- BONUS: CAREER DEVELOPMENT PLAN (3–5 years) ----------
     TODO: edit so it reflects your real plan. */
  plan: [
    { when: "Now – July 2027", title: "Finish the degree and complete Work Immersion", text: "Complete my BSIT, finish OJT in a QA or testing role, and build a portfolio of test cases and defect reports." },
    { when: "Year 1 after graduation", title: "Junior QA Tester", text: "Work on manual testing, test planning, and defect reporting in an agile team. Pursue a QA certification (for example ISTQB Foundation)." },
    { when: "Years 2 – 3", title: "QA Analyst / Test Automation", text: "Learn test automation tools and scripting, and take ownership of test suites for whole modules." },
    { when: "Years 4 – 5", title: "Senior QA Engineer", text: "Test any system end to end, mentor new testers, and help shape QA processes for the team." },
  ],

  // BONUS: a 1–2 minute video introduction. Upload to YouTube (Unlisted), then paste ONLY the video ID.
  // e.g. for https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  youtubeId: "dQw4w9WgXcQ"
  video: { youtubeId: "" }, // TODO
};
