import Table from "../../components/Table"

export default function TablePage() {
    return (
        <div className="w-full">
            <div className="pt-10 pb-10 ps-5 pe-5">
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Add Employee
                </a>
            </div>
            <div className="ps-5 pe-5">
                <Table></Table>
            </div>
        </div>
    )
}