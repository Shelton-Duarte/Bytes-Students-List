import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { StudentsDetails } from "../components/details/students-details";



export const Details = () => {
    return (
      <>
      <div style={{ fontFamily: 'Orbitron', letterSpacing: '1px' }} className="flex flex-col min-h-screen">
  <Header />
  <main className="bg-purple-950 flex-1 flex flex-col pt-32">
  <StudentsDetails />
  </main>
  <Footer />
  </div>
     </>
    );
  };