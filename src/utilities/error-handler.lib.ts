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
    if (error.response) {
        err =
            {
                code: error.response.status,
                message: error.response.statusText,
                traceId: '',

            };
    }
    else {
        err.message = JSON.stringify(error);
    }
    
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