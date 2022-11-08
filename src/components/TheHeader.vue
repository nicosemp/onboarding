<script setup lang="ts">
import ProgressDots from "@/components/ProgressDots.vue";
import { useOnboardingStore } from "@/stores/onboarding";

const onboardingStore = useOnboardingStore();
</script>

<template>
  <Transition name="fade">
    <header v-if="onboardingStore.step < 4">
      <button @click="onboardingStore.reset()" v-if="onboardingStore.step > 1">
        Back
      </button>
      <ProgressDots />
    </header>
  </Transition>
</template>

<style scoped>
header {
  position: absolute;
  width: 100vw;
  padding-top: 10px;
  margin-bottom: 20px;
  height: 50px;
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
  padding: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 18.4px;
}
</style>
