import { PropsWithChildren } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { localImages } from "../data";

import { AspectBlurImage } from "./AspectBlurImage";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const isOpen = router.asPath !== "/";
  const handleOpenChange = (state: boolean) => {
    if (!state) {
      router.push("/", undefined, { scroll: false });
    }
  };
  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <div className="flex flex-1 xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 w-full gap-8">
          {children}
          {localImages.map(({ id, ...rest }) => {
            const handleClick = () => {
              router.push(`image/${id}`, undefined, { scroll: false });
            };
            return (
              <motion.div
                key={id}
                onClick={handleClick}
                layoutId={`image-${id}`}
                className={`relative flex mb-8 cursor-pointer`}
              >
                <AspectBlurImage
                  alt="Unsplash Image"
                  sizes="20vw"
                  priority
                  {...rest}
                ></AspectBlurImage>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Dialog.Root>
  );
};
