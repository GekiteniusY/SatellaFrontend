import React from "react";

interface InputEmailProps {
  required: boolean;
}

const InputEmail: React.FC<InputEmailProps> = ({ required }) => {
  return (
    <div>
      <label
        htmlFor='email'
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        メールアドレス
      </label>
      <input
        type='email'
        name='email'
        id='email'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        placeholder='name@company.com'
        required={required}
      ></input>
    </div>
  );
};

export default InputEmail;
