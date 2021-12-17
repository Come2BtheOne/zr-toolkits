export const CheckStringReg = {
  phone: /^1[3|4|5|6|7|8|9][0-9]{9}$/,  //手机号码
  tel: /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/, //座机
  card: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, //身份证
  pwd: /^[a-zA-Z]\w{5,17}$/,  //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
  postal: /[1-9]\d{5}(?!\d)/, //邮政编码
  QQ: /^[1-9][0-9]{4,9}$/,  //QQ号
  email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/, //邮箱
  money: /^\d*(?:\.\d{0,2})?$/, //金额(小数点2位)
  URL: /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/, //网址
  IP: /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/, //IP
  number: /^[0-9]$/,  //number
  english: /^[a-zA-Z]+$/, //英文
  chinese: /^[\\u4E00-\\u9FA5]+$/,  //中文
  lower: /^[a-z]+$/,  //小写
  upper: /^[A-Z]+$/,  //大写
  HTML: /<("[^"]*"|'[^']*'|[^'">])*>/ //HTML标记
}

export const TrimReg = {
  allSpace: /\s+/g, //所有空格
  prevNextSpace: /(^\s*)|(\s*$)/g, //前后空格
  prevSpace: /(^\s*)/g,  //前空格
  nextSpace: /(\s*$)/g  //后空格
}

export const aCity = {
  11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
}

export const RandomLetter = {
  letterNumber: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", //  A-Z、a-z、0-9
  allLetter: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",  //  A-Z、a-z 
  allNumber: "0123456789",  //  0-9
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",  //  A-Z
  lowercase: "abcdefghijklmnopqrstuvwxyz",  //  a-z
}