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
        name: "country",
        placeholder: "Select country",
        type: "select",
        controlId: "country",
        label: "Country",
        isRequired: true,
        component: () => <>
            <Form.Group className="text-start form-group" controlId="country">
                <Form.Label>Select Country <span className={`text-primary`}>*</span> </Form.Label>
                <Select
                    className="basic-single"
                    classNamePrefix="country"
                    isSearchable
                    name="color"
                    options={[{ label: 'Nigeria', value: 'Nigeria' }]}
                />
            </Form.Group>
        </>
    },
    {
        id: "2",
        name: "state",
        placeholder: "Select state",
        type: "select",
        controlId: "state",
        label: "State",
        isRequired: true,
        component: () => <>
            <Form.Group className="text-start form-group" controlId="state">
                <Form.Label>Select State <span className={`text-primary`}>*</span> </Form.Label>
                <Select
                    className="basic-single"
                    classNamePrefix="state"
                    isSearchable
                    name="color"
                    options={[{ label: 'Cross River', value: 'Cross River' }, { label: 'Delta', value: 'Delta' }]}
                />
            </Form.Group>
        </>
    },
    {
        id: "3",
        name: "city-name",
        placeholder: "Enter your City Name",
        type: "text",
        controlId: "city-name",
        label: "City Name",
        isRequired: true,
    },
    {
        id: "4",
        name: "status",
        placeholder: "Select status",
        type: "select",
        controlId: "status",
        label: "Phone Extension Code",
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


const CityAddForm = () => {
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
                  link: "/master-forms/city/",
                  name: 'City'
              },
              {
                  id: '3',
                  active: true,
                  name: 'Add City'
              },
          ]}
          />
        
        <div className={`d-flex justify-content-between align-items-center mb-3`}>
            <h3>Add City</h3>
            <Link
              to={`${process.env.PUBLIC_URL}/master-forms/city/`}> 
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

export default CityAddForm;
