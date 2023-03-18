<template>
  <q-page class="column items-center justify-evenly page">
    <SurfaceBasic/>
    <LeftBar />
    <SurfaceCanvas />
    <BottomBar />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import LeftBar from '@components/LeftBar/index.vue';
import BottomBar from '@components/BottomBar/index.vue';
import SurfaceBasic from '@components/SurfaceBasic/index.vue';
import SurfaceCanvas from '@components/SurfaceCanvas/index.vue';
import { useSurfaceStore } from '@stores/surface';

import {
  RoadSurfaceType,
} from '../../typings';

export default defineComponent({
  name: 'IntersectionSurface',
  components: {
    SurfaceBasic, SurfaceCanvas, LeftBar, BottomBar,
  },
  setup() {
    const surface = useSurfaceStore();
    surface.initWithType({
      name: 'test',
      type: RoadSurfaceType.QuickRoad,
    });
  },
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>>
