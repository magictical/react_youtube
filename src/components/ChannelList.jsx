import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/youtubeApiContext';
import VideoCard from './VideoCard';

export default function ChannelList({ id }) {
  const { youtube } = useYoutubeApi();
  const { data: chList } = useQuery({
    queryKey: ['chList', id],
    queryFn: async () => await youtube.channelList(id),
  });
  return (
    <div>
      <ul>
        {chList &&
          chList.map((item) => <VideoCard video={item} type={'list'} />)}
      </ul>
    </div>
  );
}
