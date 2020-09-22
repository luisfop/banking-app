import React from "react";

import { Card, Button } from "react-bootstrap";

const Banking = (props) => {

    
    

  return (
      
    <div>
      <Button style={{display: 'block'}} onClick={() => props.history.push('/')}>Back</Button>
      <h1>Banking-App</h1>
      <Card style={{width: '600px'}}>
        <Card.Header>My Bank Account</Card.Header>
        <Card.Body>
          <Button variant="primary">Deposit</Button>
          <Button variant="danger">Withdraw </Button> 
          <p>Your total balance is: R$:100,00 </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Banking;
