import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Form } from "../components/contact/form";


export const Contact = () => {
  return (
    <>
      <Header />
      <div style={{ fontFamily: 'Orbitron',letterSpacing: '1px'}} className="flex flex-col min-h-screen">
        <main className="bg-purple-950 flex-1 flex flex-col items-center pt-32">
          <Form />
        </main>
        <Footer />
      </div>
    </>
  );
};
