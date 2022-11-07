<script setup lang="ts">
import { useOnboardingStore, Workout } from "@/stores/onboarding";
import TileEasy from "./tiles/TileEasy.vue";
import TileMedium from "./tiles/TileMedium.vue";
import TileHard from "./tiles/TileHard.vue";
import TileExtreme from "./tiles/TileExtreme.vue";

const onboardingStore = useOnboardingStore();

const workoutOptions = [
  {
    tile: TileEasy,
    title: "Easy",
    color: "primary",
    text: "All you need to stay healthy",
    value: Workout.Easy,
  },
  {
    tile: TileMedium,
    title: "Medium",
    color: "secondary",
    text: "Not too easy, not too hard",
    value: Workout.Medium,
  },
  {
    tile: TileHard,
    title: "Hard",
    color: "tertiary",
    text: "Pretty intense workout",
    value: Workout.Hard,
  },
  {
    tile: TileExtreme,
    title: "Extreme",
    color: "black",
    text: "Challenge yourself!",
    value: Workout.Extreme,
  },
];

const selectWorkout = (workout: Workout): void => {
  onboardingStore.workout = workout;
};
</script>

<template>
  <div class="form-step">
    <h1>
      What's your<br />
      preferred<br />
      workout?
    </h1>

    <div class="workout-select">
      <div
        v-for="(option, i) in workoutOptions"
        :key="i"
        class="workout-option"
        :class="[
          `color-` + option.color,
          { selected: onboardingStore.workout === option.value },
        ]"
        @click="selectWorkout(option.value)"
      >
        <component :is="option.tile" class="tile"></component>
        <h2>{{ option.title }}</h2>
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-step {
  margin-bottom: 55px !important;
}
h1 {
  margin-bottom: 44px !important;
}

.workout-select {
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  flex-wrap: wrap;
  gap: 15px;
}
.workout-option {
  flex-basis: 50%;
  text-align: center;
  padding: 18px 20px;
  border: 2px solid var(--ob-gray);
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
}
.workout-option :deep(svg) * {
  transition: all 0.2s ease-in-out;
}
.workout-option.selected {
  color: #fff;
  border-color: #fff;
  box-shadow: 0px 2px 25px 0px #595a6a40;
}
.workout-option.selected p {
  color: rgba(255, 255, 255, 0.7);
}
.workout-option.selected :deep(svg) * {
  stroke: rgba(255, 255, 255, 0.7);
}
.workout-option.color-primary.selected {
  background-color: var(--ob-primary);
}
.workout-option.color-secondary.selected {
  background-color: var(--ob-secondary);
}
.workout-option.color-secondary.selected :deep(rect):nth-child(1) {
  fill: rgba(255, 255, 255, 0.7);
}
.workout-option.color-tertiary.selected {
  background-color: var(--ob-tertiary);
}
.workout-option.color-tertiary.selected :deep(rect):nth-child(1),
.workout-option.color-tertiary.selected :deep(rect):nth-child(2) {
  fill: rgba(255, 255, 255, 0.7);
}
.workout-option.color-black.selected {
  background-color: var(--ob-black);
}
.workout-option.color-black.selected :deep(rect):nth-child(1),
.workout-option.color-black.selected :deep(rect):nth-child(2),
.workout-option.color-black.selected :deep(rect):nth-child(3) {
  fill: rgba(255, 255, 255, 0.7);
}

.tile {
  margin-bottom: 7px;
}
h2 {
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 10px;
}
p {
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: rgba(var(--ob-black-rgb), 0.7);
  transition: color 0.2s ease-in-out;
}
</style>
