export async function getApps() {
  return new Promise(resolve => {
    resolve([
      {
        name: '开发文档',
        entry: 'https://wetrial.github.io/wetrial-doc',
        base: '/wt-doc',
        mountElementId: 'root-subapp-container',
      },
      {
        name: '核心库',
        entry: 'https://wetrial.github.io/core',
        base: '/wt-core',
        mountElementId: 'root-subapp-container',
      },
      {
        name: '组件',
        entry: 'https://wetrial.github.io/component',
        base: '/wt-component',
        mountElementId: 'root-subapp-container',
      },
      {
        name: 'hooks',
        entry: 'https://wetrial.github.io/hooks',
        base: '/wt-hooks',
        mountElementId: 'root-subapp-container',
      },
      // {
      //   name: 'component',
      //   entry: 'http://localhost:8000',
      //   base: '/component',
      //   mountElementId: 'root-subapp-container',
      //   // props: {
      //   //   testProp: 'test',
      //   // },
      // },
    ]);
  });
}
