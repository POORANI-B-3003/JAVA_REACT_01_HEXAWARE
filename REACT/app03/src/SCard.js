import { Card, Button, Image } from "semantic-ui-react";

const SCard = ({ id, title, pic, category, price, RemoveData, showEditModal }) => {
  return (
    <Card>
      <Image src={pic} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>Category: {category}</Card.Meta>
        <Card.Description>Price: ₹{price}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button color="red" onClick={() => RemoveData(id)}>Delete</Button>
          <Button color="blue" onClick={() => showEditModal(id, price)}>Edit</Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default SCard;
