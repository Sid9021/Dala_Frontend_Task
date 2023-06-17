import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataTables } from 'utilityComponents/DataTable'



const CpgcRequest = () => {
    const [requestData, setRequestData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://54.218.124.226:1900/users/').then(({ data }) => {
            console.log("datap == ", data);
            const tableData = data.map((item, index) => ({
                id: item.id,
                sno: index + 1,
                userName: item.bd_fullname,
                companyName: item.bd_companyName,
                stateName: item.bd_state,
                cityName: item.bd_city,
                status: "active",
                action: <button className="btn ripple btn-main-primary btn-block" style={{ width: "70px" }} onClick={() => navigate(`${process.env.PUBLIC_URL}/cpgc/requests/details`)}> View</button>
            }))
            setRequestData(tableData);
        }).catch((err) => {
            console.log("Req err", err);
        })
    }, []);

    console.log("Data ---- ", requestData);

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

    if (requestData.length)
        return (
            <div className='bg-white p-2 mt-2'>
                <DataTables columns={columns} tableData={requestData} />
            </div>
        )
    return 'No data'
}

export default CpgcRequest;