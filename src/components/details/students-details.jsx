export const StudentsDetails = ({
    linkLabel,
    course,
    phase,
  }) => {
    return (
      <>
            <div className="flex justify-center items-center border rounded-2xl border-purple-900 z-10 bg-purple-bytes p-4">
              
              <h1 className="text-normal font-bold text-white mb-4">{linkLabel}</h1>
              <h3 className="text-normal font-bold text-white mb-4">{course}</h3>
              <p className="text-normal text-white">{phase}</p>
            </div>
      </>
    );
  };