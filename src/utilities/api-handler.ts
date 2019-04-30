import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'

// const baseURL = 'https://www.thef2e.com/api/tagList';
const baseURL = 'https://api.example.com';

class HttpModel {
  constructor() {
    axios.defaults.baseURL = baseURL;
  }

  async callDoApi(config: AxiosRequestConfig) {
    this.request(config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  async request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    let result: AxiosResponse = await axios.create({
      baseURL: baseURL,
      // timeout: 1000,
      // headers: { 'X-Custom-Header': 'foobar' }
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