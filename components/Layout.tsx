import { PropsWithChildren } from "react";

import { AspectBlurImage } from "./AspectBlurImage";

const localImages = [
  { width: 750, height: 1130, ratio: 750 / 1130, src: "/images/5.png" },
  { width: 750, height: 500, ratio: 750 / 500, src: "/images/2.png" },
  { width: 750, height: 1125, ratio: 750 / 1125, src: "/images/6.png" },
  { width: 750, height: 500, ratio: 750 / 500, src: "/images/3.png" },
  { width: 750, height: 940, ratio: 750 / 940, src: "/images/4.png" },
  { width: 750, height: 938, ratio: 750 / 938, src: "/images/7.png" },
  { width: 750, height: 500, ratio: 750 / 500, src: "/images/12.png" },
  { width: 750, height: 1125, ratio: 750 / 1125, src: "/images/10.png" },
  { width: 750, height: 500, ratio: 750 / 500, src: "/images/1.png" },
  { width: 750, height: 1125, ratio: 750 / 1125, src: "/images/9.png" },
  { width: 750, height: 500, ratio: 750 / 500, src: "/images/8.png" },
  { width: 750, height: 1130, ratio: 750 / 1130, src: "/images/11.png" },
];

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 w-full gap-8">
        {children}
        {localImages.map(localImage => {
          return (
            <div
              key={JSON.stringify(localImage)}
              className={`relative flex mt-8 first:mt-0 cursor-pointer`}
            >
              <AspectBlurImage
                alt={localImage.src}
                sizes="20vw"
                priority
                {...localImage}
              ></AspectBlurImage>
            </div>
          );
        })}
      </div>
    </div>
  );
};
