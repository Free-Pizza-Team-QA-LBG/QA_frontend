import Panel from "@/components/Panel";
import Link from "next/link";

export default function SecondPage() {
  return (
    <Panel title="Second Page">
      <p className="text-lg">This is an example second page. <Link href="/" className="font-medium text-blue-600 hover:underline">Click here</Link> to go to the homepage.</p>
    </Panel>
  );
}
