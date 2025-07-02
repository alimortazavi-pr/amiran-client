import { useState } from "react";
import { Switch } from "@heroui/react";

export const ImagesCountSwitch = () => {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <div className="flex justify-center">
      <Switch isSelected={isSelected} onValueChange={setIsSelected}>
        {isSelected ? "6 Images" : "4 Images"}
      </Switch>
    </div>
  );
};
