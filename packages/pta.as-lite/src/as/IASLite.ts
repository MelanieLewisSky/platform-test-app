import {
  SystemDeviceInformation,
  SystemInputs
} from "../types/Types";

export interface IASLite {

  getSystemDeviceInformation(): Promise<SystemDeviceInformation>;

  getSystemInputs(): Promise<SystemInputs>;

  playersWatchInput(playerId: number, portId: string): Promise<void>;
}