import React, { Fragment, Suspense, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Card, Container, Form, Stack } from "react-bootstrap";
import Select from "react-select";

// const CPGC = {
//     'Basic Details': [
//         {
//             id: "1",
//             name: "fullname",
//             placeholder: "Enter your Name",
//             type: "text",
//             controlId: "fullname",
//             label: "Name",
//             isRequired: true,
//         },
//         {
//             id: "2",
//             name: "companyName",
//             placeholder: "Enter your Company Name",
//             type: "text",
//             controlId: "companyName",
//             label: "Company Name",
//             isRequired: true,
//         },
//         {
//             id: "3",
//             name: "address1",
//             placeholder: "Enter your Address Line 1",
//             type: "text",
//             controlId: "address1",
//             label: "Address Line 1",
//             isRequired: true,
//         },
//         {
//             id: "4",
//             name: "address2",
//             placeholder: "Enter your Address Line 2",
//             type: "text",
//             controlId: "address2",
//             label: "Address Line 2",
//         },
//         {
//             id: "5",
//             name: "address3",
//             placeholder: "Enter your Address Line 3",
//             type: "text",
//             controlId: "address3",
//             label: "Address Line 3",
//         },
//         {
//             id: "6",
//             name: "city",
//             placeholder: "Enter your City",
//             type: "text",
//             controlId: "city",
//             label: "City",
//             isRequired: true,
//             component: ({ item, setFormState, isDisabled }) => {
//                 const changeHandler = ({ value }, name) => {
//                     setFormState((prev) => ({ ...prev, [name]: value }))
//                 }
//                 return (
//                     <>
//                         <Form.Group className="text-start form-group" controlId="city-id">
//                             <Form.Label>Select City <span className={`text-primary`}>*</span> </Form.Label>
//                             <Select
//                                 className="basic-single"
//                                 classNamePrefix="select"
//                                 // defaultValue={colourOptions[0]}
//                                 // isDisabled={isDisabled}
//                                 // isLoading={isLoading}
//                                 // isClearable={isClearable}
//                                 // isRtl={isRtl}
//                                 isSearchable
//                                 name="color"
//                                 options={[{ label: 'Hi', value: 'hi' }]}
//                                 onChange={(e) => changeHandler(e, "city")}
//                                 isDisabled={isDisabled}
//                             />
//                         </Form.Group>
//                     </>
//                 )
//             }
//         },
//         {
//             id: "7",
//             name: "state",
//             placeholder: "Enter your State",
//             type: "text",
//             controlId: "state",
//             label: "State",
//             isRequired: true,
//             component: ({ item, setFormState, isDisabled }) => {
//                 const changeHandler = ({ value }, name) => {
//                     setFormState((prev) => ({ ...prev, [name]: value }))
//                 }
//                 return (<>
//                     <Form.Group className="text-start form-group" controlId="state-id">
//                         <Form.Label>Select State <span className={`text-primary`}>*</span> </Form.Label>
//                         <Select
//                             className="basic-single"
//                             classNamePrefix="select"
//                             // defaultValue={colourOptions[0]}
//                             // isDisabled={isDisabled}
//                             // isLoading={isLoading}
//                             // isClearable={isClearable}
//                             // isRtl={isRtl}
//                             isSearchable
//                             name="color"
//                             options={item.options || []}
//                             onChange={(e) => changeHandler(e, "state")}
//                             isDisabled={isDisabled}
//                         />
//                     </Form.Group>
//                 </>)
//             }
//         },
//         {
//             id: "8",
//             name: "nearest-landmark",
//             placeholder: "Enter your Nearest Landmark",
//             type: "text",
//             controlId: "nearest-landmark",
//             label: "Nearest Landmark",
//         },
//         {
//             id: "9",
//             name: "telephone1",
//             placeholder: "Enter your Telephone Number 1",
//             type: "text",
//             controlId: "telephone1",
//             label: "Telephone Number 1",
//             isRequired: true,
//         },
//         {
//             id: "10",
//             name: "telephone2",
//             placeholder: "Enter your Telephone Number 2",
//             type: "text",
//             controlId: "telephone2",
//             label: "Telephone Number 2",
//         },
//         {
//             id: "11",
//             name: "email-address",
//             placeholder: "Enter your Email Address",
//             type: "email",
//             controlId: "email-address",
//             label: "Email Address",
//             isRequired: true,
//         },
//     ],
//     'MD Details': [
//         {
//             id: "1",
//             name: "fullname",
//             placeholder: "Enter your Name",
//             type: "text",
//             controlId: "fullname",
//             label: "Name",
//             isRequired: true,
//         },
//         {
//             id: "2",
//             name: "telephone1",
//             placeholder: "Enter your Telephone Number 1",
//             type: "text",
//             controlId: "telephone1",
//             label: "Telephone Number 1",
//             isRequired: true,
//         },
//         {
//             id: "3",
//             name: "telephone2",
//             placeholder: "Enter your Telephone Number 2",
//             type: "text",
//             controlId: "telephone2",
//             label: "Telephone Number 2",
//         },
//         {
//             id: "4",
//             name: "email-address",
//             placeholder: "Enter your Email Address",
//             type: "email",
//             controlId: "email-address",
//             label: "Email Address",
//             isRequired: true,
//         }
//     ],
//     'Primary Contact Details 1': [
//         {
//             id: "1",
//             name: "fullname",
//             placeholder: "Enter your Name",
//             type: "text",
//             controlId: "fullname",
//             label: "Name",
//             isRequired: true,
//         },
//         {
//             id: "2",
//             name: "telephone1",
//             placeholder: "Enter your Telephone Number 1",
//             type: "text",
//             controlId: "telephone1",
//             label: "Telephone Number 1",
//             isRequired: true,
//         },
//         {
//             id: "3",
//             name: "telephone2",
//             placeholder: "Enter your Telephone Number 2",
//             type: "text",
//             controlId: "telephone2",
//             label: "Telephone Number 2",
//         },
//         {
//             id: "4",
//             name: "email-address",
//             placeholder: "Enter your Email Address",
//             type: "email",
//             controlId: "email-address",
//             label: "Email Address",
//             isRequired: true,
//         }
//     ],
//     'Primary Contact Details 2': [
//         {
//             id: "1",
//             name: "fullname",
//             placeholder: "Enter your Name",
//             type: "text",
//             controlId: "fullname",
//             label: "Name",
//             isRequired: true,
//         },
//         {
//             id: "2",
//             name: "telephone1",
//             placeholder: "Enter your Telephone Number 1",
//             type: "text",
//             controlId: "telephone1",
//             label: "Telephone Number 1",
//             isRequired: true,
//         },
//         {
//             id: "3",
//             name: "telephone2",
//             placeholder: "Enter your Telephone Number 2",
//             type: "text",
//             controlId: "telephone2",
//             label: "Telephone Number 2",
//         },
//         {
//             id: "4",
//             name: "email-address",
//             placeholder: "Enter your Email Address",
//             type: "email",
//             controlId: "email-address",
//             label: "Email Address",
//             isRequired: true,
//         }
//     ],
//     'Documentation': [
//         {
//             id: "1",
//             name: "Certificate of Incorporation",
//             placeholder: "Select Certificate of Incorporation",
//             type: "file",
//             controlId: "certificate-of-incorporation",
//             label: "Certificate of Incorporation",
//             isRequired: true,
//         },
//         {
//             id: "2",
//             name: "Tax Identification Number",
//             placeholder: "Select Tax Identification Number",
//             type: "text",
//             controlId: "tax-indentification-number",
//             label: "Tax Identification Number",
//             isRequired: true,
//         },
//         {
//             id: "3",
//             name: "Memorandum of Association",
//             placeholder: "Select Memorandum of Association",
//             type: "file",
//             controlId: "tax-indentification-number",
//             label: "Memorandum of Association",
//             isRequired: true,
//         },
//         {
//             id: "4",
//             name: "NAFDAC & /or SON certification",
//             placeholder: "Select NAFDAC & /or SON certification",
//             type: "file",
//             controlId: "tax-indentification-number",
//             label: "NAFDAC & /or SON certification",
//             isRequired: true,
//         },
//         {
//             id: "5",
//             name: "CAC Status Report Within the last 3 months(Document)",
//             placeholder: "Select CAC Status Report Within the last 3 months(Document)",
//             type: "file",
//             controlId: "tax-indentification-number",
//             label: "CAC Status Report Within the last 3 months(Document)",
//             isRequired: true,
//         },
//     ]
// }

const DetailUserLayout = ({obj, title}) => {
    console.log("obj",obj);
    const CPGC = obj;
    const formStages = Object.keys(CPGC);
    const [formState, setFormState] = useState({});

  return (
    <div>
      <h1 className="d-flex justify-content-center">{title}</h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Row>
          {formStages.map((val, i) => (
            <React.Fragment key={i}>
              <h3>{val}</h3>
              {CPGC[val].map((item, index) => (
                <Col lg={6} md={12} xl={6} xs={12} sm={12} key={item.id}>
                  {!item.component ? (
                    <Form.Group
                      className="text-start form-group"
                      controlId={item.controlId + index}
                      key={item.id + index}
                    >
                      <Form.Label>
                        {item.label}{" "}
                        <span
                          className={`text-primary ${
                            item.isRequired ? "d-inline" : "d-none"
                          }`}
                        >
                          *
                        </span>{" "}
                      </Form.Label>
                      {/* <Form.Control
                        name={item.name + index}
                        placeholder={item.placeholder}
                        type={item.type}
                        required={item.isRequired}
                        onChange={(e) => {
                          const { name, value } = e.target;
                          setFormState((prev) => ({ ...prev, [name]: value }));
                        }}
                        value={formState[item.name + index] || ""}
                        key={item.id}
                      /> */}
                      <p>{item.name}</p>
                    </Form.Group>
                  ) : (
                    <item.component
                      item={item}
                      formState={formState}
                      setFormState={setFormState}
                    />
                  )}
                </Col>
              ))}
            </React.Fragment>
          ))}
        </Row>
      </Form>
    </div>
  );
};

export default DetailUserLayout;