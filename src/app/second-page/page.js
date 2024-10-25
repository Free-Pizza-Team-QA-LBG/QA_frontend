import Link from "next/link";

export default function SecondPage() {
    return (
      <div className="bg-white rounded-xl p-10 m-20">
        <h1 className="text-4xl font-extrabold mb-4 leading-none tracking-tight">Second Page</h1>
        <p className="text-lg">This is an example second page. <Link href="/" className="font-medium text-blue-600 hover:underline">Click here</Link> to go to the homepage.</p>
      </div>
    );
  }
  