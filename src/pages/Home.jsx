import { useGetPostsQuery } from "../entities/postsApi";
import { useState, useEffect } from "react";
import ClipLoaderComponent from "../shared/ClipLoaderComponent";
import Post from "../widgets/Post";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data = [], isFetching, isLoading } = useGetPostsQuery(page);

  const buffer = 100;

  useEffect(() => {
    const onScrollOrResize = () => {
      const scrolledNearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - buffer;
      if (scrolledNearBottom && !isFetching) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    document.addEventListener("scroll", onScrollOrResize);
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      document.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [isFetching]);

  return (
    <div className="flex flex-col max-w-[640px] m-auto items-center">
      <div className="w-full flex flex-col gap-y-5">
        {isLoading ? (
          <ClipLoaderComponent/>
        ) : (
          data.map((post) => (
            <Post
              id={post.id}
              title={post.title}
              body={post.body}
              key={post.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
