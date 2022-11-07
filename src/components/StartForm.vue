<script setup lang="ts">
import { ref } from "vue";
import { useOnboardingStore } from "@/stores/onboarding";
import { isNumber } from "@vueuse/core";

const onboardingStore = useOnboardingStore();
</script>

<template>
  <div class="form">
    <Transition :name="onboardingStore.slideDirection" mode="out-in">
      <div v-if="onboardingStore.step === 1" class="form-step">
        <h1>
          Hi there,<br />how should<br />
          we call you?
        </h1>
        <input
          type="text"
          name="name"
          v-model="onboardingStore.name"
          placeholder="Your name"
        />
      </div>

      <div v-else-if="onboardingStore.step === 2" class="form-step">
        <h1>
          What's<br />your weight,<br />
          John Doe?
        </h1>
        <div
          class="input-box"
          :class="{
            filled:
              isNumber(onboardingStore.weight) &&
              !isNaN(onboardingStore.weight),
          }"
        >
          <input
            type="number"
            name="weight"
            v-model="onboardingStore.weight"
            placeholder="Your weight"
          />
        </div>
      </div>

      <div v-else-if="onboardingStore.step === 3" class="form-step">
        <h1>
          What's your<br />
          preferred<br />
          workout?
        </h1>
        <input type="radio" name="workout" />
        <label for="workout">workout</label>
      </div>
    </Transition>

    <button
      :disabled="!onboardingStore.canGoNext"
      @click="onboardingStore.nextStep"
    >
      Continue
    </button>
  </div>
</template>

<style scoped>
.form {
  height: 100vh;
  background-color: #fff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 60px 30px 0;
}
.form-step {
  margin-bottom: 60px;
}
h1 {
  margin-bottom: 40px;
}
input {
  width: 100%;
  height: 55px;
  padding: 16px 20px;
  border-radius: 20px;
  background-color: var(--ob-gray);
  color: var(--ob-gray-darker);
  border: 3px solid var(--ob-gray);
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.2px;
  transition: all 0.2s ease-in-out;
}
input:active,
input:focus,
input:not(:placeholder-shown) {
  color: rgba(var(--ob-black-rgb), 0.7);
  background-color: #fff;
  border-color: var(--ob-gray-darker);
  outline: none;
}
input::placeholder {
  color: var(--ob-gray-darker);
}

.input-box {
  position: relative;
}
.input-box:after {
  position: absolute;
  right: 20px;
  top: 16px;
  content: "Kg";
  color: var(--ob-gray-darker);
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.2px;
  font-family: "Helvetica", sans-serif;
  pointer-events: none;
  transition: color 0.2s ease-in-out;
}
.input-box.filled:after {
  color: rgba(var(--ob-black-rgb), 0.7);
}
input[name="weight"] {
  padding-right: 50px;
}

input[type="radio"] {
  display: none;
}
input[type="radio"]:checked + label {
  color: red;
}

button {
  float: right;
  padding: 15px 30px;
  border-radius: 20px;
  background-color: var(--ob-black);
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 18.4px;
  letter-spacing: 0.8px;
  transition: all 0.2s ease-in-out;
}
button:disabled {
  background-color: var(--ob-gray);
  color: var(--ob-gray-darker);
}
</style>
