export default function AddEmployeeForm({ onAddSubmit }) {
  return (
    <form onSubmit={onAddSubmit} className="bg-white p-5 rounded-lg shadow-lg m-0 text-black">
      <div className="mb-0">
        <label htmlFor="name" className="block text-gray-700">First Name</label>
        <input 
          id="firstName"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div className="mb-0">
        <label htmlFor="name" className="block text-gray-700">Last Name</label>
        <input 
          id="lastName"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input 
          id="email"
          type="email"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="department" className="block text-gray-700">Department</label>
        <input 
          id="department"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="salary" className="block text-gray-700">Salary</label>
        <input 
          id="salary"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div className="flex justify-end">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </form>
  );
}
