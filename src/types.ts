import Num from "./HOC/Num"

export interface TimeDifference {
  day: string
  hour: string
  min: string
  sec: string
  over: boolean   //两个时间是否相等
}

export enum CheckStringKey {
  phone = 'phone',//手机号码
  tel = 'tel',//座机
  card = 'card',//身份证
  pwd = 'pwd',//密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
  postal = 'postal',//邮政编码
  QQ = 'QQ',//QQ号
  email = 'email',//邮箱
  money = 'money',//金额(小数点2位)
  URL = 'URL',//网址
  IP = 'IP',//IP
  number = 'number',//number
  english = 'english',//英文
  chinese = 'chinese',//中文
  lower = 'lower',//小写
  upper = 'upper',//大写
  HTML = 'HTML'//HTML标记
}

export enum TrimType {
  allSpace = 1, //所有空格
  prevNextSpace , //前后空格
  prevSpace,  //前空格
  nextSpace //后空格
}

export enum CaseType {
  firstUpper = 1, //首字母大写
  firstLower, //首字母小写
  reverse,  //大小写互换
  allUpper, //全部大写
  allLower  //全部小写
}

export interface ShareOptions {
  url?: string
  title?: string
  text?: string
  files?: File[]
}

export interface NavigatorWithShare {
  share?: (data: ShareOptions) => Promise<void>
  canShare?: (data: ShareOptions) => boolean
}

export enum OperationEnum {
  tel = "tel",
  sms = "sms",
  mailto = "mailto"
}

export interface SendOptions {
  operation: OperationEnum
  receiver: string
}

export enum RandomType {
  letterNumber = 1, //  A-Z、a-z、0-9
  allLetter,  //  A-Z、a-z 
  allNumber,  //  0-9
  uppercase,  //  A-Z
  lowercase,  //  a-z
}
