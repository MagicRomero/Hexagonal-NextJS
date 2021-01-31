import axios, { AxiosError, AxiosResponse } from "axios";
import {
  throttleAdapterEnhancer,
  cacheAdapterEnhancer,
} from "axios-extensions";
import Router from "next/router";

const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(axios.defaults.adapter, {
      enabledByDefault: false,
      cacheFlag: "useCache",
    })
  ),
};

const ApiRepository = axios.create(baseConfig);

const WebRepository = axios.create({
  ...baseConfig,
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

ApiRepository.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
WebRepository.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

ApiRepository.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response && [401, 419].includes(error.response.status)) {
      Router.push("/login");
    }

    return Promise.reject(error);
  }
);

export { ApiRepository, WebRepository };
