<template>
  <q-page class="column items-center justify-evenly page">
    <!-- <SurfaceBaisc /> -->
    <LeftBar />
    <div class="body row">
      <div
        class="surface-area row no-wrap"
        @mousewheel="setScale"
        @click="aaa"
        :style="{
          transform: `scale(${scaleInfo.size})`,
          'transform-origin': `${scaleInfo.x}px ${scaleInfo.y}px`
        }"
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
            50
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
    <BottomBar />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

import Road from '@components/Road/index.vue';
import LeftBar from '@components/LeftBar/index.vue';
import BottomBar from '@components/BottomBar/index.vue';
import SurfaceBaisc from '@components/SurfaceBaisc/index.vue';
import { useSurfaceStore } from '@stores/surface';

import {
  RoadSurfaceType,
} from '../../typings';
import { capture } from '../../tools/capture';

const test = async () => {
  const image = await capture();
  console.log(image);
};
const scaleInfo = reactive({
  size: 1,
  x: 0,
  y: 0,
  z: 0,
});
const setScale = (e: any) => {
  console.log(e);
  if (e.deltaY < 0 && scaleInfo.size < 1.5) {
    scaleInfo.size += 0.1;
  } else if (e.deltaY > 0 && scaleInfo.size > 0.8) {
    scaleInfo.size -= 0.1;
  }

  scaleInfo.x = e.offsetX;
  scaleInfo.y = e.offsetY; // e.layerY;
  console.log({
    layerX: e.layerX,
    layerY: e.layerY,
    pageX: e.pageX,
    pageY: e.pageY,
  });
  e.preventDefault();
};

const aaa = (e) => {
  console.log(e);
};

export default defineComponent({
  name: 'IntersectionSurface',
  components: {
    SurfaceBaisc, Road, LeftBar, BottomBar,
  },
  setup() {
    const surface = useSurfaceStore();
    surface.initWithType({
      name: 'test',
      type: RoadSurfaceType.QuickRoad,
    });

    const leftDrawerOpen = ref(false);

    return {
      aaa,
      setScale,
      scaleInfo,
      test,
      data: surface.roads,
      text: ref(''),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>>
