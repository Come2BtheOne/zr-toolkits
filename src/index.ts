export default class tks {
  public static toolkitsName: string = "zr-toolkits";

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
      throw (`[${this.toolkitsName}.${arguments.callee.name}()]入参非对象类型`);
    }
  }


  /**
   * 获取url上的参数
   * @param {string} paramsKey  //需要获取的参数的键值
   * @param {string} url  //链接
   *
   */
  public static getUrlParamsValue(paramsKey: string, url: string): string | null{
    if(URL) {
      const urlSP = new URL(url);
      return urlSP.searchParams.get(paramsKey);
    }
  }


  /**
   * 格式化金额格式  152,552.25
   * @param {number} num  //需要格式的数字
   * @param {number} precision  //保留几位小数
   */
  public static formatMoney(num: number, precision: number = 2) {
    const _num = +num;
    return _num.toLocaleString('zh', { minimumIntegerDigits: 1,minimumFractionDigits: precision, maximumFractionDigits: 0 });
  };


  /**
   * 将时间戳转换成  2021/11/30 14:10:09
   * @param {number} ms //时间戳
   * @param {boolean} hour12  //是否12小时制
   */
  public static formatMs(ms: number, hour12: boolean = false) {
    // @ts-ignore
    ms.toLocaleString('zh', { hour12: hour12 })
  }

}