import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

function CardComponent({data,count}) {
  return (
    <div>
      <Card className='normalCard'>
      <Card.Body>
          <h4>{data}</h4>
          <h3><Badge bg="secondary">{count}</Badge></h3>
      </Card.Body>
      </Card>
    </div>
  )
}

export default CardComponent
