<script setup lang="ts">
import ProgressDots from "@/components/ProgressDots.vue";
import { useOnboardingStore } from "@/stores/onboarding";

const onboardingStore = useOnboardingStore();
</script>

<template>
  <header>
    <button @click="onboardingStore.prevStep()" v-if="onboardingStore.step > 0">
      Back
    </button>
    <ProgressDots />
  </header>
</template>

<style scoped>
header {
  margin: 10px 0 20px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  color: #fff;
  background: transparent;
  border: none;
  position: absolute;
  left: 30px;
}
</style>
