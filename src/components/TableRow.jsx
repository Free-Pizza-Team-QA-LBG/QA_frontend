import { useState } from 'react';
import Modal from "@/components/Modal"

export default function TableRow({id, firstName, lastName, email, department, salary, toggleModelUpdate, toggleModelDelete}) {

    const createModelUpdate = () => {
        toggleModelUpdate({id: id, firstName: firstName, lastName: lastName, email: email, department: department, salary: salary})
    }

    const createModelDelete = () => {
        toggleModelDelete(id)
    }
    
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {firstName || "-"}
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {lastName || "-"}
            </td>
            <td className="px-6 py-4">
                {email || "-"}
            </td>
            <td className="px-6 py-4">
                {department || "-"}
            </td>
            <td className="px-6 py-4">
                {salary || "-"}
            </td>
            <td className="px-6 py-4">
                <a href="#" className="bg-yellow-400 text-white py-2 px-4 text-sm rounded hover:bg-yellow-300" onClick={createModelUpdate}>Edit</a>
            </td>
            <td className="flex items-center px-6 py-4">
                <a href="#" className="bg-red-400 text-white py-2 px-4 text-sm rounded hover:bg-red-300" onClick={createModelDelete}>Remove</a>
            </td>
        </tr>
    )
}