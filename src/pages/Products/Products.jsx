import { useState } from "react";
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../services/axiosInstace";
const Products = () => {

const navigate = useNavigate()

  const [products, setProducts] = useState([])

  useEffect(() => {

    axiosInstance.get("/products",{
      params:{limit:5,sort:'desc'},
      headers:{Authorization:"kjfgiufd545fgkjh"}
    }).then((res) => {
      console.log(res.data);

      setProducts(res.data)

    }).catch((err) => {

      console.log(err);

    })



  }, [])


  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {products.map((prd) => (
          <Col key={prd.id}>
            <Card>
              <Card.Img variant="top"  src={prd.image} />
              <Card.Body>
                <Card.Title>{prd.title}</Card.Title>
                <Card.Text>
                 Price is : {prd.price}

                </Card.Text>
                {/* <Link to={`/details/${prd.id}`}>Details</Link> */}
                <button className="btn btn-warning" onClick={()=>{navigate(`/details/${prd.id}`)}}>Details</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Products;