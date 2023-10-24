export type ASErrorData = {
  errorCode: number;
  developerMessage: string;
  userMessager: string;
}

export type ASStatus = {
  status: number;
  statusText: string;
  data?: any;
}

export type ASError = {
  response: ASStatus;
}

export type SystemDeviceInformation = {
  modelNumber: string;
  versionNumber: string;
  serialNumber: string;
  ASVersion: string;
  IPAddress: string;
};

export type SystemInput = {
  state: string;
  portid: string;
  friendlyname: string;
  arcenabled?: boolean;
  arcdeviceattached?: boolean;
  autolowlatencymode?: boolean;
}

export type SystemInputs = {
  version: number;
  inputs: SystemInput[];
}