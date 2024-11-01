'use client'
import { useEffect, useState } from 'react';

import Table from "../../components/Table"
import Modal from "@/components/Modal"
import AddEmployeeForm from "@/components/AddEmployeeForm";
import Spinner from '@/components/Spinner';
import UpdateEmployeeForm from "@/components/UpdateEmployeeForm";
import DeleteEmployeeForm from "@/components/DeleteEmployeeForm"



export default function TablePage() {
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState({data: {}, show: false});
    const [showModalDelete, setShowModalDelete] = useState({id: 0, show: false});


    const toggleModalAdd = () => {
      setShowModalAdd(!showModalAdd);
    };

    const toggleModalUpdate = (da) => {
        setShowModalUpdate({data: da, show: !showModalUpdate.show});
      };

    const toggleModalDelete = (id) => {
        setShowModalDelete({id: id, show: !showModalDelete.show});
      };


    const [emplLoading, setEmplLoading] = useState(true);
    const [emplData, setEmplData] = useState(null);
    const [emplError, setEmplError] = useState(null);

    const addEmployee = e => {
        e.preventDefault();
        
        const firstName = e.target[0].value;
        const lastName = e.target[1].value;
        const email = e.target[2].value;
        const department = e.target[3].value;
        const salary = e.target[4].value;

        fetch("http://localhost:8080/api/v1/employee", {
            method: "POST",
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                department,
                salary,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);

                setEmplData([...emplData, json.data])

                toggleModalAdd()
            })
            .catch((err) => {
                setEmplError(err.message ?? "Error");
                setEmplLoading(false);
            });
    };

    async function deleteEmployee(id) {
        console.log(`http://localhost:8080/api/v1/employee/${id}`)
        const response = await fetch(`http://localhost:8080/api/v1/employee/${id}`, {
            method: 'DELETE',
                });
                setEmplData(emplData.filter(employee => employee.id !== id))
                toggleModalDelete(-1)
            }
    
    useEffect(() => {
        fetch("http://localhost:8080/api/v1/employee/all")
            .then((res) => res.json())
            .then((json) => {
                setEmplData(json.data);
                setEmplLoading(false);
            })
            .catch((err) => {
                setEmplError(err.message ?? "Error");
                setEmplLoading(false);
            });
    }, []);

    return (
        <div className="w-full pb-10">
            <div className="pt-10 pb-10 ps-5 pe-5">
                <a href="#" className="bg-yellow-400 text-black py-4 px-8 text-lg font-semibold uppercase rounded-full transition-colors duration-300 hover:bg-yellow-300" onClick={toggleModalAdd}>
                    Add Employee
                </a>
            </div>
            <Modal show={showModalAdd} onClose={toggleModalAdd} title="Add Employee">
                <AddEmployeeForm onAddSubmit={addEmployee} />
            </Modal>
            <Modal show={showModalUpdate.show} onClose={toggleModalUpdate} title="Update Emplyee">
                <UpdateEmployeeForm data={showModalUpdate.data}/>
            </Modal>
            <Modal show={showModalDelete.show} onClose={toggleModalDelete} title="Delete Emplyee">
                <DeleteEmployeeForm id={showModalDelete.id} onClickDelete={deleteEmployee} />
            </Modal>
            {/*
            <div className="text-2xl text-gray-900 pt-0 pb-3 ps-5 pe-5">
                <h1 className="text-gray-900">All Employees</h1>
            </div>
            */}
            <div className="ps-5 pe-5">
                {
                    emplLoading ? <Spinner />
                        : emplError ? <p>{emplError}</p>
                        : <Table data={emplData} onModalUpdate={toggleModalUpdate} onModalDelete={toggleModalDelete}></Table>
                }
            </div>
        </div>
    )
}
