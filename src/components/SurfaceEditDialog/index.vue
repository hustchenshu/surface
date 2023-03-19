<template>
  <q-card>
    <q-bar>
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip>Close</q-tooltip>
      </q-btn>
    </q-bar>

    <q-input
      filled
      v-model="info.name"
      label="道路名称"
      lazy-rules
    />

    <q-input
      filled
      v-model.number="info.width"
      label="道路宽度"
      lazy-rules
    />

    <q-input
      filled
      v-model.number="info.bottom"
      label="路面高度"
      lazy-rules
    />
  </q-card>

</template>

<script lang="ts">
import type { PropType } from 'vue';
import { SingleRoad } from '../../typings';

export default {
  name: 'RoadEditContent',
  props: {
    data: {
      type: Object as PropType<SingleRoad>,
    },
  },
  setup(props) {
    console.log(props);
    return {
      info: props.data,
    };
  },
};
</script>
