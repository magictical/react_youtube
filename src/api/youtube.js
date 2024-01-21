export class YouTube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }

  async ChannelImgUrl(id) {
    return this.apiClient
      .channel({
        params: {
          part: 'snippet',
          maxResults: 25,
          id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async channelList(id) {
    return this.apiClient
      .chList({
        params: {
          part: 'snippet,contentDetails',
          channelId: id,
          maxResults: 25,
        },
      })
      .then((res) => res.data.items);
  }
}
