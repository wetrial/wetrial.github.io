// const { REACT_APP_ENV } = process.env;

// const isSite = REACT_APP_ENV !== 'dev';

export default {
  hash: true,
  // base: '/wetrial-site',
  // publicPath: '/wetrial-site/',
  plugins: [
    [
      '@umijs/plugin-qiankun',
      {
        master: {
          defer: true,
          jsSandbox: true,
          prefetch: true,
          // 注册子应用信息
          // apps: [
          //   {
          //     name: 'core',
          //     entry: 'http://localhost:8000',
          //     base: '/core',
          //     mountElementId: 'root-subapp-container',
          //   },
          //   {
          //     name: 'component',
          //     entry: 'http://localhost:8000',
          //     base: '/component',
          //     mountElementId: 'root-subapp-container',
          //     // props: {
          //     //   testProp: 'test',
          //     // },
          //     entry: {
          //       // TODO 支持 config entry
          //       scripts: [],
          //       styles: [],
          //     },
          //   },
          // ],
        },
      },
    ],
    [
      'umi-plugin-react',
      {
        title: 'Wetrial 前端',
        antd: true,
        dva: {
          immer: true,
          hmr: true,
        },
        dynamicImport: true,
        routes: {
          exclude: [/models\//, /services\//, /model\.(t|j)sx?$/, /service\.(t|j)sx?$/],
        },
        // headScripts: ['https://hm.baidu.com/hm.js?a3636d814818bccb02a7991d78ba3048'],
        scripts: [
          // 由于github不支持url重写，history-route模式下会跳转到404 404页面会对路由进行处理将路由转换成?path=xxx/xxx这种形式，首页需要对这种进行处理通过window.g_history.push()进行跳转
          `(function(g_history){
            if(g_history&&g_history.location&&g_history.location.query&&g_history.location.query.path){
              var hash=g_history.location.hash
              g_history.push({pathname:g_history.location.query.path,hash:hash})
            }
          }(window.g_app._history))`,
        ],
      },
    ],
  ],
};
