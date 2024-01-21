import axios from 'axios';

export class YouTubeClient {
  constructor() {
    // base URL
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async search(params) {
    return this.httpClient.get('search', params);
  }
  // mostpopular 처리할 함수
  async videos(params) {
    return this.httpClient.get('videos', params);
  }
  async channel(params) {
    return this.httpClient.get('channels', params);
  }
  async chList(params) {
    return this.httpClient.get('playlists', params);
  }
}
