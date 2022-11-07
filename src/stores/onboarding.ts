import { defineStore } from "pinia";
import { useStorage, StorageSerializers, isNumber } from "@vueuse/core";
import type { RemovableRef } from "@vueuse/core";

export const useOnboardingStore = defineStore({
  id: "counter",
  state: (): {
    step: number;
    slideDirection: string;
    name: RemovableRef<string>;
    weight: RemovableRef<number>;
    workout: RemovableRef<number>;
  } => ({
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
        default:
          return false;
      }
    },
  },
  actions: {
    nextStep() {
      this.slideDirection = "slide-left";
      this.step = Math.min(this.step + 1, 3);
    },
    prevStep() {
      this.slideDirection = "slide-right";
      this.step = Math.max(this.step - 1, 1);
    },
    asd() {
      this.weight = 3;
    },
  },
});
