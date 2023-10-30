"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  imageUrls: string[];
  name: string;
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState<string>(imageUrls[0])

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  }

  return (
    <div className="fle flex-col">
      <div className="bg-accent h-[380px] w-full flex items-center justify-center">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8 px-5">
        {imageUrls.map((image) => (
          <button
            key={image}
            className={`h-[100px] flex items-center justify-center rounded-lg bg-accent
              ${image  === currentImage && 'border-2 border-primary border-solid'}`}
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;