const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="sm:flex justify-between mx-auto gap-16">
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Espacio en línea que explora las últimas tendencias tecnológicas y
            discute cómo pueden transformar el mundo en el futuro. Este
            blog cubre una amplia variedad de temas, como inteligencia
            artificial, robótica, biotecnología, nanotecnología, realidad
            virtual y aumentada, tecnologías sostenibles y mucho más.
          </p>
          <p className="">Copyright © 2023 | Patricia Garcia. Todos los derechos reservados</p>
        </div>
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold mb-3">LINKS</h4>
          <p className="my-2">About</p>
          <p className="my-2">Notices</p>
          <p className="my-2">Categories</p>
        </div>
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold mb-3">CONTACT US</h4>
          <p className="my-2">Blog Of Future</p>
          <p className="my-2">(+34)611-466-108</p>
          <p className="my-2">blogoffuture@blog.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
