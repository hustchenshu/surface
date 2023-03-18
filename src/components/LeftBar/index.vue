<template>
  <div class="left-part row q-gutter-sm no-warp">
    <q-btn
      color="primary"
      v-for="p in items" :key="p.title"
      :icon="p.icon"
    >
      {{p.title}}
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const leftItems = [
  {
    title: '新建',
    icon: 'addchart',
  },
  {
    title: '打开',
    icon: 'open_in_new',
  }, {
    title: '保存',
    icon: 'save',
  }, {
    title: '另存',
    icon: 'save_alt',
  }, {
    title: '导出',
    icon: 'folder',
  }, {
    title: '风格',
    icon: 'style',
  }, {
    title: '标注',
    icon: 'label',
  },
  {
    title: '文字',
    icon: 'text_fields',
  },
  {
    title: '图片',
    icon: 'image',
  },
  {
    title: '箭头',
    icon: 'compare_arrows',
  },
];

export default defineComponent({
  name: 'LeftBar',
  setup() {
    return {
      items: Object.freeze(leftItems),
    };
  },
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>>
