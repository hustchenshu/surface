export enum RoadSurfaceType {
  QuickRoad = '快速路', // 快速路
  MainRoad = '主干道', // 主干道
  SubRoad = '次干路', // 次干路
  Branchway = '支路', // 支路
}

export enum RoadType {
  Big = '大车道', // 大车道
  Stand = '综合车道', // 综合车道
  BusRoad = '公交专用道', // 公交专用道
  TramcarRoad = '有轨电车道', // 有轨电车道
  Bicycle = '非机动车道', // 非机动车道
  Walk = '人行道', // 人行道
  BusStation = '公交站台', // 公交站台
  SeparateRoad = '隔离带', // 隔离带
  Viaduct = '高架桥', // 高架桥
  River = '河水', // 河水
  Park = '停车位', // 停车位
  Custom = '自定义' // 自定义
}

export enum Direciton {
  Up,
  Down,
}

export enum DirveDirection {
  Up,
  Down,
  Left,
  Right,
  TurnAround,
  UpAndLeft,
  LeftAndTurnAround,
  UpAndTurnAround,
  LeftAndRight,
  UpAndRight,
  Park,
}
export interface Image {
  image: string;
  tailstockImage?: string;
  size?: {
    width: number | string;
    height?: number | string;
  }
}

export interface DisplayInfo {
  image: Image;
  scale: number; // 0.5 ~ 2.0
  position: number; // -0.5 ~ 0.5
  reverse: boolean;
}

export interface SingleRoad {
  id: number;
  name?: string;
  width: number;
  bottom: number;
  type: RoadType;
  display?: DisplayInfo;
  dirveDirection?: DirveDirection;
  carInfoDireciton?: Direciton;
}

export interface RoadSurface {
  name: string;
  type: RoadSurfaceType;
  maxWidth: number;
  leftRoadCount: number;
  rightRoadCount: number;
  roads: SingleRoad[];
}

export interface InitProps {
  name: string;
  type: RoadSurfaceType;
  maxWidth: number;
  leftRoadCount: number;
  rightRoadCount: number;
}
