export enum RoadSurfaceType {
  QuickRoad = 'quickRoad', // 快速路
  MainRoad = 'mainRoad', // 主干道
  SubRoad = 'subRoad', // 次干路
  Branchway = 'branchway', // 支路
}

export enum RoadType {
  Big = 'big', // 大车道
  Stand = 'stand', // 综合车道
  BusRoad = 'busRoad', // 公交专用道
  TramcarRoad = 'tramcar', // 有轨电车道
  Bicycle = 'bicycle', // 非机动车道
  Walk = 'walk', // 人行道
  BusStation = 'busStation', // 公交站台
  SeparateRoad = 'separateRoad', // 隔离带
  Viaduct = 'viaduct', // 高架桥
  River = 'river', // 河水
  Park = 'park', // 停车位
  Custom = 'custom' // 自定义
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
}

export interface DisplayInfo {
  image: Image;
  scale: number; // 0.5 ~ 2.0
  position: number; // -0.5 ~ 0.5
  reverse: boolean;
}

export interface SingleRoad {
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
