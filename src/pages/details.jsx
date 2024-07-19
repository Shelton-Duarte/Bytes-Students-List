import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { StudentsDetails } from "../components/details/students-details";
import { useParams } from "react-router-dom";
import { users } from "../components/data/users";

export const Details = () => {
  const params = useParams();

  const parametro = params.linkLabel.split("-")[0] +" "+ params.linkLabel.split("-")[1]

  const findUser = users.find((user) =>
    user.linkLabel.toLowerCase().includes(parametro.toLocaleLowerCase())
  );
  return (
    <>
      <div
        style={{ fontFamily: "Orbitron", letterSpacing: "1px" }}
        className="flex flex-col min-h-screen"
      >
        <Header />
        <main className="bg-purple-950 flex-1 flex flex-col pt-32">
          <StudentsDetails 
            linkLabel={findUser.linkLabel}
            course={findUser.course}
            phase={findUser.phase}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};
