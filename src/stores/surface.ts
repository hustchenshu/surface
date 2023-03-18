import { defineStore } from 'pinia';
import { InitProps, RoadSurface, RoadSurfaceType } from '@typings';
import { getInitRoads } from '@tools/init';

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
  actions: {
    initWithType(params: InitProps) {
      const data = getInitRoads(params);
      Object.assign(this, data);
    },
  },
});
