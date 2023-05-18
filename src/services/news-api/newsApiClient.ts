export class NewsApiClient {
  protected apiKey = process.env.NEWS_API_KEY;
  protected baseUrl = process.env.NEWS_API_BASE_URL;
  async getEverything(q: string) {
    try {
      var targetUrl = `${this.baseUrl}/everything?apiKey=${this.apiKey}&q=${q}`;
      const response = await fetch(targetUrl);
      const data = await response.json();
      return data;
    } catch (error: any) {
      return error.response.data;
    }
  }
  async getTopHeadlines(q?: string | null, category?: string | null) {
    try {
      var targetUrl = `${this.baseUrl}/top-headlines?country=us&apiKey=${this.apiKey}`;
      if (q) targetUrl = targetUrl.concat(`&q=${q}`);
      if (category) targetUrl = targetUrl.concat(`&category=${category}`);
      const response = await fetch(targetUrl);
      const data = await response.json();
      return data;
    } catch (error: any) {
      return error.response.data;
    }
  }
}
