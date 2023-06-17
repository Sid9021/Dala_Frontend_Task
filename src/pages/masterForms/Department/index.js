import CustomBreadcrumb from 'customComponents/CustomBreadcrumb'
import DynamicForm from 'customComponents/DynamicForm'
import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import Select from 'react-select'
import { DataTables } from 'utilityComponents/DataTable'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const tableData = [
    {
        id: "department-name",
        sno: 1,
        departmentName: "Department",
        status: "active",
        action: <div className="action-icons"><i className="typcn typcn-delete"></i></div>
    }
]

const columns = [
    {
        name: "Department Name",
        selector: row => [row.departmentName],
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

const DepartmentForm = () => {
    const [formState, setFormState] = useState({});
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
                    active: true,
                    link: "/master-forms/department",
                    name: 'Department'
                },
            ]}
            />
            <div className={`d-flex justify-content-between align-items-center mb-3`}>
                <h3>Department List</h3>
                <Link
                to={`${process.env.PUBLIC_URL}/master-forms/department/add`}>
                <Button variant="info">Add New Department</Button>
                </Link>
            </div>
            
            <div className='bg-white p-2 mt-2'>
                <DataTables columns={columns} tableData={tableData} />
            </div>
        </div>
    )
}

export default DepartmentForm;
