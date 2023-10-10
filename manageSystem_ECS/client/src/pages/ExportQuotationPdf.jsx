import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Input } from 'antd';
import axios from 'axios';
import { generateAndDownloadPDF } from '../utils/pdfHelper';
import SystemLayout from '../components/SystemLayout';

const Export = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    To: '',
    Attn: '',
    Vessel: '',
    delivery: '',
    ref: '',
    sales: '',
    date: '',
    currency: '',
    discount: ''
  });
  
  const location = useLocation();
  const ids = location.state?.ids || [];
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(ids.map(id => axios.get(`/products/${id}`)));
        console.log(responses)
        setData(responses.map(res => res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [ids]);
  
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    generateAndDownloadPDF(inputData, data);
  };

  return (
    <SystemLayout>
      <div>Export</div>
      <div className="container">
        {Object.keys(inputData).map(key => (
          <Input
            key={key}
            name={key}
            placeholder={`Input ${key}`}
            value={inputData[key]}
            onChange={handleChange}
          />
        ))}
      </div>
      <Button onClick={handleClick}>
        Export
      </Button>
    </SystemLayout>
  );
};

export default Export;
