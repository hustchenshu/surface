<template>
  <div
    :class="`column road ${selected ? 'road-selected' : ''}`"
    :style="{width: `${roadInfo.width * 20}px`}"
    @mouseenter="() => changeSeleted(true)"
    @mouseleave="() => changeSeleted(false)"
  >
    <div class="dirction" v-if="roadInfo.carInfoDireciton">
      <q-icon :name="roadInfo.carInfoDireciton ? 'arrow_upward' : 'arrow_downward'" />
    </div>
    <div class="display column items-end" v-if="roadInfo.display">
      <img class="image cursor-pointer" :src="roadInfo.display.image.image" alt="">
    </div>
    <div class="bottom cursor-pointer"></div>
    <div class="statics cursor-pointer">
      {{roadInfo.width}}
      <q-popup-edit
        v-model="roadInfo.width"
        v-slot="scope"
        buttons
        :validate="validWidth"
        @hide="validWidth"
        label-set="Save"
        label-cancel="Close"
      >
        <q-input
          filled
          v-model.number="scope.value"
          @keyup.enter="scope.set"
          hint="输入道路宽度"
          :error="error"
          :error-message="errorMessage"
        >
        </q-input>
      </q-popup-edit>
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
  setup(props) {
    const selected = ref(false);
    const changeSeleted = (flag: boolean) => {
      selected.value = flag;
    };

    const error = ref(false);
    const errorMessage = ref('');
    const validWidth = (val: any) => {
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(val)) {
        error.value = true;
        errorMessage.value = '请输入有效的数字';
        return false;
      }

      error.value = false;
      errorMessage.value = '';
      return true;
    };

    return {
      validWidth,
      error,
      errorMessage,
      roadInfo: props.info,
      selected,
      changeSeleted,
    };
  },
});

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>>
