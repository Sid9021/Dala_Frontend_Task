import React, {useState} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";

const MMRF = {
  'Material Details': [
    {
      id: "materialType",
      name: "materialType",
      placeholder: "Select Material Type",
      type: "dropdown",
      controlId: "materialType",
      label: "Material Type",
      isRequired: true,
      component: ({ item, setFormState, isDisabled }) => {
        const changeHandler = ({ value }, name) => {
          setFormState((prev) => ({ ...prev, [name]: value }));
        };
        return (
          <>
            <Form.Group className="text-start form-group" controlId="materialType-id">
          
              <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable
                name="materialType"
                options={[{ label: 'Type 1', value: 'type1' }, { label: 'Type 2', value: 'type2' }]}
                onChange={(e) => changeHandler(e, "materialType")}
                isDisabled={isDisabled}
              />
            </Form.Group>
          </>
        );
      }
    },
    {
      id: "totalProducts",
      name: "totalProducts",
      placeholder: "Enter Total No of Products",
      type: "number",
      controlId: "totalProducts",
      label: "Total No of Products",
      isRequired: true,
      min: 0,
    },
    {
      id: "weight",
      name: "weight",
      placeholder: "Enter Weight (In Tons)",
      type: "number",
      controlId: "weight",
      label: "Weight (In Tons)",
      isRequired: true,
      min: 0,
    },
  ],
  'Pickup Details': [
    {
      id: "pickupLocation",
      name: "pickupLocation",
      placeholder: "Select Pickup Location",
      type: "dropdown",
      controlId: "pickupLocation",
      label: "Pickup Location",
      isRequired: true,
      component: ({ item, setFormState, isDisabled }) => {
        const changeHandler = ({ value }, name) => {
          setFormState((prev) => ({ ...prev, [name]: value }));
        };
        return (
          <>
            <Form.Group className="text-start form-group" controlId="pickupLocation-id">
              
              <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable
                name="pickupLocation"
                options={[{ label: 'Default Location', value: 'default' }, { label: 'Other Location', value: 'other' }]}
                onChange={(e) => changeHandler(e, "pickupLocation")}
                isDisabled={isDisabled}
              />
            </Form.Group>
          </>
        );
      }
    },
    {
      id: "pickupAddress",
      name: "pickupAddress",
      placeholder: "Enter Pickup Address",
      type: "textarea",
      controlId: "pickupAddress",
      label: "Pickup Address",
    },
    {
      id: "pickupCountry",
      name: "pickupCountry",
      placeholder: "Select Pickup Country",
      type: "dropdown",
      controlId: "pickupCountry",
      label: "Pickup Country",
      isRequired: true,
      component: ({ item, setFormState, isDisabled }) => {
        const changeHandler = ({ value }, name) => {
          setFormState((prev) => ({ ...prev, [name]: value }));
        };
        return (
          <>
            <Form.Group className="text-start form-group" controlId="pickupCountry-id">
              
              <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable
                name="pickupCountry"
                options={[{ label: 'Country 1', value: 'country1' }, { label: 'Country 2', value: 'country2' }]}
                onChange={(e) => changeHandler(e, "pickupCountry")}
                isDisabled={isDisabled}
              />
            </Form.Group>
          </>
        );
      }
    },
    {
      id: "pickupState",
      name: "pickupState",
      placeholder: "Select Pickup State",
      type: "dropdown",
      controlId: "pickupState",
      label: "Pickup State",
      isRequired: true,
      component: ({ item, setFormState, isDisabled }) => {
        const changeHandler = ({ value }, name) => {
          setFormState((prev) => ({ ...prev, [name]: value }));
        };
        return (
          <>
            <Form.Group className="text-start form-group" controlId="pickupState-id">
              
              <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable
                name="pickupState"
                options={[{ label: 'State 1', value: 'state1' }, { label: 'State 2', value: 'state2' }]}
                onChange={(e) => changeHandler(e, "pickupState")}
                isDisabled={isDisabled}
              />
            </Form.Group>
          </>
        );
      }
    },
    {
      id: "pickupCity",
      name: "pickupCity",
      placeholder: "Enter Pickup City",
      type: "text",
      controlId: "pickupCity",
      label: "Pickup City",
      isRequired: true,
    },
  ],
  'Drop Details': [
    {
      id: "dropLocationAddressLine1",
      name: "dropLocationAddressLine1",
      placeholder: "Enter Drop Location Address Line 1",
      type: "text",
      controlId: "dropLocationAddressLine1",
      label: "Drop Location Address Line 1",
      isRequired: true,
    },
    {
      id: "dropLocationAddressLine2",
      name: "dropLocationAddressLine2",
      placeholder: "Enter Drop Location Address Line 2",
      type: "text",
      controlId: "dropLocationAddressLine2",
      label: "Drop Location Address Line 2",
      isRequired: true,
    },
    {
      id: "dropLocationAddressLine3",
      name: "dropLocationAddressLine3",
      placeholder: "Enter Drop Location Address Line 3",
      type: "text",
      controlId: "dropLocationAddressLine3",
      label: "Drop Location Address Line 3",
      isRequired: true,
    },
    {
      id: "dropLocationCountry",
      name: "dropLocationCountry",
      placeholder: "Select Drop Location Country",
      type: "dropdown",
      controlId: "dropLocationCountry",
      label: "Drop Location Country",
      isRequired: true,
      component: ({ item, setFormState, isDisabled }) => {
        const changeHandler = ({ value }, name) => {
          setFormState((prev) => ({ ...prev, [name]: value }));
        };
        return (
          <>
            <Form.Group className="text-start form-group" controlId="dropLocationCountry-id">
            
              <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable
                name="dropLocationCountry"
                options={[{ label: 'Country 1', value: 'country1' }, { label: 'Country 2', value: 'country2' }]}
                onChange={(e) => changeHandler(e, "dropLocationCountry")}
                isDisabled={isDisabled}
              />
            </Form.Group>
          </>
        );
      }
    },
    {
      id: "dropLocationState",
      name: "dropLocationState",
      placeholder: "Select Drop Location State",
      type: "dropdown",
      controlId: "dropLocationState",
      label: "Drop Location State",
      isRequired: true,
      component: ({ item, setFormState, isDisabled }) => {
        const changeHandler = ({ value }, name) => {
          setFormState((prev) => ({ ...prev, [name]: value }));
        };
        return (
          <>
            <Form.Group className="text-start form-group" controlId="dropLocationState-id">
             
              <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable
                name="dropLocationState"
                options={[{ label: 'State 1', value: 'state1' }, { label: 'State 2', value: 'state2' }]}
                onChange={(e) => changeHandler(e, "dropLocationState")}
                isDisabled={isDisabled}
              />
            </Form.Group>
          </>
        );
      }
    },
    {
      id: "dropLocationCity",
      name: "dropLocationCity",
      placeholder: "Enter Drop Location City",
      type: "text",
      controlId: "dropLocationCity",
      label: "Drop Location City",
      isRequired: true,
    },
  ],
  'Invoice Details': [
    {
      id: "invoiceUpload",
      name: "invoiceUpload",
      type: "file",
      controlId: "invoiceUpload",
      label: "Invoice Upload",
      isRequired: true,
    },
    {
      id: "materialImages",
      name: "materialImages",
      type: "multiple-file",
      controlId: "materialImages",
      label: "Material / Stock Images",
      isRequired: true,
    },
    {
      id: "pickupDate",
      name: "pickupDate",
      placeholder: "Select Pick Up Date",
      type: "date",
      controlId: "pickupDate",
      label: "Pick Up Date",
      isRequired: true,
    },
    {
      id: "preferredTimeSlot",
      name: "preferredTimeSlot",
      placeholder: "Select Preferred Pick Up Time Slot",
      type: "dropdown",
      controlId: "preferredTimeSlot",
      label: "Preffered Pick Up Time Slot",
      isRequired: true,
      component: ({ item, setFormState, isDisabled }) => {
        const changeHandler = ({ value }, name) => {
          setFormState((prev) => ({ ...prev, [name]: value }));
        };
        return (
          <>
            <Form.Group className="text-start form-group" controlId="preferredTimeSlot-id">
              
              <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable
                name="preferredTimeSlot"
                options={[
                  { label: '8AM - 4PM', value: '8AM-4PM' },
                  { label: '4PM - 12PM', value: '4PM-12PM' },
                  { label: '12PM - 8AM', value: '12PM-8AM' }
                ]}
                onChange={(e) => changeHandler(e, "preferredTimeSlot")}
                isDisabled={isDisabled}
              />
            </Form.Group>
          </>
        );
      }
    },
    {
      id: "additionalRemarks",
      name: "additionalRemarks",
      placeholder: "Enter Additional Remarks",
      type: "textarea",
      controlId: "additionalRemarks",
      label: "Additional Remarks",
    },
    {
      id: "contactPersonName",
      name: "contactPersonName",
      placeholder: "Enter Contact Person Name",
      type: "text",
      controlId: "contactPersonName",
      label: "Contact Person Name",
      isRequired: true,
    },
    {
      id: "contactPersonPhone",
      name: "contactPersonPhone",
      placeholder: "Enter Contact Person Phone",
      type: "text",
      controlId: "contactPersonPhone",
      label: "Contact Person Phone",
      isRequired: true,
    },
    {
      id: "contactPersonEmail",
      name: "contactPersonEmail",
      placeholder: "Enter Contact Person Email",
      type: "text",
      controlId: "contactPersonEmail",
      label: "Contact Person Email",
      isRequired: true,
    },
  ],
};

const MMRequestForm = () => {
  const [formState, setFormState] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };


  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-center mt-3">Material Mmovement Request Form</h1>
    {Object.entries(MMRF).map(([sectionTitle, sectionFields]) => (
      
      <div key={sectionTitle} className="mt-4">
        
        <h3>{sectionTitle}</h3>
        <Row>
          {sectionFields.map((field, index) => (
            <Col key={field.id} sm={4}>
              <Form.Group controlId={field.controlId}>
                <Form.Label className="mt-2">
                  {field.label}{" "}
                  {field.isRequired && <span className="text-primary">*</span>}
                </Form.Label>
                {field.component ? (
                  <field.component
                    item={field}
                    setFormState={setFormState}
                    isDisabled={false}
                  />
                ) : (
                  <Form.Control
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        [field.name]: e.target.value,
                      }))
                    }
                  />
                  
                )}
              </Form.Group>
              
            </Col>
          ))}
        </Row>
      </div>
    ))}
    <div className="mt-4 mb-3">
      <Button type="submit">Submit</Button>
    </div>
  </Form>
  );
};

export default MMRequestForm;
