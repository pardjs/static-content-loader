'use strict';

import { StaticContentLoader } from '../src/index';
import { revokeMock } from './fixture/utils';
import {
  mockData as staticContentMockData,
  initMock as initStaticContentMock
} from './fixture/staticContent.nock';
import { isGenericTypeAnnotation } from '@babel/types';

describe('StaticContentLoader', () => {
  const baseUrl = 'http://testUrl.com/doc';

  beforeAll(() => {
    initStaticContentMock(baseUrl);
  });

  afterAll(() => {
    revokeMock();
  });
  it('should can init an instance', () => {
    const instance = new StaticContentLoader('someUrl');

    expect(instance).toBeDefined();
  });

  it('should can get index content', async () => {
    const instance = new StaticContentLoader(baseUrl);

    const indexContent = await instance.fetchIndex();
    expect(indexContent).toEqual(staticContentMockData.indexContent);
  });

  it('should can get index content with customized path', async () => {
    const instance = new StaticContentLoader(baseUrl, { indexFileName: '/customIndex.json' });

    const indexContent = await instance.fetchIndex();
    expect(indexContent).toEqual(staticContentMockData.indexContent);
  });

  it('should can throw error if index file not exist', async () => {
    const instance = new StaticContentLoader(baseUrl, { indexFileName: '/nonExist.json' });

    try {
      await instance.fetchIndex();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('hsould can get content with relative path', async () => {
    const instance = new StaticContentLoader(baseUrl);

    const indexContent = await instance.fetchContent('/fakeContent.md');
    expect(indexContent).toEqual(staticContentMockData.fakeContent);
  });
});
