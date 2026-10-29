<script setup lang="ts">
defineProps<{ compact?: boolean }>();
</script>
<template>
  <div class="craft-sculpture" :class="{ compact }" aria-hidden="true">
    <svg class="sculpture-svg" viewBox="0 0 640 640" fill="none">
      <defs>
        <linearGradient
          id="metal"
          x1="170"
          y1="80"
          x2="480"
          y2="600"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#b5b8af" />
          <stop offset=".3" stop-color="#434840" />
          <stop offset=".52" stop-color="#e1e5d8" />
          <stop offset=".6" stop-color="#7a8073" />
          <stop offset="1" stop-color="#242920" />
        </linearGradient>
        <linearGradient
          id="edge"
          x1="80"
          y1="150"
          x2="560"
          y2="500"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#53594a" />
          <stop offset=".4" stop-color="#20271b" />
          <stop offset=".7" stop-color="#a3ad92" />
          <stop offset="1" stop-color="#343a2d" />
        </linearGradient>
        <radialGradient id="core">
          <stop stop-color="#d7ff71" stop-opacity=".14" />
          <stop offset="1" stop-color="#d7ff71" stop-opacity="0" />
        </radialGradient>
      </defs>
      <circle cx="330" cy="330" r="300" fill="url(#core)" />
      <g class="sculpture-object">
        <path
          d="m292 67 77 27 10 151 128-76 53 59-118 104 132 76-29 77-161-45 11 153-78 18-41-156-118 104-62-49 100-133-155-39 13-80 168 14z"
          fill="url(#edge)"
        />
        <path
          d="m263 42 77 27 10 151 128-76 53 59-118 104 132 76-29 77-161-45 11 153-78 18-41-156-118 104-62-49 100-133-155-39 13-80 168 14z"
          fill="url(#metal)"
          stroke="#c1c8b5"
          stroke-opacity=".18"
        />
        <path
          d="m340 69 29 25 10 151-29-25zm138 75 29 25 53 59-29-25zm53 59 29 25-118 104-29-25zm-18 180 32 25-29 77-29-25zM355 415l29 25 11 153-29-25zm-67 171 29 25 78-18-29-25zM110 455l29 25-62-49-29-25z"
          fill="#272d22"
        />
        <path
          d="m263 42 41 275 46-97M304 317l109-10m-109 10 51 98m-51-98-57 113m57-113-137 64m137-64-114-58"
          stroke="#f0f4e9"
          stroke-opacity=".1"
        />
      </g>
    </svg>
    <span class="sculpture-coordinate coordinate-top"
      >FIG. 001 — A WORK IN PROGRESS</span
    >
    <span class="sculpture-coordinate coordinate-bottom"
      >CRAFTED WITH INTENTION ↗</span
    >
  </div>
</template>
