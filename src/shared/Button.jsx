import { Link } from "react-router-dom";

const Button = ({ children, route }) => {
  return (
    <Link
      to={route}
      className="p-2 px-5 bg-black hover:opacity-80 rounded-xl text-white w-fit font-bold gap-x-2 flex items-center"
    >
      {children}
    </Link>
  );
};

export default Button;
