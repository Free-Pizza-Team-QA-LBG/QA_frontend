'use client'
import { useState } from 'react';

import Table from "../../components/Table"
import Modal from "@/components/Modal"



export default function TablePage() {
    const [showModal, setShowModal] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState({id: 0, show: false});
    const [showModalDelete, setShowModalDelete] = useState({id: 0, show: false});


    const toggleModal = () => {
      setShowModal(!showModal);
    };

    const toggleModalUpdate = (id) => {
        setShowModalUpdate({id: id, show: !showModalUpdate.show});
      };

    const toggleModalDelete = (id) => {
        setShowModalDelete({id: id, show: !showModalDelete.show});
      };


    return (
        <div className="w-full pb-10">
            <div className="pt-10 pb-10 ps-5 pe-5">
                <a href="#" className="bg-yellow-400 text-black py-4 px-8 text-lg font-semibold uppercase rounded-full transition-colors duration-300 hover:bg-yellow-300" onClick={toggleModal}>
                    Add Employee
                </a>
            </div>
            <Modal show={showModal} onClose={toggleModal} title="Add Employee">
                This is where the form will go
            </Modal>
            <Modal show={showModalUpdate.show} onClose={toggleModalUpdate} title="Update Emplyee">
            This is where the update form will go for employee {showModalUpdate.id}
            </Modal>
            <Modal show={showModalDelete.show} onClose={toggleModalDelete} title="Delete Emplyee">
                Are you sure you want to delete employee {showModalDelete.id}?
            </Modal>
            {/*
            <div className="text-2xl text-gray-900 pt-0 pb-3 ps-5 pe-5">
                <h1 className="text-gray-900">All Employees</h1>
            </div>
            */}
            <div className="ps-5 pe-5">
                <Table onModalUpdate={toggleModalUpdate} onModalDelete={toggleModalDelete}></Table>
            </div>
        </div>
    )
}