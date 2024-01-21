import { createContext, useContext } from 'react';
import { YouTube } from '../api/youtube';
import { FakeYoutubeClient } from '../api/fakeYoutubeClient';
import { YouTubeClient } from '../api/youtubeClient';

export const YoutubeApiContext = createContext();

// const client = new FakeYoutubeClient();
const client = new YouTubeClient();
const youtube = new YouTube(client);
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
