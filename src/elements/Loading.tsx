import { useIsFetching, useIsMutating } from "react-query";
import { FadeLoader } from "react-spinners";

interface PropsType {
  display: string;
}
const Loading = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const display = isFetching || isMutating ? "inherit" : "none";

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: `${display}`,
      }}
    >
      <FadeLoader
        color="#4e60ff"
        height={15}
        width={5}
        radius={2}
        margin={2}
      ></FadeLoader>
    </div>
  );
};

export default Loading;
