import CustomBreadcrumb from 'customComponents/CustomBreadcrumb'
import DynamicForm from 'customComponents/DynamicForm'
import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import Select from 'react-select'
import { DataTables, ExportCSV } from 'utilityComponents/DataTable'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



const tableData = [
    {
        id: "city-name",
        sno: 1,
        countryName: "Nigeria",
        stateName: "Cross River",
        cityName: "Calabar",
        phoneExtensionCode: "+91",
        status: "active",
        action: <div className="action-icons"><i className="typcn typcn-delete"></i></div>
    }
]

const columns = [
    {
        name: "Country Name",
        selector: row => [row.countryName],
        sortable: true,
    },
    {
        name: "State Name",
        selector: row => [row.stateName],
        sortable: true,
    },
    {
        name: "City Name",
        selector: row => [row.cityName],
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

const CityForm = () => {
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
                    link: "/master-forms/city",
                    name: 'City'
                },
            ]}
            />
            <div className={`d-flex justify-content-between align-items-center mb-3`}>
                <h3>City List</h3>
                <Link
                to={`${process.env.PUBLIC_URL}/master-forms/city/add/`}>
                <Button variant="info">Add New City</Button>
                </Link>
            </div>
            
            <div className='bg-white p-2 mt-2'>
                <DataTables columns={columns} tableData={tableData} />
            </div>
        </div>
    )
}

export default CityForm;
