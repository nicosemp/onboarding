<script setup lang="ts">
import { useOnboardingStore } from "@/stores/onboarding";

const onboardingStore = useOnboardingStore();
</script>

<template>
  <Transition name="fade">
    <div v-if="onboardingStore.step === 4" class="finish">
      <picture>
        <img
          src="@/assets/Illustration.png"
          alt="Logo"
          width="375"
          height="400"
          loading="lazy"
          decoding="async"
          srcset="@/assets/Illustration.png 1x, @/assets/Illustration@2x.png 2x"
        />
      </picture>
      <div class="finish-text">
        <h1>You did it!<br />Let's get moving!</h1>
        <p>
          Personalized plan, diet and a fitness coach! Everything ready when you
          are, let's get started!
        </p>
      </div>
      <button>Start your journey!</button>
    </div>
  </Transition>
</template>

<style scoped>
img {
  margin-bottom: 43px;
}
.finish-text {
  margin: 0 30px;
  text-align: center;
}
h1 {
  margin-bottom: 20px;
  color: #fff;
}
p {
  margin: 0 30px 63px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: rgba(255, 255, 255, 0.7);
}
button {
  margin: 0 30px;
  width: calc(100% - 60px);
  padding: 15px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 18.4px;
  letter-spacing: 0.8px;
  color: var(--ob-black);
}
</style>
