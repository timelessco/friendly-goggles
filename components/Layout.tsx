import { PropsWithChildren } from "react";
import Image, { ImageProps } from "next/image";

const localImages = [
  { width: 750, height: 1130, src: "/images/5.jpg" },
  { width: 750, height: 500, src: "/images/2.jpg" },
  { width: 750, height: 1125, src: "/images/6.jpg" },
  { width: 750, height: 500, src: "/images/3.jpg" },
  { width: 750, height: 940, src: "/images/4.jpg" },
  { width: 750, height: 938, src: "/images/7.jpg" },
  { width: 750, height: 500, src: "/images/12.jpg" },
  { width: 750, height: 1125, src: "/images/10.jpg" },
  { width: 750, height: 500, src: "/images/1.jpg" },
  { width: 750, height: 1125, src: "/images/9.jpg" },
  { width: 750, height: 500, src: "/images/8.jpg" },
  { width: 750, height: 1130, src: "/images/11.jpg" },
];

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col justify-center items-center xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="columns-2 md:columns-3 lg:columns-4">
        {children}
        {localImages.map(localImage => {
          return <NextImage {...localImage} />;
        })}
      </div>
    </div>
  );
};

const NextImage: React.FC<ImageProps> = props => {
  return <Image className="px-2 rounded-xl cursor-pointer" {...props} />;
};
