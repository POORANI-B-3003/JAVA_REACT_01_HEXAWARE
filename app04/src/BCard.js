import React from 'react';
import { Card, CardContent, CardHeader, CardDescription } from 'semantic-ui-react';

const BCard = ({ bname, price, qty, city }) => {
  return (
    <Card>
      <CardContent>
        <CardHeader>
            
        </CardHeader>
        <CardDescription>
          <strong>Book Name:</strong>{bname} <br />
          <strong>Quantity:</strong> {qty} <br />
          <strong>Price: ₹</strong>{price} <br />
          <strong>City: </strong>{city}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default BCard;
