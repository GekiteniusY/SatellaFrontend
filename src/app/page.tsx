import Head from "next/head";

export default function Home() {
  return (
    <>
      <div
        className='bg-cover bg-center h-screen'
        style={{ backgroundImage: "url('/izakaya1.jpg')" }}
      >
        <h1 className='text-3xl text-red-400 font-bold underline'>
          Hi here is satella root directory
        </h1>
      </div>
    </>
  );
}
