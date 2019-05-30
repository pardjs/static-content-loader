import NodeCache from 'node-cache';
import Axios, { AxiosInstance } from 'axios';

interface StaticContentLoaderOptions {
  indexFileName?: string;
  timeout?: number;
}

export default class StaticContentLoader {
  private defaultIndexFileName = 'index.json';
  private defaultTimeout = 3000;
  private axios: AxiosInstance;
  private cache: NodeCache = new NodeCache({ stdTTL: 3600, checkperiod: 120 });
  constructor(private baseUrl: string, private options?: StaticContentLoaderOptions) {
    this.axios = Axios.create({
      baseURL: baseUrl,
      timeout: (options && options.timeout) || this.defaultTimeout
    });
  }

  fetchIndex = async (): Promise<object> => {
    const cacheIndex = this.cache.get('INDEX');
    if (cacheIndex) return cacheIndex as object;

    const { data: index } = await this.axios.get(
      (this.options && this.options.indexFileName) || this.defaultIndexFileName
    );
    if (!index) throw new Error('Failed to load default index');
    this.cache.set('INDEX', index);
    return index;
  };

  fetchContent = async (contentPath: string): Promise<object> => {
    let cacheContent = this.cache.get(`#${contentPath}#`);
    if (cacheContent) return cacheContent as object;
    const { data: content } = await this.axios.get(contentPath);

    this.cache.set(`${contentPath}`, content);
    return content;
  };
}
