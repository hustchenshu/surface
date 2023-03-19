<template>
  <div class="foot">
    <div class="text-purple q-gutter-md" style="font-size: 2em">
      <q-icon v-for="item in items" :key="item.icon" :name="item.icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const bottomItems = [
  {
    text: '',
    icon: 'font_download',
  }, {
    text: '',
    icon: 'warning',
  }, {
    text: '',
    icon: 'format_size',
  }, {
    text: '',
    icon: 'print',
  }, {
    text: '',
    icon: 'today',
  }, {
    text: '',
    icon: 'style',
  },
];

export default defineComponent({
  name: 'BottomBar',
  setup() {
    return {
      items: Object.freeze(bottomItems),
    };
  },
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>>
