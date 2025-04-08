export const ItemTwo = () => {
  return (
    <div className="col-span-12 md:col-span-6">
      <div className="flex gap-3 md:gap-6">
        <div className="flex-1 flex flex-col gap-1 mt-8">
          <div className="md:flex items-center justify-between">
            <h6 className="text-lg font-bold tracking-[15px] md:tracking-normal lg:tracking-[15px]">
              HOSEI<span className="!tracking-normal">N</span>
            </h6>
            <h6 className="hidden md:block">-</h6>
            <h6 className="text-lg font-bold tracking-[14px] md:tracking-normal lg:tracking-[15px]">
              NEQAB<span className="!tracking-normal">I</span>
            </h6>
          </div>
          <p className="text-primary/30 text-sm text-justify md:text-lg font-light">
            sit amet, consecte tetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut adipiscing elit, sed diam sed diam
          </p>
        </div>
        <div className="flex-1 md:max-w-44 h-60 md:h-72 bg-primary/30 rounded-full"></div>
      </div>
    </div>
  );
};
