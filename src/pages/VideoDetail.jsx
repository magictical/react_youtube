import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import ChannelList from '../components/ChannelList';

export default function VideoDetail() {
  const { state: video } = useLocation();
  const { title, description, channelTitle, channelId } = video.snippet;
  return (
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-4/6'>
        <iframe
          id='ytplayer'
          type='text/html'
          width='100%'
          height='640'
          src={`https://www.youtube.com/embed/${video.id}`}
          frameborder='0'
        ></iframe>

        <div className='p-8'>
          <p className='text-xl font-bold'>{title}</p>
          <ChannelInfo id={video.id} channelTitle={channelTitle} />
          <pre className='whitespace-pre-wrap'>{description}</pre>
        </div>
      </article>
      <section className='basis-2/6'>
        <ChannelList id={channelId} />
      </section>
    </section>
  );
}
