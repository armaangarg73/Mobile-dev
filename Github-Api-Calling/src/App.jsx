import React, { useState, useEffect } from "react";

import "./App.css";
import GitHubProfile from "./GithubProfile";

function App() {
  const [loading, setIsLoading] = useState(false);
  const [data, setIsData] = useState(false);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.github.com/users/armaangarg73",
        );
        const data = await response.json();
        setIsData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGithubData();
  }, []);

  return (
    <GitHubProfile data = {data} isLoading={loading} />
  );
}

export default App;
