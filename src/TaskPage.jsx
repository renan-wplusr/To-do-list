import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-black justify-center flex box-border ">
      <div className="flex justify-center flex-col items-center space-y-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0  text-purple-600 bg-slate-200 rounded-2xl hover:bg-slate-500 p-2 "
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-pink-200 text-3xl md:text-5xl lg:text-6xl font-bold w-full">
            Suas tarefas!
          </h1>
        </div>
        <div className="flex flex-col p-[5%] rounded-md w-full border-purple-950 bg-purple-500 max-w-* space-y-3">
          <h2 className=" font-bold text-pink-100 font-serif text-2xl ">
            {title}
          </h2>
          <p className=" text-pink-100 font-sans text-2xl ">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
