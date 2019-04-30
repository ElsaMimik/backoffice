import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
import VueCookies from 'vue-cookies'
import { IError } from '@/models/interfaces/error'

const baseURL = 'https://www.thef2e.com/api/tagList';
// const baseURL = 'https://api.example.com';

class HttpModel {
  constructor() {
    // axios.defaults.baseURL = baseURL;
  }

  // async callDoApi(config: AxiosRequestConfig): Promise<any> {
  //   this.request(config)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  async callDoApi<T>(config: AxiosRequestConfig): Promise<T|IError> {
    const res = await this.request(config)
    return res.data;
      // .then((res) => {
      //   console.log(res)
      //   return res.data;
      //   // return Promise.resolve(res.data);
      // })
      // .catch((err) => {
      //   const error: IError = {
      //     code: '',
      //     message: err,
      //     traceId: '',
      //   };
      //   return error;
      //   // console.log(error)
      //   // return Promise.resolve(error);
      // })
      // return Promise.reject();
  }

  async request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    let result: AxiosResponse = await axios.create({
      baseURL: baseURL,
      // timeout: 1000,
      // headers: { 'X-Custom-Header': 'foobar' }
      headers: {
        // 'Authorization': `Bearer ${ VueCookies.get('token')}`,
        'content-type': 'application/x-www-form-urlencoded',
      }
    }).request(config);
    return result;
  }
}

const model = new HttpModel();

export default model;


// import axios, { AxiosRequestConfig } from 'axios'
// import { IError } from '@/models/interfaces/error'
// export default class HttpHandler {
//   baseUrl: string;
//   constructor(baseUrl: string) {
//     this.baseUrl = baseUrl;
//   }
//   async request<T>(config: AxiosRequestConfig, responseType: T): Promise<T | IError> {
//     let result = await axios.create({
//       baseURL: this.baseUrl
//     }).request(config);
//     if (result.status === 200) {
//       return result.data;
//     }
//     else {
//       const err: IError = {
//         code: '',
//         message: 'string',
//         traceId: 'string',
//       };
//       return err;
//     }
//   }
// };