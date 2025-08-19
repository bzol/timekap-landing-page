import { useState, useEffect, useRef } from 'react';
import './App.css';

const privacyPolicy = `
be private and secure
`;

const termsAndConditions = `
be termsful
`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animatedFeatures, setAnimatedFeatures] = useState(new Set());
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const featureRefs = useRef([]);
  const discordLink = 'https://discord.gg/3CgayCbu';

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

  if (window.location.pathname === '/privacy-policy') {
    return (
      <div className="bg-[#0050c6] text-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button 
            onClick={() => window.location.href = '/'}
            className="mb-6 bg-white text-[#0050c6] hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            ← Back to Home
          </button>
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          <div dangerouslySetInnerHTML={{ __html: privacyPolicy }} />
        </div>
      </div>
    );
  }

  if (window.location.pathname === '/terms-and-conditions') {
    return (
      <div className="bg-[#0050c6] text-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button 
            onClick={() => window.location.href = '/'}
            className="mb-6 bg-white text-[#0050c6] hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            ← Back to Home
          </button>
          <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
          <div dangerouslySetInnerHTML={{ __html: termsAndConditions }} />
        </div>
      </div>
    );
  }

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
            <nav className="hidden md:flex space-x-12 items-center">
              <a href="#home" className="text-[#3a3a3a] hover:text-[#0050c6] px-5 py-4 text-lg font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#features" className="text-[#3a3a3a] hover:text-[#0050c6] px-5 py-4 text-lg font-medium transition-colors duration-200">
                Features
              </a>
              <a href={discordLink} className="bg-[#5865F2] text-white hover:bg-[#4752C4] px-5 py-4 rounded-full text-lg font-medium transition-colors duration-200 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Beta
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
          <div className={`text-center pb-4 rounded-3xl md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
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
                className="block text-center text-[#3a3a3a] hover:text-[#0050c6] hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-2xl transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href={discordLink} 
                className="flex items-center justify-center gap-2 bg-[#5865F2] text-white hover:bg-[#4752C4] px-3 py-2 text-base font-medium rounded-2xl transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Test Team
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
          {/* <div className="text-center pt-12 sm:pt-8 md:pt-8 py-8 sm:py-0 md:my-12"> */}
          <div className="text-center pt-12 pb-6 sm:pt-14 md:pt-16 lg:pt-16">
            <div className="flex flex-col wmdsm:flex-row gap-4 md:gap-6 justify-center items-center">
              <button 
                type="button" 
                className="bg-[#f8482e] text-[#fdf8f3] hover:bg-[#0050c6] px-8 sm:px-12 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-5 rounded-full text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => window.location.href = 'https://tally.so/r/m6BZek'}
              >
                Join Waitlist
              </button>
            </div>
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
                <h2 className="text-4xl font-bold text-white mb-20">Be Part of TimeKap</h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <button 
                    type="button" 
                    className="flex items-center gap-3 bg-[#f8482e] text-[#fdf8f3] hover:bg-[#ffce3e] hover:text-[#3a3a3a] px-12 py-5 mb-4 rounded-full text-4xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    onClick={() => window.location.href = 'https://tally.so/r/m6BZek'}
                  >
                    <div>
                    🎉
                    </div>
                    {/* <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 64 64">

<path fill="#f7b600" d="M2 61l8.6-3l-6.5-3z">

</path>

<path fill="#ffdd7d" d="M26.9 36.4L14.8 24.2l-2 5.6z">

</path>

<path fill="#f7b600" d="M12.8 29.8l-2.2 6.3l26.8 12.5l1.3-.4l-11.8-11.8z">

</path>

<path fill="#ffdd7d" d="M8.5 42.4l20 9.3l8.9-3.1l-26.8-12.5z">

</path>

<path fill="#f7b600" d="M6.3 48.7l13.2 6.2l9-3.2l-20-9.3z">

</path>

<path fill="#ffdd7d" d="M6.3 48.7L4.1 55l6.5 3l8.9-3.1z">

</path>

<path d="M31.9 31.2c6.7 6.6 10.2 14 7.8 16.4c-2.5 2.4-9.9-1-16.7-7.7c-6.7-6.6-10.2-14-7.8-16.4c2.5-2.4 9.9 1.1 16.7 7.7" fill="#493816">

</path>

<path d="M23.5 14.5c-1.6-2.3.1-3.3 2.3-2.9c-2.1-2.5-.8-4.3 2.5-3.6c1 .2-.4 1.9-1.3 1.9c2.7 2 1.2 4.2-1.7 3.7c2.6 3.5-1.8 2.6-3.8 2.8C21 19 24 22 23 22c-2.2 0-5.8-8.3.5-7.5" fill="#42ade2">

</path>

<path d="M44.5 19.3c-1.5.7-5.7-5.9-.5-6c-3-2.7-2.6-4 1.4-4.1c-4.6-4.6 2.7-6.2 3.4-3.8c.2.7-2.2-.6-3 .7c-.9 1.5 5.6 5.4-1.1 5.1c2.5 2.5 2.6 3.7-1.3 4.1c.5.8 2.1 3.6 1.1 4" fill="#ff8736">

</path>

<path d="M46.2 34.9l1.5-1.3s1.4 2.1 2.4 2.9c.8-3.6.6-5.7 4.7-3.3c-2.3-6.2 1.5-3.9 5.2-2.2c-.2-1.6 0-1.4 1.6-1.9c1.4 5.3-2.4 3.7-5.4 2c1.8 4.8-.1 4.5-3.9 2.9c-.1 2-.7 4.3-1.9 4.5c-1.4.4-4.2-3.6-4.2-3.6" fill="#ed4c5c">

</path>

<path d="M35 20.1c-1.8 2.4-4.7 3.7-6.8 5.8c-2.2 2.2-3.5 8.2-3.5 8.2s.8-6.3 2.9-8.7c1.9-2.2 4.7-3.8 6.2-6.3c2.6-4.6.2-10.6-3.2-14.1c.7-.6 1.7-1.4 2.2-2c3.3 4.1 6.1 12 2.2 17.1" fill="#c28fef">

</path>

<path d="M38.1 25.2c-2.6 1.9-4.5 4.7-6.3 7.3c-1.6 2.3-6.7 5.2-6.7 5.2s4.8-3.3 6.3-5.7c1.8-3 3.6-6.1 6.4-8.3c5.6-4.3 13.7-3.9 20-1.6c-.4.9-1.1 2.8-1.1 2.8s-13.3-3.6-18.6.3" fill="#ff8736">

</path>

<g fill="#42ade2">

<path d="M49.2 24.7c-1.7 2.2-2.5 4.9-3.8 7.4c-1.2 2.3-2.8 4.5-5.1 5.7c-2.6 1.3-8.3.9-8.3.9s5.7-.1 8.1-1.7c2.4-1.6 3.7-4.4 4.6-7c1.8-5 4-10.4 9.2-12.6c.3.9 1 2.8 1 2.8s-2.9.8-5.7 4.5">

</path>

<path d="M3.21 14.325l2.828-2.829l2.829 2.828l-2.828 2.83z">

</path>

</g>

<path fill="#ff8736" d="M7.173 23.197L10 20.369l2.828 2.828L10 26.025z">

</path>

<path fill="#ed4c5c" d="M14.358 9.822l2.828-2.828l2.828 2.828l-2.828 2.828z">

</path>

<path fill="#c28fef" d="M45.205 43.696l2.828-2.829l2.828 2.829l-2.828 2.828z">

</path>

<path fill="#ed4c5c" d="M38.903 53.39l2.828-2.828l2.829 2.829l-2.829 2.828z">

</path>

<path fill="#ff8736" d="M51.279 55.607l2.828-2.829l2.828 2.829l-2.828 2.828z">

</path>

<g fill="#42ade2">

<path d="M54.078 42.731l2.828-2.828l2.828 2.828l-2.828 2.829z">

</path>

<path d="M49.356 12.823l2.828-2.829l2.829 2.829l-2.828 2.828z">

</path>

</g>

<path fill="#ed4c5c" d="M19.044 29.792l2.829-2.828l2.828 2.828l-2.828 2.829z">

</path>

</svg> */}
                    Join Waitlist
                  </button>
                  <button 
                    type="button" 
                    className="bg-[#5865F2] text-[#fdf8f3] hover:bg-[#4752C4] px-20 py-5 mb-4 rounded-full text-4xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3"
                    onClick={() => window.location.href = discordLink}
                  >
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    Join Beta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
                {/* Footer with Social Links */}
                <footer className="bg-[#0050c6] text-white pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Logo and company info */}
              <div className="flex items-center mb-6 lg:mb-0 hidden lg:flex">
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
                <div className="flex space-x-6 mx-10">
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
                  {/* Discord */}
                  <a 
                    href={discordLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#ffce3e] transition-colors duration-200"
                    aria-label="Discord"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </a>
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
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-300">
                  <a 
                    href="/privacy-policy" 
                    className="hover:text-[#ffce3e] transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <a 
                    href="/terms-and-conditions" 
                    className="hover:text-[#ffce3e] transition-colors duration-200"
                  >
                    Terms & Conditions
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <p>© 2025 TimeKap™. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
