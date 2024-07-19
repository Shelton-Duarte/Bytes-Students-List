import { useParams } from "react-router-dom";
import { users } from "../data/users";

export const StudentsDetails = ({
  linkLabel,
  course,
  phase,
}) => {
  
  // // const newUser= users.find (user=>{
  // //   user.includes()
  // })
  return (
    <>
      <div className="flex flex-col justify-center items-center border rounded-2xl border-purple-900 z-10 bg-purple-bytes p-4">
        <h1 className="text-normal font-bold text-white mb-4">
          {linkLabel}
        </h1>
        <h3 className="text-normal font-semibold text-white mb-4">
          {course}
        </h3>
        <p className="text-normal text-white">{phase}</p>
      </div>
    </>
  );
};
