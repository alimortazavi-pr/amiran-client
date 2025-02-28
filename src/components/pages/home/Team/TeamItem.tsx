import { FC } from "react";

interface IProps {
  index: number;
}
export const TeamItem: FC<IProps> = ({ index }) => {
  return (
    <div className="col-span-4 aspect-square">
      <div
        className={`w-full h-full bg-primary/20 ${
          index < 3
            ? "rounded-t-full"
            : index > 8
            ? "rounded-b-full"
            : "rounded-none"
        }`}
      ></div>
      {/* <ReactCurvedText
        width={0}
        height={0}
        cx={150}
        cy={150}
        rx={100}
        ry={100}
        startOffset={0}
        reversed={false}
        text="react-curved-text"
        textProps={{
          style: {
            fontSize: 24,
          
          },
        }}
        // textPathProps={null}
        // tspanProps={{ dy: 10 }}
        // ellipseProps={null}
        // svgProps={null}
        svgProps={{
          className: "bg-red-400 w-1/2 h-80",
        }}
      /> */}
    </div>
  );
};
