import { useState, useRef, useEffect } from 'react';
import { useUser } from '@/redux/hooks/use-user';
import UserPage from '@/components/Layout/UserPage';
import FeatureCard from '@/components/User/Dashboard/FeatureCard';
import { features } from '@/components/User/Dashboard/FeatureCard/feature-items';
import { FaChevronLeft, FaChevronRight, FaUpload } from 'react-icons/fa';




function Dashboard() {
  const { name, avatar } = useUser();
  const [selectedFeatures, setSelectedFeatures] = useState<number[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);



  const toggleFeature = (index: number) => {
    setSelectedFeatures(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const checkScrollPosition = () => {
    const slider = sliderRef.current;
    if (slider) {
      const { scrollLeft, scrollWidth, clientWidth } = slider;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollSlider = (direction: 'left' | 'right') => {
    const slider = sliderRef.current;
    if (slider) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left'
        ? slider.scrollLeft - scrollAmount
        : slider.scrollLeft + scrollAmount;

      slider.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Initialize scroll position check
  useEffect(() => {
    checkScrollPosition();
  }, []);

  return (
    <UserPage>
      <div ref={containerRef} className="px-2 sm:px-4 py-6 sm:py-8">
        {/* Background Gradient Circle */}
        <div className="absolute top-20 sm:top-32 left-1/2 transform -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-primary rounded-full opacity-30 blur-3xl" />

        {/* User Avatar */}
        <div className="relative flex justify-center mb-4 sm:mb-6">
          {avatar ? (
            <img
              src={avatar}
              alt={name || 'User'}
              className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover border-4 border-white shadow-lg"
            />
          ) : (
            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg">
              <span className="text-white text-lg sm:text-xl font-bold">
                {name ? name.charAt(0).toUpperCase() : 'U'}
              </span>
            </div>
          )}
        </div>

        {/* Greeting */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-white text-xl sm:text-2xl font-bebas-neue leading-tight">
            Hi {name || 'User'}!<br />
            Please select the insights you want to analyze
          </h1>
        </div>

        {/* Selected Features Counter */}
        {selectedFeatures.length > 0 && (
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-white text-sm">
              {selectedFeatures.length} insight{selectedFeatures.length !== 1 ? 's' : ''} selected
            </p>
          </div>
        )}

        {/* Feature Cards - Responsive Design */}
        <div className="mb-10 sm:mb-12">
          {/* Mobile: Horizontal Scroll */}
          <div className="block sm:hidden">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  Icon={feature.icon}
                  title={feature.title}
                  isSelected={selectedFeatures.includes(index)}
                  onSelect={() => toggleFeature(index)}
                  className="w-36"
                />
              ))}
            </div>
          </div>

          {/* Desktop: Slider with Navigation */}
          <div className="hidden sm:block">
            <div className="relative">
              <div
                ref={sliderRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide"
                onScroll={checkScrollPosition}
                style={{ scrollBehavior: 'smooth' }}
              >
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    Icon={feature.icon}
                    title={feature.title}
                    isSelected={selectedFeatures.includes(index)}
                    onSelect={() => toggleFeature(index)}
                    className="w-48"
                  />
                ))}
              </div>

              {/* Left Arrow */}
              {canScrollLeft && (
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all z-10"
                  onClick={() => scrollSlider('left')}
                >
                  <FaChevronLeft className="w-5 h-5 text-white" />
                </button>
              )}

              {/* Right Arrow */}
              {canScrollRight && (
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all z-10"
                  onClick={() => scrollSlider('right')}
                >
                  <FaChevronRight className="w-5 h-5 text-white" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Analyze Button */}

        <div className="flex justify-center">
          <button
            disabled={selectedFeatures.length === 0}
            className="btn-secondary">
            <FaUpload className="w-5 h-5 text-black mr-2" />
            Upload Short
          </button>
        </div>
      </div>

    </UserPage>
  );
}

export default Dashboard;