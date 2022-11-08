<script setup lang="ts">
import IconCellular from "./status-bar/IconCellular.vue";
import IconWifi from "./status-bar/IconWifi.vue";
import IconBattery from "./status-bar/IconBattery.vue";
</script>

<template>
  <div class="status-bar">
    <p class="time">9:41</p>

    <div class="icons">
      <IconCellular />
      <IconWifi />
      <IconBattery />
    </div>
  </div>
</template>

<style scoped>
.status-bar {
  height: 44px;
  font-family: "SF Pro Text";
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14.5px 0 33px;
}
.icons {
  display: flex;
  gap: 5px;
}
.time {
  font-weight: 600;
  font-size: 15px;
  color: #fff;
}
</style>
