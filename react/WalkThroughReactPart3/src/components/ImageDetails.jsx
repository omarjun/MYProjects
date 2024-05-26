import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function ImageDetails() {

    const {id}= useParams();
    const [image, setImage] = useState({});
    async function downloadImage(){
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        console.log(response);
        setImage({
            img: response.data.photo.url,
            des: response.data.photo.description,
            title: response.data.photo.title
        })
    }
    useEffect(() => {downloadImage()},[])

    return (
        <div className="flex bg-sky-900 h-52vh m-2">
            <div className="w-1/2 p-4">
                <img src={image.img} alt="" className="w-full h-auto" />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-center items-center bg-sky-900">
                <h2 className="text-xl font-bold text-white text-center">{image.title}</h2>
                <p className="text-xl text-white bg-sky-900 p-2 text-center">{image.des}</p>
            </div>
        </div>
    );
}

export default ImageDetails