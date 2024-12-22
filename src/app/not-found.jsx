import Link from 'next/link'

export default async function NotFound() {
  return (
    <div className='vh-100 flex flex-col items-center justify-center'>
      <h2 className='bebas-neue text-[5rem]'>Not Found</h2>
      <button className='manrope-bold text-white py-3 px-4 rounded-[0.856rem] bg-black'>
        <Link href="/">Return to Home</Link>
      </button>
    </div>
  )
}