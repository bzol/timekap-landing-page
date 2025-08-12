import { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedFeatures, setAnimatedFeatures] = useState(new Set());
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

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="App">
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
                  alt="TimeKap hero image"
                  src="/hero-image.png"
                  className="max-w-full h-auto rounded-lg pt-4 hero-image-continuous-float"
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
        <div className="bg-[#fdf8f3] pb-4 pt-40" id="features">
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
              <div className="text-center pt-12">
                <p className="text-white text-sm">
                  © 2024 TimeKap. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
