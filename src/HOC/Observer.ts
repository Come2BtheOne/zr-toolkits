import { Random } from './Random';
import pkg from '../../package.json';

type Subscribe = {
    key: string
    callback: (payload?: any) => void
}
interface Events {
    [key: string]: Array<Subscribe>
}
export default class Observer {

    static Events: Events = {}
    /**
     * 发布/ 触发
     * @param eventName
     * @param payload
     */
    static emit(eventName: string, payload: any) {
        let callbackList = Observer.Events[eventName] || [];
        callbackList.forEach((subscribe: Subscribe) => subscribe.callback(payload));
    }
    /**
     * 订阅/监听
     * @param eventName
     * @param callback
     */
    static on(eventName: string = "", callback: (payload?: any) => void) {
        let subscribe: Subscribe = {
            key: "",
            callback
        }
        let subscribeKey = "";
        const eventArr = eventName.split('/');
        let _eventName = "";
        if (!eventName) {
            console.error(`[${pkg.name}][useObserver][on]\n<eventName>不能为空`);
            return;
        } else if (eventArr.length === 2) {
            //判断事件是否已存在
            if (Observer.duplicateRemoval(eventName)) {
                console.warn(`[${pkg.name}][useObserver][on]\n <${eventName}>已存在,请勿重复添加~`);
                return;
            }
            _eventName = eventArr[0];
            subscribeKey = eventArr[1];
            subscribe.key = subscribeKey;
        } else if (eventArr.length === 1) {
            subscribeKey = new Random().genRandomID();
            subscribe.key = subscribeKey;
            _eventName = eventArr[0];
        }
        let callbackList = Observer.Events[_eventName] || [];
        callback && callbackList.push(subscribe);
        Observer.Events[_eventName] = callbackList;

        return function () {
            Observer.off(_eventName, subscribeKey);
        }
    }
    /**
     * 只订阅一次/监听一次：
     * 思路：
     * 1. 重新包装一个回调函数(有名的)，进行注册订阅/监听,
     * 2. 包装函数里面直接调用 once方法的第二个参数回调函数，然后调用off方法 卸载该包装函数
     * @param eventName
     * @param callback
     */
    static once(eventName: string, callback: (payload?: any) => void) {
        let subscribeKey = new Random().genRandomID();
        let decor = (payload: any) => {
            callback && callback(payload);
            Observer.off(eventName, subscribeKey);
        }
        Observer.on(eventName + "/" + subscribeKey, decor);
    }
    /**
     * 卸载/取消 某一个回调监听(不是取消eventName的所有回调监听)
     * @param eventName
     * @param callback
     */
    static off(eventName: string, subscribeKey?: string) {
        const eventArr = eventName.split('/');
        let _eventName = "";
        if (eventArr.length === 2) {
            _eventName = eventArr[0];
            subscribeKey = eventArr[1];
        } else if (eventArr.length === 1) {
            _eventName = eventName;
        }
        let callbackList = Observer.Events[_eventName] || [];
        let resCallbacks = callbackList.filter((subscribe: Subscribe) => subscribe.key !== subscribeKey);
        Observer.Events[_eventName] = resCallbacks;
    }
    /**
     * 卸载/取消 指定eventName 的所有订阅/监听
     * @param eventName
     * @param callback
     */
    static remove(eventName: string, callback?: Function) {
        Observer.Events[eventName] = [];
        callback && callback();
    }

    /**
     * 判断事件是否已存在
     */
    static duplicateRemoval(eventName: string) {
        const eventArr = eventName.split('/');
        const eventList = Observer.Events[eventArr[0]];
        if (eventList && eventList.length && eventList.length > 0) {
            return eventList.find((subscribe: Subscribe) => subscribe.key === eventArr[1]);
        }
        return false;
    }
}