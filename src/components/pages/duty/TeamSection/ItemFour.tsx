export const ItemFour = () => {
  return (
    <div className="col-span-12 lg:col-span-6">
      <div className="flex gap-3">
        <div className="flex-1 flex flex-col gap-1 mt-8">
          <div>
            <h6 className="text-lg font-bold tracking-[23px]">
              SAEI<span className="!tracking-normal">D</span>
            </h6>
            <h6 className="text-lg font-bold tracking-[14px]">
              DANAY<span className="!tracking-normal">I</span>
            </h6>
          </div>
          <p className="text-primary/30 text-sm text-justify">
            sit amet, consecte tetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut adipiscing elit, sed diam sed diam
          </p>
        </div>
        <div className="flex-1 h-60 bg-primary/30 rounded-full"></div>
      </div>
    </div>
  );
};
