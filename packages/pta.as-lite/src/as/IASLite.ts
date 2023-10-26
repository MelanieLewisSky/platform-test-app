import {
  ASStatus,
  SystemDeviceInformation,
  SystemInputs
} from "../types/Types";

export interface IASLite {

  getSystemDeviceInformation(): Promise<SystemDeviceInformation>;

  getSystemInputs(): Promise<SystemInputs>;

  getSystemSetting(setting: string): Promise<string>;

  setSystemSetting(setting: string, value: string|number): Promise<ASStatus>;

  playersWatchInput(playerId: number, portId: string): Promise<ASStatus>;

  playersWatchLive(playerId: number, serviceKey: string): Promise<ASStatus>;

  playersStop(playerId: number): Promise<ASStatus>;
}