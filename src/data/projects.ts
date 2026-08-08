/**
 * Structured, editable project data.
 * Shape mirrors a future database table so it can be moved to a backend
 * and managed from an admin dashboard without changing the UI.
 */

export const PROJECT_DETAILS_PLACEHOLDER = "Project details will be updated.";

export type ProjectFilter = "Infrastructure" | "Operations" | "University Partnership";

export type CaseStudySection = {
  /** Two digit index, e.g. "01" */
  number: string;
  title: string;
  /** Empty array renders the placeholder copy */
  points: string[];
};

export type Project = {
  id: string;
  name: string;
  location: string;
  category: string;
  role: string;
  description: string;
  /** Drives the filter chips */
  filters: ProjectFilter[];
  /** Key of the abstract visual rendered on the card */
  visual: "grid" | "orbit" | "layers" | "pulse" | "beam";
  tags: string[];
  caseStudy: CaseStudySection[];
};

export const projectFilters = ["All", "Infrastructure", "Operations", "University Partnership"] as const;

export const commonResponsibilities = [
  "University Stakeholder Coordination",
  "NxtWave Stakeholder Coordination",
  "Vendor Coordination",
  "BOQ Preparation & Finalization",
  "Budget Alignment",
  "Project Planning",
  "Infrastructure Coordination",
  "Operations Management",
  "Execution Monitoring",
  "Project Tracking",
  "Portfolio Tracking",
  "Progress Reporting",
  "Cross-functional Coordination",
  "Workflow Optimization",
  "AI-powered Productivity",
];

export const valueCards = [
  {
    number: "01",
    title: "BOQ & Scope Management",
    description:
      "Coordinate requirements, prepare and review BOQs, discuss scope with stakeholders, coordinate revisions, and support final BOQ finalization.",
    icon: "FileSpreadsheet",
  },
  {
    number: "02",
    title: "Vendor Coordination",
    description:
      "Coordinate with vendors and service partners, discuss requirements, coordinate quotations, follow up on execution, and resolve operational issues.",
    icon: "Handshake",
  },
  {
    number: "03",
    title: "Stakeholder Management",
    description:
      "Coordinate meetings and communication between university stakeholders, NxtWave stakeholders, internal teams, and vendors to align requirements and execution.",
    icon: "Users",
  },
  {
    number: "04",
    title: "Project & Infrastructure Tracking",
    description:
      "Build and maintain infrastructure trackers, project trackers, and centralized portfolio trackers to monitor requirements, progress, pending actions, dependencies, and deliverables across university projects.",
    icon: "LayoutList",
  },
  {
    number: "05",
    title: "AI & Workflow Optimization",
    description:
      "Use AI tools to improve documentation, reporting, project tracking, data organization, repetitive workflows, and operational processes.",
    icon: "Sparkles",
  },
];

export const caseStudyWorkflow = [
  "Requirements",
  "Stakeholder Discussion",
  "BOQ Preparation",
  "BOQ Finalization",
  "Budget Alignment",
  "Vendor Coordination",
  "Execution",
  "Tracking & Monitoring",
  "Reporting",
  "Delivery",
];

export const technologyAndAi = {
  items: [
    "AI Tools",
    "Project Trackers",
    "Infrastructure Trackers",
    "Portfolio Tracking",
    "Digital Documentation",
    "Workflow Optimization",
    "Reporting & Data Organization",
  ],
  description:
    "I use AI tools and digital workflows to reduce repetitive work, improve documentation, organize project information, build trackers, and optimize operational processes.",
};

const sharedTags = [
  "Stakeholder Coordination",
  "BOQ Coordination",
  "Vendor Coordination",
  "Budget Alignment",
  "Execution Monitoring",
  "Project Tracking",
];

/** Builds the 15 case-study sections; unavailable sections stay empty on purpose. */
function buildCaseStudy(project: {
  name: string;
  location: string;
  category: string;
  description: string;
  overview?: string[];
}): CaseStudySection[] {
  return [
    {
      number: "01",
      title: "Project Overview",
      points: project.overview ?? [
        `${project.name} — ${project.location}.`,
        `Category: ${project.category}.`,
        project.description,
      ],
    },
    {
      number: "02",
      title: "Objective",
      points: [
        "Coordinate and deliver university infrastructure and operational requirements.",
        "Keep requirements, scope, and execution aligned with approved budgets.",
      ],
    },
    {
      number: "03",
      title: "My Role",
      points: [
        "Associate Project Manager — University Partnership & Operations.",
        "Coordinate planning, BOQ discussions, vendors, execution monitoring, and reporting.",
      ],
    },
    {
      number: "04",
      title: "Stakeholders",
      points: [
        "University stakeholders.",
        "NxtWave stakeholders.",
        "Internal cross-functional teams.",
        "Vendors and service partners.",
      ],
    },
    {
      number: "05",
      title: "Scope & Requirements",
      points: [
        "Collect infrastructure and operational requirements from stakeholders.",
        "Review requirements and document scope for discussion and approval.",
      ],
    },
    {
      number: "06",
      title: "BOQ & Scope Finalization",
      points: [
        "Coordinate BOQ preparation and review with relevant teams.",
        "Coordinate revisions and support final BOQ finalization.",
      ],
    },
    {
      number: "07",
      title: "Vendor Coordination",
      points: [
        "Share requirements with vendors and service partners.",
        "Coordinate quotations, follow up on execution, and resolve operational issues.",
      ],
    },
    {
      number: "08",
      title: "Budget Alignment",
      points: [
        "Support budget planning for finalized requirements.",
        "Ensure activities are executed within approved budgets.",
      ],
    },
    {
      number: "09",
      title: "Project Planning",
      points: [
        "Plan activities, dependencies, and deliverables with stakeholders.",
        "Align internal and external teams on the sequence of execution.",
      ],
    },
    {
      number: "10",
      title: "Execution & Monitoring",
      points: [
        "Monitor on-ground execution against the agreed scope.",
        "Coordinate with teams to resolve execution challenges as they appear.",
      ],
    },
    {
      number: "11",
      title: "Project Tracking",
      points: [
        "Maintain infrastructure, project, and portfolio trackers.",
        "Track pending actions, dependencies, and deliverables.",
      ],
    },
    {
      number: "12",
      title: "Challenges & Solutions",
      points: [
        "Aligning requirements across university and internal stakeholders — handled through structured coordination and documented scope.",
        "Keeping execution aligned to approved budgets — handled through BOQ reviews and continuous tracking.",
      ],
    },
    {
      number: "13",
      title: "AI & Workflow Optimization",
      points: [
        "Use AI tools for documentation, reporting, and data organization.",
        "Reduce repetitive work through digital trackers and optimized workflows.",
      ],
    },
    { number: "14", title: "Outcome", points: [] },
    {
      number: "15",
      title: "Key Learnings",
      points: [
        "Clear scope documentation reduces rework during execution.",
        "Consistent tracking keeps stakeholders aligned on pending actions.",
      ],
    },
  ];
}

const rawProjects = [
  {
    id: "aurora-campus",
    name: "Aurora Campus Infrastructure & Operations",
    location: "Hyderabad",
    category: "Infrastructure / Operations",
    role: "Associate Project Manager",
    description:
      "Coordinating campus infrastructure and operational initiatives involving planning, stakeholder coordination, vendor coordination, BOQ finalization, execution monitoring, budget alignment, and project tracking.",
    filters: ["Infrastructure", "Operations"] as ProjectFilter[],
    visual: "grid" as const,
  },
  {
    id: "chaitanya-university",
    name: "Chaitanya Deemed to be University",
    location: "Hyderabad",
    category: "University Partnership / Infrastructure / Operations",
    role: "Associate Project Manager",
    description:
      "Supporting university partnership and operational initiatives through coordination with university stakeholders and NxtWave stakeholders, requirement planning, BOQ coordination and finalization, vendor coordination, execution monitoring, and budget alignment.",
    filters: ["University Partnership", "Infrastructure", "Operations"] as ProjectFilter[],
    visual: "orbit" as const,
  },
  {
    id: "st-marys-university",
    name: "St. Mary's University",
    location: "Hyderabad",
    category: "University Partnership / Infrastructure / Operations",
    role: "Associate Project Manager",
    description:
      "Coordinating university-related infrastructure and operational requirements while working with university stakeholders, NxtWave stakeholders, internal teams, vendors, and service partners.",
    filters: ["University Partnership", "Infrastructure", "Operations"] as ProjectFilter[],
    visual: "layers" as const,
  },
  {
    id: "st-peters",
    name: "St. Peter's",
    location: "Bangalore",
    category: "University Partnership / Infrastructure / Operations",
    role: "Associate Project Manager",
    description:
      "Supporting university partnership and campus operational activities through stakeholder coordination, requirement planning, BOQ coordination, vendor coordination, execution monitoring, project tracking, and budget alignment.",
    filters: ["University Partnership", "Infrastructure", "Operations"] as ProjectFilter[],
    visual: "pulse" as const,
  },
  {
    id: "bits-niat",
    name: "BITS NIAT",
    location: "Chevella, Hyderabad",
    category: "University Partnership / Infrastructure / Operations",
    role: "Associate Project Manager",
    description:
      "Coordinating university partnership and campus operational requirements involving stakeholder communication, BOQ coordination, vendor management, project tracking, execution monitoring, and budget alignment.",
    filters: ["University Partnership", "Infrastructure", "Operations"] as ProjectFilter[],
    visual: "beam" as const,
  },
];

export const caseStudyProjects: Project[] = rawProjects.map((p) => ({
  ...p,
  tags: sharedTags,
  caseStudy: buildCaseStudy(p),
}));