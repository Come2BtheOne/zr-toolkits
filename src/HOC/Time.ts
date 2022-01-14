import { TimeDifference } from '../types';
import mixin from '../utils/mixin';

export class Time {

  /**
   * 将时间戳转换成  2021/11/30 14:10:09
   * @param {number} ms   时间戳
   * @param {boolean} hour12    是否12小时制
   * @return {string}   2021/11/30 14:10:09
   */
  public formatMs(ms: number, hour12: boolean = false): string {
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
  public calculateTimeDifference(endTime: number, startTime: number = +new Date(), justHour: boolean = false): TimeDifference {
    let t = endTime - startTime,
      day, hour, min, sec, over = false;
    if (t <= 0) {
      day = 0
      hour = 0
      min = 0
      sec = 0
      over = true
    } else {
      if (justHour) {
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

    const timeDifference: TimeDifference = {
      day: day + "",
      hour: hour + "",
      min: min + "",
      sec: sec + "",
      over
    }
    return timeDifference;
  }

}


export default function (targetClass): any {
  return mixin(Time, targetClass);
}