import { PropsWithChildren, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { localImages } from "../data";

import { AspectBlurImage } from "./AspectBlurImage";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const isOpen = router.asPath !== "/";
  const [currentMovieId, setCurrentMovieId] = useState<number>(
    isOpen ? (router.query.id as unknown as number) : 1,
  );
  const handleOpenChange = (state: boolean) => {
    if (!state) {
      router.push("/", undefined, { scroll: false });
    }
  };
  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <div className="flex flex-1 xl:max-w-[1280px] z-[1] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 w-full gap-8">
          {children}
          {localImages.map(({ id, ...rest }) => {
            const handleClick = () => {
              setCurrentMovieId(id);
              router.push(`image/${id}`, undefined, { scroll: false });
            };
            return (
              <motion.div
                key={id}
                whileTap={{ scale: 0.98 }}
                onClick={handleClick}
                layoutId={`image-${id}`}
                className={`relative flex mb-8 cursor-pointer ${
                  currentMovieId === id ? "relative z-[1]" : ""
                }`}
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
