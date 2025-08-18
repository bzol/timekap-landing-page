import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedFeatures, setAnimatedFeatures] = useState(new Set());
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const featureRefs = useRef([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setAnimatedFeatures(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element enters viewport
      }
    );

    const currentRefs = featureRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="App">
      {/* Full Page Loading Spinner */}
      {!heroImageLoaded && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <img 
              src="/1-2-200h.png" 
              alt="TimeKap Logo" 
              className="loading-logo"
            />
          </div>
        </div>
      )}
      {/* Responsive Navbar */}
      <header className="bg-[#ffce3e] w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#ffce3e]">
          <div className="flex justify-between items-center h-32">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img 
                  alt="TimeKap logo" 
                  src="/1-2-200h.png" 
                  className="h-16 w-auto sm:h-14" // Increased from h-8/h-10 to h-12/h-14
                />
              </a>
            </div>
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-[#3a3a3a] hover:text-[#0050c6] px-3 py-2 text-lg font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#features" className="text-[#3a3a3a] hover:text-[#0050c6] px-3 py-2 text-lg font-medium transition-colors duration-200">
                Features
              </a>
              <a href="https://tally.so/r/m6BZek" className="bg-[#f8482e] text-[#fdf8f3] hover:bg-[#0050c6] px-6 py-2 rounded-full text-lg font-medium transition-colors duration-200">
                Join
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#3a3a3a] hover:text-[#0050c6] focus:outline-none p-4"
                aria-label="Toggle menu"
              >
                <svg 
                  className="h-8 w-8" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  ) : (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16M4 18h16" 
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`pb-4 rounded-3xl md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <nav className="px-2 py-2 pb-4 space-y-1 bg-white border-t border-gray-200 rounded-3xl">
              <a 
                href="#home" 
                className="block text-[#3a3a3a] hover:text-[#0050c6] hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-2xl transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#features" 
                className="block text-[#3a3a3a] hover:text-[#0050c6] hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-2xl transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="https://tally.so/r/m6BZek" 
                className="block bg-[#f8482e] text-white hover:bg-[#0050c6] px-3 py-2 text-base font-medium rounded-xl transition-colors duration-200 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Join
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content with top padding to account for fixed navbar */}
      <div className="bg-[#fdf8f3]" id="home">
        <div className="relative hero-section min-h-[96vh] sm:min-h-[80vh] pt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left lg:pb-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#f8482e] pb-4 lg:pb-8">
                  Kapture Life&apos;s Best Moments.
                </h1>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#0050c6] pb-4">
                  and keep them forever.
                </h3>
                <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                  TimeKap helps you stay close to the people you love, even when
                  life gets busy.
                </p>
                <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                  Build your own memory kapsule together: share random moments,
                  send surprise notes, do fun challenges, and keep the things that
                  matter.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  alt="TimeKap hero"
                  src="/hero-image.png"
                  className="max-w-full h-auto rounded-lg pt-4 hero-image-continuous-float"
                  onLoad={() => setHeroImageLoaded(true)}
                />
              </div>
            </div>
          </div>
          <div className="text-center pt-16 sm:pt-8 py-8 sm:py-0 sm:my-10">
            <button 
              type="button" 
              className="bg-[#f8482e] text-[#fdf8f3] hover:bg-[#0050c6] px-12 py-5 rounded-full text-3xl sm:text-4xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={() => window.location.href = 'https://tally.so/r/m6BZek'}
            >
              Join Waitlist
            </button>
          </div>
        </div>

        {/* Features section */}
        <div className="bg-[#fdf8f3] pb-4 pt-24 md:pt-40 lg:pt-30" id="features">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {[
                { src: "/features/1.png", alt: "Stay Close" },
                { src: "/features/2.png", alt: "Kapture the Moments" },
                { src: "/features/3.png", alt: "Shape Your Story" },
                { src: "/features/4.png", alt: "Make a Memory" }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <img
                    ref={el => featureRefs.current[index] = el}
                    src={feature.src}
                    alt={feature.alt}
                    data-index={index}
                    data-delay={index}
                    className={`mx-auto h-100 xl:h-92 w-auto mb-6 p-4 feature-image ${
                      animatedFeatures.has(index) ? 'animate' : ''
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="relative bg-[#0050c6]">
          <div className="relative">
            <img 
              src="/squiggle-300h.png"
              alt="decorative squiggle"
              className="relative z-20 w-full h-auto md:w-full" 
            />
            
            {/* Content section with blue background */}
            <div className="bg-[#0050c6] relative pb-16 w-full">
              <div className="relative text-center pt-16">
                <h2 className="text-4xl font-bold text-white mb-20">Interested?</h2>
                <button 
                  type="button" 
                  className="bg-[#f8482e] text-[#fdf8f3] hover:bg-[#ffce3e] hover:text-[#3a3a3a] px-12 py-5 mb-4 rounded-full text-4xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={() => window.location.href = 'https://tally.so/r/m6BZek'}
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
                {/* Footer with Social Links */}
                <footer className="bg-[#0050c6] text-white pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Logo and company info */}
              <div className="flex items-center mb-6 md:mb-0 hidden md:flex">
                <img 
                  alt="TimeKap logo" 
                  src="favicon.png" 
                  className="h-20 w-auto mr-4"
                />
                <div>
                  <p className="text-lg font-semibold">TimeKap</p>
                  <p className="text-sm text-gray-300">Kapture Life's Best Moments</p>
                </div>
              </div>
              
              {/* Social Media Links and Copyright */}
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex space-x-6">
                  {/* X (formerly Twitter) */}
                  {/* <a 
                    href="https://x.com/timekapapp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#ffce3e] transition-colors duration-200"
                    aria-label="X"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a> */}
                  {/* Instagram */}
                  {/* <a 
                    href="https://www.instagram.com/timekapapp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#ffce3e] transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
                    </svg>
                  </a> */}
                  {/* TikTok */}
                  <a 
                    href="https://www.tiktok.com/@timekapapp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#ffce3e] transition-colors duration-200"
                    aria-label="TikTok"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  {/* Facebook */}
                  {/* <a 
                    href="https://www.facebook.com/profile.php?id=61578568301484" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#ffce3e] transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a> */}
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/timekap" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#ffce3e] transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  {/* Email */}
                  <a 
                    href="mailto:emma.timekap@gmail.com" 
                    className="text-gray-300 hover:text-[#ffce3e] transition-colors duration-200"
                    aria-label="Email"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-gray-300">
                  © 2025 TimeKap™. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
