import { defineStore } from 'pinia';
import { InitProps, RoadSurface, RoadSurfaceType } from '@typings';
import { getInitRoads, getRoad } from '@tools/init';
import { RoadType, SingleRoad } from 'src/typings';

const initValue: RoadSurface = {
  name: '',
  maxWidth: 0,
  type: RoadSurfaceType.MainRoad,
  leftRoadCount: 0,
  rightRoadCount: 0,
  roads: [],
};

export const useSurfaceStore = defineStore('surface', {
  state: (): RoadSurface => initValue,
  getters: {
    roadList(state) {
      return state.roads;
    },
  },
  actions: {
    initWithType(params: InitProps) {
      const data = getInitRoads(params);
      // Object.assign(this, data);
      this.$patch(data);
    },
    insertRoad(index: number, type: RoadType) {
      const newRoad = getRoad(type);
      this.roads.splice(index, 0, newRoad);
    },
    deleteRoadById(id: number) {
      const index = this.roads.findIndex((p: SingleRoad) => p.id === id);
      this.roads.splice(index, 1);
    },
    deleteRoadByIndex(index: number) {
      this.roads.splice(index, 1);
    },
    updateRoad(id: number, data: Partial<SingleRoad>) {
      const info = this.roads.find((p: SingleRoad) => p.id === id);
      if (info) {
        Object.assign(info, data);
      }
    },
  },
});
