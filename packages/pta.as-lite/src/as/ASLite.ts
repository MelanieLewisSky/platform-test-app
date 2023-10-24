import axios from 'axios';
import { IASLite } from "./IASLite";
import {
  SystemDeviceInformation,
  SystemInputs,
  ASStatus,
  ASErrorData,
  ASError,
} from "../types/Types";

const BASE_URL = "http://100.64.11.6:9001/as";
//const BASE_URL = "http://10.1.1.2:9005/as";

export class ASLite implements IASLite {
  static instance: IASLite;

  static getInstance(): IASLite {
    if (!ASLite.instance) {
      ASLite.instance = new ASLite();
    }

    return ASLite.instance;
  }

  async getSystemDeviceInformation(): Promise<SystemDeviceInformation> {
    const response = await axios.request({
      method: 'get',
      baseURL: BASE_URL,
      url: '/system/deviceinformation',
    });

    return response.data as SystemDeviceInformation;
  }

  async getSystemInputs(): Promise<SystemInputs> {
    const response = await axios.request({
      method: 'get',
      baseURL: BASE_URL,
      url: '/system/inputs',
    });

    return response.data as SystemInputs;
  }

  async playersWatchInput(playerId: number, portId: string): Promise<ASStatus> {
    try {
      const response = await axios.request({
        method: 'post',
        baseURL: BASE_URL,
        url: `/players/${playerId}/action/watchinput?portid=${portId}`,
      });

      return response;
    } catch (e) {
      const error = e as ASError;
      return error.response;
    }
  }

  async playersStop(playerId: number): Promise<ASStatus> {
    try {
      const response = await axios.request({
        method: 'post',
        baseURL: BASE_URL,
        url: `/players/${playerId}/action/stop`,
      });

      return response;
    } catch (e) {
      const error = e as ASError;
      return error.response;
    }
  }
}