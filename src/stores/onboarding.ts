import { defineStore } from "pinia";
import { useStorage, StorageSerializers, isNumber } from "@vueuse/core";
import type { RemovableRef } from "@vueuse/core";

export enum Workout {
  Easy,
  Medium,
  Hard,
  Extreme,
}

export const useOnboardingStore = defineStore({
  id: "onboarding",
  state: (): {
    firstLaunch: boolean;
    nameInput: HTMLInputElement | null;
    step: number;
    slideDirection: string;
    name: RemovableRef<string>;
    weight: RemovableRef<number | null>;
    workout: RemovableRef<Workout | null>;
  } => ({
    firstLaunch: true,
    nameInput: null,
    step: 1,
    slideDirection: "slide-left",
    name: useStorage("name", ""),
    weight: useStorage("weight", null, undefined, {
      serializer: StorageSerializers.number,
    }),
    workout: useStorage("workout", null, undefined, {
      serializer: StorageSerializers.number,
    }),
  }),
  getters: {
    canGoNext: (state) => {
      switch (state.step) {
        case 1:
          return state.name != "";
        case 2:
          return isNumber(state.weight) && !isNaN(state.weight);
        case 3:
          return isNumber(state.workout) && !isNaN(state.workout);
        default:
          return false;
      }
    },
  },
  actions: {
    nextStep() {
      this.slideDirection = "slide-left";
      this.step = Math.min(this.step + 1, 4);
    },
    reset() {
      this.slideDirection = "slide-right";
      this.name = "";
      this.weight = null;
      this.workout = null;
      this.step = 1;
    },
    // prevStep() {
    //   this.slideDirection = "slide-right";
    //   this.step = Math.max(this.step - 1, 1);
    // },
    asd() {
      this.weight = 3;
    },
  },
});
