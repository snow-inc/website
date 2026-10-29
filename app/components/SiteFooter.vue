<script setup lang="ts">
const contactOpen = useState("contact-open", () => false);
</script>
<template>
  <footer id="contact" class="site-footer section-shell">
    <div class="section-kicker">
      <span>04 / HAVE SOMETHING IN MIND?</span
      ><span>LET’S MAKE IT HAPPEN ↙</span>
    </div>
    <div class="contact-headline">
      <h2>Good things start<br />with a <i>conversation.</i></h2>
      <UButton
        class="contact-circle"
        color="neutral"
        variant="solid"
        aria-label="Start a conversation with George"
        @click="contactOpen = true"
        ><ArrowIcon
      /></UButton>
    </div>
    <div class="contact-details">
      <a href="mailto:onyangogeorge954@gmail.com"
        >onyangogeorge954@gmail.com <ArrowIcon
      /></a>
      <p>
        A project, a possibility, or just a hello.<br />I’d love to hear what
        you’re thinking.
      </p>
    </div>
    <div class="footer-bottom">
      <NuxtLink to="/" class="wordmark"
        >george<span>.dev</span><sup>✳</sup></NuxtLink
      ><span>© {{ new Date().getFullYear() }} GEORGE</span
      ><a href="#top">BACK TO TOP ↑</a>
    </div>
  </footer>
</template>
