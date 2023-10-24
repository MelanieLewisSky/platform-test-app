import {
  ASStatus,
  SystemDeviceInformation,
  SystemInputs
} from "../types/Types";

export interface IASLite {

  getSystemDeviceInformation(): Promise<SystemDeviceInformation>;

  getSystemInputs(): Promise<SystemInputs>;

  playersWatchInput(playerId: number, portId: string): Promise<ASStatus>;

  playersStop(playerId: number): Promise<ASStatus>;
}