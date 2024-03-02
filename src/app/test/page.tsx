"use client";
import { useEffect, useState } from "react";
import { biz_udGothic700 } from "../../../utils/fonts/fonts";

export default function Test() {
  console.log("test");

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const element = document.getElementById("yourElementId");
    if (element) {
      element.scrollLeft = scrollPosition;
    }

    console.log(element?.scrollLeft);
  }, [scrollPosition]);

  const handleButtonClick = () => {
    // フローティングアクションボタンが押下されたときの処理
    // スクロール位置を変更する場合、setScrollPositionを呼び出す
    setScrollPosition(scrollPosition + 100); // 例: 100ピクセルにスクロール
  };

  return (
    <>
      <div>Here is text-decoration-style: page</div>
      <div className={`${biz_udGothic700.className}`}>
        User Profile Icon biz_udGothic700
      </div>
      <div className='pt-10'>
        <div className='flex flex-col bg-white m-auto p-auto'>
          <h1 className='flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800'>
            Bookmark
          </h1>
          <div className='flex overflow-x-scroll pb-10 hide-scroll-bar'>
            <div className='flex flex-nowrap lg:ml-40 md:ml-20 ml-10 space-x-3'>
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className='inline-block w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out'
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* 他のコンポーネント */}
        <button
          onClick={handleButtonClick}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          フローティングアクションボタン
        </button>
        <div
          id='yourElementId'
          className='overflow-x-auto whitespace-nowrap border border-gray-700 p-4'
        >
          {/* 横方向にスクロールしたい要素の内容 */}
          {/* 例: 水平にスクロールする要素 */}
          <div className='inline-block bg-gray-200 p-4'>
            横方向にスクロールする内容がここに入ります。
            <div className=' space-x-3'>
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className='inline-block w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out'
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
