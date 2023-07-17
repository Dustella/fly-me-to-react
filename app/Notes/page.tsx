"use client";
import { useAtom } from "jotai";
import store from "../store/note";

const Notes = () => {
  const noteText = useAtom(store);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <textarea
          className="h-90 w-90 text-xl p-3 m-5"
          value={noteText[0]}
          onChange={(e) => noteText[1](e.target.value)}
          placeholder="input note"
        />
      </div>
    </>
  );
};

export default Notes;
