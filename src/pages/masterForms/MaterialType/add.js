import DynamicForm from 'customComponents/DynamicForm'
import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import Select from 'react-select'
import { Link } from "react-router-dom";
import CustomBreadcrumb from 'customComponents/CustomBreadcrumb'
import { Button } from "react-bootstrap";

const formObject = [
  {
    id: "1",
    name: "material-type",
    placeholder: "Enter the Material Typre",
    type: "text",
    controlId: "material-type",
    label: "Material Type",
    isRequired: true,
  },
  {
    id: "2",
    name: "status",
    placeholder: "Select status",
    type: "select",
    controlId: "status",
    label: "Material Status",
    isRequired: true,
    component: () => <>
      <Form.Group className="text-start form-group" controlId="status">
        <Form.Label>Select status <span className={`text-primary`}>*</span> </Form.Label>
        <Select
          className="basic-single"
          classNamePrefix="status"
          isSearchable
          name="color"
          options={[{ label: 'Active', value: 'Active' }, { label: 'Inactive', value: 'Inactive' }]}
        />
      </Form.Group>
    </>
  },
]


const MaterialAddForm = () => {
  const [formState, setFormState] = useState({});
  console.log("Form state", formState)
  return (
    <div className='mt-3'>
      <CustomBreadcrumb data={[
              {
                  id: '1',
                  active: false,
                  link: "/dashboard",
                  name: 'Dashboard'
              },
              {
                  id: '2',
                  active: false,
                  link: "/master-forms/material/",
                  name: 'Material'
              },
              {
                  id: '3',
                  active: true,
                  name: 'Add Material Type'
              },
          ]}
          />
        
        <div className={`d-flex justify-content-between align-items-center mb-3`}>
            <h3>Add Material Type</h3>
            <Link
              to={`${process.env.PUBLIC_URL}/master-forms/material/`}> 
                <Button variant="dark">
                  <i className="typcn typcn-chevron-left"></i> &nbsp;
                  Back to List
                </Button>
            </Link>
        </div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
        className='bg-white p-4'
      >
        <Row>
          {formObject.map((item, index) => (
            <Col md={3} key={item.id + index}>
              <DynamicForm item={item}
                index={index}
                setFormState={setFormState}
                formState={formState}
              />
            </Col>
          ))}
        </Row>
        <button className='btn btn-primary' type="submit">Submit</button>
      </Form>
    </div>
  )
}

export default MaterialAddForm;
