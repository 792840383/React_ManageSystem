import { Button, Form, Input, Popconfirm, Table } from 'antd';
import * as React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useContext,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import Row from 'antd';
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const updateProduct = (record,values)=>{
    const id = record.id
    const updateData = async () => {
      try {
        await axios.put(`/products/${id}`,values);
      } catch (err) {
        console.log(err);
      }
    };
    updateData();
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
      updateProduct(record,values)
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

//component
const EditProduct = () => {
  const [dataSource, setDataSource] = useState();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
     const navigate = useNavigate()
  let len = 0;
  useEffect(() => { 
    const fetchData = async () => {
      try {
        const res = await axios.get(`/products/`);
        setDataSource(res.data)
        len = res.data.length;
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[]);

  const [count, setCount] = useState(len);
  const handleDelete = (id) => {
    const newData = dataSource.filter((item) => item.id !== id);
    setDataSource(newData);
    const deleteData = async () => {
      try {
        await axios.delete(`/products/${id}`);
      } catch (err) {
        console.log(err);
      }
    };
    deleteData();
  };
  const defaultColumns = [
    {
        title: 'Name',
        dataIndex: 'name',
        editable:true
      },
      {
        title: 'Desc',
        dataIndex: 'desc',
        editable:true
      },
      {
        title: 'Company',
        dataIndex: 'company',
        editable:true
      },
      {
        title:'District',
        dataIndex:'district',
        editable:true
      },
      {
        title:'Number',
        dataIndex:'number',
        editable:true
      },
      {
        title:'Price',
        dataIndex:'price',
        editable:true
      },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  const handleAdd = () => {
    const newData = {
      name: 'test',
      desc: 'test',
      company: 'London',
      district:1,
      number: 3,
      price: 200
    };
    const addProduct = async()=>{
      const addData = async () => {
        try {
          await axios.post(`/products/`,newData);
        } catch (err) {
          console.log(err);
        }
      };
      addData();
    }
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
    addProduct();
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const handleExport = () => {
    navigate('/exportQuotationPdf',{state:{ids:selectedRowKeys}})
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
      <Button
        onClick={handleExport}
      >
        Export
      </Button>
      <Table
      rowSelection={rowSelection}
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
        rowKey={record=>record.id}
      />
    </div>
  );
};
export default EditProduct;