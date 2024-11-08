'use client'
import { useEffect, useState } from 'react';

import ManagerTable from "../../components/ManagerTable"
import Modal from "@/components/Modal"
import AddEmployeeForm from "@/components/AddEmployeeForm";
import Spinner from '@/components/Spinner';
import UpdateEmployeeForm from "@/components/UpdateEmployeeForm";
import DeleteEmployeeForm from "@/components/DeleteEmployeeForm"


export default function TablePage() {

    const backendIP = process.env.NEXT_PUBLIC_BACKEND_IP;

    const [emplLoading, setEmplLoading] = useState(true);
    const [emplData, setEmplData] = useState(null);
    const [emplError, setEmplError] = useState(null);

    
    useEffect(() => {
        fetch(`http://${backendIP}/api/v1/manager/all`)
            .then((res) => res.json())
            .then((json) => {
                setEmplData(json.data);
                setEmplLoading(false);
            })
            .catch((err) => {
                setEmplError(err.message ?? "Error");
                setEmplLoading(false);
            });
    }, [backendIP]);

    return (
        <div className="w-full pb-10">
            {/*
            <div className="text-2xl text-gray-900 pt-0 pb-3 ps-5 pe-5">
                <h1 className="text-gray-900">All Employees</h1>
            </div>
            */}
            <div className="ps-5 pe-5">
                {
                    emplLoading ? <Spinner />
                        : emplError ? <p>{emplError}</p>
                        : <ManagerTable data={emplData}></ManagerTable>
                }
            </div>
        </div>
    )
}
