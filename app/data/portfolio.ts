export const profile = {
  name: "George",
  email: "onyangogeorge954@gmail.com",
  wordmark: "george",
  title: "Developer & digital craftsman",
  intro:
    "I turn complex ideas into thoughtful digital experiences. Clean code, considered design, and the small details that make it feel right.",
};

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: "Web apps" | "Websites";
  discipline: string;
  summary: string;
  year: string;
  tone: string;
  stack: string[];
  idea: string;
  approach: string;
  details: { title: string; text: string }[];
}

// Demonstration projects. Replace these concepts with verified personal work.
export const projects: Project[] = [
  {
    slug: "forma",
    number: "01",
    title: "Forma",
    category: "Websites",
    discipline: "Design & development",
    year: "CONCEPT",
    tone: "forma",
    summary: "A quieter home for thoughtful architecture.",
    stack: ["Nuxt", "Tailwind CSS", "Editorial design"],
    idea: "An exploration of how an architecture practice could present its spaces with the same care that goes into making them. The concept puts proportion, material, and generous space first.",
    approach:
      "An editorial grid, warm neutral palette, and restrained typography let the architecture lead. The interface uses clear hierarchy and a deliberately unhurried rhythm.",
    details: [
      {
        title: "Space to breathe",
        text: "A flexible project grid designed around large visual stories and concise supporting detail.",
      },
      {
        title: "A considered rhythm",
        text: "Subtle reveals and a simple navigation system keep the experience calm and easy to explore.",
      },
    ],
  },
  {
    slug: "orbit",
    number: "02",
    title: "Orbit",
    category: "Web apps",
    discipline: "Product design & frontend",
    year: "CONCEPT",
    tone: "orbit",
    summary: "Less busywork. More room for the big picture.",
    stack: ["Vue", "Nuxt UI", "TypeScript"],
    idea: "A concept workspace for bringing projects, priorities, and progress into one clear view. The challenge is to make a useful, information-rich dashboard feel approachable.",
    approach:
      "A compact navigation rail and a generous main canvas give information a predictable home. Quiet surfaces and a single vivid accent make the next action easier to find.",
    details: [
      {
        title: "Clarity by design",
        text: "Reusable interface patterns organize project status, tasks, and activity without competing for attention.",
      },
      {
        title: "Built to adapt",
        text: "A responsive dashboard composition explores how the same information could work from desktop to mobile.",
      },
    ],
  },
  {
    slug: "fieldnotes",
    number: "03",
    title: "Fieldnotes",
    category: "Websites",
    discipline: "Creative development",
    year: "CONCEPT",
    tone: "fieldnotes",
    summary: "A digital journal for taking the longer way.",
    stack: ["Nuxt", "CSS motion", "Responsive design"],
    idea: "An independent travel journal concept about getting outside, paying attention, and collecting stories along the way. The reading experience should feel as open as the landscape.",
    approach:
      "Forest green, oversized editorial type, and an abstract topographic illustration establish a sense of place. Story cards balance discovery with a comfortable reading hierarchy.",
    details: [
      {
        title: "An open invitation",
        text: "Large headlines and a clear story index create an immediate path into the journal.",
      },
      {
        title: "Motion with restraint",
        text: "Gentle transitions support the reading experience and respect reduced-motion preferences.",
      },
    ],
  },
  {
    slug: "goodkind",
    number: "04",
    title: "Goodkind",
    category: "Web apps",
    discipline: "Interface design & development",
    year: "CONCEPT",
    tone: "goodkind",
    summary: "Everyday essentials. A little more considered.",
    stack: ["Vue", "Tailwind CSS", "Component systems"],
    idea: "A storefront concept for everyday objects that earn their place. The design explores how a small product collection can feel distinctive without adding friction to discovery.",
    approach:
      "A butter-yellow canvas, expressive typography, and simple product illustrations create a friendly identity. Reusable product cards keep the visual system consistent.",
    details: [
      {
        title: "A simple collection",
        text: "An approachable grid makes it easy to compare objects and understand the collection at a glance.",
      },
      {
        title: "Small details, big character",
        text: "Carefully chosen spacing, soft shapes, and purposeful accents give ordinary interactions a distinct feel.",
      },
    ],
  },
];

export const capabilities = [
  {
    label: "Frontend development",
    content:
      "Responsive, accessible interfaces built with Vue, Nuxt, and TypeScript. From an idea on a page to a complete experience in the browser.",
  },
  {
    label: "Creative development",
    content:
      "Purposeful motion, expressive interactions, and the details that make a website feel like itself. Always balanced with performance and usability.",
  },
  {
    label: "Design systems",
    content:
      "Reusable components, thoughtful patterns, and a consistent visual language that give a product room to grow.",
  },
];
