import { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch';

function App() {

  const Apikey = '23581543-4a7fccb56bfbbc65f1f44c030';
  const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    
      fetch(`https://pixabay.com/api/?key=${Apikey}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        console.log(data.hits);
        setImages(data.hits);
        setIsloading(false);
      })
      .catch(err => console.error(err.message))
   
  }, [term]);

  return (
    <div className="container mx-auto my-10">
      <div className="mx-3">
        <ImageSearch searchText={(text) => setTerm(text)} />
      </div>
      {isloading ? (
        <>
          <div className="flex justify-center ">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <div className="font-bold text-lg text-gray-200 ml-5 mt-10">Loading...</div>
          </div>
        </>
      ) : <div className="grid justify-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-8 mx-3">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
  );
}

export default App;
