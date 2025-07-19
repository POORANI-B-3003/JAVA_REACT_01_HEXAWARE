import { useParams } from "react-router-dom";

const ShowU = () => {
  const { UserId, Name, Salary } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Detail</h2>
      <p><strong>ID:</strong> {UserId}</p>
      <p><strong>Name:</strong> {Name}</p>
      <p><strong>Salary:</strong> ₹{Salary}</p>
    </div>
  );
};

export default ShowU;
