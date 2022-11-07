<script setup lang="ts">
import { useOnboardingStore } from "@/stores/onboarding";

const onboardingStore = useOnboardingStore();
</script>

<template>
  <div class="progress">
    <div
      v-for="i in 3"
      :key="i"
      class="dot"
      :class="{ future: i > onboardingStore.step }"
    ></div>
  </div>
</template>

<style scoped>
.progress {
  display: flex;
  gap: 10px;
}
.dot {
  height: 10px;
  width: 10px;
  background-color: #fff;
  border-radius: 50%;
  transition: opacity 0.2s ease-in-out;
}
.dot.future {
  opacity: 0.4;
}
</style>
