import { getApps } from './services/app';
import fetch from 'dva/fetch';

export const qiankun = getApps().then(apps => {
  return {
    // 注册子应用信息
    apps,
    jsSandbox: true, // 是否启用 js 沙箱，默认为 false
    prefetch: true, // 是否启用 prefetch 特性，默认为 true
    lifeCycles: {
      // see https://github.com/umijs/qiankun#registermicroapps
      afterMount: props => {
        console.log(props);
      },
    },
    // ...even more options qiankun start() supported, see https://github.com/umijs/qiankun#start
    fetch: url => {
      console.log('静态资源fetch覆盖');
      return fetch(url);
    },
  };
});
