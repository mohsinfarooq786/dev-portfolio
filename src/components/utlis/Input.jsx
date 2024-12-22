export default function Input() {
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        className="bg-[#1A1A1A] py-[0.75rem] px-[1rem] w-full rounded-[1rem] placeholder:text-[0.865rem] outline-none	manrope-light" />
      <input
        type="text"
        placeholder="Email"
        className="bg-[#1A1A1A] py-[0.75rem] px-[1rem] w-full rounded-[1rem] placeholder:text-[0.865rem] outline-none	manrope-light mt-[1.5rem]" />
      <input
        type="text"
        placeholder="Subject"
        className="bg-[#1A1A1A] py-[0.75rem] px-[1rem] w-full rounded-[1rem] placeholder:text-[0.865rem] outline-none manrope-light mt-[1.5rem]" />
      <textarea
        type="text"
        placeholder="Message"
        className="bg-[#1A1A1A] py-[0.75rem] px-[1rem] w-full rounded-[1rem] placeholder:text-[0.865rem] outline-none	manrope-light mt-[1.5rem]" />
    </div>
  )
}
