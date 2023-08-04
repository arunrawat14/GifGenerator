import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Random() {

    

    const {gif,loading,fetchData} = useGif();

    function randomGifHandler() {
        fetchData();
    }

  return (

    <div className=' w-1/2 rounded-lg bg-pink-200 mx-auto border shadow-pink-500
     hover:shadow-pink-700 hover:shadow-xl transition-all duration-500 shadow-lg 
     flex justify-center items-center flex-col sm:w-1/2 '>

        <h1 className='text-3xl mt-2 text-center font-bold underline ' >A Random Gif</h1>
        {
            loading ? <Spinner/> : <img src={gif} alt="" w={450} className='p-2' />
        }
        <button onClick={randomGifHandler} className='w-3/4 bg-white opacity-30 h-8 rounded-lg mt-4 mb-5 ' >
            Generate 
        </button>
    </div>
  )
}
