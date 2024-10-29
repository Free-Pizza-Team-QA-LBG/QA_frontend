import { useForm } from 'react-hook-form';

export default function AddEmployeeForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5 rounded-lg shadow-lg m-0 text-black">
      <div className="mb-0">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input 
          id="name"
          {...register('name', { required: true })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
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
        />
        {errors.email && <p className="text-red-500 mt-1">This field is required</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="position" className="block text-gray-700">Position</label>
        <input 
          id="position"
          {...register('position', { required: true })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
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
