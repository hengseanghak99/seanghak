import React, { useState,useEffect } from "react";
import Typewriter from "typewriter-effect";


function Type() {
    const [quote, setQuote] = useState("");
    const [author,setAuthor] = useState("");
    const [error,setError] = useState("");
useEffect(() => {
    const category = "happiness";
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: {
        "X-Api-Key": "CGMG4vBjozu/hATTxdwV7Q==Dnu7oyBeR5YYqqPT",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data[0]?.quote); 
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
    
  return (
    <Typewriter
      options={{
        strings: [
   `${quote}`,
   `${author}`
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}

    />

  );
}

export default Type;
