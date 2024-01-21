import React, { useEffect, useState } from 'react';
import { FaYoutube, FaSearch } from 'react-icons/fa';

import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const { keyword } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // text 값을 navigate를 이용해서 /vides/:id 주소로 이동시키고 검색값도 넘겨줘야함
    navigate(`/videos/${text}`);
    setText('');
  };
  // 주소 이동시 검색 keyword가 없을경우 useParams로 받아온다!
  useEffect(() => setText(keyword || ''), [keyword]);
  return (
    <header className='w-full flex p-4 border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <FaYoutube className='text-4xl text-brand' />
        <h1 className='text-3xl font-bold ml-2 text-white'>Youtube</h1>
      </Link>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-7/12 p-2 outline-none bg-black text-gray-50'
          value={text}
          placeholder='search...'
          type='text'
          onChange={(e) => {
            return setText(e.target.value);
          }}
        />
        <button className='bg-zinc-500 px-4'>
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
