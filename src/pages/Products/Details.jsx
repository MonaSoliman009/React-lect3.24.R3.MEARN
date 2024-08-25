import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { axiosInstance } from "../../services/axiosInstace";

const Details = () => {

  // const { id } = useParams()

   const post = useLoaderData()
  // const [product, setProduct] = useState({})

  // const getDetails = async () => {
  //   try {

  //     let res = await axiosInstance.get(`/posts/${id}`)
  //     console.log(res);
  //     setProduct(res.data)
  //   } catch (err) {
  //     console.log(err);

  //   }

  // }

  useEffect(() => {

    // getDetails()

  }, [])





  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {/* {product.price &&  <p>{product.price}</p> }   */}
    </>
  );
}

export default Details;


export const detailsLoader = async ({params}) => {
 
   

  let res = await axiosInstance.get(`/posts/${params.id}`)
  // console.log(res);

  return res.data
}