import { NavBar } from "./nav-bar";

export const Header = () => {
    return (
        <header style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '1px'}} className=" flex items-center justify-between bg-gradient-to-r from-green-bytes via-purple-bytes to-purple-bytes-1000 text-white h-20 text-base">
          <h1 className="text-2xl font-bold p-2 ml-8">BYTERS Moçambique</h1>
          <section className="flex gap-5 mr-8">
            <NavBar />
            </section>
            </header>
  );
};
