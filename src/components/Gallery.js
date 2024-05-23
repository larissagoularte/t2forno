import React, { useState, useRef } from "react";

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(require.context('../assets/images', false, /\.(jpg)$/));
console.log(images)

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  }

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      const newIndex = currentIndex + 1;
      setSelectedImage(images[newIndex]);
      setCurrentIndex(newIndex);
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setSelectedImage(images[newIndex]);
      setCurrentIndex(newIndex);
    }
  }

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = direction === 'left' ? -150 : 150;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }


  return (

    <div className="w-full flex flex-col md:flex-row md:justify-center">
      <div className="md:w-6/12 md:px-3 md:py-2 p-2 mx-2 my-1 rounded bg-neutral-200">
        <div className="flex flex-col gap-1">
          <div className="relative main-img h-[500px]">
            {selectedImage && <img src={selectedImage} className="w-full h-full object-contain"/>}
            <div className="text-right mt-2 absolute top-1 right-1 text-white bg-slate-900 text-sm rounded bg-opacity-40 p-1">
            {currentIndex + 1}/{images.length}
          </div>
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 font-bold text-slate-900 opacity-40 text-3xl disabled:opacity-20" 
              onClick={handlePrevious} 
              disabled={currentIndex === 0}
            >
              &lt;
            </button>
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 font-bold text-slate-900 opacity-40 text-3xl disabled:opacity-20" 
              onClick={handleNext} 
              disabled={currentIndex === images.length - 1}
            >
              &gt;
            </button>
          </div>
          <div className="relative md:w-[650px] w[300px]">
          <button 
              className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 px-2 py-2 bg-gray-500 text-white rounded bg-opacity-70" 
              onClick={() => scrollGallery('left')}
            >
              &lt;
            </button>
            <div ref={galleryRef} className="gallery-tab flex overflow-hidden justify-center">
              
              {images.map((image, index) => (
                <div key={index} className={`h-20 w-20 flex-shrink-0 mx-1 ${currentIndex === index ? 'selected' : ''}`}>
                  <img src={image} alt={`images do imóvel`} className="h-full w-full object-cover rounded cursor-pointer" onClick={() => handleImageClick(index)} />
                </div>
              ))}
            </div>
            <button 
              className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-2 bg-gray-500 text-white rounded bg-opacity-70" 
              onClick={() => scrollGallery('right')}
            >
              &gt;
            </button>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Gallery