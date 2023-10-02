// import FooterImage from "../../../assests/home/footerwave.svg";

function Footer() {
  return (
    <div>
      <footer className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1a202c"
            fill-opacity="1"
            d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,245.3C672,267,768,277,864,277.3C960,277,1056,267,1152,240C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <div className="py-8 " style={{ backgroundColor: '#1a202c' }}>

          <div className="footerContainer container mx-auto pl-10 pr-20 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/path/to/your/logo.png"
                alt="Company Logo"
                className="w-10 h-10 mr-2"
              />
              <span className="text-white text-lg font-bold">Company Name</span>
            </div>

            <div className="footerItems flex">
              <div>
                <h4 className="text-white uppercase font-bold">Quick Links</h4>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/" className="text-gray-300 hover:text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-300 hover:text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-300 hover:text-white">
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white uppercase font-bold">Follow Us</h4>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/" className="text-gray-300 hover:text-white">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-300 hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="/  " className="text-gray-300 hover:text-white">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white uppercase font-bold">Reach Us</h4>
                <ul className="mt-2 space-y-2">
                  <li>
                    <span className="text-gray-300">Company Address</span>
                  </li>
                  <li>  
                    <span className="text-gray-300">Phone: 123-456-7890</span>
                  </li>
                  <li>
                    <span className="text-gray-300">
                      Email: info@example.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 p-3">
         <h2 className="text-center text-white">Made with Vispro Technologies</h2>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
