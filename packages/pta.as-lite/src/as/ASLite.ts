import { logger } from "@sky-uk/lightning-logger";
import axios from 'axios';
import { IASLite } from "./IASLite";
import {
  SystemDeviceInformation,
  SystemInputs,
  ASStatus,
  ASErrorData,
  ASError,
} from "../types/Types";

const FILE_NAME = "ASLite.ts";

declare global {
  interface Document {
    ethan_as_ip_address?: string | null;
    ethan_as_port?: string | null;
  }
}

//const BASE_URL = "http://100.64.11.6:9001/as";
//const BASE_URL = "http://10.1.1.2:9005/as";
const BASE_URL = `http://${document.ethan_as_ip_address}:${document.ethan_as_port}/as`

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

  async getSystemSetting(setting: string): Promise<string> {
    const response = await axios.request({
      method: 'get',
      baseURL: BASE_URL,
      url: `/system/setting/${setting}`,
    });

    logger.debug(FILE_NAME, "response:", response);

    return response.data[setting] as string;
  }

  async setSystemSetting(setting: string, value: string|number): Promise<ASStatus> {
    try {
      const response = await axios.request({
        method: 'post',
        baseURL: BASE_URL,
        url: `/system/setting/${setting}`,
        data: { [setting]: value },
      });

      return response;
    } catch (e) {
      const error = e as ASError;
      return error.response;
    }
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

  async playersWatchLive(playerId: number, serviceKey: string): Promise<ASStatus> {
    try {
      const response = await axios.request({
        method: 'post',
        baseURL: BASE_URL,
        url: `/players/${playerId}/viper/action/watchstream?sk=${serviceKey}`,
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