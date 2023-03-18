<template>
  <div class="header row q-gutter-xs">
    <q-input
      stack-label
      filled
      dense
      clearable
      standout="bg-teal text-white"
      v-model="basicInfo.name"
      label="道路名称"
      lazy-rules
    />
    <q-input
      stack-label
      filled
      dense
      clearable
      standout="bg-teal text-white"
      v-model="basicInfo.type"
      label="道路类型"
      lazy-rules
    />
    <q-input
      stack-label
      filled
      dense
      clearable
      standout="bg-teal text-white"
      v-model="basicInfo.width"
      label="实际宽度"
      type="number"
      lazy-rules
    />
    <q-input
      stack-label
      filled
      dense
      clearable
      standout="bg-teal text-white"
      v-model="basicInfo.redLine"
      type="number"
      label="设计红线"
      lazy-rules
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSurfaceStore } from '@stores/surface';

export default defineComponent({
  name: 'SurfaceBasic',
  setup() {
    const surface = useSurfaceStore();

    return {
      basicInfo: {
        name: surface.name,
        type: surface.type,
        width: surface.maxWidth,
        redLine: surface.maxWidth,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>>
