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
        baseURL: failURL,
        // timeout: 1000,
        // headers: { 'X-Custom-Header': 'foobar' }
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`,
          'content-type': 'application/x-www-form-urlencoded',
        }
      };
      let instance = axios.create();
      // http request 拦截器
      instance.interceptors.request.use(
        config => {
          console.log('request success');
          // 从本地存储获取token
          var token = window.localStorage.token
          if (token) {
            config.headers.Authorization = `token ${token}`;
          }
          return config;
        },
        err => {
          console.log('request error');
          return Promise.reject(err);
        });

      // http response 拦截器
      instance.interceptors.response.use(
        response => {
          console.log('response success');
          return response;
        },
        error => {
          console.log('response error');
          if (error.response) {
          }
          return Promise.reject(error.response.data)
        });

       // instance.interceptors.request.use(
      //   (config): any => { requestSuccess(config); },
      //   (err): any => { requestFail(err) });

      // instance.interceptors.response.use(
      //   (response): any => { responseSuccess(response); },
      //   (responseFail): any => { requestFail(responseFail) });
        result = await instance.request(config);
      //.request(config);
    }
    catch (err) {
      console.log(err);
    }
    console.log(result);
    // let result: AxiosResponse = await axios.get(failURL);
    return result;
  }
}

const model = new HttpModel();

export default model;