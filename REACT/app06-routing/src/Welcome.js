import { useEffect, useState } from "react";

const Welcome = () => {
  const [user, setUser] = useState({ Id: "", Password: "" });

  useEffect(() => {
    const rawData = localStorage.getItem("data");
    
    if (rawData) {
      try {
        const parsedData = JSON.parse(rawData);
        if (parsedData?.Id) {
          setUser(parsedData);
        } else {
          console.warn("Parsed data missing Id");
        }
      } catch (e) {
        console.error("Invalid JSON in localStorage:", e);
      }
    } else {
      console.warn("No 'data' found in localStorage");
    }
  }, []);

  return (
    <div>
      <h1>Welcome {user.Id ? user.Id : "Guest"}</h1>
    </div>
  );
};

export default Welcome;
