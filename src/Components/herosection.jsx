import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png"

function Herosection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const autoplay = () => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      };
      const interval = setInterval(autoplay, 4000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src={img1} className='object-cover h-full w-full' alt='Image1' />
        </div>
        <div className="embla__slide">
          <img src={img2} className='object-cover h-full w-full' alt='Image2' />
        </div>
        <div className="embla__slide">
          <img src={img3} className='object-cover h-full w-full' alt='Image2' />
        </div>
      </div>
    </div>
  );
}

export default Herosection;