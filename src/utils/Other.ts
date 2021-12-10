export default function Other(targetClass): any {
  return class Other extends targetClass {

    /**
     * 异步加载script标签
     * @param {string} src script标签src
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
     * @param {string} url  下载链接
     * @param {string} fileName   生成的文件名
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
     * @returns {Object<{x: number, y: number}>}  x,y轴滚动位置
     */
    public static getScrollPosition(el: any): {x: number, y: number} {
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

  }
}