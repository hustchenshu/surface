<template>
  <q-icon name="my_location" class="full-btn" @click="seeFull = true"/>
  <MouseControlCanvas :full="seeFull" @reChange="seeFull = fasle">
    <div class="body row">
      <div
        class="surface-area row no-wrap"
      >
        <div class="builds column">
          <div class="building row align-right"></div>
          <div class="statics"></div>
        </div>

        <div class="roads column">
          <div class="road-area row no-wrap">
            <Road v-for="(p, index) in surface.roads" :key="p.id" :index="index" :info="p"/>
          </div>
          <div class="statics" @click="test">
            {{realWidth}}
            <q-badge
              v-if="realWidth > surface.maxWidth"
              color="orange"
              text-color="black"
              :label="`>${surface.maxWidth}`"
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

<script lang="ts" setup>
/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
import {
  computed,
  defineComponent,
  ref,
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
const realWidth = surface.roads.reduce(
  (sum: number, cur: SingleRoad) => sum + Number(cur.width),
  0,
);

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>>
