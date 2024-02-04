import React from "react";

interface InputPasswordProps {
  required: boolean;
}

const InputPassword: React.FC<InputPasswordProps> = ({ required }) => {
  return (
    <div>
      <label
        htmlFor='password'
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        パスワード
      </label>
      <input
        type='password'
        name='password'
        id='password'
        placeholder='•••••'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
      ></input>
    </div>
  );
};

export default InputPassword;
