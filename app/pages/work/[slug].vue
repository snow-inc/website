<script setup lang="ts">
import { projects } from "~/data/portfolio";
const route = useRoute();
const project = computed(() =>
  projects.find((item) => item.slug === route.params.slug),
);
if (!project.value)
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
const nextProject = computed(
  () =>
    projects[
      (projects.findIndex((item) => item.slug === route.params.slug) + 1) %
        projects.length
    ]!,
);
useReveals();
useSeoMeta({
  title: () => `${project.value?.title} — Concept project / George`,
  description: () => project.value?.summary,
});
</script>
<template>
  <article v-if="project" class="case-study">
    <section class="case-hero section-shell">
      <NuxtLink to="/#work" class="text-link case-back"
        >← BACK TO SELECTED WORK</NuxtLink
      >
      <div class="section-kicker">
        <span>{{ project.number }} / SELF-INITIATED CONCEPT</span
        ><span>{{ project.discipline.toUpperCase() }}</span>
      </div>
      <h1>{{ project.title }}<i>*</i></h1>
      <div class="case-intro">
        <h2>{{ project.summary }}</h2>
        <p>
          A portfolio concept exploring design and development.<br />Presented
          as an independent study, rather than client work.
        </p>
      </div>
    </section>
    <div class="case-art section-shell">
      <ProjectArtwork :tone="project.tone" />
    </div>
    <section class="case-story section-shell">
      <div class="case-meta" data-reveal>
        <div>
          <span>PROJECT TYPE</span>
          <p>Self-initiated concept</p>
        </div>
        <div>
          <span>DISCIPLINE</span>
          <p>{{ project.discipline }}</p>
        </div>
        <div>
          <span>TOOLKIT / EXPLORATION</span>
          <p v-for="tool in project.stack" :key="tool">{{ tool }}</p>
        </div>
      </div>
      <div class="case-narrative">
        <div data-reveal>
          <span class="eyebrow">THE IDEA</span>
          <h2>It starts with<br /><i>a possibility.</i></h2>
          <p>{{ project.idea }}</p>
        </div>
        <div data-reveal>
          <span class="eyebrow">THE APPROACH</span>
          <h2>Made with<br /><i>intention.</i></h2>
          <p>{{ project.approach }}</p>
        </div>
      </div>
    </section>
    <section class="case-details section-shell">
      <div
        v-for="(detail, i) in project.details"
        :key="detail.title"
        data-reveal
      >
        <span class="eyebrow">0{{ i + 1 }} / CONSIDERED DETAILS</span>
        <h3>{{ detail.title }}</h3>
        <p>{{ detail.text }}</p>
      </div>
    </section>
    <NuxtLink
      :to="`/work/${nextProject.slug}`"
      class="next-project section-shell"
      ><span class="eyebrow">KEEP EXPLORING / NEXT CONCEPT</span>
      <div>
        <h2>{{ nextProject.title }}<i>*</i></h2>
        <ArrowIcon /></div
    ></NuxtLink>
  </article>
</template>
