import React from "react";
import { Form } from "react-bootstrap";

const DynamicForm = ({
  item,
  index,
  setFormState,
  formState,
}) => {
  if (!item.component)
    return (
      <Form.Group className="text-start form-group" controlId={item.controlId + index} key={item.id + index}>
        <Form.Label>{item.label} <span className={`text-primary ${item.isRequired ? 'd-inline' : 'd-none'}`}>*</span> </Form.Label>
        <Form.Control
          name={item.name + index}
          placeholder={item.placeholder}
          type={item.type}
          required={item.isRequired}
          onChange={(e) => {
            const { name, value } = e.target;
            setFormState((prev) =>
              ({ ...prev, [name]: value })
            )
          }}
          value={formState[item.name + index]}
          key={item.id}
          inputMode={item.inputMode}
        />
      </Form.Group>
    )
  return item.component({ item, formState, setFormState })
}

export default DynamicForm;