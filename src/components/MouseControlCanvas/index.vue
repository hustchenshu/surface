<template>
  <div class="main">
    <div class="container">
      <div
        class="ul"
        :ref="canvasDom"
        :style="{
          transform: full ? '' : canvasTransform,
          width: full ? `${ulWidth}px` : canvasWidth,
          height: full ? `${ulHeight}px` : canvasHeight,
        }"
        @mousedown="mouseDown"
        @mousemove="mouseMove"
        @mousewheel="mousewheel"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
import {
  ref, onMounted, defineProps, defineEmits,
} from 'vue';

// 变量
let x = 0;
let y = 0;
let scale = 1;
const ulWidth = window.innerWidth;
const ulHeight = window.innerHeight - 50;
const minScale = 0.1;
const maxScale = 4;
let isDown = false; // 按下标识
const diff = { x: 0, y: 0 }; // 相对于上一次lastPointermove
let lastPointermove = { x: 0, y: 0 }; // 用于计算diff

const canvasWidth = ref(`${ulWidth}px`);
const canvasHeight = ref(`${ulHeight}px`);
const canvasTransform = ref('matrix(1, 0, 0, 1, 0, 0)');

defineProps({
  full: Boolean,
});

const emits = defineEmits(['reSize']);

onMounted(() => {
  // 绑定鼠标抬起
  document.addEventListener('mouseup', (e) => {
    e.preventDefault();
    e.stopPropagation();
    isDown = false;
  });
});

const mouseDown = (e: MouseEvent) => {
  emits('reSize');
  e.preventDefault();
  e.stopPropagation();
  isDown = true;
  lastPointermove = { x: e.clientX, y: e.clientY };
};

const mouseMove = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  if (isDown) {
    const current1 = { x: e.clientX, y: e.clientY };
    diff.x = current1.x - lastPointermove.x;
    diff.y = current1.y - lastPointermove.y;
    lastPointermove = { x: current1.x, y: current1.y };
    x += diff.x;
    y += diff.y;
    // 边界判断
    const offsetX = x; // Math.min(Math.max(x, ulWidth - ulWidth * (scale + 1) / 2), +ulWidth * (scale - 1) / 2);
    const offsetY = y; // Math.min(Math.max(y, ulHeight - ulHeight * (scale + 1) / 2), +ulHeight * (scale - 1) / 2);
    canvasTransform.value = `matrix(${scale}, 0, 0, ${scale}, ${offsetX}, ${offsetY})`;
  }
};

const mousewheel = (e: WheelEvent) => {
  // e.preventDefault();
  emits('reSize');
  let ratio = 1.1;
  // 缩小
  if (e.deltaY > 0) {
    ratio = 1 / 1.1;
  }
  // 限制缩放倍数
  const onscale = scale * ratio;
  if (onscale > maxScale) {
    ratio = maxScale / scale;
    scale = maxScale;
  } else if (onscale < minScale) {
    ratio = minScale / scale;
    scale = minScale;
  } else {
    scale = onscale;
  }
  const origin = {
    x: (ratio - 1) * ulWidth * 0.5,
    y: (ratio - 1) * ulHeight * 0.5,
  };
    // 计算偏移量
  x -= (ratio - 1) * (e.clientX - x - (window.innerWidth - ulWidth) * 0.5) - origin.x;
  y -= (ratio - 1) * (e.clientY - y) - origin.y;
  const offsetX = Math.min(Math.max(x, ulWidth - ulWidth * (scale + 1) / 2), ulWidth * (scale - 1) / 2);
  const offsetY = Math.min(Math.max(y, ulHeight - ulHeight * (scale + 1) / 2), +ulHeight * (scale - 1) / 2);
  x = offsetX;
  y = offsetY;
  canvasTransform.value = `matrix(${scale}, 0, 0, ${scale}, ${offsetX}, ${offsetY})`;
};

</script>

<style scoped>

body {
    margin: 0;
    padding: 0;
}
.main {
    width: 100%;
    display: flex;
    justify-content: center;
}
li {
    width: 100px;
    height: 80px;
    background-color: orange;
    margin-right: 20px;
}
li:nth-child(12n) {
    margin-right: 0px;
}

li:hover {
    background-color: darkblue;
}
.container {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: calc(100vh - 50px);
}
.ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    padding: 0;
}

</style>
