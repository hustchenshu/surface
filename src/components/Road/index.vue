<template>
  <div
    :class="`column road ${selected ? 'road-selected' : ''} ${editorDialog ? 'road-edit': ''}`"
    :style="{
      width: `${roadInfo.width * 20}px`,
      marginBottom: `${roadInfo.bottom * 20}px`
    }"
    @mouseenter="() => changeSeleted(true)"
    @mouseleave="() => changeSeleted(false)"
  >
    <MoreMenu :index="index" @showEdit="showEdit" />
    <div class="dirction" v-if="roadInfo.carInfoDireciton">
      <q-icon :name="roadInfo.carInfoDireciton ? 'arrow_upward' : 'arrow_downward'" />
    </div>
    <div class="display column items-center" v-if="roadInfo.display">
      <img class="image"
        :src="roadInfo.display.image.image" alt=""
        :style="`width: ${roadInfo.display.image.size.width * 20}px`">
    </div>
    <div class="bottom">
      <div class="border" :style="`height: ${roadInfo.bottom * 20}px`"></div>
    </div>
    <div class="statics cursor-pointer" @click="showEdit"
      :style="`bottom: ${-30 - roadInfo.bottom * 20}px`"
    >
      {{roadInfo.width}}
      <span class="line"></span>
      <span class="left sep"></span>
      <span class="right sep"></span>
    </div>
  </div>
   <q-dialog v-model="editorDialog" position="right"
    square
    persistent
  >
    <RoadEditor :data="roadInfo" />
   </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { PropType } from 'vue';
import RoadEditor from '@components/SurfaceEditDialog/index.vue';
import MoreMenu from '@components/MoreMenu/index.vue';
import { SingleRoad } from '@typings/index';

export default defineComponent({
  name: 'SingleRoad',
  components: {
    RoadEditor,
    MoreMenu,
  },
  props: {
    index: {
      type: Number,
    },
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
    const editorDialog = ref(false);
    const showEdit = () => {
      editorDialog.value = true;
    };

    return {
      showEdit,
      editorDialog,
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
