import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/youtubeApiContext';

export default function ChannelInfo({ id, channelTitle }) {
  const { youtube } = useYoutubeApi();
  // const replacedImg =
  //   'https://yt3.ggpht.com/RL_eRSTZjEdc3vAB78wiK6xihSd3wInZ4g1TA3JLzOvxRdJg_2IKqIw8y3CAd03qvgsBb-P5jQ=s48-c-k-c0x00ffffff-no-rj';
  const {
    isLoading,
    error,
    data: url,
  } = useQuery({
    queryKey: ['channel', id],
    queryFn: async () => youtube.ChannelData(id),
  });
  return (
    <div>
      <img src={url} alt='' />

      <pre>{channelTitle}</pre>
    </div>
  );
}
