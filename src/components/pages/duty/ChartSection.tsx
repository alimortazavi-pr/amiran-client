import Image from "next/image";

//Assets
import chartImg from "@/assets/svgs/duty/chart.svg";

export const ChartSection = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-full h-52 md:h-60 lg:h-64 xl:h-72 2xl:h-80 mb-16">
        <Image src={chartImg} alt="amiran-logo" fill />
      </div>
    </div>
  );
};
