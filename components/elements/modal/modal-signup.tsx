import React, { Dispatch, SetStateAction, useState } from "react";
import ModalCardLayout from "./layout/modal-card-layout";
import InputEmail from "../text-field/input_email";
import InputPassword from "../text-field/input_password";
import PaginationDot from "../pagination-dot/pagination-dot";
import NormalFillButton from "../button/normal-fill-button";

const ModalSignUp = (props: {
  closeModalSignUp: Dispatch<SetStateAction<boolean>>;
}) => {
  const { closeModalSignUp: closeModalSignUp } = props;
  const inputPage = "InputPage";
  const sendMailPage = "SendMailPage";
  const [page, setPage] = useState(inputPage);

  const SignUp = () => {
    // TODO: Sign Up処理を実装
    setPage("SendMailPage");
  };

  // TODO: ページ遷移アニメーションの実装
  let InputFormComponent;
  switch (page) {
    case inputPage:
      InputFormComponent = InputPage(SignUp);
      break;
    case sendMailPage:
      InputFormComponent = SendMailPage();
      break;
  }

  return (
    <ModalCardLayout>
      <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t'>
        <h3 className='text-xl font-semibold text-gray-900'>Sign Up</h3>
        <button
          type='button'
          className='end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
          data-modal-hide='authentication-modal'
          onClick={() => closeModalSignUp(false)}
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
      {InputFormComponent}
    </ModalCardLayout>
  );
};

const InputPage = (
  signUpFunction: React.MouseEventHandler<HTMLButtonElement>
) => {
  return (
    <div className='p-4 md:p-5'>
      {/* TODO: Sign Upフォームの作成 */}
      <p>Todo: Create Sing Up form</p>
      <div className='mt-4'>
        <InputEmail required={true} />
      </div>
      <div className='mt-4'>
        <InputPassword required={true} />
      </div>
      <div className='flex justify-center mt-6 py-2 px-1'>
        <button
          onClick={signUpFunction}
          className='w-full'
        >
          <NormalFillButton>Sign Up</NormalFillButton>
        </button>
      </div>
      <div className='flex items-center justify-center mt-5'>
        <PaginationDot isActiveColor={true} />
        <PaginationDot isActiveColor={false} />
        <PaginationDot isActiveColor={false} />
        <PaginationDot isActiveColor={false} />
      </div>
    </div>
  );
};

const SendMailPage = () => {
  return <>確認用のメールが送信されました</>;
};

export default ModalSignUp;
