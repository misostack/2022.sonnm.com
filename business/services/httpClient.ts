import axios from "axios";

import environment from "@config/enviroment";
import { getCookie } from "helpers/cookie.helper";
import { CONFIG } from "@config/global.config";

const HTTP_STATUSES = {
  BAD_REQUEST: 400,
  UN_AUTHORIZED: 401,
  FORBIDDEN: 403,
  SERVER_ERROR: 500,
};

const BASE_URL = environment.NEXT_PUBLIC_API_URL
  ? environment.NEXT_PUBLIC_API_URL
  : "";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const consolidateErrorResponse = (error) => {
  const { data, status, headers } = error.response;

  return {
    error: data.error || error,
    headers,
    status,
    data: data || null,
  };
};

api.interceptors.request.use(
  (config) => {
    const accessToken = getCookie(CONFIG.APP_COOKIE_NAMES.ACCESS_TOKEN);
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    // store.dispatch("app/$showLoading");
    return config;
  },
  (error) => {
    // store.dispatch("app/$showLoading");
    return consolidateErrorResponse(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // because axios grab the response body into data object and api wrap data into object

    const data = response.data || null;

    return { errors: [], err: false, data };
  },
  (error) => {
    // store.dispatch("app/$hideLoading");
    if (error.response.status === HTTP_STATUSES.FORBIDDEN) {
      // store.dispatch("auth/DO_LOGOUT");
    }
    return consolidateErrorResponse(error);
  }
);

export default {
  option(path) {
    return api.options(path);
  },
  get(path, params = {}) {
    return api.get(path, { params });
  },
  post(path, data = {}, params = {}) {
    return api.post(path, data, {
      params,
    });
  },
  put(path, data = {}, params = {}) {
    return api.put(path, data, {
      params,
    });
  },
  patch(path, data = {}, params = {}) {
    return api.patch(path, data, {
      params,
    });
  },
  delete(path, params = {}) {
    return api.delete(path, {
      params,
    });
  },
  deleteWithPayload(path, data = {}, params = {}) {
    return api.delete(path, {
      data,
      params,
    });
  },
  getBlob(path, params = {}) {
    return api.get(path, {
      responseType: "blob",
      params,
    });
  },
  postFileAndData(path, data = {}, params = {}) {
    return api.post(path, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      ...params,
    });
  },
};
