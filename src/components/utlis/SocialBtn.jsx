export default function SocialBtn({ IconComponent }) {
  return (
    <>
      <div className="py-3">
        <button className="w-54 h-54 p-2.5 rounded-full border-0 bg-[#222222] text-[#D3E97A] hover:bg-[#D3E97A]
      hover:text-black focus:text-black focus:bg-[#D3E97A] active:bg-[#D3E97A] transition-all duration-300 ease-in-out">
          {IconComponent}
        </button>
      </div>
    </>
  )
}
