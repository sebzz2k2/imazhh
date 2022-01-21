import { useState } from "react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

function App() {
  const [search, setSearch] = useState("");
  const handleSearch = (evt) => {
    evt.preventDefault();
    console.log(search);
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
