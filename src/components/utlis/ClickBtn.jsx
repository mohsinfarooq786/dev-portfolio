export default function ClickBtn({ BtnText, noMargin, noPaddingY }) {
  return (
    <>
      <button
        className={`manrope-semibold  px-[1.5rem] ${noMargin ? "" : "mt-[2.5rem]"
          } ${noPaddingY ? "" : "py-[0.865rem]"} text-[1rem] uppercase rounded-full bg-[#D3E97A] border-0 text-black hover:bg-[#D3E97A] active:bg-[#D3E97A]`}
      >
        {BtnText}
      </button>
    </>
  );
}
