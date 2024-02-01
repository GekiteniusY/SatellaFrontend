import React, { Dispatch, SetStateAction } from "react";
import ModalCardLayout from "./layout/modal-card-layout";

// TODO: propsの受け取り方、記法について調べる
// TODO: Dispatchについて調べる
const ModalSignIn = (props: {
  closeModalSignIn: Dispatch<SetStateAction<boolean>>;
}) => {
  // TODO: 記法について調べる
  const { closeModalSignIn: closeModalSignIn } = props;

  return (
    <ModalCardLayout>
      <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t'>
        <h3 className='text-xl font-semibold text-gray-900'>Sign In</h3>
        <button
          type='button'
          className='end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
          data-modal-hide='authentication-modal'
          onClick={() => closeModalSignIn(false)}
        >
          <svg
            className='w-3 h-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
            />
          </svg>
          <span className='sr-only'>モーダルを閉じる</span>
        </button>
      </div>
      {/* 入力フォーム部分 */}
      <div className='p-4 md:p-5'>
        {/* TODO: Sign Inフォームの作成 */}
        <p>Todo: Create Sing In form</p>
      </div>
    </ModalCardLayout>
  );
};

export default ModalSignIn;
