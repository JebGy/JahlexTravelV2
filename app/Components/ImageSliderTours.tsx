"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import React, { useState } from "react";

interface ImageSliderProps {
  images: string[];
  isStatic: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, isStatic }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
  });

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <div
        ref={sliderRef}
        className="keen-slider w-full h-full overflow-hidden"
      >
        {!isStatic ? (
          images.map((image, index) => (
            <div
              key={index}
              className="keen-slider__slide flex justify-center items-center p-0 gap-0"
            >
              <Image
                src={image}
                alt={`Imagen ${index + 1}`}
                width={2000}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          ))
        ) : (
          <div className="p-0 gap-0">
            <Image
              src={images[0]}
              alt="Imagen estática"
              width={2000}
              height={800}
              className="w-96 h-full"
            />
          </div>
        )}
      </div>

      <div className="absolute bottom-2 right-3 flex gap-1 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (instanceRef.current) {
                instanceRef.current.moveToIdx(index);
                setCurrentImageIndex(index);
              }
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentImageIndex ? "bg-oliva-o" : "bg-gray-200"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
