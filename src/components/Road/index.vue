<template>
  <div
    :class="`column road cursor-pointer ${selected ? 'road-selected' : ''}`"
    :style="{width: `${info.width * 30}px`}"
    @mouseenter="() => changeSeleted(true)"
    @mouseleave="() => changeSeleted(false)"
  >
    <div class="dirction" v-if="info.carInfoDireciton">
      <q-icon :name="info.carInfoDireciton ? 'arrow_upward' : 'arrow_downward'" />
    </div>
    <div class="display column items-end" v-if="info.display">
      <img class="image" :src="info.display.image.image" alt="">
    </div>
    <div class="bottom"></div>
    <div class="statics">
      {{info.width}}
      <span class="line"></span>
      <span class="left sep"></span>
      <span class="right sep"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { PropType } from 'vue';
import { SingleRoad } from '../../model/index';

export default defineComponent({
  name: 'SingleRoad',
  props: {
    info: {
      type: Object as PropType<SingleRoad>,
    },
  },
  setup() {
    const selected = ref(false);
    const changeSeleted = (flag: boolean) => {
      selected.value = flag;
    };

    return {
      selected,
      changeSeleted,
    };
  },
});

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>>
