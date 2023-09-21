import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { Form, Input, Button, Select, DatePicker, Radio, Table, Space, Switch } from 'antd';
import type { TableProps } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import type { TableRowSelection } from 'antd/es/table/interface';
import { resetForm, FormState } from '../../services/form/formSlice';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { saveForm } from '../../services/form/formSlice';
import { setSortedInfo } from '../../services/form/tableSlice';


const { Option } = Select;
const { Title } = Typography;

const Test2: React.FC = (props) => {

  const [form] = Form.useForm(); 
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form);
  const sortedState = useSelector((state: RootState) => state.table.sortedInfo);
  const selectedState = useSelector((state: RootState) => state.table.selectedData);

  const onReset = () => {
    form.resetFields(); 
  };

  const onDelete = () => {
    console.log('hi')
  };

  const onFinish = (values: any) => {
    dispatch(saveForm(values));
    onReset()
  };


  const handleChange: TableProps<FormState>['onChange'] = (pagination, filters, sorter) => {
    dispatch(setSortedInfo(sorter as SorterResult<FormState>));
  };

  const columns: ColumnsType<FormState> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => (a.name as string).localeCompare(b.name as string),
      sortOrder: sortedState.columnKey === 'name' ? sortedState.order : null,
      ellipsis: true,
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => (a.email as string).localeCompare(b.email as string),
      sortOrder: sortedState.columnKey === 'email' ? sortedState.order : null,
      ellipsis: true,
    },
  ];

  const rowSelection: TableRowSelection<FormState> = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    if (selected) {
      console.log(selectedRows);
      console.log(changeRows);
    } else {
      console.log(selected);
    }
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
          <Input placeholder="Enter your email"/>
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
       <Button htmlType="button" onClick={onDelete}>
           Remove
       </Button>
      <Table columns={columns} dataSource={formState} onChange={handleChange} rowSelection={{ ...rowSelection }}/>
    </Space>
    </div>
  );
};

export default Test2;