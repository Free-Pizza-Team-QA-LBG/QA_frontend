import { useState } from 'react';
import Modal from "@/components/Modal"

export default function ManagerTableRow({employeeID, managerID}) {
    
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {employeeID || "-"}
            </th>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {managerID || "-"}
            </td>
        </tr>
    )
}