import { Link } from "react-router-dom";
function Image({ image, title, id }) {
  return (
    <div className="flex flex-col items-center justify-center mx-4 my-8 hover:bg-lime-200">
      <Link to = {`/image/${id}`}>
      <div className="w-64 h-40 flex items-center justify-center">
        <img className="h-full max-w-full" src={image} alt="pic" />
      </div>
      <div className="mb-2 text-center">{title}</div>
      </Link>
    </div>
  );
}

export default Image;
