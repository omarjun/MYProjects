import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from './Image';

function Home() {
  const [imageList, setImageList] = useState([]);

  async function downloadPic() {
    try {
      const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20");
      const imageRes = response.data.photos;
      setImageList(imageRes.map((imgData) => ({
        id: imgData.id,
        image: imgData.url,
        title: imgData.title
      })));
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  useEffect(() => {
    downloadPic();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {imageList.map((img, index) => (
        <React.Fragment key={img.id}>
          {(index % 3 === 0 && index !== 0) && <div className="w-full"></div>}
          <Image title={img.title} image={img.image} id = {img.id}/>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Home;
