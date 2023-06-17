// import DynamicForm from 'customComponents/DynamicForm'
import React, { useState } from 'react'
// import { Col, Form, Row } from 'react-bootstrap'
// import Select from 'react-select'
import { DataTables } from 'utilityComponents/DataTable'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CustomBreadcrumb from 'customComponents/CustomBreadcrumb';


const tableData = [
  {
    id: "material-type",
    sno: 1,
    materialType: "Steel",
    status: "active",
    action: <div className="action-icons"><i className="typcn typcn-delete"></i></div>
  }
]

const columns = [
  {
    name: "Material Type",
    selector: row => [row.materialType],
    sortable: true,
  },
  {
    name: "Status",
    selector: row => [row.status],
    sortable: true,
  },
  {
      name: "Action",
      selector: row => [row.action],
      sortable: true,
  },
]

const MaterialTypeForm = () => {
  const [formState, setFormState] = useState({});
  console.log("Form state", formState)
  return (
    <div className='mt-3'>
      <div>
        <CustomBreadcrumb data={[
          {
            id: '1',
            active: false,
            link: "/dashboard",
            name: 'Dashboard'
          },
          {
            id: '2',
            active: true,
            link: "/master-forms/material",
            name: 'Material Type'
          },
        ]}
        />
      </div>
      <div className={`d-flex justify-content-between align-items-center mb-3`}>
        <h3>Material List</h3>
        <Link
          to={`${process.env.PUBLIC_URL}/master-forms/material/add/`}>
          <Button variant="info">Add New Material</Button>
        </Link>
      </div>
      
      <div className='bg-white p-2 mt-2'>
        <DataTables columns={columns} tableData={tableData} />
      </div>
    </div>
  )
}

export default MaterialTypeForm;
