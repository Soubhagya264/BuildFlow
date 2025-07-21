import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="md:rounded-t-6xl mt-2 relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5 md:px-10">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold">BuildFlow</h3>
          <p className="text-gray-400">Streamline Your Workflow</p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <p>buildflowagency.co.in@gmail.com</p>
            <p>+1 234 567 8900</p>
          </div>

          <div className="text-center md:text-left mb-6 md:mb-0">
            <h4 className="text-xl font-semibold">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="hover:text-blue-500">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-700">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Services</a></li>
              <li><a href="#" className="hover:text-gray-400">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-500">&copy; 2024 BuildFlow. All rights reserved.</p>
      </div>
    </footer>
  );
}
