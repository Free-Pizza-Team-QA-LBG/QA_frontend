
export default function Modal({ show, onClose, title, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg " onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between">        
          <div className="modal-header mb-4 bg-gray-700 rounded-lg p-2">
            <h4 className="text-xl font-bold text-white text-center">{title}</h4>
          </div>
          <button onClick={onClose} className="bg-red-400 text-black px-2 py-2 mb-4 rounded hover:bg-red-300 text-3xl">
            ✖
          </button>
        </div>
        <div className="modal-body text-white">
          {children}
        </div>
      </div>
    </div>
  );
}