import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import ViewImage from "./Components/ViewImage";
import DisplayImage from "./Components/DisplayImage";

function App() {
  const [search, setSearch] = useState("Hill");
  const [searchImage, setSearchImage] = useState([]);
  const [viewImage, setViewImage] = useState([]);
  const [imageClicked, setImageCLicked] = useState(false);

  useEffect(() => {
    getResults();
  }, []);

  const getResults = () => {
    var options = {
      method: "GET",
      url: "https://pexelsdimasv1.p.rapidapi.com/v1/search",
      params: { query: { search }, locale: "en-US", per_page: "15", page: "1" },
      headers: {
        authorization:
          "563492ad6f91700001000001b2c22b8e20574e678d269a0cf4a2cfaf",
        "x-rapidapi-host": "PexelsdimasV1.p.rapidapi.com",
        "x-rapidapi-key": "d5458649cdmsh65b267d69c9ff0bp1ce8ddjsn2cfd5fbb2ff1",
      },
    };
    axios
      .request(options)
      .then((response) => {
        setSearchImage(response.data.photos);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    getResults();
  };

  const handleClickView = (id) => {
    searchImage.map((item) => {
      if (item.id === id) {
        setViewImage({
          id: item.id,
          alt: item.alt,
          pc: item.photographer,
          src: {
            org: item.src.original,
          },
        });
      }
    });
    setImageCLicked(true);
  };

  const handleClickDisplay = () => {
    setImageCLicked(false);
  };

  return (
    <div className="App bg-Very-Light-Gray dark:bg-Very-Dark-Blue min-h-screen">
      <Navbar />
      <Search
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      {!imageClicked ? (
        <div className="px-4 lg:px-16 md:px-12 py-5 md:columns-3 lg:columns-4">
          {searchImage.map((photo) => (
            <ViewImage
              value={photo}
              key={photo.id}
              handleClickView={handleClickView}
            />
          ))}
        </div>
      ) : (
        <DisplayImage
          value={viewImage}
          key={viewImage.id}
          handleClickDisplay={handleClickDisplay}
        />
      )}
    </div>
  );
}

export default App;
