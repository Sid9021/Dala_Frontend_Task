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
        name: "employee-name",
        placeholder: "Enter your Full Name",
        type: "text",
        controlId: "employee-name",
        label: "Employee Name",
        isRequired: true,
    },
    {
        id: "2",
        name: "department",
        placeholder: "Select department",
        type: "select",
        controlId: "department",
        label: "Department",
        isRequired: true,
        component: () => <>
            <Form.Group className="text-start form-group" controlId="department">
                <Form.Label>Select Department <span className={`text-primary`}>*</span> </Form.Label>
                <Select
                    className="basic-single"
                    classNamePrefix="department"
                    isSearchable
                    name="color"
                    options={[{ label: 'Department', value: 'Department' }]}
                />
            </Form.Group>
        </>
    },
    {
        id: "3",
        name: "designation",
        placeholder: "Select designation",
        type: "select",
        controlId: "designation",
        label: "Designation",
        isRequired: true,
        component: () => <>
            <Form.Group className="text-start form-group" controlId="designation">
                <Form.Label>Select Designation <span className={`text-primary`}>*</span> </Form.Label>
                <Select
                    className="basic-single"
                    classNamePrefix="designation"
                    isSearchable
                    name="color"
                    options={[{ label: 'Cross River', value: 'Cross River' }, { label: 'Delta', value: 'Delta' }]}
                />
            </Form.Group>
        </>
    },
    {
        id: "4",
        name: "email-address",
        placeholder: "Enter your Email Address",
        type: "email",
        controlId: "email-address",
        label: "Email Address",
        isRequired: true,
    },
    {
        id: "5",
        name: "phonenumber",
        placeholder: "Enter your Phone Number",
        type: "text",
        controlId: "phonenumber",
        label: "Phone Number",
        isRequired: true,
    },
    {
        id: "6",
        name: "username",
        placeholder: "Enter User Name",
        type: "text",
        controlId: "username",
        label: "User Name",
        isRequired: true,
    },
    {
        id: "7",
        name: "password",
        placeholder: "Enter Password",
        type: "password",
        controlId: "password",
        label: "Password",
        isRequired: true,
    },
    {
        id: "8",
        name: "retrypassword",
        placeholder: "Retry Password",
        type: "retrypassword",
        controlId: "retrypassword",
        label: "Retry Password",
        isRequired: true,
    },
]


const UserAddForm = () => {
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
                  link: "/master-forms/user/",
                  name: 'User'
              },
              {
                  id: '3',
                  active: true,
                  name: 'Add User'
              },
          ]}
          />
        
        <div className={`d-flex justify-content-between align-items-center mb-3`}>
            <h3>Add User</h3>
            <Link
              to={`${process.env.PUBLIC_URL}/master-forms/user/`}> 
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
            className='bg-white p-2'
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

export default UserAddForm;
