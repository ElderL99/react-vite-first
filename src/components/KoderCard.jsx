import { useState } from "react";

function KoderCard({ profilePicUrl, name, hobby }) {
  const [isPresent, setPresent] = useState(false);

  function OnClickHandler() {
    setPresent(!isPresent);
  }

  return (
    <article className="grid grid-cols-[4rem_auto_2rem] grid-rows-2   items-center gap-x-4 p-4 border border-sky-500 rounded-3xl max-w-screen-sm md:max-w-screen-md hover:bg-slate-500">
      <img
        src={
          profilePicUrl ||
          "https://avatars.githubusercontent.com/u/161897550?v=4"
        }
        alt="koder"
        className="size-16 rounded-full object-cover row-span-2 hover:cursor-pointer"
      />
      <div className="col-start-2 row-start-1">
        <p className="text-3xl font-semibold">{name || "Adan Lugo"}</p>
      </div>
      <div className="col-start-2 row-span-2">
        <p className="text-red-800">{hobby || "Software"}</p>
      </div>
      <div
        className={` row-span-2   hover:cursor-pointer select-none text-center rounded-full ${
          isPresent ? "bg-teal-500" : "bg-stone-500"
        }`}
        onClick={OnClickHandler}
      >
        {isPresent ? "👍" : "👎"}
      </div>
    </article>
  );
}

export default KoderCard;
