
import React, {  useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Tag() {

    
    const [search, setSearch] = useState('car')

    const {gif,loading,fetchData} = useGif();

    function searchGifHandler() {
        fetchData(search);
    }

    function onChangeHandler(event) {
        setSearch(event.target.value);
    }

    return (
        <div className='w-1/2 mt-10 rounded-lg bg-pink-200 mx-auto border shadow-pink-500 hover:shadow-pink-700 hover:shadow-xl transition-all duration-500 shadow-lg flex justify-center items-center flex-col mb-10'>
            <h1 className='text-3xl mt-2 text-center font-bold underline'>A Random {search} Gif</h1>
            {loading ? <Spinner /> : <img src={gif} alt="" width={450} className='p-2' />}

            <input
                type="text"
                className='w-3/4 bg-white h-8 rounded-lg mt-4 mb-5 text-center'
                value={search}
                onChange={onChangeHandler}
            />

            <button onClick={searchGifHandler} className='w-3/4 bg-white h-8 rounded-lg mt-4 mb-5'>
                Generate
            </button>
        </div>
    )
}
