import Table from "../../components/Table"
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TablePage() {
    return (
        <div className="w-full">
            <NavBar/>
            <div className="pt-10 pb-10 ps-5 pe-5">
                <a href="#" className="bg-yellow-400 text-black py-4 px-8 text-lg font-semibold uppercase rounded-full transition-colors duration-300 hover:bg-yellow-300">
                    Add Employee
                </a>
            </div>
            <div className="ps-5 pe-5">
                <Table></Table>
            </div>
            <Footer/>
        </div>
    )
}