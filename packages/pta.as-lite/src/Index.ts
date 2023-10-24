
import { IASLite } from "./as/IASLite";
import { ASLite } from "./as/ASLite";
import {
  SystemDeviceInformation,
  SystemInput,
  SystemInputs,
} from "./types/Types";

export function getASLite(): IASLite {
  return ASLite.getInstance();
}

export {
  ASLite,
}

export type {
  IASLite,
  SystemDeviceInformation,
  SystemInput,
  SystemInputs,
}