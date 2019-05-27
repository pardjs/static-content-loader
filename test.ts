import StaticContentLoader from './src/index';

const staticLoadre = new StaticContentLoader('http://cdn.dozto.com/test', {
  indexFileName: 'test.json'
});

staticLoadre.fetchContent('test.json').then(res => {
  console.log('>>>res', res);
  staticLoadre.fetchContent('test.json').then(res => console.log('>>>res', res));
  staticLoadre.fetchContent('test.json').then(res => console.log('>>>res', res));
});
