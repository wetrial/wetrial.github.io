export async function getApps() {
  return new Promise(resolve => {
    resolve([
      {
        name: '开发文档',
        entry: 'https://wetrial.github.io/wetrial-doc',
        base: '/wetrial-doc',
        mountElementId: 'root-subapp-container',
      },
      {
        name: '核心库',
        entry: 'https://wetrial.github.io/core',
        base: '/core',
        mountElementId: 'root-subapp-container',
      },
      {
        name: '组件',
        entry: 'https://wetrial.github.io/component',
        base: '/component',
        mountElementId: 'root-subapp-container',
      },
      {
        name: 'hooks',
        entry: 'https://wetrial.github.io/hooks',
        base: '/hooks',
        mountElementId: 'root-subapp-container',
      },
    ]);
  });
}
