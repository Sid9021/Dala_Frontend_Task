import React, { useEffect, useState } from "react";
import { Row, Col, Form, Table } from "react-bootstrap";

const DynamicFormAdder = ({ formName, dataItems, setFormState, config }) => {
  const [itemMap, setItemMap] = useState([]);

  useEffect(() => {
    setItemMap([{ id: 1, value: templateItem }]);
  }, [formName]);

  const templateItem = (item, index, arr) => (
    <tr key={item.id}>
      {config.map((configItem, configIndex) => (
        <td key={configItem.id}>
          <Form.Group className="text-start form-group mb-0" style={{width: "max-content"}}>
            <Form.Control
              name={configItem.name}
              placeholder={configItem.placeholder}
              type={configItem.type}
              required={configItem.isRequired}
            />
          </Form.Group>
        </td>
      ))}
      <td className="text-end">
        {arr.length === index + 1 ? (
          <button
            className="btn btn-primary"
            type="button"
            onClick={(e) => {
              setItemMap((prev) => [
                ...prev,
                { id: item.id + 1, value: templateItem },
              ]);
            }}
          >
            Add more
          </button>
        ) : null}
      </td>
      <td className="text-end">
        {arr.length > 1 ? (
          <button
            className="btn btn-primary"
            type="button"
            onClick={(e) => {
              const removedItem = arr.filter(
                (rowItem, rowIndex) => item.id !== rowItem.id
              );
              setItemMap(removedItem);
            }}
          >
            Delete
          </button>
        ) : null}
      </td>
    </tr>
  );

  return (
    <Table>
      <thead>
        <tr>
          {config.map((configItem) => (
            <th key={configItem.id}>{configItem.label}</th>
          ))}
          <th className="text-end">Add</th>
          <th className="text-end">Delete</th>
        </tr>
      </thead>
      <tbody>
        {itemMap.map((item, index, arr) => (
          <React.Fragment key={item.id}>{item.value(item, index, arr)}</React.Fragment>
        ))}
      </tbody>
    </Table>
  );
};

export default DynamicFormAdder;