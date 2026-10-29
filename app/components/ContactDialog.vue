<script setup lang="ts">
import { profile } from "~/data/portfolio";
const open = useState("contact-open", () => false);
const copied = ref(false);
const copyFailed = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email);
    copied.value = true;
    copyFailed.value = false;
    timer = setTimeout(() => {
      copied.value = false;
    }, 2500);
  } catch {
    copyFailed.value = true;
  }
}
onBeforeUnmount(() => clearTimeout(timer));
</script>
<template>
  <UModal
    v-model:open="open"
    title="Have something in mind?"
    description="Tell me a little about your project. Let’s find out what we can make together."
    :ui="{
      content: 'contact-dialog',
      overlay: 'contact-overlay',
      title: 'contact-dialog-title',
      description: 'contact-dialog-description',
    }"
    ><template #body
      ><div class="contact-dialog-body">
        <span class="eyebrow">STRAIGHT TO MY INBOX</span
        ><a
          :href="`mailto:${profile.email}?subject=Let%E2%80%99s%20make%20something`"
          >{{ profile.email }} <ArrowIcon
        /></a>
        <p>No forms to disappear into. Just a conversation.</p>
        <div class="dialog-actions">
          <UButton
            :to="`mailto:${profile.email}?subject=Let%E2%80%99s%20make%20something`"
            class="pill-button primary-pill"
            >Open email <UIcon name="i-lucide-arrow-up-right" /></UButton
          ><UButton
            variant="outline"
            color="neutral"
            class="pill-button"
            @click="copyEmail"
            >{{ copied ? "Copied!" : "Copy email" }}
            <UIcon :name="copied ? 'i-lucide-check' : 'i-lucide-copy'"
          /></UButton>
        </div>
        <p v-if="copied" role="status">
          Email address copied to your clipboard.
        </p>
        <p v-if="copyFailed" role="alert">
          Please select and copy the email address above.
        </p>
      </div></template
    ></UModal
  >
</template>
