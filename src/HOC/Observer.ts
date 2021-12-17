interface Events {
    [key: string]: Array<Function>
}
export default class Observer {
    static Events: Events = {} //约束示例:{"eventName":[function(){},function(){},.....],......}
    /**
     * 发布/ 触发
     * @param eventName
     * @param payload
     */
    static emit(eventName: string, payload: any) {
        let callbackList = Observer.Events[eventName] || [];
        // 如果用js写，遍历的时候要做一下判断是否是函数，ts 用类型约束，在调用或者编译阶段会检测是否合法
        // callbackList.map(fn=>{
        //     if(typeof fn==="function") fn.apply(this,args)
        // })
        callbackList.forEach(fn => fn(payload));
    }
    /**
     * 订阅/监听
     * @param eventName
     * @param callback
     */
    static on(eventName: string, callback?: Function) {
        // if(!eventName||typeof eventName !=="string") return  ；// 因为用了ts 写，所以这句不用写了，如果是js写，建议加这判断
        let callbackList = Observer.Events[eventName] || [];
        callback && callbackList.push(callback);
        Observer.Events[eventName] = callbackList;
    }
    /**
     * 只订阅一次/监听一次：
     * 思路：
     * 1. 重新包装一个回调函数(有名的)，进行注册订阅/监听,
     * 2. 包装函数里面直接调用 once方法的第二个参数回调函数，然后调用off方法 卸载该包装函数
     * @param eventName
     * @param callback
     */
    static once(eventName: string, callback?: Function) {
        // if(!eventName||typeof eventName !=="string") return ；
        let decor = (payload: any) => {
            callback && callback(payload);
            Observer.off(eventName, decor);
        }
        Observer.on(eventName, decor);
    }
    /**
     * 卸载/取消 某一个回调监听(不是取消eventName的所有回调监听)
     * @param eventName
     * @param callback
     */
    static off(eventName: string, callback: Function) {
        let callbackList = Observer.Events[eventName] || [];
        let resCallbacks = callbackList.filter(fn => fn !== callback);
        Observer.Events[eventName] = resCallbacks;
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
}