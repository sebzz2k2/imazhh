import { useState } from "react";
import axios from "axios";

import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (evt) => {
    evt.preventDefault();
    console.log(search);
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
        console.log(response.data.photos);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="App bg-Very-Light-Gray dark:bg-Very-Dark-Blue min-h-screen">
      <Navbar />
      <Search
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
