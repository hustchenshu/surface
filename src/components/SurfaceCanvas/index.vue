<template>
  <MouseControlCanvas>
    <div :class="`body row ${seeFull ? 'see-full' : ''}`">
      <q-icon name="my_location" class="full-btn" @click="() => seeFull = true"/>
      <div
        class="surface-area row no-wrap"
      >
        <div class="builds column">
          <div class="building row align-right"></div>
          <div class="statics"></div>
        </div>

        <div class="roads column">
          <div class="road-area row no-wrap">
            <Road v-for="(p, index) in data" :key="index" :info="p"/>
          </div>
          <div class="statics" @click="test">
            {{realWidth}}
            <q-badge
              v-if="realWidth > designWidth"
              color="orange"
              text-color="black"
              :label="`>${designWidth}`"
            />
            <span class="line"></span>
            <span class="left sep"></span>
            <span class="right sep"></span>
          </div>
        </div>

        <div class="builds column">
          <div class="building row"></div>
          <div class="statics"></div>
        </div>
      </div>
    </div>
  </MouseControlCanvas>
</template>

<script lang="ts">
/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
import {
  computed,
  defineComponent,
} from 'vue';

import Road from '@components/Road/index.vue';
import MouseControlCanvas from '@components/MouseControlCanvas/index.vue';
import { useSurfaceStore } from '@stores/surface';

import { SingleRoad } from '@typings';
import { capture } from '@tools/capture';

const test = async () => {
  // const image = await capture();
  // console.log(image);
};

const surface = useSurfaceStore();

export default defineComponent({
  name: 'IntersectionSurface',
  components: {
    Road, MouseControlCanvas,
  },

  setup() {
    const realWidth = computed(() => surface.roads.reduce((sum: any, cur: SingleRoad) => sum + cur.width, 0));
    return {
      designWidth: surface.maxWidth,
      realWidth,
      test,
      data: surface.roads,
    };
  },
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>>
