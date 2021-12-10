export default function Num(targetClass): any {
  return class Num extends targetClass {

    /**
     * 格式化金额格式  152,552.25
     * @param {number | string} num  需要格式的数字
     * @param {number} precision  精确到几位小数
     */
    public static formatMoney(num: number | string, precision: number = 2) {
      const _num = +num;
      return _num.toLocaleString('zh', { minimumIntegerDigits: 1,minimumFractionDigits: precision, maximumFractionDigits: 0 });
    };

    /**
     * 将小数转化成百分数
     * @param {number | string} num  需要转化的数字
     * @param {number} precision  精确到几位小数
     */
    public static makePercent(num: number | string, precision: number = 2) {
      const _num = +num;
      return _num.toLocaleString('zh', { style: 'percent',maximumFractionDigits: precision });
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


  }
}