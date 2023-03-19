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

const carImageInfo = {
  image: carImage,
  tailstockImage: carImage,
  size: {
    width: 2.8,
    height: 1.5,
  },
};

const truckImageInfo = {
  image: TruckImage,
  tailstockImage: TruckImage,
  size: {
    width: 3,
    height: 3.2,
  },
};

const busStationImageInfo = {
  image: BusStationImage,
  tailstockImage: BusStationImage,
  size: {
    width: 2,
    height: 3,
  },
};

const busImageInfo = {
  image: BusImage,
  tailstockImage: BusImage,
  size: {
    width: 3,
    height: 3.2,
  },
};

const ParkImageInfo = {
  image: ParkImage,
  tailstockImage: ParkImage,
  size: {
    width: 5,
    height: 1.5,
  },
};

const RiverImageInfo = {
  image: RiverImage,
  tailstockImage: RiverImage,
  size: {
    width: '100%',
    height: 2,
  },
};

const SeparateImageInfo = {
  image: SeparateImage,
  tailstockImage: SeparateImage,
  size: {
    width: 1.5,
    height: 2,
  },
};

const TramcarImageInfo = {
  image: TramcarImage,
  tailstockImage: TramcarImage,
  size: {
    width: 4,
    height: 4,
  },
};

const ViaductImageInfo = {
  image: ViaductImage,
  tailstockImage: ViaductImage,
  size: {
    width: 5,
    height: 4,
  },
};

const WalkImageInfo = {
  image: WalkImage,
  tailstockImage: WalkImage,
  size: {
    width: 1.5,
    height: 1.8,
  },
};

const BicycleImageInfo = {
  image: BicycleImage,
  tailstockImage: BicycleImage,
  size: {
    width: 1.5,
    height: 1.8,
  },
};

export const getRoad = (type: RoadType, options: Partial<SingleRoad> = {}): SingleRoad => {
  const initValue: SingleRoad = {
    id: Number(Math.random() * 100000000),
    type,
    width: 3.5,
    bottom: 0.8,
  };
  switch (type) {
    case RoadType.Bicycle:
      initValue.width = 3;
      initValue.display = {
        image: BicycleImageInfo,
        scale: 1,
        position: 0,
        reverse: false,
      };
      break;
    case RoadType.Big:
      initValue.width = 3.75;
      initValue.display = {
        image: truckImageInfo,
        scale: 1,
        position: 0,
        reverse: false,
      };
      initValue.dirveDirection = DirveDirection.Up;
      initValue.carInfoDireciton = Direciton.Up;
      break;
    case RoadType.BusStation:
      initValue.display = {
        image: busStationImageInfo,
        scale: 1,
        position: 0,
        reverse: false,
      };
      initValue.dirveDirection = DirveDirection.Up;
      initValue.carInfoDireciton = Direciton.Up;
      break;
    case RoadType.BusRoad:
      initValue.width = 3;
      initValue.bottom = 1.0;
      initValue.display = {
        image: busImageInfo,
        scale: 1,
        position: 0,
        reverse: false,
      };
      break;
    case RoadType.Park:
      initValue.width = 5;
      initValue.display = {
        image: ParkImageInfo,
        scale: 1,
        position: 0,
        reverse: false,
      };
      break;
    case RoadType.River:
      initValue.width = 5;
      initValue.bottom = -5;
      initValue.display = {
        image: RiverImageInfo,
        scale: 1,
        position: 0,
        reverse: false,
      };
      break;
    case RoadType.SeparateRoad:
      initValue.width = 2;
      initValue.bottom = 1.0;
      initValue.display = {
        image: SeparateImageInfo,
        scale: 1,
        position: 0,
        reverse: false,
      };
      break;
    case RoadType.Stand:
      initValue.display = {
        image: carImageInfo,
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
        image: TramcarImageInfo,
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
        image: ViaductImageInfo,
        scale: 1,
        position: 0,
        reverse: false,
      };
      break;
    case RoadType.Walk:
      initValue.width = 3;
      initValue.bottom = 1.0;
      initValue.display = {
        image: WalkImageInfo,
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
