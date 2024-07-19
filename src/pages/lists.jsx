import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { ListsUsers } from "../components/lists/userslist";

export const Lists = () => {
    return (
      <>
  <Header />
  <div style={{ fontFamily: 'Orbitron', letterSpacing: '1px'}}>
  <main className="font-semibold bg-purple-950">
<ListsUsers/>
</main>
  <Footer />
  </div>
     </>
    );
  };