import { CheckStringKey } from '../types';
import { aCity, CheckStringReg } from '../config';
import mixin from '../utils/mixin';
import pkg from '../../package.json';

class Regexp {

  /**
   * 校验邮箱格式
   * @param {string} str
   * @return {boolean}
   */
  public isEmail(str: string): boolean {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(str);
  }


  /**
   * 校验手机号码格式
   * @param {string} str
   * @return {boolean}
   */
  public isMobilePhone(str: string): boolean {
    return /^1[0-9]{10}$/.test(str);
  }


  /**
   * 校验座机号码格式
   * @param {string} str
   * @return {boolean}
   */
  public isTelephone(str: string): boolean {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(str);
  }


  /**
   * 正则校验合集
   * @param {string} str  要校验的字符串
   * @param {CheckStringKey} key  校验类型
   * @return {boolean}
   */
  public regCheckString(str: string, key: CheckStringKey): boolean {
    if (key !== undefined && CheckStringReg.hasOwnProperty(key)) {
      for (let k in CheckStringReg) {
        if (k === key) {
          return CheckStringReg[k].test(str);
        }
      }
    } else {
      throw (`[${pkg.name}.regCheckString()]\n入参[key]错误`);
    }
  }


  /**
   * 严格校验身份证
   * @param {string} sId  字符串类型的身份证号码
   * @return {boolean}
   */
  public strictCheckIDCard(sId: string): boolean {
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

}


export default function (targetClass): any {
  return mixin(Regexp, targetClass);
}