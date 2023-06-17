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
        id: "city-name",
        sno: 1,
        employeeName: "Testing employee",
        department: "department",
        designation: "designation",
        email: "testing@gmai.com",
        phoneNumber: "9876754785",
        userName: "testing",
        action: <div className="action-icons"><i className="typcn typcn-delete"></i></div>
    }
]

const columns = [
    {
        name: "Employee Name",
        selector: row => [row.employeeName],
        sortable: true,
    },
    {
        name: "Department Name",
        selector: row => [row.department],
        sortable: true,
    },
    {
        name: "Designation Name",
        selector: row => [row.designation],
        sortable: true,
    },
    {
        name: "Email",
        selector: row => [row.email],
        sortable: true,
    },
    {
        name: "Phone Number",
        selector: row => [row.phoneNumber],
        sortable: true,
    },
    {
        name: "User Name",
        selector: row => [row.userName],
        sortable: true,
    },
    {
        name: "Action",
        selector: row => [row.action],
        sortable: true,
    },
    // {
    //     name: "Password",
    //     selector: row => [row.password],
    //     sortable: true,
    // },
    // {
    //     name: "Retry Password",
    //     selector: row => [row.retryPassword],
    //     sortable: true,
    // },
]

const UserForm = () => {
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
                    active: true,
                    link: "/master-forms/user",
                    name: 'User'
                },
            ]}
            />
            <div className={`d-flex justify-content-between align-items-center mb-3`}>
                <h3>User List</h3>
                <Link
                to={`${process.env.PUBLIC_URL}/master-forms/user/add`}>
                <Button variant="info">Add New User</Button>
                </Link>
            </div>
            
            <div className='bg-white p-2 mt-2'>
                <DataTables columns={columns} tableData={tableData} />
            </div>
        </div>
    )
}

export default UserForm;
