/**
 * @name:工具库
 * @author: 切图仔
 * @time: 2021-11-30 14:26:47
 */

import pkg from '../package.json';
import {
  TimeDifference, 
  CheckStringKey, 
  TrimType, 
  CaseType, 
  ShareOptions,
  NavigatorWithShare,
  OperationEnum,
  SendOptions
} from './types';

import { 
  CheckStringReg, 
  TrimReg, 
  aCity 
} from './config';

export default class Tks {

  public static readonly toolkitsName: string = pkg.name;
  public static readonly version: string = pkg.version;


  /**
   * 判断一个字符串是否为空
   * @param {value|undefined|null} value
   * @return {boolean}
   */
  public static isEmptyString(value: string | undefined | null): boolean {
    return (value === undefined || value === null || value === "");
  }

  /**
   * 判断一个值是否为对象
   * @param value
   * @return {boolean}
   */
  public static isObject(value: any): boolean {
    return Object.prototype.toString.call(value) === '[object Object]';
  }

  /**
   * 判断一个对象是否为空
   * @param obj
   * @return {boolean}
   */
  public static isEmptyObject(obj: any): boolean {
    if(this.isObject(obj)){
      return Object.keys(obj).length === 0;
    } else {
      throw (`[${this.toolkitsName}.isEmptyObject()]\n入参非对象类型`);
    }
  }

  /**
   * 对数组对象去重
   * @param {Array} arr   需要去重的数组
   * @param {string} key  根据key值去重
   * @returns {Array}
   * 
   * 示例：
   * let Arr = [{name: 'a',id: 1}, {name: 'a',id: 2}, {name: 'b',id: 3}, {name: 'c',id: 4}]
   * deWeightThree(Arr, "name");
   */
  public static deWeightThree<T>(arr: Array<T>, key: string): Array<T> {
    let obj:T | {} = {};
    let _arr:Array<T> = arr.reduce(function(a, b) {
      obj[b[key]] ? '' : obj[b[key]] = true && a.push(b);
      return a;
    }, [])
    return _arr;
  }

/**
 * 递归查询树结构的某一个值
 * @param {Array} arr   需要查找的数组
 * @param {string} key  要查找的键名
 * @param {any} keyValue 需要查找的值
 * @param multilevelName  树结构内，包含子数组的对象名，默认children
 * @returns {boolean} 是否找到
 * 
 * 示例：
 * const Arr = [
 *  {
 *    id: 123,
 *    children: [
 *      id: 789,
 *      children: []
 *    ]
 *  },
 *  {
 *    id: 456,
 *    children: [
 *      id: 874,
 *      children: []
 *    ]
 *  },
 * ]
 * 
 * searchRoutes(Arr, "id", 789, "children")
 */
  public static searchRoutes(arr: Array<any>, key: string, keyValue: any, multilevelName: string = 'children'): boolean {
    for(let o of arr || []) {
      if(o[key] === keyValue) return o
      const o_ = this.searchRoutes(o[multilevelName] || [], key, keyValue, multilevelName)
      if(o_) return o_
    }
  }


/**
 * 基于URL生成UUID
 * @returns {string} cd205467-0120-47b0-9444-894736d873c7
 */
  public static genUUID(): string {
    const url = URL.createObjectURL(new Blob([]));
    // const uuid = url.split("/").pop();
    const uuid = url.substring(url.lastIndexOf('/')+ 1);
    URL.revokeObjectURL(url);
    return uuid;
  }

  /**
   * 基于日期对象和random生成随机ID
   * @returns {string}  1627635706897_652
   */
  public static genRandomID(): string {
    return new Date().getTime() + '_' + (Math.random() * 10000).toFixed(0);
  }

    /**
   * 洗牌算法随机
   * @param arr
   */
     public static shuffleRandom<T>(arr: Array<T>): Array<T> {
      let result: Array<any> = [], random;
      while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random])
        arr.splice(random, 1)
      }
      return result;
    }
  
    /**
     * 在一个范围内生成随机数
     * @param {number} min
     * @param {number} max
     * @param {number} exact  精确到几位小数
     */
    public static creatRandom (min: number, max: number, exact: number = 0): number {
      if (arguments.length === 0) {
        return Math.random();
      } else if (arguments.length === 1) {
        max = min;
        min = 0;
      }
      const range = min + (Math.random()*(max - min));
      return +(exact === void(0) ? Math.round(range) : range.toFixed(exact));
    }


  /**
   * 获取url上的参数
   * @param {string} paramsKey  需要获取的参数的键值
   * @param {string} url  链接
   *
   */
  public static getUrlParamsValue(paramsKey: string, url: string): string | null{
    if(URL) {
      const urlSP = new URL(url);
      return urlSP.searchParams.get(paramsKey);
    }
  }

  /**
   * 去除字符串前后空格
   * @param {string} str  字符串
   * @param {TrimType} trimType  切割类型
   * @return {string}
   */
  public static trim(str: string, trimType: TrimType = 2): string {
    if(trimType !== undefined && TrimType.hasOwnProperty(trimType)) {
      return str.replace(TrimReg[TrimType[trimType]], "");
    } else {
      throw (`[${this.toolkitsName}.trim()]\n入参[trimType]错误`);
    }
  }

  /**
   * 大小写转化
   * @param {string} str
   * @param {CaseType} caseType
   * @return {string}
   */
  public static changeCase(str: string, caseType: CaseType): string {
    switch (caseType) {
      case 1:
        return str.replace(/\b\w+\b/g, function (word) {
          return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
        });
      case 2:
        return str.replace(/\b\w+\b/g, function (word) {
          return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
        });
      case 3:
        return str.split('').map(function (word) {
          if (/[a-z]/.test(word)) {
            return word.toUpperCase();
          } else {
            return word.toLowerCase();
          }
        }).join('');
      case 4:
        return str.toUpperCase();
      case 5:
        return str.toLowerCase();
      default:
        throw (`[${this.toolkitsName}.changeCase()]\n入参[caseType]错误`);
    }
  }

  /**
   * 校验邮箱格式
   * @param {string} str
   * @return {boolean}
   */
  public static isEmail(str: string): boolean {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(str);
  }

  /**
   * 校验手机号码格式
   * @param {string} str
   * @return {boolean}
   */
  public static isMobilePhone(str: string): boolean {
    return /^1[0-9]{10}$/.test(str);
  }

  /**
   * 校验座机号码格式
   * @param {string} str
   * @return {boolean}
   */
  public static isTelephone(str: string): boolean {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(str);
  }

  /**
   * 正则校验合集
   * @param {string} str  要校验的字符串
   * @param {CheckStringKey} key  校验类型
   * @return {boolean}
   */
  public static regCheckString(str: string, key: CheckStringKey): boolean {
    if(key !== undefined && CheckStringReg.hasOwnProperty(key)) {
      for(let k in CheckStringReg) {
        if(k === key) {
          return CheckStringReg[k].test(str);
        }
      }
    } else {
      throw (`[${this.toolkitsName}.regCheckString()]\n入参[key]错误`);
    }
  }

  /**
   * 严格校验身份证
   * @param {string} sId  字符串类型的身份证号码
   * @return {boolean}
   */
  public static strictCheckIDCard(sId: string): boolean {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
      console.warn('你输入的身份证长度或格式错误')
      return false
    }
    //身份证城市
    if (!aCity[parseInt(sId.substr(0, 2))]) {
      console.warn('你的身份证地区非法')
      return false
    }

    // 出生日期验证
    let sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
      d = new Date(sBirthday)
    if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
      console.warn('身份证上的出生日期非法')
      return false
    }

    // 身份证号码校验
    let sum = 0,
      weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
      codes = "10X98765432"
    for (let i = 0; i < sId.length - 1; i++) {
      // @ts-ignore
      sum += sId[i] * weights[i];
    }
    let last = codes[sum % 11]; //计算出来的最后一位身份证号码
    if (sId[sId.length - 1] != last) {
      console.warn('你输入的身份证号非法')
      return false
    }

    return true
  }


  /**
   * 格式化金额格式  152,552.25
   * @param {number} num  需要格式的数字
   * @param {number} precision  精确到几位小数
   */
  public static formatMoney(num: number, precision: number = 2) {
    const _num = +num;
    return _num.toLocaleString('zh', { minimumIntegerDigits: 1,minimumFractionDigits: precision, maximumFractionDigits: 0 });
  };

  /**
   * 将小数转化成百分数
   * @param {number} num  需要转化=的数字
   * @param {number} precision  精确到几位小数
   */
  public static makePercent(num: number, precision: number = 2) {
    return num.toLocaleString('zh', { style: 'percent',maximumFractionDigits: precision });
  }

  /**
   * 两个数精确相加
   * @param {number} num1
   * @param {number} num2
   * @return {number}
   */
  public static plus(num1: number, num2: number): number {
    let r1:number = 0, r2:number = 0, m:number = 0
    try{r1=num1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=num2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2))
    return (num1*m+num2*m)/m
  }

  /**
   * 两个数精确相减
   * @param {number} num1
   * @param {number} num2
   * @return {number}
   */
  public static minus(num1: number, num2: number): number {
    let r1:number = 0, r2:number = 0, m:number = 0
    try{r1=num1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=num2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2))
    return (num1*m+num2*m)/m
  }

  /**
   * 两个数精确相乘
   * @param {number} num1
   * @param {number} num2
   * @return {number}
   */
  public static times(num1: number, num2: number): number {
    let m:number = 0, s1:string = num1.toString(), s2:string = num2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return (+s1.replace(".",""))*(+s2.replace(".",""))/Math.pow(10,m)
  }

  /**
   * 两个数精确相除
   * @param {number} num1
   * @param {number} num2
   * @return {number}
   */
  public static divide(num1: number, num2: number): number {
    let r1:number = 0,r2:number = 0,m:number = 0,n:number = 0;
    try{r1=num1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=num2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    n=(r1>=r2)?r1:r2;
    return +((num1*m-num2*m)/m).toFixed(n);
  }


  /**
   * 将时间戳转换成  2021/11/30 14:10:09
   * @param {number} ms   时间戳
   * @param {boolean} hour12    是否12小时制
   * @return {string}   2021/11/30 14:10:09
   */
  public static formatMs(ms: number, hour12: boolean = false): string {
    // @ts-ignore
    return ms.toLocaleString('zh', { hour12: hour12 });
  }

  /**
   * 计算两个时间戳的时间差。可用来实现倒计时功能。
   * @param {number} endTime  结束时间
   * @param {number} startTime  开始时间
   * @param {boolean} justHour  是否要满24小时加1天
   * @return {TimeDifference}
   */
  public static calculateTimeDifference (endTime: number, startTime: number = +new Date(), justHour: boolean = false): TimeDifference {
    let t = endTime - startTime,
      day, hour, min, sec, over = false;
    if (t <= 0) {
      day = 0
      hour = 0
      min = 0
      sec = 0
      over = true
    } else {
      if(justHour) {
        hour = Math.floor(t / 1000 / 60 / 60)
        min = Math.floor(t / 1000 / 60 % 60)
        sec = Math.floor(t / 1000 % 60)
      } else {
        day = Math.floor(t / 1000 / 60 / 60 / 24)
        // hour = Math.floor(Math.floor(t / 1000 / 60 / 60 / 24) * 24 + (t / 1000 / 60 / 60 % 24))
        // hour = Math.floor(t / 1000 / 60 / 60 / 24) * 24
        hour = Math.floor(t / 1000 / 60 / 60 % 24)
        min = Math.floor(t / 1000 / 60 % 60)
        sec = Math.floor(t / 1000 % 60)
      }
    }
    if (day < 10) {
      day = '0' + day
    }
    if (hour < 10) {
      hour = '0' + hour
    }
    if (min < 10) {
      min = '0' + min
    }
    if (sec < 10) {
      sec = '0' + sec
    }
    return {
      day,
      hour,
      min,
      sec,
      over
    }
  }

  /**
   * 异步加载Script标签
   * @param {string} src Script标签src
   * @param {()=> void} callback  回调函数 不传回调就会返回一个Promise
   */
  public static syncLoadScript(src: string, callback?: Function): Promise<null> | void {
    if(callback) {
      const _script: HTMLScriptElement = document.createElement('script');
      _script.src = src;
      document.body.appendChild(_script);
      _script.onload = () => {
        callback();
      }
    } else {
      return new Promise((resolve, reject)=>{
        const _script: HTMLScriptElement = document.createElement('script');
        _script.src = src;
        document.body.appendChild(_script);
        _script.onload = () => {
          resolve(null);
        }
      })
    }
  }


  /**
   * 当前设备是否为PC
   * @return {boolean}
   */
  public static isPC (): boolean{
    const userAgentInfo = navigator.userAgent;
    const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  /**
   * 当前设备是否为IOS
   * @return {boolean}
   */
  public static isIOS(): boolean {
    let u = navigator.userAgent;
    let _ios = false;
    _ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端\
    return _ios;
  }

  /**
   * 当前设备是否为Android
   * @return {boolean}
   */
  public static isAndroid(): boolean {
    let u = navigator.userAgent;
    let _android = false;
    _android = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    return _android;
  }


  /**
   * 通过url下载文件
   * @param {string} url
   * @param {string} fileName
   */
  public static downloadByUrl(url: string, fileName: string = 'download'): void {
    const link = document.createElement('a');
    link.setAttribute('href', url); //设置下载文件的url地址
    link.setAttribute('download', fileName); //用于设置下载文件的文件名
    link.click();
    document.body.removeChild(link);
  }

  /**
   * 下载流文件
   * @param {Blob} blob   文件流
   * @param {string} fileName   文件名
   */
  public static downloadByBob(blob: Blob, fileName: string = "download"): void {
    let _blob = new Blob([blob], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
    });
    let dlink = document.createElement('a');
    let href = window.URL.createObjectURL(_blob); //创建下载的链接
    dlink.href = href;
    dlink.download = fileName; // 下载后文件名
    document.body.appendChild(dlink);
    dlink.click(); //点击下载
    document.body.removeChild(dlink); //下载完成移除a标签元素
    window.URL.revokeObjectURL(href); //// 释放URL对象
  }

  /**
   * 将内容复制到剪切板
   * @param {string} str
   */
  public static copyToClipboard(str: string): void {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  }

  /**
   * 判断某个元素是否含有某个class
   * @param {HTMLElement} el  元素
   * @param {string} className  类名
   */
  public static hasClass(el: HTMLElement, className: string): boolean {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className);
  }

  /**
   * 获取当前元素的滚动条滚动位置
   * @param el  元素 
   * @returns {{x: number, y: number}}  x,y轴滚动位置
   */
  public static getScrollPosition(el: any = window): {x: number, y: number} {
    return {
      x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
      y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    }
  };
  

  /**
   * 监听用户是否离开当前窗口（切换后台）
   * @param {()=> void} onHide  //隐藏
   * @param {()=> void} onShow  //显示
   */
  public static watchVisibility(onHide?:()=> void, onShow?:()=> void) {
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        onHide && onHide()
      } else {
        onShow && onShow()
      }
    })
    window.onbeforeunload = () => {
      document.removeEventListener("visibilitychange", function () {
        if (document.hidden) {
          onHide && onHide()
        } else {
          onShow && onShow()
        }
      })
    }
  }


  /**
   *  禁止右键、选择、复制
   */
  public static disableWindowEvent() {
    ['contextmenu', 'selectstart', 'copy'].forEach(function (ev): void {
      document.addEventListener(ev, function (event) {
        return (event.returnValue = false)
      })
    })
  }

  /**
   * 唤起系统打电话功能
   * @param {string} receiver 打给谁
   */
  public static phoneCall(receiver: string) {
    console.log('@系统电话：', receiver);
    this.send({operation: OperationEnum.tel, receiver})
  }

  /**
   * 唤起系统短信功能
   * @param {string} receiver 发给谁
   */
  public static sendMessage(receiver: string) {
    console.log('@系统短信：', receiver);
    this.send({operation: OperationEnum.sms, receiver})
  }

  /**
   * 唤起系统发邮件功能
   * @param {string} receiver 发给谁
   */
  public static sendEmail(receiver: string) {
    console.log('@系统邮件：', receiver);
    this.send({operation: OperationEnum.mailto, receiver})
  }
  public static send (options: SendOptions) {
    let aTag = document.createElement('a');
    aTag.href = `${options.operation}:${options.receiver}`;
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  }


  /**
   * 调用系统分享
   * @param {ShareOptions} shareOptions 分享参数
   * @returns {Promise}
   */
  public static share(shareOptions: ShareOptions = {}):Promise<any> {
    const _navigator = (window.navigator as NavigatorWithShare);
    const isSupported = _navigator && 'canShare' in _navigator;
  
    if(isSupported) {
      let granted = true;
      if (shareOptions.files && _navigator.canShare) {
        granted = _navigator.canShare({ files: shareOptions.files })
      }
      if (granted) {
        return _navigator.share!(shareOptions)
      }
    } else {
      console.warn("平台不支持系统分享功能");
      return Promise.reject("平台不支持系统分享功能");
    }
  }


/**
 * 带图带事件的桌面通知。
 * 参数参考  https://developer.mozilla.org/zh-CN/docs/Web/API/notification
 * @param title 
 * @param options 
 * @param events 
 * @returns 
 */
  public static notify(title: string, options: NotificationOptions = {}, events?: NotificationEventMap) {
    if (!("Notification" in window)) {
      return console.error("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {
      this.doNotify(title, options, events);
    } 
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {           
        if (permission === "granted") {
          this.doNotify(title, options, events);
        }
      });
    }
  }
  public static doNotify(title: string, options: NotificationOptions = {}, events?: NotificationEventMap) {
    const notification = new Notification(title, options);
    if(events) {
      for (let event in events) {
        notification[event] = events[event];
      }
    }
  }

  /**
   * 视频截图
   * @param {HTMLVideoElement} videoEl 传入video元素
   * @returns 
   */
  public static captureVideo(videoEl: HTMLVideoElement) {
    let canvasEl;
    let dataUrl;
    try {
      const cps = window.getComputedStyle(videoEl);
      const width = +cps.getPropertyValue("width").replace("px", "");
      const height = +cps.getPropertyValue("height").replace("px", "");

      canvasEl = document.createElement("canvas");
      canvasEl.style.cssText = `position:fixed;left:-9999px`;
      canvasEl.height = height;
      canvasEl.width = width;

      document.body.appendChild(canvasEl);
      
      const ctx = canvasEl.getContext("2d");
      ctx.drawImage(videoEl, 0, 0, width, height);
      // const image = canvas.toDataURL("image/png");
      dataUrl = canvasEl.toDataURL();

      document.body.removeChild(canvasEl);
      canvasEl = null;
      return dataUrl;
    } finally {
      if (canvasEl) {
          document.body.removeChild(canvasEl);
      }
      if (dataUrl) {
          return dataUrl;
      }
    }
  }
}