# zr-toolkits [![NPM Version][npm-image]][npm-url] [![NPM Size][size-image]][size-url] [![NPM Download][downloads-image]][downloads-url]

[size-image]: https://badgen.net/bundlephobia/minzip/zr-toolkits
[size-url]: https://bundlephobia.com/result?p=zr-toolkits
[npm-image]: https://badgen.net/npm/v/zr-toolkits
[npm-url]: https://npmjs.org/package/zr-toolkits
[downloads-image]: https://badgen.net/npm/dt/zr-toolkits
[downloads-url]: https://npmjs.org/package/zr-toolkits



## 使用方式

注：为简化操作，默认命名为"tks"

```js
npm install --save zr-toolkits
```

### ES6
```js
import tks from 'zr-toolkits'
tks.times(3.2, 5)
```
### CommonJS
```js
var tks = require('zr-toolkits');
tks.times(3.2, 5)
```
### AMD
```js
require(['zr-toolkits'],function(tks){
 tks.times(3.2, 5)
})
```
### CMD
```js
seajs.use('zr-toolkits',function(undefined){
    //插件没有遵循CMD规范，这里的tks是全局的
    tks.times(3.2, 5)
});
```
### 直接引入
```js 
//  dist目录下的zr-toolkits.min.js
<script src="zr-toolkits.min.js"></script>
tks.times(3.2, 5)
```



# 数据操作


## isEmptyString

方法用途|参数|说明|类型|是否必传|默认值|返回值
---|:--|:--|:-:|:-:|---|:-:
判断一个字符串是否为空|*value*|需要判断的值|*string \| undefined \| null*|true|-|boolean


## isObject

| 方法用途             | 参数    | 说明         | 类型  | 是否必传 | 默认值 | 返回值  |
| -------------------- | ------- | :----------- | :---- | :------: | :----: | :-----: |
| 判断一个值是否为对象 | *value* | 需要判断的值 | *any* |   true   |   -    | boolean |

## isEmptyObject

| 方法用途             | 参数  | 说明         | 类型     | 是否必传 | 默认值 | 返回值  |
| -------------------- | ----- | :----------- | :------- | :------: | :----: | :-----: |
| 判断一个对象是否为空 | *obj* | 需要判断的值 | *Object* |   true   |   -    | boolean |

## deWeightThree

| 方法用途       | 参数  | 说明           | 类型     | 是否必传 | 默认值 | 返回值 |
| -------------- | ----- | :------------- | :------- | :------: | :----: | :----: |
| 对数组对象去重 | *arr* | 需要去重的数组 | *Array*  |   true   |   -    | Array  |
|                | *key* | 根据key值去重  | *string* |   true   |   -    |        |

### 代码示例

```js
let Arr1 = [{name: 'a',id: 1}, {name: 'a',id: 2}, {name: 'b',id: 3}, {name: 'c',id: 4}];
let Arr2 deWeightThree(Arr, "name");
let Arr3 deWeightThree(Arr, "id");
console.log(Arr2)	//  [{name: 'a',id: 1}, {name: 'b',id: 2}, {name: 'c',id: 3}]
console.log(Arr3)	//  [{name: 'a',id: 1}, {name: 'a',id: 2}, {name: 'c',id: 3}]
```

## searchValueInTree

| 方法用途                         | 参数             | 说明                         | 类型     | 是否必传 |  默认值  | 返回值  |
| -------------------------------- | ---------------- | :--------------------------- | :------- | :------: | :------: | :-----: |
| 递归查询树结构的是否存在某一个值 | *arr*            | 需要查找的数组               | *Array*  |   true   |    -     | boolean |
|                                  | *keyName*        | 要查找的键名                 | *string* |   true   |    -     |         |
|                                  | keyValue         | 需要查找的值                 | *any*    |   true   |    -     |         |
|                                  | *multilevelName* | 树结构内，包含子数组的对象名 | string   |  false   | children |         |

### 代码示例

```js
const Arr = [
    {
        id: 123,
        children: [
            id: 789,
            children: []
        ]
    },
    {
        id: 456,
        children: [
            id: 874,
            children: []
        ]
    },
]
  
searchValueInTree(Arr, "id", 789, "children")	//true
searchValueInTree(Arr, "id", 99999, "children")	//false
```



# 随机操作

## genUUID

| 方法用途        | 参数 | 说明 | 类型 | 是否必传 | 默认值 |                   返回值                   |
| --------------- | :--: | :--: | :--: | :------: | :----: | :----------------------------------------: |
| 基于URL生成UUID |  -   |  -   |  -   |    -     |   -    | 例：*cd205467-0120-47b0-9444-894736d873c7* |

## genRandomID

| 方法用途                       | 参数 | 说明 | 类型 | 是否必传 | 默认值 |         返回值          |
| ------------------------------ | :--: | :--: | :--: | :------: | :----: | :---------------------: |
| 基于日期对象和random生成随机ID |  -   |  -   |  -   |    -     |   -    | 例：*1627635706897_652* |

## shuffleRandom

| 方法用途     | 参数  | 说明           | 类型    | 是否必传 | 默认值 | 返回值 |
| ------------ | ----- | :------------- | :------ | :------: | :----: | :----: |
| 洗牌算法随机 | *arr* | 需要打乱的数组 | *Array* |   true   |   -    | Array  |

## creatRandom

| 方法用途               | 参数    | 说明       | 类型   | 是否必传 | 默认值 | 返回值 |
| ---------------------- | ------- | :--------- | :----- | :------: | :----: | :----: |
| 在一个范围内生成随机数 | *min*   | 范围最小值 | number |   true   |   -    | number |
|                        | *max*   | 范围最大值 | number |   true   |   -    |        |
|                        | *exact* |            | number |  false   |   0    |        |



# 字符串操作

## getUrlParamsValue

| 方法用途              | 参数  | 说明                 | 类型   | 是否必传 | 默认值 |     返回值     |
| --------------------- | ----- | :------------------- | :----- | :------: | :----: | :------------: |
| 获取url字符串上的参数 | *url* | **链接**             | string |   true   |   -    | string \| null |
|                       | *key* | 需要获取的参数的键名 | string |   true   |   -    |                |

## trim

| 方法用途           | 参数       | 说明     | 类型                                                         | 是否必传 | 默认值 | 返回值 |
| ------------------ | ---------- | :------- | :----------------------------------------------------------- | :------: | :----: | :----: |
| 去除字符串前后空格 | *str*      | 字符串   | string                                                       |   true   |   -    | string |
|                    | *trimType* | 切割类型 | **TrimType**<br/>1  去除所有空格<br>2  去除前后空格<br>3  去除前空格<br>4  去除后空格 |  false   |   2    |        |
## changeCase

| 方法用途   | 参数       | 说明     | 类型                                                         | 是否必传 | 默认值 | 返回值 |
| ---------- | ---------- | :------- | :----------------------------------------------------------- | :------: | :----: | :----: |
| 大小写转化 | *str*      | 字符串   | string                                                       |   true   |   -    | string |
|            | *caseType* | 转换类型 | **CaseType**<br/>1  首字母大写<br>2  首字母小写<br>3  大小写互换<br>4  全部大写<br>5  全部小写 |  false   |   3    |        |



# 正则校验

## isEmail

| 方法用途     | 参数  | 说明   | 类型     | 是否必传 | 默认值 | 返回值  |
| ------------ | ----- | :----- | :------- | :------: | :----: | :-----: |
| 校验邮箱格式 | *str* | 字符串 | *string* |   true   |   -    | boolean |

## isMobilePhone

| 方法用途         | 参数  | 说明   | 类型     | 是否必传 | 默认值 | 返回值  |
| ---------------- | ----- | :----- | :------- | :------: | :----: | :-----: |
| 校验手机号码格式 | *str* | 字符串 | *string* |   true   |   -    | boolean |

## isTelephone

| 方法用途         | 参数  | 说明   | 类型     | 是否必传 | 默认值 | 返回值  |
| ---------------- | ----- | :----- | :------- | :------: | :----: | :-----: |
| 校验座机号码格式 | *str* | 字符串 | *string* |   true   |   -    | boolean |

## strictCheckIDCard

| 方法用途       | 参数  | 说明   | 类型     | 是否必传 | 默认值 | 返回值  |
| -------------- | ----- | :----- | :------- | :------: | :----: | :-----: |
| 严格校验身份证 | *sId* | 字符串 | *string* |   true   |   -    | boolean |

## regCheckString

| 方法用途     | 参数             | 说明     | 类型                                                         | 是否必传 | 默认值 | 返回值 |
| ------------ | ---------------- | :------- | :----------------------------------------------------------- | :------: | :----: | :----: |
| 正则校验合集 | *str*            | 字符串   | string                                                       |   true   |   -    | string |
|              | *checkStringKey* | 转换类型 | **CheckStringKey**<br/>'phone'    手机号码<br>'tel'    座机<br>'card'    身份证<br>'pwd'    密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线<br>'postal'    邮政编码<br>'QQ'    QQ号码<br>'email'    邮箱<br>'money'    金额(小数点2位)<br>'URL'    网址<br>'IP'    IP地址<br>'number'    数字<br>'english'    英文<br>'chinese'    中文<br>'lower'    小写<br>'upper'    大写<br>'HTML'    HTML标记 |   true   |   -    |        |



# 日期操作

## formatMs

| 方法用途                            | 参数     | 说明         | 类型      | 是否必传 | 默认值 |              返回值               |
| ----------------------------------- | -------- | :----------- | :-------- | :------: | :----: | :-------------------------------: |
| 将时间戳转换成  yyyy/MM/dd hh:mm:ss | *ms*     | 时间戳       | *number*  |   true   |   -    | string<br>例：2021/11/30 14:10:09 |
|                                     | *hour12* | 是否12小时制 | *boolean* |  false   | false  |      例：2021/11/30 02:10:09      |

## calculateTimeDifference

| 方法用途                                     | 参数        | 说明           | 类型      | 是否必传 |            默认值             | 返回值                                                       |
| -------------------------------------------- | ----------- | :------------- | :-------- | :------: | :---------------------------: | :----------------------------------------------------------- |
| 计算两个时间戳的时间差。可用来实现倒计时功能 | *endTime*   | 结束时间       | *number*  |   true   |               -               | TimeDifference<br>{<br>  day: 01,    天<br>  hour: 07,   时<br/>  min: 34,  分<br/>  sec: 24,  秒 <br/>  over: false  是否结束(当开始时间等于结束时间)<br/>} |
|                                              | *startTime* | 开始时间       | *number*  |  false   | +new Date()<br>当前系统时间戳 |                                                              |
|                                              | *justHour*  | 是否计算至天数 | *boolean* |  false   |             false             |                                                              |
### 代码示例

```js
//倒计时功能
const { calculateTimeDifference } = tks;
const endtime = 1639059397000;
setInterval(()=>{
    const timeObj = tks.calculateTimeDifference(endtime);
    const timeString = `剩余 ${timeObj.day}天 ${timeObj.hour}小时 ${timeObj.min}分 ${timeObj.sec}秒`;
    console.log(timeObj);		//	{day: '01', hour: '05', min: '47', sec: '55', over: false}
    console.log(timeString);	//	剩余 01天 05小时 47分 55秒
}, 1000)


//不想显示天数
const { calculateTimeDifference } = tks;
const endtime = 1639059397000,
      startTime = 1638951397000;
setInterval(()=>{
    const timeObj = tks.calculateTimeDifference(endtime, startTime, true);
    const timeString = `剩余 ${timeObj.day}天 ${timeObj.hour}小时 ${timeObj.min}分 ${timeObj.sec}秒`;
    console.log(timeObj);		//	{day: undefined, hour: '29', min: '42', sec: '40', over: false}
    console.log(timeString);	//	剩余 29小时 42分 40秒
}, 1000)
  
```

# 数字操作

## formatMoney

| 方法用途   | 参数        | 说明           | 类型               | 是否必传 | 默认值 |          返回值          |
| ---------- | ----------- | :------------- | :----------------- | :------: | :----: | :----------------------: |
| 格式化金额 | *num*       | 需要格式的数字 | *string \| number* |   true   |   -    | string<br>例：152,552.25 |
|            | *precision* | 精确到几位小数 | *number*           |  false   |   2    |                          |

## makePercent

| 方法用途           | 参数        | 说明           | 类型               | 是否必传 | 默认值 |        返回值        |
| ------------------ | ----------- | :------------- | :----------------- | :------: | :----: | :------------------: |
| 将小数转化成百分数 | *num*       | 需要转化的数字 | *string \| number* |   true   |   -    | string<br>例：42.44% |
|                    | *precision* | 精确到几位小数 | *number*           |  false   |   2    |                      |

## plus

| 方法用途           | 参数        | 说明           | 类型               | 是否必传 | 默认值 |        返回值        |
| ------------------ | ----------- | :------------- | :----------------- | :------: | :----: | :------------------: |
| 两个数精确相加 | *num1* | 数字 | *number* |   true   |   -    | nulber |
|                    | *num2* | 数字 | *number*           |  true  |   -    ||

## minus

| 方法用途           | 参数        | 说明           | 类型               | 是否必传 | 默认值 |        返回值        |
| ------------------ | ----------- | :------------- | :----------------- | :------: | :----: | :------------------: |
| 两个数精确相减 | *num1* | 数字 | *number* |   true   |   -    | nulber |
|                    | *num2* | 数字 | *number*           |  true  |   -    ||

## times

| 方法用途           | 参数        | 说明           | 类型               | 是否必传 | 默认值 |        返回值        |
| ------------------ | ----------- | :------------- | :----------------- | :------: | :----: | :------------------: |
| 两个数精确相乘 | *num1* | 数字 | *number* |   true   |   -    | nulber |
|                    | *num2* | 数字 | *number*           |  true  |   -    ||

## divide

| 方法用途           | 参数        | 说明           | 类型               | 是否必传 | 默认值 |        返回值        |
| ------------------ | ----------- | :------------- | :----------------- | :------: | :----: | :------------------: |
| 两个数精确相除 | *num1* | 数字 | *number* |   true   |   -    | nulber |
|                    | *num2* | 数字 | *number*           |  true  |   -    ||



# 系统API 

## phoneCall

| 方法用途           | 参数        | 说明           | 类型               | 是否必传 | 默认值 |        返回值        |
| ------------------ | ----------- | :------------- | :----------------- | :------: | :----: | :------------------: |
| 唤起系统打电话功能 | *receiver* | 打给谁 | *string* |   true   |   -    | - |

## sendMessage

| 方法用途           | 参数        | 说明           | 类型               | 是否必传 | 默认值 |        返回值        |
| ------------------ | ----------- | :------------- | :----------------- | :------: | :----: | :------------------: |
| 唤起系统短信功能 | *receiver* | 发给谁 | *string* |   true   |   -    | - |

## sendEmail

| 方法用途           | 参数        | 说明           | 类型               | 是否必传 | 默认值 |        返回值        |
| ------------------ | ----------- | :------------- | :----------------- | :------: | :----: | :------------------: |
| 唤起系统发邮件功能 | *receiver* | 发给谁 | *string* |   true   |   -    | - |

## share

| 方法用途           | 参数        | 说明           | 类型               | 是否必传 | 默认值 |        返回值        |
| ------------------ | ----------- | :------------- | :----------------- | :------: | :----: | :------------------: |
| 调用系统分享 | *shareOptions* | 分享参数 | ***ShareOptions***<br>url {string} 分享的链接<br>title {string} 分享的标题<br>text {string} 分享的正文内容<br>files { File[ ] }  分享的文件list |   true   |   {}  | *Promise* |

## notify

| 方法用途           | 参数        | 说明           | 类型               | 是否必传 | 默认值 |        返回值        |
| ------------------ | ----------- | :------------- | :----------------- | :------: | :----: | :------------------: |
| *带图带事件的桌面通知* | *title* | 通知的标题 | string |   true   |   {}  | - |
|  | *options* | 参数和事件参考 | NotificationOptions | false | {} |  |
|  | *events* | *https://developer.mozilla.org/zh-CN/docs/Web/API/notification* | NotificationEventMap | false | - |  |

## captureVideo

| 方法用途 | 参数      | 说明      | 类型               | 是否必传 | 默认值 | 返回值 |
| -------- | --------- | :-------- | :----------------- | :------: | :----: | :----: |
| 视频截图 | *videoEl* | video标签 | *HTMLVideoElement* |   true   |   -    | string |



# 其他

## syncLoadScript

| 方法用途           | 参数       | 说明               | 类型       | 是否必传 | 默认值 | 返回值 |
| ------------------ | ---------- | :----------------- | :--------- | :------: | :----: | :----: |
| 异步加载script标签 | *src*      | script标签src      | *string*   |   true   |   -    |   -    |
|                    | *callback* | 加载完成的回调函数 | *Function* |  false   |   -    |        |

## isPC

| 方法用途         | 参数 | 说明 | 类型 | 是否必传 | 默认值 | 返回值  |
| ---------------- | :--: | :--: | :--: | :------: | :----: | :-----: |
| 当前设备是否为PC |  -   |  -   |  -   |  false   |   -    | boolean |

## isIOS

| 方法用途          | 参数 | 说明 | 类型 | 是否必传 | 默认值 | 返回值  |
| ----------------- | :--: | :--: | :--: | :------: | :----: | :-----: |
| 当前设备是否为IOS |  -   |  -   |  -   |  false   |   -    | boolean |

## isAndroid

| 方法用途              | 参数 | 说明 | 类型 | 是否必传 | 默认值 | 返回值  |
| --------------------- | :--: | :--: | :--: | :------: | :----: | :-----: |
| 当前设备是否为Android |  -   |  -   |  -   |  false   |   -    | boolean |

## downloadByUrl

| 方法用途        | 参数       | 说明         | 类型     | 是否必传 |   默认值   | 返回值 |
| --------------- | ---------- | :----------- | :------- | :------: | :--------: | :----: |
| 通过url下载文件 | *url*      | 下载链接     | *string* |   true   |     -      |   -    |
|                 | *fileName* | 生成的文件名 | *string* |  false   | 'download' |        |

## downloadByBob

| 方法用途   | 参数       | 说明         | 类型     | 是否必传 |   默认值   | 返回值 |
| ---------- | ---------- | :----------- | :------- | :------: | :--------: | :----: |
| 下载流文件 | *blob*     | 文件流       | *Blob*   |   true   |     -      |   -    |
|            | *fileName* | 生成的文件名 | *string* |  false   | 'download' |        |

## copyToClipboard

| 方法用途           | 参数  |    说明    |   类型   | 是否必传 | 默认值 | 返回值 |
| ------------------ | :---: | :--------: | :------: | :------: | :----: | :----: |
| 将内容复制到剪切板 | *str* | 复制的内容 | *string* |   true   |   -    |   -    |

## hasClass

| 方法用途                      |    参数     |   说明   |     类型      | 是否必传 | 默认值 | 返回值  |
| ----------------------------- | :---------: | :------: | :-----------: | :------: | :----: | :-----: |
| 判断某个元素是否含有某个class |    *el*     | 目标元素 | *HTMLElement* |   true   |   -    | boolean |
|                               | *className* |   类名   |   *string*    |   true   |   -    |         |

## getScrollPosition

| 方法用途                     | 参数 |   说明   |     类型      | 是否必传 | 默认值 | 返回值  |
| ---------------------------- | :--: | :------: | :-----------: | :------: | :----: | :-----: |
| 获取当前元素的滚动条滚动位置 | *el* | 目标元素 | *HTMLElement* |   true   |   -    | boolean |

## watchVisibility

| 方法用途                             |   参数   |   说明   |    类型    | 是否必传 | 默认值 | 返回值 |
| ------------------------------------ | :------: | :------: | :--------: | :------: | :----: | :----: |
| 监听用户是否离开当前窗口（切换后台） | *onHide* | 隐藏回调 | *Function* |  false   |   -    |   -    |
|                                      | *onShow* | 显示回调 | *Function* |  false   |   -    |        |

## disableWindowEvent

| 方法用途             | 参数 | 说明 | 类型 | 是否必传 | 默认值 | 返回值 |
| -------------------- | :--: | :--: | :--: | :------: | :----: | :----: |
| 禁止右键、选择、复制 |  -   |  -   |  -   |    -     |   -    |   -    |

# License

## MIT
