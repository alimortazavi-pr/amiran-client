import { Button } from "@heroui/react";

//Redux
import { useAppDispatch } from "@/stores/hooks";
import { setEditSection } from "@/stores/projects/actions";

export const ChangeArchitectWebsiteBtn = () => {
  //Redux
  const dispatch = useAppDispatch();

  //Functions
  function selectSection() {
    dispatch(
      setEditSection({
        label: "Architect Website",
        value: "architectWebsite",
      })
    );
  }

  return (
    <Button variant="flat" color="primary" onPress={selectSection} className="flex-1">
      Change Architect Website
    </Button>
  );
};
