import Panel from "@/components/Panel";
import Link from "next/link";

export default function Home() {
  return (
    <Panel title="Homepage">
      <p className="text-lg">This is an example homepage. <Link href="/second-page" className="font-medium text-blue-600 hover:underline">Click here</Link> to go to the second page.</p>
    </Panel>
  );
}
