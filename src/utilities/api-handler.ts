import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
import Cookies from 'js-cookie'
import { requestSuccess, requestFail, responseSuccess, responseFail } from './error-handler'

const baseURL = 'https://www.thef2e.com/api/tagList';
// const baseURL = 'https://api.example.com';

const successURL = 'https://www.mocky.io/v2/5c94c4423600001818941c8b?mocky-delay=300ms';
const failURL = 'https://www.mocky.io/v2/5c94c4793600001818941c8f?mocky-delay=300ms';

class HttpModel {
  constructor() {
    // axios.defaults.baseURL = baseURL;
  }

  async request<T>(config: AxiosRequestConfig): Promise<any> {
    let result;
    try {
      let config = {
        baseURL: successURL,
        headers: {
          'Authorization': `Bearer ${ Cookies.get('token') }`,
          'content-type': 'application/x-www-form-urlencoded',
        }
      };
      let instance = axios.create();
      instance.interceptors.request.use(
        config => requestSuccess(config),
        err => requestFail(err));
      instance.interceptors.response.use(
        response => responseSuccess(response),
        error => responseFail(error));
      result = await instance.request(config);
    }
    catch (err) {
      console.log(err);
    }
    return result;
  }
}

const model = new HttpModel();

export default model;