

function Table() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            First name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Department
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Salary
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Update
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17
                        </th>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            Yes
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="bg-yellow-400 text-white py-2 px-4 text-sm rounded hover:bg-yellow-300">Edit</a>
                        </td>
                        <td className="flex items-center px-6 py-4">
                            <a href="#" className="bg-red-400 text-white py-2 px-4 text-sm rounded hover:bg-red-300">Remove</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            White
                        </td>
                        <td className="px-6 py-4">
                            Laptop PC
                        </td>
                        <td className="px-6 py-4">
                            No
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="bg-yellow-400 text-white py-2 px-4 text-sm rounded hover:bg-yellow-300">Edit</a>
                        </td>
                        <td className="flex items-center px-6 py-4">
                            <a href="#" className="bg-red-400 text-white py-2 px-4 text-sm rounded hover:bg-red-300">Remove</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            No
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="bg-yellow-400 text-white py-2 px-4 text-sm rounded hover:bg-yellow-300">Edit</a>
                        </td>
                        <td className="flex items-center px-6 py-4">
                            <a href="#" className="bg-red-400 text-white py-2 px-4 text-sm rounded hover:bg-red-300">Remove</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple Watch
                        </th>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Watches
                        </td>
                        <td className="px-6 py-4">
                            Yes
                        </td>
                        <td className="px-6 py-4">
                            $199
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="bg-yellow-400 text-white py-2 px-4 text-sm rounded hover:bg-yellow-300">Edit</a>
                        </td>
                        <td className="flex items-center px-6 py-4">
                            <a href="#" className="bg-red-400 text-white py-2 px-4 text-sm rounded hover:bg-red-300">Remove</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple iMac
                        </th>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            PC
                        </td>
                        <td className="px-6 py-4">
                            Yes
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="bg-yellow-400 text-white py-2 px-4 text-sm rounded hover:bg-yellow-300">Edit</a>
                        </td>
                        <td className="flex items-center px-6 py-4">
                            <a href="#" className="bg-red-400 text-white py-2 px-4 text-sm rounded hover:bg-red-300">Remove</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple AirPods
                        </th>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            White
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            No
                        </td>
                        <td className="px-6 py-4">
                            $399
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="bg-yellow-400 text-white py-2 px-4 text-sm rounded hover:bg-yellow-300">Edit</a>
                        </td>
                        <td className="flex items-center px-6 py-4">
                            <a href="#" className="bg-red-400 text-white py-2 px-4 text-sm rounded hover:bg-red-300">Remove</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            iPad Pro
                        </th>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Gold
                        </td>
                        <td className="px-6 py-4">
                            Tablet
                        </td>
                        <td className="px-6 py-4">
                            No
                        </td>
                        <td className="px-6 py-4">
                            $699
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="bg-yellow-400 text-white py-2 px-4 text-sm rounded hover:bg-yellow-300">Edit</a>
                        </td>
                        <td className="flex items-center px-6 py-4">
                            <a href="#" className="bg-red-400 text-white py-2 px-4 text-sm rounded hover:bg-red-300">Remove</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Keyboard
                        </th>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            Yes
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="bg-yellow-400 text-white py-2 px-4 text-sm rounded hover:bg-yellow-300">Edit</a>
                        </td>
                        <td className="flex items-center px-6 py-4">
                            <a href="#" className="bg-red-400 text-white py-2 px-4 text-sm rounded hover:bg-red-300">Remove</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple TV 4K
                        </th>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            TV
                        </td>
                        <td className="px-6 py-4">
                            Yes
                        </td>
                        <td className="px-6 py-4">
                            $179
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="bg-yellow-400 text-white py-2 px-4 text-sm rounded hover:bg-yellow-300">Edit</a>
                        </td>
                        <td className="flex items-center px-6 py-4">
                            <a href="#" className="bg-red-400 text-white py-2 px-4 text-sm rounded hover:bg-red-300">Remove</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            AirTag
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            Yes
                        </td>
                        <td className="px-6 py-4">
                            $29
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="bg-yellow-400 text-white py-2 px-4 text-sm rounded hover:bg-yellow-300">Edit</a>
                        </td>
                        <td className="flex items-center px-6 py-4">
                            <a href="#" className="bg-red-400 text-white py-2 px-4 text-sm rounded hover:bg-red-300">Remove</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
    }
    
export default Table;