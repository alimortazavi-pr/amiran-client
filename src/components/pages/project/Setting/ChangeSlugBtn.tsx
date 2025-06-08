import { Button } from "@heroui/react";

//Redux
import { useAppDispatch } from "@/stores/hooks";
import { setEditSection } from "@/stores/projects/actions";

export const ChangeSlugBtn = () => {
  //Redux
  const dispatch = useAppDispatch();

  //Functions
  function selectSection() {
    dispatch(
      setEditSection({
        label: "Slug",
        value: "slug",
      })
    );
  }

  return (
    <Button variant="flat" color="primary" onPress={selectSection}>
      Change Slug
    </Button>
  );
};
