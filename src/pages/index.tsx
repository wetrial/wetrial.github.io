import React from 'react';
import { Row, Col, Card } from 'antd';
import style from './index.less';

const { Meta } = Card;

const links = [
  {
    title: 'Ant Design',
    href: 'https://ant.design/components/button-cn/',
    cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*mb-WQILTlSEAAAAAAAAAAABkARQnAQ',
    description: '业界第二的UI组件库',
  },
  {
    title: 'UMI',
    href: 'https://umijs.org/zh/guide/router.html#%E9%85%8D%E7%BD%AE%E5%BC%8F%E8%B7%AF%E7%94%B1',
    cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*I-ygS5prYksAAAAAAAAAAABkARQnAQ',
    description: '可插拔的企业级react应用框架',
  },
  {
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org/docs/home.html',
    cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*MaL2SYtHPuMAAAAAAAAAAABkARQnAQ',
    description: '强类型的js',
  },
  {
    title: 'Lodash',
    href: 'https://lodash.com/docs',
    cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*PrLWSpmWZmIAAAAAAAAAAABkARQnAQ',
    description: 'js工具库',
  },
  {
    title: 'Wetrial 开发者文档',
    href: 'https://wetrial.github.io/wetrial-doc',
    cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*T_HeSIJ30IIAAAAAAAAAAABkARQnAQ',
    description: '包括代码规范、页面设计规范、教程等',
  },
  {
    title: 'Wetrial Core',
    href: 'https://wetrial.github.io/core',
    cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*yQqmQ514NNIAAAAAAAAAAABkARQnAQ',
    description: 'Wetrial的核心类库',
  },
  {
    title: 'Wetrial Component',
    href: 'https://wetrial.github.io/component',
    cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*Up8ARYnOd_AAAAAAAAAAAABkARQnAQ',
    description: 'Wetrial的通用组件库',
  },

  {
    title: 'Wetrial Hooks',
    href: 'https://wetrial.github.io/hooks',
    cover: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*ZhzDQLMyYlYAAAAAAAAAAABkARQnAQ',
    description: 'Wetrial的Hooks库',
  },
];

const colSpan = {
  xs: { span: 24 },
  sm: { span: 12 },
  md: { span: 8 },
  lg: { span: 6 },
  xl: { span: 4 },
  xxl: { span: 4 },
};

export default function() {
  return (
    <div className={style.container}>
      <h2>资料链</h2>
      <Row gutter={[16, 8]}>
        {links.map(item => {
          return (
            <Col key={item.href} {...colSpan}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <Card
                  hoverable
                  cover={<img style={{ height: 150 }} alt={item.title} src={item.cover} />}
                >
                  <Meta title={item.title} description={item.description} />
                </Card>
              </a>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
