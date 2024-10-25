import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white rounded-xl p-10 m-20">
      <h1 className="text-4xl font-extrabold mb-4 leading-none tracking-tight">Homepage</h1>
      <p className="text-lg">This is an example homepage. <Link href="/second-page" className="font-medium text-blue-600 hover:underline">Click here</Link> to go to the second page.</p>
    </div>
  );
}
