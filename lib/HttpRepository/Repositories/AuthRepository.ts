import { ApiRepository, WebRepository } from "../";

const resource = "";

export default {
  setCSRFCookie() {
    return WebRepository.get("/sanctum/csrf-cookie");
  },
  login(params) {
    return ApiRepository.post(`${resource}/login`, {
      ...params,
    });
  },
  logout() {
    return ApiRepository.post(`${resource}/logout`);
  },
  forgotPassword(params) {
    return ApiRepository.post(`${resource}/forgot`, {
      ...params,
    });
  },
  passwordReset(params) {
    return ApiRepository.post(`${resource}/password-reset`, {
      ...params,
    });
  },
};
