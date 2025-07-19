import { useEffect, useState } from "react";
import Post from "./Post"; 

// Functional component that fetches and displays posts from an API
const Apiex = () => {
  // Initialize state to hold the fetched posts
  const [posts, setPost] = useState([]);

  // useEffect runs when the component is first rendered (empty dependency array = run only once)
  useEffect(() => {
    // Fetch data from placeholder API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())        // Convert response to JSON
      .then((temp) => setPost(temp))    // Save the fetched data into state
      .catch((e) => console.log(e));    // Log any errors to console
  }, []); // Empty array = run only once on component mount

  // JSX to render the component UI
  return (
    <>
      <h1>Posts from API</h1>

      {
        posts.map((temp) => (
          <Post key={temp.id} id={temp.id} title={temp.title} body={temp.body} />
        ))
      }

      {/* Loop through posts and display each one */}
      {posts.map((p) => (
        <div key={p.id} className="cont">
          <h3>{p.title}</h3>   {/* Display post title */}
          <p>{p.body}</p>      {/* Display post body */}
          <hr />
        </div>
      ))}
    </>
  );
};

export default Apiex;
