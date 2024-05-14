import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-10 text-gray-300 py-6 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        {/* Left Section */}
        <div className="mb-4 lg:mb-0">
          <p className="text-3xl font-bold">Ocean Heaven Hotel</p>
          <p className="text-lg">
            © 2024 Ocean Heaven Hotel. All rights reserved.
          </p>
        </div>

        {/* Center Section */}
        <div className="mb-4 lg:mb-0">
          <p className="text-2xl mb-2">Contact Us:</p>
          <p className="text-lg">Email: masumbillah@gmail.com</p>
          <p className="text-lg">Phone: +8801700011147</p>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-2xl mb-2">Follow Us:</p>
          <div className="flex space-x-2">
            <a href="#" className="text-4xl text-red-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-4xl text-red-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-4xl text-red-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-4xl text-red-500">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
