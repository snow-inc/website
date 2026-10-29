<script setup lang="ts">
const open = ref(false);
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);
const links = [
  { title: "Selected work", to: "/#work", number: "01" },
  { title: "A little about me", to: "/#about", number: "02" },
  { title: "What I do", to: "/#expertise", number: "03" },
  { title: "Say hello", to: "/#contact", number: "04" },
];
</script>
<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header">
    <NuxtLink to="/" class="wordmark" aria-label="George — home"
      >george<span>.dev</span><sup>✳</sup></NuxtLink
    >
    <div class="header-right">
      <a class="header-contact" href="/#contact">LET’S TALK <ArrowIcon /></a
      ><UButton
        variant="link"
        color="neutral"
        class="menu-trigger"
        aria-label="Open navigation"
        :aria-expanded="open"
        @click="open = true"
        >MENU <span class="menu-lines"><i /><i /></span
      ></UButton>
    </div>
  </header>
  <UModal
    v-model:open="open"
    fullscreen
    :close="false"
    title="Navigation"
    description="Explore George’s developer portfolio"
    :ui="{ content: 'menu-surface', header: 'sr-only', body: 'menu-body' }"
  >
    <template #body
      ><div class="menu-head">
        <NuxtLink to="/" class="wordmark" @click="open = false"
          >george<span>.dev</span><sup>✳</sup></NuxtLink
        ><UButton
          aria-label="Close navigation"
          variant="link"
          color="neutral"
          class="menu-trigger"
          @click="open = false"
          >CLOSE <UIcon name="i-lucide-x"
        /></UButton>
      </div>
      <nav aria-label="Main navigation">
        <NuxtLink
          v-for="link in links"
          :key="link.number"
          :to="link.to"
          class="menu-item"
          @click="open = false"
          ><small>{{ link.number }} /</small><span>{{ link.title }}</span
          ><ArrowIcon
        /></NuxtLink>
      </nav>
      <div class="menu-foot">
        <span>GOOD CONVERSATIONS START GOOD THINGS.</span
        ><a href="mailto:onyangogeorge954@gmail.com"
          >onyangogeorge954@gmail.com ↗</a
        >
      </div></template
    >
  </UModal>
</template>
