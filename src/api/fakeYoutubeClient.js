import axios from 'axios';

export class FakeYoutubeClient {
  // searchbykeyword 리턴할 값을 처리할 함수
  async search() {
    return axios.get('/videos/search.json');
  }
  // mostpopular 처리할 함수
  async videos() {
    return axios.get('/videos/popular.json');
  }
  async channel() {
    return axios.get('/videos/channel.json');
  }
  async chList() {
    return axios.get('/videos/channelList.json');
  }
}
