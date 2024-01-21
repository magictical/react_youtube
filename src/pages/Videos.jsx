import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useYoutubeApi } from '../context/youtubeApiContext';
import VideoCard from '../components/VideoCard';

export default function Videos() {
  // 반드시 youtube 구조분해해서 가져와야함 헷갈리면 useYoutubeApi가서 확인할것
  const { youtube } = useYoutubeApi();
  // url의 다이나믹 주소를 keword로 가져옴
  const { keyword } = useParams();
  // usequery로 request 요청해서 api 로 부터 데이터 받아야함
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: async () => {
      return await youtube.search(keyword);
    },
  });
  return (
    <>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2'>
        {videos &&
          videos.map((video) => <VideoCard key={video.id} video={video} />)}
      </ul>
      {error && 'something went wrong'}
      {isLoading && <p>in Progress...</p>}
    </>
  );
}
