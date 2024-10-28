import Table from "../../components/Table"
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TablePage() {
    return (
        <div className="w-full">
            <div className="pt-10 pb-10 ps-5 pe-5">
                <a href="#" className="bg-yellow-400 text-black py-4 px-8 text-lg font-semibold uppercase rounded-full transition-colors duration-300 hover:bg-yellow-300">
                    Add Employee
                </a>
            </div>
            {/*
            <div className="text-2xl text-gray-900 pt-0 pb-3 ps-5 pe-5">
                <h1 className="text-gray-900">All Employees</h1>
            </div>
            */}
            <div className="ps-5 pe-5">
                <Table></Table>
            </div>
        </div>
    )
}