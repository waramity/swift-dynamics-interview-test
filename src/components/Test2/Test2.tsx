import React, { useState } from 'react';
import { Typography } from 'antd';
import { Form, Input, Button, Select, DatePicker, Radio, Table, Space, Switch } from 'antd';
import type { TableProps } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import type { TableRowSelection } from 'antd/es/table/interface';
import { updateField, resetForm } from '../../services/form/formSlice';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';





const { Option } = Select;
const { Title } = Typography;

interface Test2Props {
}

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
    {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
]

const Test2: React.FC<Test2Props> = (props) => {

  const [form] = Form.useForm(); 
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form);

  localStorage.clear(); // This will clear all data stored in localStorage for the current domain
  const beforeData = JSON.parse(localStorage.getItem('formData')!);
  console.log(beforeData)



  const onReset = () => {
    form.resetFields(); 
  };

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const onSubmit = (values: any) => {
    console.log('Form values:', values);
    const existingData = localStorage.getItem('formData');
    const existingArray = existingData ? JSON.parse(existingData) : [];
    existingArray.push(values);
    var updatedData = JSON.stringify(existingArray);
    localStorage.setItem('formData', updatedData);
    console.log(localStorage.getItem('formData'))


  };

  const onFinish = () => {
    onSubmit(formState);
  };

  const handleFieldChange = (field: string, value: string) => {
    dispatch(updateField({ field, value }));
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => (a.name as string).localeCompare(b.name as string),
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const rowSelection: TableRowSelection<DataType> = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

  return (
    <div>
        <Title>Form & Table</Title>
        <Form
          form={form} 
          onFinish={onFinish}
          name="simpleForm"
         >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please enter your name',
            },
          ]}
        >
          <Input placeholder="Enter your name" 
          onChange={(e) => handleFieldChange("name", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please enter your email',
            },
            {
              type: 'email',
              message: 'Invalid email format',
            },
          ]}
        >
          <Input placeholder="Enter your email"
           onChange={(e) => handleFieldChange("email", e.target.value)}
          />
        </Form.Item>
        <Form.Item
           name="role"
           label="Role"
           rules={[
             {
               required: true,
               message: 'Please select your role',
             },
           ]}
         >
           <Select placeholder="Select your role">
             <Option value="developer">Developer</Option>
             <Option value="designer">Designer</Option>
             <Option value="manager">Manager</Option>
           </Select>
         </Form.Item>

         <Form.Item
           name="birthDate"
           label="Birth Date"
           rules={[
             {
               required: true,
               message: 'Please select your birth date',
             },
           ]}
         >
           <DatePicker placeholder="Select your birth date" />
         </Form.Item>
         <Form.Item
           name="citizenId"
           label="Citizen ID"
           rules={[
             {
               required: true,
               message: 'Please enter the citizen ID',
             },
           ]}
         >
           <Input placeholder="Enter citizen ID in format: 1234567890-12-12345" />
         </Form.Item>
         <Radio.Group>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
          <Radio value="other">Other</Radio>
        </Radio.Group>
        <Form.Item label="Tel">
        <Form.Item
          name={['telephone', 'national']}
          noStyle
          rules={[{ required: true, message: 'National ID is required' }]}
        >
          <Select placeholder="Select national ID">
            <Option value="TH">TH (+66)</Option>
            <Option value="NN">NN (+00)</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={['telephone', 'no']}
          noStyle
          rules={[{ required: true, message: 'Tel. phone is required' }]}
        >
          <Input style={{ width: '50%' }} placeholder="Input street" />
        </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
    </Form>
    <Space style={{ marginBottom: 16 }}>
      <Table columns={columns} dataSource={data} onChange={handleChange} rowSelection={{ ...rowSelection }}/>
    </Space>
    </div>
  );
};

export default Test2;