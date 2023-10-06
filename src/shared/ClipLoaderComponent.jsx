import { ClipLoader } from "react-spinners";

const ClipLoaderComponent = () => {
  return (
    <ClipLoader
      color={"#000"}
      size={80}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default ClipLoaderComponent;
