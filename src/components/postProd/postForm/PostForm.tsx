import { useState } from "react";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";

const category = ["욕실", "주방", "음료용품", "생활", "식품", "화장품", "문구"];

const PostForm = () => {
  const [selected, setSelected] = useState(category[0]);
  return (
    <div>
      <MediumDropdown
        itemList={category}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default PostForm;
