import React, { Fragment, Suspense, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Card, Container, Form, Stack } from "react-bootstrap";
import Select from "react-select";
import { minHeight } from "@material-ui/system";
import Width from "components/Utilities/Width/Width";
import axios from "axios";

const generateFields = ({ input = '', type = 'text' }) => {
  const generated = input.toLowerCase().replace(/ /g, '');
  return {
    id: input + Math.random().toFixed(0),
    name: input.toLowerCase().replace(/ /g, ''),
    placeholder: `Enter your ${input}`,
    type,
    controlId: generated,
    label: input,
  }
}

const formRenderer = {
  'CPGC': {
    'Basic Details': [
      {
        id: "1",
        name: "bd_fullname",
        placeholder: "Enter your Name",
        type: "text",
        controlId: "fullname",
        label: "Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "bd_companyName",
        placeholder: "Enter your Company Name",
        type: "text",
        controlId: "companyName",
        label: "Company Name",
        isRequired: true,
      },
      {
        id: "3",
        name: "bd_address1",
        placeholder: "Enter your Address Line 1",
        type: "text",
        controlId: "address1",
        label: "Address Line 1",
        isRequired: true,
      },
      {
        id: "4",
        name: "bd_address2",
        placeholder: "Enter your Address Line 2",
        type: "text",
        controlId: "address2",
        label: "Address Line 2",
      },
      {
        id: "5",
        name: "bd_address3",
        placeholder: "Enter your Address Line 3",
        type: "text",
        controlId: "address3",
        label: "Address Line 3",
      },
      {
        id: "6",
        name: "bd_city",
        placeholder: "Enter your City",
        type: "text",
        controlId: "city",
        label: "City",
        isRequired: true,
        component: ({ item, setFormState, isDisabled }) => {
          const changeHandler = ({ value }, name) => {
            setFormState((prev) => ({ ...prev, [name]: value }))
          }
          return (
            <>
              <Form.Group className="text-start form-group" controlId="city-id">
                <Form.Label>Select City <span className={`text-primary`}>*</span> </Form.Label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  // defaultValue={colourOptions[0]}
                  // isDisabled={isDisabled}
                  // isLoading={isLoading}
                  // isClearable={isClearable}
                  // isRtl={isRtl}
                  isSearchable
                  name="color"
                  options={[{ label: 'Hi', value: 'hi' }]}
                  onChange={(e) => changeHandler(e, "bd_city")}
                  isDisabled={isDisabled}
                />
              </Form.Group>
            </>
          )
        }
      },
      {
        id: "7",
        name: "bd_state",
        placeholder: "Enter your State",
        type: "text",
        controlId: "state",
        label: "State",
        isRequired: true,
        component: ({ item, setFormState, isDisabled }) => {
          const changeHandler = ({ value }, name) => {
            setFormState((prev) => ({ ...prev, [name]: value }))
          }
          return (<>
            <Form.Group className="text-start form-group" controlId="state-id">
              <Form.Label>Select State <span className={`text-primary`}>*</span> </Form.Label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                // defaultValue={colourOptions[0]}
                // isDisabled={isDisabled}
                // isLoading={isLoading}
                // isClearable={isClearable}
                // isRtl={isRtl}
                isSearchable
                name="color"
                options={item.options || [{ label: 'Hi', value: 'hi' }]}
                onChange={(e) => changeHandler(e, "bd_state")}
                isDisabled={isDisabled}
              />
            </Form.Group>
          </>)
        }
      },
      {
        id: "8",
        name: "bd_nearest_landmark",
        placeholder: "Enter your Nearest Landmark",
        type: "text",
        controlId: "nearest-landmark",
        label: "Nearest Landmark",
      },
      {
        id: "9",
        name: "bd_telephone1",
        placeholder: "Enter your Telephone Number 1",
        type: "text",
        controlId: "telephone1",
        label: "Telephone Number 1",
        isRequired: true,
      },
      {
        id: "10",
        name: "bd_telephone2",
        placeholder: "Enter your Telephone Number 2",
        type: "text",
        controlId: "telephone2",
        label: "Telephone Number 2",
      },
      {
        id: "11",
        name: "bd_email_address",
        placeholder: "Enter your Email Address",
        type: "email",
        controlId: "email-address",
        label: "Email Address",
        isRequired: true,
      },
    ],
    'MD Details': [
      {
        id: "1",
        name: "md_fullname",
        placeholder: "Enter your Name",
        type: "text",
        controlId: "fullname",
        label: "Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "md_telephone1",
        placeholder: "Enter your Telephone Number 1",
        type: "text",
        controlId: "telephone1",
        label: "Telephone Number 1",
        isRequired: true,
      },
      {
        id: "3",
        name: "md_telephone2",
        placeholder: "Enter your Telephone Number 2",
        type: "text",
        controlId: "telephone2",
        label: "Telephone Number 2",
      },
      {
        id: "4",
        name: "md_email_address",
        placeholder: "Enter your Email Address",
        type: "email",
        controlId: "email-address",
        label: "Email Address",
        isRequired: true,
      }
    ],
    'Primary Contact Details 1': [
      {
        id: "1",
        name: "pc_1_fullname",
        placeholder: "Enter your Name",
        type: "text",
        controlId: "fullname",
        label: "Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "pc_1_telephone1",
        placeholder: "Enter your Telephone Number 1",
        type: "text",
        controlId: "telephone1",
        label: "Telephone Number 1",
        isRequired: true,
      },
      {
        id: "3",
        name: "pc_1_telephone2",
        placeholder: "Enter your Telephone Number 2",
        type: "text",
        controlId: "telephone2",
        label: "Telephone Number 2",
      },
      {
        id: "4",
        name: "pc_1_email_address",
        placeholder: "Enter your Email Address",
        type: "email",
        controlId: "email-address",
        label: "Email Address",
        isRequired: true,
      }
    ],
    'Primary Contact Details 2': [
      {
        id: "1",
        name: "pc_2_fullname",
        placeholder: "Enter your Name",
        type: "text",
        controlId: "fullname",
        label: "Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "pc_2_telephone1",
        placeholder: "Enter your Telephone Number 1",
        type: "text",
        controlId: "telephone1",
        label: "Telephone Number 1",
        isRequired: true,
      },
      {
        id: "3",
        name: "pc_2_telephone2",
        placeholder: "Enter your Telephone Number 2",
        type: "text",
        controlId: "telephone2",
        label: "Telephone Number 2",
      },
      {
        id: "4",
        name: "pc_2_email_address",
        placeholder: "Enter your Email Address",
        type: "email",
        controlId: "email-address",
        label: "Email Address",
        isRequired: true,
      }
    ],
    'Documentation': [
      {
        id: "1",
        name: "d_certificate_of_incorporation",
        placeholder: "Select Certificate of Incorporation",
        type: "file",
        controlId: "certificate-of-incorporation",
        label: "Certificate of Incorporation",
        isRequired: true,
      },
      {
        id: "2",
        name: "d_tax_identification_number",
        placeholder: "Select Tax Identification Number",
        type: "text",
        controlId: "tax-indentification-number",
        label: "Tax Identification Number",
        isRequired: true,
      },
      {
        id: "3",
        name: "d_memorandum_of_association",
        placeholder: "Select Memorandum of Association",
        type: "file",
        controlId: "tax-indentification-number",
        label: "Memorandum of Association",
        isRequired: true,
      },
      {
        id: "4",
        name: "d_nafdac_son_certification",
        placeholder: "Select NAFDAC & /or SON certification",
        type: "file",
        controlId: "tax-indentification-number",
        label: "NAFDAC & /or SON certification",
        isRequired: true,
      },
      {
        id: "5",
        name: "d_cac_status_report",
        placeholder: "Select CAC Status Report Within the last 3 months(Document)",
        type: "file",
        controlId: "tax-indentification-number",
        label: "CAC Status Report Within the last 3 months(Document)",
        isRequired: true,
      },
    ]
  },
  'Warehouse': {
    'Basic Details': [
      {
        id: "1",
        name: "bd_fullname",
        placeholder: "Enter your Name",
        type: "text",
        controlId: "fullname",
        label: "Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "bd_companyName",
        placeholder: "Enter your Company Name",
        type: "text",
        controlId: "companyName",
        label: "Company Name",
        isRequired: true,
      },
      {
        id: "3",
        name: "bd_address1",
        placeholder: "Enter your Address Line 1",
        type: "text",
        controlId: "address1",
        label: "Address Line 1",
        isRequired: true,
      },
      {
        id: "4",
        name: "bd_address2",
        placeholder: "Enter your Address Line 2",
        type: "text",
        controlId: "address2",
        label: "Address Line 2",
      },
      {
        id: "5",
        name: "bd_address3",
        placeholder: "Enter your Address Line 3",
        type: "text",
        controlId: "address3",
        label: "Address Line 3",
      },
      {
        id: "6",
        name: "bd_city",
        placeholder: "Enter your City",
        type: "text",
        controlId: "city",
        label: "City",
        isRequired: true,
        component: () => <>
          <Form.Group className="text-start form-group" controlId="city-id">
            <Form.Label>Select City <span className={`text-primary`}>*</span> </Form.Label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              // defaultValue={colourOptions[0]}
              // isDisabled={isDisabled}
              // isLoading={isLoading}
              // isClearable={isClearable}
              // isRtl={isRtl}
              isSearchable
              name="color"
              options={[{ label: 'Hi', value: 'hi' }]}
            />
          </Form.Group>
        </>
      },
      {
        id: "7",
        name: "bd_state",
        placeholder: "Enter your State",
        type: "text",
        controlId: "state",
        label: "State",
        isRequired: true,
        component: () => <>
          <Form.Group className="text-start form-group" controlId="state-id">
            <Form.Label>Select State <span className={`text-primary`}>*</span> </Form.Label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              // defaultValue={colourOptions[0]}
              // isDisabled={isDisabled}
              // isLoading={isLoading}
              // isClearable={isClearable}
              // isRtl={isRtl}
              isSearchable
              name="color"
              options={[{ label: 'Hi', value: 'hi' }]}
            />
          </Form.Group>
        </>
      },
      {
        id: "8",
        name: "bd_nearest_landmark",
        placeholder: "Enter your Nearest Landmark",
        type: "text",
        controlId: "nearest-landmark",
        label: "Nearest Landmark",
      },
      {
        id: "9",
        name: "bd_telephone1",
        placeholder: "Enter your Telephone Number 1",
        type: "text",
        controlId: "telephone1",
        label: "Telephone Number 1",
        isRequired: true,
      },
      {
        id: "10",
        name: "bd_telephone2",
        placeholder: "Enter your Telephone Number 2",
        type: "text",
        controlId: "telephone2",
        label: "Telephone Number 2",
      },
      {
        id: "11",
        name: "bd_email_address",
        placeholder: "Enter your Email Address",
        type: "email",
        controlId: "email-address",
        label: "Email Address",
        isRequired: true,
      },
    ],
    'Primary Contact Details 1': [
      {
        id: "1",
        name: "pc_1_fullname",
        placeholder: "Enter your Name",
        type: "text",
        controlId: "fullname",
        label: "Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "pc_1_telephone1",
        placeholder: "Enter your Telephone Number 1",
        type: "text",
        controlId: "telephone1",
        label: "Telephone Number 1",
        isRequired: true,
      },
      {
        id: "3",
        name: "pc_1_telephone2",
        placeholder: "Enter your Telephone Number 2",
        type: "text",
        controlId: "telephone2",
        label: "Telephone Number 2",
      },
      {
        id: "4",
        name: "pc_1_email_address",
        placeholder: "Enter your Email Address",
        type: "email",
        controlId: "email-address",
        label: "Email Address",
        isRequired: true,
      }
    ],
    'Primary Contact Details 2': [
      {
        id: "1",
        name: "pc_2_fullname",
        placeholder: "Enter your Name",
        type: "text",
        controlId: "fullname",
        label: "Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "pc_2_telephone1",
        placeholder: "Enter your Telephone Number 1",
        type: "text",
        controlId: "telephone1",
        label: "Telephone Number 1",
        isRequired: true,
      },
      {
        id: "3",
        name: "pc_2_telephone2",
        placeholder: "Enter your Telephone Number 2",
        type: "text",
        controlId: "telephone2",
        label: "Telephone Number 2",
      },
      {
        id: "4",
        name: "pc_2_email_address",
        placeholder: "Enter your Email Address",
        type: "email",
        controlId: "email-address",
        label: "Email Address",
        isRequired: true,
      }
    ],
    'Documentation': [
      {
        id: "1",
        name: "d_certificate_of_incorporation",
        placeholder: "Select Certificate of Incorporation",
        type: "file",
        controlId: "certificate-of-incorporation",
        label: "Certificate of Incorporation",
        isRequired: true,
      },
      {
        id: "2",
        name: "d_tax_identification_number",
        placeholder: "Select Tax Identification Number",
        type: "text",
        controlId: "tax-indentification-number",
        label: "Tax Identification Number",
        isRequired: true,
      },
      {
        id: "3",
        name: "d_memorandum_of_association",
        placeholder: "Select Memorandum of Association",
        type: "file",
        controlId: "tax-indentification-number",
        label: "Memorandum of Association",
        isRequired: true,
      },
      {
        id: "4",
        name: "d_cac_status_report",
        placeholder: "Select CAC Status Report Within the last 3 months(Document)",
        type: "file",
        controlId: "tax-indentification-number",
        label: "CAC Status Report Within the last 3 months(Document)",
        isRequired: true,
      },
      {
        id: "5",
        name: "d_proof_of_insurance",
        placeholder: "Select Proof of Insurance",
        type: "file",
        controlId: "tax-indentification-number",
        label: "Proof of Insurance",
        isRequired: true,
      },
      {
        id: "6",
        name: "d_images_of_warehouse",
        placeholder: "Select Images of Warehouse (Internal & External)",
        type: "file",
        controlId: "tax-indentification-number",
        label: "Images of Warehouse (Internal & External)",
        isRequired: true,
      },
    ],
    'Bank Details': [
      {
        id: "1",
        name: "bankd_bankname",
        placeholder: "Enter Bank Name",
        type: "text",
        controlId: "bankname",
        label: "Bank Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "bankd_bankbranchname",
        placeholder: "Enter Bank Branch Name",
        type: "text",
        controlId: "bankbranchname",
        label: "Bank Branch Name",
        isRequired: true,
      },
      {
        id: "3",
        name: "bankd_accountholdername",
        placeholder: "Enter Account Holder Name",
        type: "text",
        controlId: "accountholdername",
        label: "Account Holder Name",
        isRequired: true,
      },
      {
        id: "4",
        name: "bankd_accountnumber",
        placeholder: "Enter Account Number",
        type: "text",
        controlId: "accountnumber",
        label: "Account Number",
        isRequired: true,
      },
      {
        id: "5",
        name: "bankd_ifsccode",
        placeholder: "Enter MICR/IFSC Code",
        type: "text",
        controlId: "ifsccode",
        label: "MICR/IFSC Code",
      },
    ],
    'Free Space Dimensions': [
      {
        id: "1",
        name: "free_space_dimensions",
        removeCol: true,
        component: ({ item, setFormState }) => {
          return (
            <DynamicFormAdder formName='free-space-dimensions' dataItems={item} setFormState={setFormState} config={[
              {
                id: "1",
                name: "fsd_free_space_name",
                placeholder: "Enter free space name",
                type: "text",
                controlId: "free-space-name",
                label: "Free Space Name / Description",
                isRequired: true,
              },
              {
                id: "2",
                name: "fsd_area_in_sq_ft",
                placeholder: "Enter area in sq. ft",
                type: "text",
                controlId: "area-in-sq-ft",
                label: "Area (in Sq. ft)",
                isRequired: true,
              },
              {
                id: "3",
                name: "fsd_no_of_spaces",
                placeholder: "Enter no. of spaces",
                type: "text",
                controlId: "no-of-spaces",
                label: "No of Spaces (Default Value should be 1)",
                isRequired: true,
              },
            ]}
            />
          )
        }
      }
    ],
    'Vehicle Details': [
      {
        id: "1",
        name: "vehicle_details",
        removeCol: true,
        component: ({ item, setFormState }) => {
          return (
            <DynamicFormAdder formName='vehicle' dataItems={item} setFormState={setFormState} config={[
              {
                id: "1",
                name: "vd_vehicle_model",
                placeholder: "Enter Vehicle Model",
                type: "text",
                controlId: "vehicle-model",
                label: "Model",
                isRequired: true,
              },
              {
                id: "2",
                name: "vd_vehicle_year",
                placeholder: "Enter Vehicle Year",
                type: "text",
                controlId: "vehicle-year",
                label: "Year",
                isRequired: true,
              },
              {
                id: "3",
                name: "vd_vehicle_color",
                placeholder: "Enter Vehicle Color",
                type: "text",
                controlId: "vehicle-color",
                label: "Color",
                isRequired: true,
              },
              {
                id: "4",
                name: "vd_vehicle_type",
                placeholder: "Enter Vehicle Type",
                type: "text",
                controlId: "vehicle-type",
                label: "Type",
                isRequired: true,
              },
              {
                id: "5",
                name: "vd_image_inside_outside",
                placeholder: "Select Vehicle Image",
                type: "file",
                controlId: "image-inside-outside",
                label: "Image of Inside and Outside",
                isRequired: false,
              },
            ]}
            />
          )
        }
      }
    ]
  },
  'Logistic Partner': {
    'Basic Details': [
      {
        id: "1",
        name: "bd_fullname",
        placeholder: "Enter your Name",
        type: "text",
        controlId: "fullname",
        label: "Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "bd_companyName",
        placeholder: "Enter your Company Name",
        type: "text",
        controlId: "companyName",
        label: "Company Name",
        isRequired: false,
      },
      {
        id: "3",
        name: "bd_address1",
        placeholder: "Enter your Address Line 1",
        type: "text",
        controlId: "address1",
        label: "Address Line 1",
        isRequired: true,
      },
      {
        id: "4",
        name: "bd_address2",
        placeholder: "Enter your Address Line 2",
        type: "text",
        controlId: "address2",
        label: "Address Line 2",
      },
      {
        id: "5",
        name: "bd_address3",
        placeholder: "Enter your Address Line 3",
        type: "text",
        controlId: "address3",
        label: "Address Line 3",
      },
      {
        id: "6",
        name: "bd_city",
        placeholder: "Enter your City",
        type: "text",
        controlId: "city",
        label: "City",
        isRequired: true,
        component: () => <>
          <Form.Group className="text-start form-group" controlId="city-id">
            <Form.Label>Select City <span className={`text-primary`}>*</span> </Form.Label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              // defaultValue={colourOptions[0]}
              // isDisabled={isDisabled}
              // isLoading={isLoading}
              // isClearable={isClearable}
              // isRtl={isRtl}
              isSearchable
              name="color"
              options={[{ label: 'Hi', value: 'hi' }]}
            />
          </Form.Group>
        </>
      },
      {
        id: "7",
        name: "bd_state",
        placeholder: "Enter your State",
        type: "text",
        controlId: "state",
        label: "State",
        isRequired: true,
        component: () => <>
          <Form.Group className="text-start form-group" controlId="state-id">
            <Form.Label>Select State <span className={`text-primary`}>*</span> </Form.Label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              // defaultValue={colourOptions[0]}
              // isDisabled={isDisabled}
              // isLoading={isLoading}
              // isClearable={isClearable}
              // isRtl={isRtl}
              isSearchable
              name="color"
              options={[{ label: 'Hi', value: 'hi' }]}
            />
          </Form.Group>
        </>
      },
      {
        id: "8",
        name: "bd_nearest_landmark",
        placeholder: "Enter your Nearest Landmark",
        type: "text",
        controlId: "nearest-landmark",
        label: "Nearest Landmark",
      },
      {
        id: "9",
        name: "bd_telephone1",
        placeholder: "Enter your Telephone Number 1",
        type: "text",
        controlId: "telephone1",
        label: "Telephone Number 1",
        isRequired: true,
      },
      {
        id: "10",
        name: "bd_telephone2",
        placeholder: "Enter your Telephone Number 2",
        type: "text",
        controlId: "telephone2",
        label: "Telephone Number 2",
      },
      {
        id: "11",
        name: "bd_email_address",
        placeholder: "Enter your Email Address",
        type: "email",
        controlId: "email-address",
        label: "Email Address",
        isRequired: true,
      },
    ],
    'Primary Contact Details 1': [
      {
        id: "1",
        name: "pc_1_fullname",
        placeholder: "Enter your Name",
        type: "text",
        controlId: "fullname",
        label: "Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "pc_1_telephone1",
        placeholder: "Enter your Telephone Number 1",
        type: "text",
        controlId: "telephone1",
        label: "Telephone Number 1",
        isRequired: true,
      },
      {
        id: "3",
        name: "pc_1_telephone2",
        placeholder: "Enter your Telephone Number 2",
        type: "text",
        controlId: "telephone2",
        label: "Telephone Number 2",
      },
      {
        id: "4",
        name: "pc_1_email_address",
        placeholder: "Enter your Email Address",
        type: "email",
        controlId: "email-address",
        label: "Email Address",
        isRequired: true,
      }
    ],
    'Primary Contact Details 2': [
      {
        id: "1",
        name: "pc_2_fullname",
        placeholder: "Enter your Name",
        type: "text",
        controlId: "fullname",
        label: "Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "pc_2_telephone1",
        placeholder: "Enter your Telephone Number 1",
        type: "text",
        controlId: "telephone1",
        label: "Telephone Number 1",
        isRequired: true,
      },
      {
        id: "3",
        name: "pc_2_telephone2",
        placeholder: "Enter your Telephone Number 2",
        type: "text",
        controlId: "telephone2",
        label: "Telephone Number 2",
      },
      {
        id: "4",
        name: "pc_2_email_address",
        placeholder: "Enter your Email Address",
        type: "email",
        controlId: "email-address",
        label: "Email Address",
        isRequired: true,
      }
    ],
    'Bank Details': [
      {
        id: "1",
        name: "bankd_bankname",
        placeholder: "Enter Bank Name",
        type: "text",
        controlId: "bankname",
        label: "Bank Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "bankd_bankbranchname",
        placeholder: "Enter Bank Branch Name",
        type: "text",
        controlId: "bankbranchname",
        label: "Bank Branch Name",
        isRequired: true,
      },
      {
        id: "3",
        name: "bankd_accountholdername",
        placeholder: "Enter Account Holder Name",
        type: "text",
        controlId: "accountholdername",
        label: "Account Holder Name",
        isRequired: true,
      },
      {
        id: "4",
        name: "bankd_accountnumber",
        placeholder: "Enter Account Number",
        type: "text",
        controlId: "accountnumber",
        label: "Account Number",
        isRequired: true,
      },
      {
        id: "5",
        name: "bankd_ifsccode",
        placeholder: "Enter MICR/IFSC Code",
        type: "text",
        controlId: "ifsccode",
        label: "MICR/IFSC Code",
      },
    ],
    'Vehicle Details': [
      {
        id: "1",
        name: "vehicle_details",
        removeCol: true,
        component: ({ item, setFormState }) => {
          return (
            <DynamicFormAdder formName='vehicle' dataItems={item} setFormState={setFormState} config={[
              {
                id: "1",
                name: "vd_vehicle_model",
                placeholder: "Enter Vehicle Model",
                type: "text",
                controlId: "vehicle-model",
                label: "Model",
                isRequired: true,
              },
              {
                id: "2",
                name: "vd_vehicle_year",
                placeholder: "Enter Vehicle Year",
                type: "text",
                controlId: "vehicle-year",
                label: "Year",
                isRequired: true,
              },
              {
                id: "3",
                name: "vd_vehicle_color",
                placeholder: "Enter Vehicle Color",
                type: "text",
                controlId: "vehicle-color",
                label: "Color",
                isRequired: true,
              },
              {
                id: "4",
                name: "vd_vehicle_type",
                placeholder: "Enter Vehicle Type",
                type: "text",
                controlId: "vehicle-type",
                label: "Type",
                isRequired: true,
              },
              {
                id: "5",
                name: "vd_image_inside_outside",
                placeholder: "Select Vehicle Image",
                type: "file",
                controlId: "image-inside-outside",
                label: "Image of Inside and Outside",
                isRequired: false,
              },
              {
                id: "6",
                name: "vd_registration_number",
                placeholder: "Enter Registration Number",
                type: "text",
                controlId: "registration-number",
                label: "Registration Number",
                isRequired: false,
              },
              {
                id: "7",
                name: "vd_image_of_car",
                placeholder: "Select Car Image",
                type: "file",
                controlId: "image-of-car",
                label: "Image of Car",
                isRequired: false,
              },
              {
                id: "8",
                name: "vd_image_of_license",
                placeholder: "Select License Image",
                type: "file",
                controlId: "image-0f-license",
                label: "Image of License",
                isRequired: false,
              },
              {
                id: "9",
                name: "vd_image_of_driver",
                placeholder: "Select Driver Image",
                type: "file",
                controlId: "image-of-driver",
                label: "Image of Driver",
                isRequired: false,
              },
              {
                id: "10",
                name: "vd_image_of_road_worthiness",
                placeholder: "Select Road Worthiness Image",
                type: "file",
                controlId: "image-of-road-worthiness",
                label: "Image of Road Worthiness",
                isRequired: false,
              },
              {
                id: "11",
                name: "vd_proof_of_insurance",
                placeholder: "Select Proof of Insurance",
                type: "file",
                controlId: "proof-of-insurance",
                label: "Proof of Insurance",
                isRequired: false,
              },
            ]}
            />
          )
        }
      }
    ]
  },
}

const userTypeValue = ['CPGC', 'Warehouse', 'Logistic Partner']
// const userTypeValue = [{ label: 'CPGC', value: 'CPGC' },
// { label: 'Warehouse', value: 'Warehouse' },
// { label: 'Logistic Partner', value: 'Logistic Partner' }];

const Signup = () => {
  const navigate = useNavigate();
  const [formStepper, setFormStepper] = useState(0);
  const [userType, setUserType] = useState(userTypeValue[0]);
  const formStages = Object.keys(formRenderer[userType]);
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  const [formState, setFormState] = useState({});
  const [isApiCalled, setIsApiCalled] = useState(false);
  const [changeView, setChangeView] = useState(true);

  // useEffect(() => {
  //   const currentSelection = formRenderer[userType][formStages[formStepper]];
  //   const fetchApi = async () => {
  //     let response = await fetch('http://localhost:1900/stateApi');
  //     response = await response.json();
  //     currentSelection.forEach((item) => {
  //       if (item.name.includes('state')) {
  //         item['options'] = response;
  //       }
  //     })
  //   }
  //   fetchApi().finally(() => setIsApiCalled(false));
  // }, [formStages, formStepper, userType])

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formItems = new FormData();
    Object.keys(formState).forEach((keys) => {
      formItems.append(keys, formState[keys]);
    })
    axios
      .post('http://54.218.124.226:1900/users/register/', formState, {})
      .then((response) => {
        console.log("response = ", response);
      })
      .catch((err) => {
        console.log("Error = ", err);
      })
      .finally((res) => {
        console.log("Final");
      })
  }

  if (!isApiCalled)
    return (
      <Fragment>
        <div className="page main-signin-wrapper dala-login-wrapper-bg">
          <Row className="signpages width70 text-center">
            <Col md={12} className="col-md-12">
              <Card style={{ overflowY: 'auto', overflowX: 'hidden', maxHeight: '80vh', minHeight: '60vh' }}>
                <Container fluid>
                  <Card.Body className="mt-2 mb-2">
                    <Col
                      lg={6}
                      xl={5}
                      className="d-none d-lg-block text-center mx-auto"
                    >
                      <div>
                        <img
                          src={require("assets/dala-assets/img/Dala_2.png")}
                          className="header-brand-img mb-2"
                          alt="logo"
                          style={{ width: '100px' }}
                        />
                      </div>
                    </Col>
                    <img
                      src={require("assets/dala-assets/img/Dala_2.png")}
                      className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                      alt="logo"
                      style={{ scale: '0.5' }}
                    />
                    <img
                      src={require("assets/dala-assets/img/Dala_2.png")}
                      className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                      alt="logo"
                      style={{ scale: '0.5' }}
                    />
                    <div>
                      {changeView ? (
                        <div className="clearfix">
                          <h1>Register As</h1>
                          {/* <Form.Group className="text-start form-group" controlId="city-id">
                            <Form.Label>Select City <span className={`text-primary`}>*</span> </Form.Label>
                            <Select
                              className="basic-single"
                              classNamePrefix="select"
                              isSearchable
                              name="color"
                              onChange={(e) => {
                                console.log(e, "checking")
                                setUserType(e.value);
                                setFormStepper(0);
                              }}
                              options={userTypeValue}
                            />
                          </Form.Group> */}
                          <button className="btn ripple btn-main-primary btn-block mt-3" style={{ width: '60%', marginLeft: '20%' }} onClick={() => {
                            setChangeView(false);
                            setIsTypeSelected(true);
                            setUserType(userTypeValue[0])
                          }}>
                            CPGC
                          </button>
                          <button className="btn ripple btn-main-primary btn-block mt-3" style={{ width: '60%', marginLeft: '20%' }} onClick={() => {
                            setChangeView(false);
                            setIsTypeSelected(true);
                            setUserType(userTypeValue[1])
                          }}>
                            Warehouse
                          </button>
                          <button className="btn ripple btn-main-primary btn-block mt-3" style={{ width: '60%', marginLeft: '20%' }} onClick={() => {
                            setChangeView(false);
                            setIsTypeSelected(true);
                            setUserType(userTypeValue[2])
                          }}>
                            Logistic Partner
                          </button>
                          {/* <button className="btn btn-sm btn-primary mt-4" onClick={() => {
                            setChangeView(false);
                            setIsTypeSelected(true);
                          }}>Confirm</button> */}
                          <div className="text-center mt-5 ms-0">
                            <p className="mb-0">
                              Already have an account?
                              <Link
                                to={`${process.env.PUBLIC_URL}/admin/login`}> Login
                              </Link>
                            </p>
                          </div>
                        </div>) : (
                        <div>
                          <h5 className="text-start text-center">User Registration</h5>
                          <button className="btn btn-sm btn-primary d-flex" style={{ marginLeft: 'auto' }} onClick={() => {
                            setChangeView(true);
                            setIsTypeSelected(false);
                            setFormStepper(0);
                            setFormState({});
                          }}>Change</button>
                          {/* <div className={`d-flex justify-content-center align-items-center ${isTypeSelected ? 'gap-2' : 'gap-5'} mb-3`}>
                      {
                        isTypeSelected ? <h5 className="m-0">{userType}</h5> : userTypeValue.map((item, index) => {
                          const uniqueid = item.replace(/ /g, '') + index;
                          return (
                            <Form.Check
                              type="radio"
                              id={`${uniqueid}-type-radio`}
                              label={item}
                              name="type-radio"
                              value={item}
                              onChange={(e) => {
                                setUserType(e.target.value);
                                setFormStepper(0);
                              }}
                              checked={item === userType}
                              key={uniqueid}
                            />
                          )
                        })
                      }
                      {!isTypeSelected ? <button className="btn btn-sm btn-primary" onClick={() => {
                        setIsTypeSelected(true);
                      }}>Confirm</button> : <button className="btn btn-sm btn-primary" onClick={() => {
                        setIsTypeSelected(false);
                      }}>Change</button>}
                    </div> */}
                          <h5 className="text-start mb-4 text-start">{formStages[formStepper]}</h5>
                          <Form
                            onSubmit={formSubmitHandler}
                          >
                            <Row>
                              {
                                formRenderer[userType][formStages[formStepper]].map((item, index) => {
                                  if (item.removeCol) return item.component({ item, formState, setFormState, setIsTypeSelected, isDisabled: !isTypeSelected })
                                  return (
                                    <Col lg={6} md={12} xl={6} xs={12} sm={12} key={item.id + userType + formStepper}>
                                      {!item.component ? <Form.Group className="text-start form-group" controlId={item.controlId + index} key={item.id + index}>
                                        <Form.Label>{item.label} <span className={`text-primary ${item.isRequired ? 'd-inline' : 'd-none'}`}>*</span> </Form.Label>
                                        <Form.Control
                                          name={item.name}
                                          placeholder={item.placeholder}
                                          type={item.type}
                                          required={item.isRequired}
                                          onChange={(e) => {
                                            const { name, value } = e.target;
                                            setFormState((prev) =>
                                              ({ ...prev, [name]: value })
                                            )
                                          }}
                                          value={formState[item.name]}
                                          key={item.id + userType}
                                          disabled={!isTypeSelected}
                                        />
                                      </Form.Group> : item.component({ item, formState, setFormState, setIsTypeSelected, isDisabled: !isTypeSelected })}
                                    </Col>
                                  )
                                })
                              }
                            </Row>
                            <Row>
                              <Col>
                                {formStepper > 0 ? <button type="button" className="btn ripple btn-main-primary btn-block mt-2" onClick={() => {
                                  setFormStepper((prev) => prev - 1)
                                }}>
                                  Prev
                                </button> : null}
                              </Col>
                              <Col>
                                {formStepper < formStages.length - 1 ? (
                                  <button type="button" className="btn ripple btn-main-primary btn-block mt-2" disabled={!isTypeSelected} onClick={() => {
                                    setFormStepper((prev) => prev + 1);
                                    // setFormState({});
                                  }}>
                                    Next
                                  </button>
                                ) : null}
                                {
                                  formStepper === formStages.length - 1 ? (
                                    <button className="btn ripple btn-success btn-block mt-2" type="submit" >
                                      Submit
                                    </button>
                                  ) : null
                                }
                              </Col>
                            </Row>
                          </Form>
                          <div className="text-start mt-5 ms-0">
                            <p className="mb-0">
                              Already have an account?
                              <Link
                                to={`${process.env.PUBLIC_URL}/admin/login`}> Login
                              </Link>
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </Card.Body>
                </Container>
              </Card>
            </Col>
          </Row>
        </div>

      </Fragment >
    )
};

Signup.propTypes = {};

Signup.defaultProps = {};

export default Signup;

const DynamicFormAdder = ({ formName, dataItems, setFormState, config }) => {
  const [itemMap, setItemMap] = useState([]);

  useEffect(() => {
    setItemMap([{ id: 1, value: templateItem }]);
  }, [formName])
  console.log("value check", config);
  const templateItem = (item, index, arr) => (
    <Row className="mb-2">
      {config.map((configItem, configIndex) => (
        <Col key={configItem.id}>
          <Form.Group className="text-start form-group">

            <Form.Label style={{ whiteSpace: 'nowrap', minWidth: '200px' }}>{configItem.label}</Form.Label>
            <Form.Control

              name={configItem.name}
              placeholder={configItem.placeholder}
              type={configItem.type}
              required={configItem.isRequired}
            />
          </Form.Group>
        </Col>
      ))
      }
      <Col className={`d-flex align-items-center gap-2`}>
        {arr.length === index + 1 ? <button className="btn btn-primary" type="button" onClick={(e) => {
          setItemMap((prev) => [...prev, { id: item.id + 1, value: templateItem }])
        }}>Add more</button> : null}
        {arr.length > 1 ? <button className="btn btn-primary" type="button" onClick={(e) => {
          const removedItem = arr.filter((rowItem, rowIndex) => item.id !== rowItem.id);
          setItemMap(removedItem);
        }}>Delete</button> : null}
      </Col>
    </Row>
  );

  return itemMap.map((item, index, arr) => {
    return (
      <React.Fragment key={item.id}>
        {item.value(item, index, arr)}
      </React.Fragment>
    );
  })
}
