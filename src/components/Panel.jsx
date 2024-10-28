import PanelTitle from "./PanelTitle";

export default function Panel({ title, children }) {
  return (
    <div className="bg-white rounded-xl p-10 m-20">
      <PanelTitle title={title} />
      {children}
    </div>
  )
}
