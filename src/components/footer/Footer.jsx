export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto text-center">
            {/* Sosial Media Links */}
            <div className="flex justify-center mb-8 space-x-10">
              <a href="https://github.com/username" target="_blank" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://twitter.com/username" target="_blank" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://www.linkedin.com/in/username" target="_blank" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://www.instagram.com/username" target="_blank" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>

            {/* Donasi Link */}
            <p className="text-lg mb-4">Support me by donating below!</p>
            <div className="flex justify-center mb-8 space-x-10">
              <a href="https://ko-fi.com/justacoders" target="_blank" className="text-gray-400 hover:text-gray-300">
                Support Me on Ko-fi
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Roxy Miguardia. All rights reserved.</p>
            </div>
          </div>
        </footer>
    );
  }  