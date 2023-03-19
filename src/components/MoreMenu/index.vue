<template>
  <q-menu
    touch-position
    context-menu
  >
    <q-list dense style="min-width: 100px">
      <q-item clickable v-close-popup @click="showEdit">
        <q-item-section>编辑</q-item-section>
      </q-item>
      <q-item clickable v-close-popup @click="deleteRoad">
        <q-item-section>删除</q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section>在左侧插入...</q-item-section>
        <q-item-section side>
          <q-icon name="keyboard_arrow_right" />
        </q-item-section>
        <q-menu anchor="top end" self="top start">
           <q-list dense style="min-width: 100px">
            <q-item clickable v-close-popup v-for="p in roadTypes" :key="p.key"
              @click="() => insert(index, p.name)"
            >
              <q-item-section>{{p.name}}</q-item-section>
            </q-item>
           </q-list>
        </q-menu>
      </q-item>
      <q-item clickable>
        <q-item-section>在右侧插入...</q-item-section>
        <q-item-section side>
          <q-icon name="keyboard_arrow_right" />
        </q-item-section>
        <q-menu anchor="top end" self="top start">
           <q-list dense style="min-width: 100px">
            <q-item clickable v-close-popup v-for="p in roadTypes" :key="p.key"
             @click="() => insert(index + 1, p.name)"
            >
              <q-item-section>{{p.name}}</q-item-section>
            </q-item>
           </q-list>
        </q-menu>
      </q-item>
      <q-separator />
      <q-item clickable v-close-popup>
        <q-item-section>Quit</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import { RoadType } from '@typings';
import { useSurfaceStore } from '@stores/surface';

const roadTypes = Object.entries(RoadType).map(([k, v]) => ({
  name: v,
  key: k,
}));

const props = defineProps({
  index: Number,
});

const surfaceStore = useSurfaceStore();

const emit = defineEmits(['showEdit']); // 定义多个自定义事件
const showEdit = () => {
  emit('showEdit');
};

const insert = (insertIndex: number, type: RoadType) => {
  surfaceStore.insertRoad(insertIndex, type);
};

const deleteRoad = () => {
  surfaceStore.deleteRoadByIndex(props.index);
};

</script>
