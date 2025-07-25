"use client";
import { BaseTour } from "@/app/interface/Tour";
import img1 from "@/public/huacachina.jpg";
import img2 from "@/public/islas_ballestas.jpg";
import { default as img3, default as rnp } from "@/public/rnp.jpg";
import Image from "next/image";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const TourImage = ({ images }: BaseTour) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <Image
          src={selectedImage ? selectedImage : ""}
          alt="Imagen del tour"
          width={2080}
          height={2080}
          className="w-full h-[544px] xl:h-[655px] object-cover"
          priority
        />
        <div className="absolute bottom-3 left-3 bg-white/80 text-black pl-2 pr-4 py-1 rounded-[20px] max-w-[80%] flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#ff2d2e] text-2xl" />
          <div className="text-justify">
            <span className="text-sm font-semibold">
              Reserva Nacional de Paracas
            </span>
            <p className="text-xs">Paracas - Perú</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 xl:w-22 xl:h-22 rounded overflow-hidden border-2 ${
              selectedImage === img ? "border-[#87AC17]" : "border-gray-300"
            }`}
          >
            <Image
              src={img}
              width={100}
              height={100}
              alt={`Miniatura ${index}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TourImage;
