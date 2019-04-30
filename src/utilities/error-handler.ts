import { IError } from '@/models/interfaces/error'

const requestSuccess = (config: any) => {
    console.log('request success');
    return config;
}

const requestFail = (err: any) => {
    // '请求超时!'
    console.log('request error', err);
    return Promise.reject(err);
}

const responseSuccess = (response: any) => {
    console.log('response success');
    return response;
}

const responseFail = (error: any) => {
    if (error.response.status == 504 || error.response.status == 404) {
        console.log('服务器被吃了⊙﹏⊙∥', error);
    } else if (error.response.status == 403) {
        console.log('权限不足,请联系管理员!', error);
    } else {
        console.log('未知错误!', error);
    }
    return Promise.resolve(error);
}

export { requestSuccess, requestFail, responseSuccess, responseFail }