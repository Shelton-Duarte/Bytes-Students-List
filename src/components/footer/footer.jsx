

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-bytes-1000 via-purple-bytes to-green-bytes">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className=" text-white sm:text-center font-normal">
          © 2024 <a href="#" >Shelton Duarte™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 font-normal text-white sm:mt-0">
          <li>
            <a href="https://bytes4future.pt/#project" className="hover:underline me-4 md:me-6">BYTES4FUTURE</a>
          </li>
          <li>
            <a href="https://bytes4future.pt/#programs" className="hover:underline me-4 md:me-6">PROGRAMAS</a>
          </li>

          <li>
            <a href="http://localhost:5173/contact" className="hover:underline">CONTACTO</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};