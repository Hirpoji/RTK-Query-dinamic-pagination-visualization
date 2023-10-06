import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../entities/postsApi";
import ClipLoaderComponent from "../shared/ClipLoaderComponent";
import Button from "../shared/Button";

const FullPost = () => {
  const { id } = useParams();

  const { data = [], isLoading } = useGetPostByIdQuery(id);

  return (
    <div className="flex flex-col max-w-[640px] m-auto gap-y-5">
      {isLoading ? (
        <ClipLoaderComponent />
      ) : (
        <>
          <Button route={"/"} className="text-start flex items-center gap-x-2">
            <BiArrowBack />
            Назад
          </Button>
          <div className="rounded-2xl w-full col-start-1 col-end-13 bg-white flex flex-col justify-start gap-y-5 p-10 ">
            <div className="flex items-start text-sm">{"№ " + id}</div>
            <div className="font-bold text-lg flex items-start text-left">
              {data.title}
            </div>
            <p className="text-left">{data.body}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FullPost;
