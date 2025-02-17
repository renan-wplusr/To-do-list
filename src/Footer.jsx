const Footer = () => {
  return (
    <div>
      <footer className="w-full  bg-gray-900 text-white text-center p-6 mt-8">
        <p className="text-sm">
          Desenvolvido por <span className="font-bold">Renan Alves</span> ©{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Footer;

