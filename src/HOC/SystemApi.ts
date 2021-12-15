import { NavigatorWithShare, OperationEnum, SendOptions, ShareOptions } from '../types';
import mixin from '../utils/mixin';

class SystemApi {

  /**
   * 唤起系统打电话功能
   * @param {string} receiver 打给谁
   */
  public phoneCall(receiver: string) {
    console.log('@系统电话：', receiver);
    this.send({ operation: OperationEnum.tel, receiver })
  }


  /**
   * 唤起系统短信功能
   * @param {string} receiver 发给谁
   */
  public sendMessage(receiver: string) {
    console.log('@系统短信：', receiver);
    this.send({ operation: OperationEnum.sms, receiver })
  }


  /**
   * 唤起系统发邮件功能
   * @param {string} receiver 发给谁
   */
  public sendEmail(receiver: string) {
    console.log('@系统邮件：', receiver);
    this.send({ operation: OperationEnum.mailto, receiver })
  }
  public send(options: SendOptions) {
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
  public share(shareOptions: ShareOptions = {}): Promise<any> {
    const _navigator = (window.navigator as NavigatorWithShare);
    const isSupported = _navigator && 'canShare' in _navigator;

    if (isSupported) {
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
  public notify(title: string, options: NotificationOptions = {}, events?: NotificationEventMap): void {
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
  public doNotify(title: string, options: NotificationOptions = {}, events?: NotificationEventMap): void {
    const notification = new Notification(title, options);
    if (events) {
      for (let event in events) {
        notification[event] = events[event];
      }
    }
  }


  /**
   * 视频截图
   * @param {HTMLVideoElement} videoEl 传入video元素
   * @returns {string} 图片地址
   */
  public captureVideo(videoEl: HTMLVideoElement): string {
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


export default function (targetClass): any {
  return mixin(SystemApi, targetClass);
}