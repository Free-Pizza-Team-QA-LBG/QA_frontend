import { useForm } from 'react-hook-form';

export default function AddEmployeeForm({data}) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log({id: data.id, ...data});
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5 rounded-lg shadow-lg m-0 text-black">
      <div className="mb-0">
        <label htmlFor="First name" className="block text-gray-700">Name</label>
        <input 
          id="first_name"
          {...register('first_name', { required: true })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={data.firstName}
        />
        {errors.name && <p className="text-red-500 mt-1">This field is required</p>}
      </div>

      <div className="mb-0">
        <label htmlFor="Last name" className="block text-gray-700">Name</label>
        <input 
          id="last_name"
          {...register('last_name', { required: true })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={data.lastName}
        />
        {errors.name && <p className="text-red-500 mt-1">This field is required</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input 
          id="email"
          type="email"
          {...register('email', { required: true })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={data.email}
        />
        {errors.email && <p className="text-red-500 mt-1">This field is required</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="department" className="block text-gray-700">Position</label>
        <input 
          id="department"
          {...register('department', { required: true })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={data.department}
        />
        {errors.position && <p className="text-red-500 mt-1">This field is required</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="salary" className="block text-gray-700">Position</label>
        <input 
          id="salary"
          {...register('salary', { required: true })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={data.salary}
        />
        {errors.position && <p className="text-red-500 mt-1">This field is required</p>}
      </div>

      <div className="flex justify-end">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </form>
  );
}
