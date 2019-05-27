'use strict';

import nock from 'nock';

export const mockData = {
  indexContent: {
    foo: 'bar'
  },
  fakeContent: `
    # Fake Content

    ## Fake Title

    This can be some content
  `
};

export const initMock = (baseUrl: string) => {
  nock(baseUrl)
    // Index Related
    .get('/index.json')
    .reply(200, mockData.indexContent)
    .get('/customIndex.json')
    .reply(200, mockData.indexContent)
    .get('/nonExist.json')
    .reply(404, undefined)
    // Content Related
    .get('/fakeContent.md')
    .reply(200, mockData.fakeContent);
};
