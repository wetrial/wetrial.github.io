import React from 'react';
import { history } from 'umi';
import { BasicLayoutProps, DefaultFooter } from '@ant-design/pro-layout';
import { ConfigProvider, message } from 'antd';
import { UseAPIProvider } from '@umijs/use-request';
// import { omit } from 'lodash';
// import { UnAuthorizedException } from '@wetrial/core/es/exception';
import { initWetrialCore } from '@wetrial/core';
import validateMessages from '@wetrial/core/es/validation';
// import { patchRouteBase } from '@wetrial/core/es/route-helper';
import { initHooks } from '@wetrial/hooks';
import { initComponent } from '@wetrial/component';
import defaultSettings from '@config/defaultSettings';
import { request as requestMethod } from '@/utils/request';
import { IGlobalProps } from '@/services/global.d';
import logo from './assets/logo.png';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

(function init() {
  // 初始化核心库配置信息
  initWetrialCore({
    RSAKey:
      'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5HI3rQq9BKcruxYfqgnkhyuI+9CGf1jYsyzWYpdw/3Cv9TX4u5w2GjcYoxzBY5s6ZcXbb4oGoLt9rn93g7sKT01tyUO/iQdYiOTvPsFiqcInMVHhaazBy5nH50owObGs+PRubc8bP+a+DT3vV8+l7TEd/H9pdwok/r7GlIIe5uQIDAQAB',
    // getGlobalHeader: () => {
    //   const headers = {};
    //   const oid = getOid();
    //   if (oid) {
    //     headers['oid'] = oid;
    //   }
    //   return headers;
    // },
  });

  // 初始化组件配置信息
  initComponent({
    iconFontUrl: defaultSettings.iconfontUrl,
  });

  // 初始化hooks配置信息，根据需要
  initHooks({
    formTableResultFormat: (data) => {
      return {
        total: data.totalCount,
        list: data.items,
      };
    },
  });
})();

export function render(oldRender) {
  // const {
  //   location: { pathname },
  // } = history;

  // // 解析出base参数
  // clearPidAndOid();
  // const match = /^\/([^/]+)\//gi.exec(pathname);
  // if (match && match[1]) {
  //   setOid(match[1]);
  //   initWetrialCore({
  //     routeProfix: `/${match[1]}`,
  //   });
  // }

  oldRender();
}

// export function patchRoutes({ routes }) {
//   patchRouteBase(routes);
// }

export async function getInitialState(): Promise<IGlobalProps> {
  return {
    settings: defaultSettings,
  };
}

export function rootContainer(container) {
  return React.createElement(
    ConfigProvider,
    {
      form: { validateMessages },
      input: {
        autoComplete: 'off',
      },
      locale: zhCN,
    },
    // container,
    React.createElement(
      UseAPIProvider,
      {
        value: {
          requestMethod: (param) => requestMethod(param),
          onError: (response) => {
            const {
              data: { error: { message: errorMsg } = { message: '出错啦.' } },
            } = response;
            message.error(errorMsg);
          },
        },
      },
      container,
    ),
  );
}

export const layout = ({ initialState }: { initialState }): BasicLayoutProps => {
  return {
    navTheme: 'light',
    logo,
    iconfontUrl: defaultSettings.iconfontUrl,
    rightContentRender: () => null,
    footerRender: () => <DefaultFooter links={[]} copyright="2020 湖南微试云技术团队" />,
    ...initialState?.settings,
  };
};
