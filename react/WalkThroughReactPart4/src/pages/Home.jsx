import React, { useEffect, useState } from 'react';
import UseDebounce from '../customHooks/UseDebounce';
import PhotoCard from '../components/PhotoCard';
import axios from 'axios';

function Home() {
    const [photoList, setPhotoList] = useState([]);
    const [search, setSearch] = useState("Arjun");
    const debounceUpdateSearch = UseDebounce((e) => {
        setSearch(e.target.value);
    });

    const getPhoto = async () => {
        try {
            const response = await axios.get(`https://api.github.com/search/users?q=${search}`);
            console.log(response);
            setPhotoList(response.data.items);
        } catch (error) {
            console.log("Error While Fetching the photos", error.message);
        }
    };

    useEffect(() => {
        getPhoto();
    }, [search]);

    return (
        <div className="text-center">
            <div>
                <input
                    onChange={debounceUpdateSearch}
                    type="text"
                    placeholder="Enter photo Id"
                    className="w-[220px] h-[40px] border-none mb-[40px] border-2 border-gray-900"
                />
            </div>
            <div id="imageContainer" className="grid grid-cols-4 justify-center gap-[20px]">
                {photoList.map((e) => {
                    return <PhotoCard key={e.login} id={e.login} url={e.avatar_url} />;
                })}
            </div>
        </div>
    );
}

export default Home;
