import { useState } from "react";
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
// import { axiosInstance } from "../../services/axiosInstace";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { postsAction } from "../../store/slices/posts";
const Products = () => {

  const loader = useSelector((state) => state.loader.loader)
 const {posts,error} =useSelector((state)=>state.posts)
 const dispatch =useDispatch()

  const navigate = useNavigate()

  // const [products, setProducts] = useState([])

  useEffect(() => {
 
    dispatch(postsAction())



  }, [])


  return (
    <>
      {  (error)?<h1>{error}</h1> :(loader) ?
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status" >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div> : <Row xs={1} md={3} className="g-4">
          {posts.map((prd) => (
            <Col key={prd.id}>
              <Card>
                {/* <Card.Img variant="top"  src={prd.image} /> */}
                <Card.Body>
                  <Card.Title>{prd.title}</Card.Title>
                  <Card.Text>
                    Body is : {prd.body}

                  </Card.Text>
                  {/* <Link to={`/details/${prd.id}`}>Details</Link> */}
                  <button className="btn btn-warning" onClick={() => { navigate(`/details/${prd.id}`) }}>Details</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>}
    </>
  );
}

export default Products;
