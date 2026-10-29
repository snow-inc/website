<script setup lang="ts">
import { projects, capabilities, profile } from "~/data/portfolio";
useReveals();
const filter = ref("All work");
const filters = ["All work", "Websites", "Web apps"];
const filteredProjects = computed(() =>
  filter.value === "All work"
    ? projects
    : projects.filter((project) => project.category === filter.value),
);
const contactOpen = useState("contact-open", () => false);
useSeoMeta({
  title: "George — Developer & Digital Craftsman",
  description:
    "Thoughtful digital experiences. Clean code, considered design, and the small details that make it feel right. Explore George’s developer portfolio.",
});
</script>
<template>
  <section class="hero section-shell" aria-labelledby="hero-title">
    <div class="hero-topline">
      <span>DEVELOPER & DIGITAL CRAFTSMAN</span
      ><span class="hero-index">PORTFOLIO — VOL. 01 / 2026</span>
    </div>
    <h1 id="hero-title">
      <span class="hero-line">Code, craft &</span
      ><span class="hero-line">a little <i>character.</i><sup>✳</sup></span>
    </h1>
    <div class="hero-bottom">
      <div class="hero-intro">
        <span class="hello-label"><i /> HELLO, I’M GEORGE</span>
        <p>{{ profile.intro }}</p>
        <a class="text-link" href="#work">EXPLORE MY WORK <span>↓</span></a>
      </div>
      <CraftSculpture /><span class="hero-side-note"
        >THOUGHTFULLY BUILT. FROM THE INSIDE OUT.</span
      >
    </div>
    <div class="hero-baseline">
      <span>AN INDEPENDENT MIND. A BUILDER AT HEART.</span
      ><span>SCROLL TO DISCOVER <span>↓</span></span>
    </div>
  </section>
  <section
    id="work"
    class="work-section section-shell"
    aria-labelledby="work-title"
  >
    <div class="section-kicker" data-reveal>
      <span>01 / SELECTED WORK</span><span>IDEAS MADE TANGIBLE ↙</span>
    </div>
    <div class="section-heading" data-reveal>
      <h2 id="work-title">
        A few things<br />I’ve <i>dreamed up.</i><sup>✳</sup>
      </h2>
      <p>
        A collection of self-initiated concepts.<br />Exploring the space
        between thoughtful<br />design and useful technology.
      </p>
    </div>
    <div class="work-toolbar">
      <div class="project-filters" role="group" aria-label="Filter projects">
        <UButton
          v-for="item in filters"
          :key="item"
          :variant="filter === item ? 'solid' : 'ghost'"
          color="neutral"
          class="filter-button"
          :class="{ active: filter === item }"
          :aria-pressed="filter === item"
          @click="filter = item"
          >{{ item }}<span v-if="item === 'All work'">04</span></UButton
        >
      </div>
      <span class="work-count" role="status"
        >{{ String(filteredProjects.length).padStart(2, "0") }} PROJECTS /
        CONCEPT EXPLORATIONS</span
      >
    </div>
    <TransitionGroup name="projects" tag="div" class="work-grid"
      ><ProjectCard
        v-for="project in filteredProjects"
        :key="project.slug"
        :project="project"
    /></TransitionGroup>
    <div class="work-end">
      <span>GOOD WORK STARTS WITH A GOOD QUESTION.</span
      ><UButton
        variant="link"
        color="neutral"
        class="text-link"
        @click="contactOpen = true"
        >WHAT ARE YOU WORKING ON? <ArrowIcon
      /></UButton>
    </div>
  </section>
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      <span v-for="n in 4" :key="n"
        >THOUGHTFUL BY DESIGN <i>✳</i> BUILT WITH INTENTION <i>✳</i></span
      >
    </div>
  </div>
  <section
    id="about"
    class="about-section section-shell"
    aria-labelledby="about-title"
  >
    <div class="section-kicker" data-reveal>
      <span>02 / THE PERSON BEHIND THE PIXELS</span
      ><span>A LITTLE ABOUT ME ↙</span>
    </div>
    <div class="about-layout">
      <div class="about-art" data-reveal>
        <div class="code-art">
          <div class="code-corner">THE INTERSECTION OF</div>
          <span class="code-bracket">{</span
          ><span class="code-asterisk">✳</span
          ><span class="code-bracket closing">}</span>
          <div class="code-caption">
            <span>LOGIC</span><i>meets</i><span>IMAGINATION</span>
          </div>
          <div class="code-bottom">
            EVER CURIOUS. ALWAYS BUILDING. <span>G—01</span>
          </div>
        </div>
      </div>
      <div class="about-copy" data-reveal>
        <h2 id="about-title">
          A developer.<br />A detail person.<br /><i>Always curious.</i>
        </h2>
        <p>
          I’m George. I care about how things work, how they look, and how they
          feel to use.
        </p>
        <p>
          My approach lives at the intersection of engineering and design:
          understand the problem, find the simple solution, then give the
          details the attention they deserve.
        </p>
        <p>
          Because a great digital experience should feel effortless. Even when
          the work behind it isn’t.
        </p>
        <a class="text-link" href="#contact"
          >LET’S BUILD SOMETHING <ArrowIcon
        /></a>
      </div>
    </div>
  </section>
  <section
    id="expertise"
    class="expertise-section section-shell"
    aria-labelledby="expertise-title"
  >
    <div class="section-kicker" data-reveal>
      <span>03 / WHAT I BRING TO THE TABLE</span
      ><span>FROM FIRST IDEA TO FINAL DETAIL ↙</span>
    </div>
    <div class="expertise-layout">
      <div data-reveal>
        <h2 id="expertise-title">Big picture.<br /><i>Small details.</i></h2>
        <p>
          Bringing the creative and the technical<br />together, one considered
          decision at a time.
        </p>
        <div class="stack-chips">
          <span>Vue</span><span>Nuxt</span><span>TypeScript</span
          ><span>Tailwind CSS</span>
        </div>
      </div>
      <div class="capabilities" data-reveal>
        <UAccordion
          :items="capabilities"
          :default-value="'0'"
          :ui="{
            item: 'capability-item',
            trigger: 'capability-trigger',
            label: 'capability-label',
            content: 'capability-content',
            body: 'capability-body',
            trailingIcon: 'capability-icon',
          }"
          ><template #leading="{ index }"
            ><span class="capability-number">0{{ index + 1 }}</span></template
          ></UAccordion
        >
      </div>
    </div>
  </section>
</template>
