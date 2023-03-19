<template>
  <div class="header row q-gutter-xs">
    <q-input
      stack-label
      filled
      dense
      standout="bg-teal text-white"
      v-model="surface.name"
      label="道路名称"
      lazy-rules
    />
    <q-input
      stack-label
      filled
      dense
      disable
      standout="bg-teal text-white"
      v-model="surface.type"
      label="道路类型"
      lazy-rules
    />
    <q-input
      stack-label
      filled
      dense
      disable
      standout="bg-teal text-white"
      v-model="realWidth"
      label="实际宽度"
      type="number"
      lazy-rules
    />
    <q-input
      stack-label
      dense
      standout="bg-teal text-white"
      v-model.number="surface.maxWidth"
      label="设计红线"
      lazy-rules
    />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import { useSurfaceStore } from '@stores/surface';
import { SingleRoad } from '@typings';

const surface = useSurfaceStore();
const realWidth = surface.roads.reduce(
  (sum: number, cur: SingleRoad) => sum + Number(cur.width),
  0,
);

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>>
