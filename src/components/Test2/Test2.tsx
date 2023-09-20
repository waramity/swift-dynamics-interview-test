import React, { useState } from 'react';
import { Typography } from 'antd';
import { Form, Input, Button, Select, DatePicker, Radio, Table, Space } from 'antd';
import type { TableProps } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';


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
  const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});

  const onReset = () => {
    form.resetFields(); 
  };

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filteredValue: filteredInfo.name || null,
      sorter: (a, b) => (a.name as string).localeCompare(b.name as string), // Type assertion for a.name and b.name
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
      filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' },
      ],
      filteredValue: filteredInfo.address || null,
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  return (
    <div>
        <Title>Form & Table</Title>
        <Form
            form={form} 
            name="simpleForm"
            initialValues={{ name: '', email: '' }}
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
             <Input placeholder="Enter your name" />
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
             <Input placeholder="Enter your email" />
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
                {
                  pattern: /^\d{1,10}-\d{1,2}-\d{1,5}$/, // Adjust the pattern as needed
                  message: 'Invalid citizen ID format',
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
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
    </Space>
    <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  );
};

export default Test2;