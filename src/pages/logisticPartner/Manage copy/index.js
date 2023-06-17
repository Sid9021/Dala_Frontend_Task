import React, { useState } from 'react'
import { DataTables } from 'utilityComponents/DataTable'
import { useNavigate } from 'react-router-dom';


const LogisticManage = () => {
    const navigate = useNavigate();
    const tableData = [
        {
            id: "city-name",
            sno: 1,
            userName: "Mohan",
            companyName: "Testing company name",
            stateName: "Cross River",
            cityName: "Calabar",
            status: "active",
            action: <button className="btn ripple btn-main-primary btn-block" style={{width:"70px"}} onClick={() =>navigate(`${process.env.PUBLIC_URL}/logistics/details`)}> View</button>
        }
    ]
    
    const columns = [
        {
            name: "User Name",
            selector: row => [row.userName],
            sortable: true,
        },
        {
            name: "Company Name",
            selector: row => [row.companyName],
            sortable: true,
        },
        {
            name: "City Name",
            selector: row => [row.cityName],
            sortable: true,
        },
        {
            name: "State Name",
            selector: row => [row.stateName],
            sortable: true,
        },   
        {
            name: "Action",
            selector: row => [row.action],
            sortable: true,
        },
    ]
    return (
        <div className='bg-white p-2 mt-2'>
        <DataTables columns={columns} tableData={tableData} />
    </div>
    )
}

export default LogisticManage;