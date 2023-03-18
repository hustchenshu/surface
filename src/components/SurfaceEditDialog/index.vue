<template>
  <q-dialog v-model="card">
     <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input color="purple-12" v-model="text" label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>
      <q-select
        rounded
        outlined
        bottom-slots
        v-model="model"
        :options="options"
        label="Label"
        counter
        maxlength="12"
        :dense="dense"
        :options-dense="denseOpts"
      >
        <template v-slot:before>
          <q-icon name="flight_takeoff" />
        </template>

        <template v-slot:append>
          <q-icon
            v-if="model !== ''"
            name="close"
            @click.stop.prevent="model = ''"
            class="cursor-pointer" />
          <q-icon name="search" @click.stop.prevent />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-select>
     </div>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import type { PropType } from 'vue';

export default defineComponent({
  name: 'SingleRoad',
  // props: {
  //   info: {
  //     type: Object as PropType<SingleRoad>,
  //   },
  // },
  setup() {
    const selected = ref(false);
    const changeSeleted = (flag: boolean) => {
      selected.value = flag;
    };

    return {
      model: ref(null),

      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle',
      ],

      dense: ref(false),
      denseOpts: ref(false),
    };
  },
});

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>>
