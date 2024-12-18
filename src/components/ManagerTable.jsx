import ManagerTableRow from "./ManagerTableRow";

function ManagerTable({ data }) {

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Employee ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Manager ID
                        </th>
                    </tr>
                </thead>
                <tbody>
                        {
                            data.map((obj, key) => <ManagerTableRow {...obj} key={key}/>)
                        }
                </tbody>
            </table>
        </div>

    );
    }
    
export default ManagerTable;
