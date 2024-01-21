import React from 'react';
import { useNavigate } from 'react-router-dom';
import { localeTime } from '../util/date';
export default function VideoCard({ video, type }) {
  const { channelTitle, title, thumbnails, publishedAt } = video.snippet;
  const navigate = useNavigate();

  const isList = type === 'list';
  return (
    <li
      className={isList ? 'flex gap-1 m-2' : ''}
      onClick={() => {
        // 현재 state를 보낼수 있다 받는 곳에서 useLocation으로 확인가능
        navigate(`/videos/watch/${video.id}`, { state: video });
      }}
    >
      <img
        className={isList ? 'w-60 mr-2' : 'w-full'}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <h2 className='font-semibold my-2 line-clamp-2'>{title}</h2>
        <pre className='text-sm opacity-80'>{channelTitle}</pre>
        <pre className='text-sm opacity-80'>{localeTime(publishedAt)}</pre>
      </div>
    </li>
  );
}
