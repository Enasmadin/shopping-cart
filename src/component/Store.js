import React from 'react'
import { Row , Col} from 'react-bootstrap' ;
import storeItems from "../data/store.json"
import Storeitems from './Storeitems';

function Store() {
  return (
    <>
    <h1> Store </h1>
      <Row md={2} xs={1} lg={4} className="g-3" >
        {storeItems.map((item)=>(
         <Col key={item.id}>
            <Storeitems {...item}/>
        </Col>
        ))}
      </Row>
    </>
   
  )
}

export default Store
