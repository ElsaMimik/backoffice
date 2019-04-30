import { IError } from '@/models/interfaces/error'
import EventBus from '@/utilities/event-bus'

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

/**
 * axios error handler
 * @author rourou
 * @description EventBus通知component
 */
const responseFail = (error: any) => {
    let msg = '';
    if (error.response.status === 504 || error.response.status === 404) {
        msg = '服务器被吃了⊙﹏⊙∥';
    } else if (error.response.status === 403) {
        msg = '权限不足,请联系管理员!';
    } else {
        msg = '未知错误!';
    }
    err =
        {
            code: error.response.status,
            message: msg,
            traceId: error.response.statusText,

        };
    // localStorage.setItem('ErrorLog', JSON.stringify(err));
    EventBus.$emit('api-error', err);
    return Promise.resolve(error);
}

export let err: IError =
{
    code: '',
    message: '',
    traceId: '',

};

export { requestSuccess, requestFail, responseSuccess, responseFail }