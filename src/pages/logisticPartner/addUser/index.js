import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import AddUserLayout from "customComponents/appUserLayout";
import DynamicFormAdder from "customComponents/DynamicFormAdder";


const LogisticPartner = {
    'Basic Details': [
      {
        id: "1",
        name: "fullname",
        placeholder: "Enter your Name",
        type: "text",
        controlId: "fullname",
        label: "Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "companyName",
        placeholder: "Enter your Company Name",
        type: "text",
        controlId: "companyName",
        label: "Company Name",
        isRequired: false,
      },
      {
        id: "3",
        name: "address1",
        placeholder: "Enter your Address Line 1",
        type: "text",
        controlId: "address1",
        label: "Address Line 1",
        isRequired: true,
      },
      {
        id: "4",
        name: "address2",
        placeholder: "Enter your Address Line 2",
        type: "text",
        controlId: "address2",
        label: "Address Line 2",
      },
      {
        id: "5",
        name: "address3",
        placeholder: "Enter your Address Line 3",
        type: "text",
        controlId: "address3",
        label: "Address Line 3",
      },
      {
        id: "6",
        name: "city",
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
        name: "state",
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
        name: "nearest-landmark",
        placeholder: "Enter your Nearest Landmark",
        type: "text",
        controlId: "nearest-landmark",
        label: "Nearest Landmark",
      },
      {
        id: "9",
        name: "telephone1",
        placeholder: "Enter your Telephone Number 1",
        type: "text",
        controlId: "telephone1",
        label: "Telephone Number 1",
        isRequired: true,
      },
      {
        id: "10",
        name: "telephone2",
        placeholder: "Enter your Telephone Number 2",
        type: "text",
        controlId: "telephone2",
        label: "Telephone Number 2",
      },
      {
        id: "11",
        name: "email-address",
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
        name: "fullname",
        placeholder: "Enter your Name",
        type: "text",
        controlId: "fullname",
        label: "Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "telephone1",
        placeholder: "Enter your Telephone Number 1",
        type: "text",
        controlId: "telephone1",
        label: "Telephone Number 1",
        isRequired: true,
      },
      {
        id: "3",
        name: "telephone2",
        placeholder: "Enter your Telephone Number 2",
        type: "text",
        controlId: "telephone2",
        label: "Telephone Number 2",
      },
      {
        id: "4",
        name: "email-address",
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
        name: "fullname",
        placeholder: "Enter your Name",
        type: "text",
        controlId: "fullname",
        label: "Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "telephone1",
        placeholder: "Enter your Telephone Number 1",
        type: "text",
        controlId: "telephone1",
        label: "Telephone Number 1",
        isRequired: true,
      },
      {
        id: "3",
        name: "telephone2",
        placeholder: "Enter your Telephone Number 2",
        type: "text",
        controlId: "telephone2",
        label: "Telephone Number 2",
      },
      {
        id: "4",
        name: "email-address",
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
        name: "bankname",
        placeholder: "Enter Bank Name",
        type: "text",
        controlId: "bankname",
        label: "Bank Name",
        isRequired: true,
      },
      {
        id: "2",
        name: "bankbranchname",
        placeholder: "Enter Bank Branch Name",
        type: "text",
        controlId: "bankbranchname",
        label: "Bank Branch Name",
        isRequired: true,
      },
      {
        id: "3",
        name: "accountholdername",
        placeholder: "Enter Account Holder Name",
        type: "text",
        controlId: "accountholdername",
        label: "Account Holder Name",
        isRequired: true,
      },
      {
        id: "4",
        name: "accountnumber",
        placeholder: "Enter Account Number",
        type: "text",
        controlId: "accountnumber",
        label: "Account Number",
        isRequired: true,
      },
      {
        id: "5",
        name: "ifsccode",
        placeholder: "Enter MICR/IFSC Code",
        type: "text",
        controlId: "ifsccode",
        label: "MICR/IFSC Code",
      },
    ],
    'Vehicle Details': [
      {
        id: "1",
        name: "vehicle-details",
        removeCol: true,
        component: ({ item, setFormState }) => {
          return (
            <DynamicFormAdder formName='vehicle' dataItems={item} setFormState={setFormState} config={[
              {
                id: "1",
                name: "vehicle-model",
                placeholder: "Enter Vehicle Model",
                type: "text",
                controlId: "vehicle-model",
                label: "Model",
                isRequired: true,
              },
              {
                id: "2",
                name: "vehicle-year",
                placeholder: "Enter Vehicle Year",
                type: "text",
                controlId: "vehicle-year",
                label: "Year",
                isRequired: true,
              },
              {
                id: "3",
                name: "vehicle-color",
                placeholder: "Enter Vehicle Color",
                type: "text",
                controlId: "vehicle-color",
                label: "Color",
                isRequired: true,
              },
              {
                id: "4",
                name: "vehicle-type",
                placeholder: "Enter Vehicle Type",
                type: "text",
                controlId: "vehicle-type",
                label: "Type",
                isRequired: true,
              },
              {
                id: "5",
                name: "image-inside-outside",
                placeholder: "Select Vehicle Image",
                type: "file",
                controlId: "image-inside-outside",
                label: "Image of Inside and Outside",
                isRequired: false,
              },
              {
                id: "6",
                name: "registration-number",
                placeholder: "Enter Registration Number",
                type: "text",
                controlId: "registration-number",
                label: "Registration Number",
                isRequired: false,
              },
              {
                id: "7",
                name: "image-of-car",
                placeholder: "Select Car Image",
                type: "file",
                controlId: "image-of-car",
                label: "Image of Car",
                isRequired: false,
              },
              {
                id: "8",
                name: "image-0f-license",
                placeholder: "Select License Image",
                type: "file",
                controlId: "image-0f-license",
                label: "Image of License",
                isRequired: false,
              },
              {
                id: "9",
                name: "image-of-driver",
                placeholder: "Select Driver Image",
                type: "file",
                controlId: "image-of-driver",
                label: "Image of Driver",
                isRequired: false,
              },
              {
                id: "10",
                name: "image-of-road-worthiness",
                placeholder: "Select Road Worthiness Image",
                type: "file",
                controlId: "image-of-road-worthiness",
                label: "Image of Road Worthiness",
                isRequired: false,
              },
              {
                id: "11",
                name: "proof-of-insurance",
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
  }

const LPAddPage = () => {

  return (
  
    <div className="mt-3">
          <AddUserLayout obj = {LogisticPartner} title = {'Cpgc Registration'}/>
    </div>
  );
};

export default LPAddPage;