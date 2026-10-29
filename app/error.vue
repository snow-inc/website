<script setup lang="ts">
defineProps<{ error: { statusCode?: number; statusMessage?: string } }>();
</script>
<template>
  <UApp
    ><div class="error-page">
      <NuxtLink to="/" class="wordmark"
        >george<span>.dev</span><sup>✳</sup></NuxtLink
      >
      <div>
        <span class="eyebrow"
          >{{ error.statusCode || "OH" }} / A SMALL DETOUR</span
        >
        <h1>Nothing here.<br /><i>Yet.</i></h1>
        <p>Let’s get you back to something worth exploring.</p>
        <UButton to="/" class="pill-button primary-pill"
          >Back to the portfolio <UIcon name="i-lucide-arrow-up-right"
        /></UButton>
      </div></div
  ></UApp>
</template>
