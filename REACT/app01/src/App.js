import Book from "./Book";
import Counter from "./Counter";
import Student from "./Student";
import Userinfo from "./Userinfo";
import Apiex from "./Apiex";
import Post from "./Post";

const App = () => {
  let name = "Poorani";
  let age = 21;

  return (
    <>
      <h1>Welcome in React</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>

      <Book pic="logo192.png" name="React" price="300" qty="20" city="Delhi" />
      <Book pic="logo192.png" name="NodeJs" price="900" qty="30" city="Pune" />
      <Book pic="logo192.png" name="Spring Boot" price="700" qty="90" city="Pune" />

      <hr />

      <Student name="Anjali" roll="101" grade="A" city="Chennai" />
      <Student name="Rahul" roll="102" grade="B+" city="Hyderabad" />
      <Student name="Poorani" roll="103" grade="A+" city="Madurai" />
    
      <Counter/>
      <Userinfo/>
      <Apiex />
      <Post/>
    
    
    </>
    
  );
};

export default App;
