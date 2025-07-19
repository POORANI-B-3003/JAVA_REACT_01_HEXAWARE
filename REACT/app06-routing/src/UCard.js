import './App.css';

const UCard = ({ UserId, Name, Salary }) => {
  return (
    <div className="ucard">
      <h3>{UserId}</h3>
      <p>{Name}</p>
      <p>₹{Salary}</p>
    </div>
  );
};

export default UCard;
