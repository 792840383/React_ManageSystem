import axios from 'axios';
import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import SystemLayout from '../components/SystemLayout';
import { Link } from 'react-router-dom';
import ProductTable from '../components/ProductTable';
import EditProduct from '../components/EditProduct';
const Products = () => {

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`/products/`);
  //       setProducts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // },[]);
  return (
    <SystemLayout>
      {/* <div className="products">
        {products.map((product) => (
          <div className="post" key={product.id}>
            <div className="name">{product.name}</div>
            <div className="desc">{product.desc}</div>
            <div className="price">{product.price}</div>
          </div>
        ))}
      </div> */}
      <EditProduct/>
    </SystemLayout>

  )
}

export default Products