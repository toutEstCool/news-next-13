import { SearchBox } from "./search-box/search-box";

export const InfoPanel = () => {
  return (
    <section className="bg-white h-[45px] px-[15px] mb-[15px] z-10 rounded-[8px] flex items-center">
      <div className="flex items-center gap-[12px] text-[14px] tracking-[1px] text-black">
        <span className="before:content-['$'] flex gap-[5px] items-center">
          75,40
        </span>
        <span className="before:content-['\20AC'] flex gap-[5px] items-center">
          80,20
        </span>
      </div>
      <SearchBox />
      {/* Sort */}
    </section>
  );
};
