import { IError } from '@/models/interfaces/error'

const requestSuccess = (config: any) => {
    console.log('request success');
    return config;
}

const requestFail = (err: any) => {
    console.log('request error');
    return Promise.reject(err);
}

const responseSuccess = (response: any) => {
    console.log('response success');
    return response;
}

const responseFail = (error: any) => {
    console.log('response error');
    return Promise.reject(error.response.data)
}

export { requestSuccess, requestFail, responseSuccess, responseFail }