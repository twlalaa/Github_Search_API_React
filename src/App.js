//Components

import Header from "./Components/Header";
import Search from "./Components/Search";
import Message from "./Components/Message";
import Result from "./Components/Result";

//Hooks
import { useState } from "react";

//Spinners
import { Vortex } from "react-loader-spinner";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async (value) => {
    setUser(null);
    setError(false);
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${value}`);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();

      setUser(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  console.log(user);
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-[#141d2f]">
      <Header />
      <Search sendValue={fetchData} />
      {error && <Message>Could not find any user</Message>}
      {loading && (
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      )}
      {user && <Result user={user} />}
    </div>
  );
}

export default App;
