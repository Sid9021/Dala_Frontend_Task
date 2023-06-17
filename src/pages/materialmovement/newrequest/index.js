import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import AddUserLayout from "customComponents/appUserLayout";

const CPGC = {
    'Basic Details': [
        {
            id: "1",
            name: "materialtype",
            placeholder: "Select a Material",
            type: "dropdown",
            controlId: "materialtype",
            label: "Material Type",
            isRequired: true,
        },
        {
            id: "2",
            name: "noofproducts",
            placeholder: "Enter the no: of Products",
            type: "number",
            controlId: "noofproducts",
            label: "Total No: of Products",
            isRequired: true,
        },
        {
            id: "3",
            name: "weight",
            placeholder: "Enter the weight",
            type: "number",
            controlId: "weight",
            label: "Weight (In Tons)",
            isRequired: true,
        },
    ],
        'Pickup Loaction Details':[
            {
                id: "4",
                name: "picklocation",
                placeholder: "Select your pickup location",
                type: "dropdown",
                controlId: "picklocation",
                label: "Pickup Location",
            },
            {
                id: "5",
                name: "pickaddress",
                placeholder: "Enter your pickup address",
                type: "text",
                controlId: "pickaddress",
                label: "Pickup Address",
            },
            {
                id: "6",
                name: "pickcountry",
                placeholder: "Select your country",
                type: "dropdown",
                controlId: "dropcountry",
                label: "Drop Location Country",
                isRequired: true,
                component: ({ item, setFormState, isDisabled }) => {
                    const changeHandler = ({ value }, name) => {
                        setFormState((prev) => ({ ...prev, [name]: value }))
                    }
                    return (
                        <>
                            <Form.Group className="text-start form-group" controlId="country-id">
                                <Form.Label>Select Country <span className={`text-primary`}>*</span> </Form.Label>
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
                                    options={[{ label: 'India', value: 'India' },{ label: 'United States', value: 'United States' },{ label: 'UK', value: 'UK' },{ label: 'Japan', value: 'Japan' },{ label: 'Africa', value: 'Africa' }]}
                                    onChange={(e) => changeHandler(e, "city")}
                                    isDisabled={isDisabled}
                                />
                            </Form.Group>
                        </>
                    )
                }
            },
            {
                id: "7",
                name: "pickcity",
                placeholder: "Enter your pickup city",
                type: "text",
                controlId: "pickcity",
                label: "Pickup City",
            },
        ],
         
        'Drop Location Details':[
        {
            id: "1",
            name: "dropadd1",
            placeholder: "Address Line 1",
            type: "text",
            controlId: "dropadd1",
            label: "Drop Location Address Line 1",
            isRequired: true,
            
        },
        {
            id: "2",
            name: "dropadd2",
            placeholder: "Address Line 2",
            type: "text",
            controlId: "dropadd2",
            label: "Drop Location Address Line 2",
            isRequired: true,
        },
        {
            id: "3",
            name: "dropadd3",
            placeholder: "Address Line 3",
            type: "text",
            controlId: "dropadd3",
            label: "Drop Location Address Line 3",
            isRequired: true,
        },
        {
            id: "4",
            name: "dropcountry",
            placeholder: "Select your country",
            type: "dropdown",
            controlId: "pickcountry",
            label: "Pickup Country",
            isRequired: true,
            component: ({ item, setFormState, isDisabled }) => {
                const changeHandler = ({ value }, name) => {
                    setFormState((prev) => ({ ...prev, [name]: value }))
                }
                return (
                    <>
                        <Form.Group className="text-start form-group" controlId="country-id">
                            <Form.Label>Select Country <span className={`text-primary`}>*</span> </Form.Label>
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
                                options={[{ label: 'India', value: 'India' },{ label: 'United States', value: 'United States' },{ label: 'UK', value: 'UK' },{ label: 'Japan', value: 'Japan' },{ label: 'Africa', value: 'Africa' }]}
                                onChange={(e) => changeHandler(e, "city")}
                                isDisabled={isDisabled}
                            />
                        </Form.Group>
                    </>
                )
            }
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
    'MD Details': [
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
    'Documentation': [
        {
            id: "1",
            name: "Certificate of Incorporation",
            placeholder: "Select Certificate of Incorporation",
            type: "file",
            controlId: "certificate-of-incorporation",
            label: "Certificate of Incorporation",
            isRequired: true,
        },
        {
            id: "2",
            name: "Tax Identification Number",
            placeholder: "Select Tax Identification Number",
            type: "text",
            controlId: "tax-indentification-number",
            label: "Tax Identification Number",
            isRequired: true,
        },
        {
            id: "3",
            name: "Memorandum of Association",
            placeholder: "Select Memorandum of Association",
            type: "file",
            controlId: "tax-indentification-number",
            label: "Memorandum of Association",
            isRequired: true,
        },
        {
            id: "4",
            name: "NAFDAC & /or SON certification",
            placeholder: "Select NAFDAC & /or SON certification",
            type: "file",
            controlId: "tax-indentification-number",
            label: "NAFDAC & /or SON certification",
            isRequired: true,
        },
        {
            id: "5",
            name: "CAC Status Report Within the last 3 months(Document)",
            placeholder: "Select CAC Status Report Within the last 3 months(Document)",
            type: "file",
            controlId: "tax-indentification-number",
            label: "CAC Status Report Within the last 3 months(Document)",
            isRequired: true,
        },
    ]
}

const CpgcAddPage = () => {

  return (
  
    <div className="mt-3 ">
          <AddUserLayout obj = {CPGC} title = {'Cpgc Registration'}/>
    </div>
  );
};

export default CpgcAddPage;