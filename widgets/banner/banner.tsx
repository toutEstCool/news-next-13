export const Banner: React.FC = (): JSX.Element => {
  return (
    <div className="flex overflow-hidden justify-center items-center h-[250px] border-b-[1px] border-slate-800 bg-[#ee375e]">
      <a
        href="https://instagram.com/meduza"
        className="flex justify-center items-center h-[249px]"
        target="_blank"
      >
        <picture>
          <img
            className="object-cover object-center overflow-clip m-w-[970px] h-[250px]"
            src="https://meduza.io/image/attachments/images/008/269/590/original/4y6ytkeUcdYpyVZE_QAxZg.png"
            alt="Meduza работает в России"
            title="Meduza работает в России"
          />
        </picture>
      </a>
    </div>
  );
};
