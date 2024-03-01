import { logout } from "../auth/actions";

export default function Home() {
  return (
    <div>
      <form>
        <button formAction={logout}>Logout</button>
      </form>
      <div className='p-5 '>
        <p className='font-mono text-5xl'>Welcome Sattela</p>
        <p>Sattela provide your sattelite office.</p>
      </div>
      {/* 直近の予約 */}
      <div className='pt-10 bg-blue-400'>
        {/* Y軸パディング5　X軸パディング10　右マージン20 */}
        <h1 className='flex py-5 px-10 mr-20 font-bold text-4xl text-gray-800 bg-yellow-300'>
          直近の予約
        </h1>
        {/* X軸下にマージン10：Shadowのため　 */}
        <div className='flex overflow-x-scroll pb-10 hidden-scrollbar bg-orange-300'>
          {/*  */}
          <div className='flex flex-nowrap ml-10 space-x-3 bg-orange-500'>
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className='inline-block w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-blue-200 hover:shadow-xl transition-shadow duration-300 ease-in-out'
              >
                <p>予約内容</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bookmark */}
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
      <br />
    </div>
  );
}
