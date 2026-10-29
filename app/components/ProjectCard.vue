<script setup lang="ts">
import type { Project } from "~/data/portfolio";
defineProps<{ project: Project }>();
</script>
<template>
  <NuxtLink
    :to="`/work/${project.slug}`"
    class="project-card"
    :aria-label="`Explore ${project.title} — concept project`"
  >
    <div class="project-image">
      <ProjectArtwork :tone="project.tone" /><span class="project-open"
        ><ArrowIcon /></span
      ><span class="concept-label">CONCEPT PROJECT</span>
    </div>
    <div class="project-caption">
      <div>
        <h3>{{ project.title }}<sup>*</sup></h3>
        <p>{{ project.summary }}</p>
      </div>
      <span class="project-discipline"
        >{{ project.discipline }}<br /><span
          >{{ project.number }} / 2026</span
        ></span
      >
    </div>
  </NuxtLink>
</template>
