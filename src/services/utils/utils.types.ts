import { AxiosRequestConfig, AxiosHeaders } from 'axios';

type ConfigHeadersType = {
  authorization: string;
};

interface RequestConfigType extends AxiosRequestConfig {
  headers: ConfigHeadersType | AxiosHeaders;
}

export type { RequestConfigType };
