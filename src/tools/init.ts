/* eslint-disable import/no-duplicates */
import {
  Direciton,
  DirveDirection,
  InitProps,
  RoadSurface, RoadSurfaceType, RoadType, SingleRoad,
} from '@typings';

import carImage from '@assets/images/xiaopeng.png';
import BusImage from '@assets/images/xiaopeng.png';
import TruckImage from '@assets/images/xiaopeng.png';
import TramcarImage from '@assets/images/xiaopeng.png';
import BusStationImage from '@assets/images/xiaopeng.png';
import SeparateImage from '@assets/images/tree.svg';
import ViaductImage from '@assets/images/xiaopeng.png';
import RiverImage from '@assets/images/xiaopeng.png';
import ParkImage from '@assets/images/xiaopeng.png';
import BicycleImage from '@assets/images/bicycle.svg';
import WalkImage from '@assets/images/walk.svg';

export const getRoad = (type: RoadType, options: Partial<SingleRoad> = {}): SingleRoad => {
  const initValue: SingleRoad = {
    type,
    width: 3.5,
    bottom: 0.8,
  };
  switch (type) {
    case RoadType.Bicycle:
      initValue.width = 3;
      initValue.display = {
        image: {
          image: BicycleImage,
          tailstockImage: BicycleImage,
        },
        scale: 1,
        position: 0,
        reverse: false,
      };
      break;
    case RoadType.Big:
      initValue.width = 3.75;
      initValue.display = {
        image: {
          image: TruckImage,
          tailstockImage: TruckImage,
        },
        scale: 1,
        position: 0,
        reverse: false,
      };
      initValue.dirveDirection = DirveDirection.Up;
      initValue.carInfoDireciton = Direciton.Up;
      break;
    case RoadType.BusRoad:
      initValue.display = {
        image: {
          image: BusStationImage,
          tailstockImage: BusStationImage,
        },
        scale: 1,
        position: 0,
        reverse: false,
      };
      initValue.dirveDirection = DirveDirection.Up;
      initValue.carInfoDireciton = Direciton.Up;
      break;
    case RoadType.BusStation:
      initValue.width = 3;
      initValue.bottom = 1.0;
      initValue.display = {
        image: {
          image: BusImage,
          tailstockImage: BusImage,
        },
        scale: 1,
        position: 0,
        reverse: false,
      };
      break;
    case RoadType.Park:
      initValue.width = 5;
      initValue.display = {
        image: {
          image: ParkImage,
          tailstockImage: ParkImage,
        },
        scale: 1,
        position: 0,
        reverse: false,
      };
      break;
    case RoadType.River:
      initValue.width = 5;
      initValue.bottom = -5;
      initValue.display = {
        image: {
          image: RiverImage,
          tailstockImage: RiverImage,
        },
        scale: 1,
        position: 0,
        reverse: false,
      };
      break;
    case RoadType.SeparateRoad:
      initValue.width = 2;
      initValue.bottom = 1.0;
      initValue.display = {
        image: {
          image: SeparateImage,
          tailstockImage: SeparateImage,
        },
        scale: 1,
        position: 0,
        reverse: false,
      };
      break;
    case RoadType.Stand:
      initValue.display = {
        image: {
          image: carImage,
          tailstockImage: carImage,
        },
        scale: 1,
        position: 0,
        reverse: false,
      };
      initValue.dirveDirection = DirveDirection.Up;
      initValue.carInfoDireciton = Direciton.Up;
      break;
    case RoadType.TramcarRoad:
      initValue.width = 4;
      initValue.display = {
        image: {
          image: TramcarImage,
          tailstockImage: TramcarImage,
        },
        scale: 1,
        position: 0,
        reverse: false,
      };
      initValue.dirveDirection = DirveDirection.Up;
      initValue.carInfoDireciton = Direciton.Up;
      break;
    case RoadType.Viaduct:
      initValue.width = 7;
      initValue.bottom = 1.0;
      initValue.display = {
        image: {
          image: ViaductImage,
          tailstockImage: ViaductImage,
        },
        scale: 1,
        position: 0,
        reverse: false,
      };
      break;
    case RoadType.Walk:
      initValue.width = 3;
      initValue.bottom = 1.0;
      initValue.display = {
        image: {
          image: WalkImage,
          tailstockImage: WalkImage,
        },
        scale: 1,
        position: 0,
        reverse: false,
      };
      break;
    default:
      break;
  }
  Object.assign(initValue, options);
  return initValue;
};

export const getRoads = (surface: RoadSurface): SingleRoad[] => {
  const records: SingleRoad[] = [];
  // 左侧人行道
  records.push(getRoad(RoadType.Walk));
  // 慢行隔离
  records.push(getRoad(RoadType.SeparateRoad, { name: '慢行隔离' }));
  // 非机动车道
  records.push(getRoad(RoadType.Bicycle));
  // 机非隔离
  records.push(getRoad(RoadType.SeparateRoad, { name: '机非隔离' }));
  // 左车道
  for (let i = 1; i <= surface.leftRoadCount; i += 1) {
    records.push(getRoad(RoadType.Stand, { name: `左侧第${i}机动车道` }));
  }
  // 中央隔离
  records.push(getRoad(RoadType.SeparateRoad, { name: '中央隔离' }));
  // 右车道
  for (let i = 1; i <= surface.rightRoadCount; i += 1) {
    records.push(getRoad(RoadType.Stand, { name: `右侧第${i}机动车道` }));
  }
  // 机非隔离
  records.push(getRoad(RoadType.SeparateRoad, { name: '机非隔离' }));
  // 非机动车道
  records.push(getRoad(RoadType.Bicycle));
  // 慢行隔离
  records.push(getRoad(RoadType.SeparateRoad, { name: '慢行隔离' }));
  // 右侧人行道
  records.push(getRoad(RoadType.Walk));
  return records;
};

export const getInitRoads = (params: InitProps): RoadSurface => {
  const initValue: RoadSurface = {
    name: '',
    maxWidth: 0,
    leftRoadCount: 0,
    rightRoadCount: 0,
    roads: [],
    ...params,
  };

  switch (initValue.type) {
    case RoadSurfaceType.Branchway:
      Object.assign(initValue, {
        maxWidth: 20,
        leftRoadCount: 1,
        rightRoadCount: 1,
      });
      break;
    case RoadSurfaceType.MainRoad:
      Object.assign(initValue, {
        maxWidth: 50,
        leftRoadCount: 3,
        rightRoadCount: 3,
      });
      break;
    case RoadSurfaceType.QuickRoad:
      Object.assign(initValue, {
        maxWidth: 60,
        leftRoadCount: 4,
        rightRoadCount: 4,
      });
      break;
    case RoadSurfaceType.SubRoad:
      Object.assign(initValue, {
        maxWidth: 40,
        leftRoadCount: 2,
        rightRoadCount: 2,
      });
      break;
    default:
      break;
  }
  initValue.roads = getRoads(initValue);

  return initValue;
};
