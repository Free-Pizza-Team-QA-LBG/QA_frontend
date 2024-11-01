import { useForm } from 'react-hook-form';

export default function DeleteEmployeeForm({id}) {

    const handleClick = () => {
        console.log(id)
          }

    return (
        <div>
            <div className='pb-5'>Do you want to permantly delete this emplyee?</div>
            <div>
                <button className="bg-red-400 text-white py-2 px-4 text-sm rounded hover:bg-red-300" onClick={handleClick}>Delete</button>
            </div>
        </div>
      );
}

