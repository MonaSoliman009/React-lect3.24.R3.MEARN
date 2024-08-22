import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../services/axiosInstace";

const Details = () => {

  const { id } = useParams()
 const [product , setProduct]= useState({})

  const getDetails = async () => {
    try {

      let res = await axiosInstance.get(`/products/${id}`)
      console.log(res);
      setProduct(res.data)
    } catch (err) {
      console.log(err);

    }

  }

  useEffect(() => {

    getDetails()

  }, [])





  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    {product.price &&  <p>{product.price}</p> }  
    </>
  );
}

export default Details;
