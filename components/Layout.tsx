import { PropsWithChildren, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import Image from "next/future/image";
import { useRouter } from "next/router";

import { localImages } from "../data";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const isOpen = router.asPath !== "/";
  const handleOpenChange = (state: boolean) => {
    if (!state) {
      router.push("/", undefined, { scroll: false });
    }
  };
  const [currentMovieId, setCurrentMovieId] = useState<number>(
    isOpen ? (router.query.id as unknown as number) : 1,
  );
  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <motion.div className="flex flex-1 xl:max-w-[1280px] z-[1] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 w-full gap-8">
          {children}
          {localImages.map(({ id, ...rest }) => {
            const handleClick = () => {
              router.push(`image/${id}`, undefined, { scroll: false });
              setCurrentMovieId(id);
            };
            return (
              <motion.div
                key={id}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
                layoutId={`image-container-${id}`}
                className={`relative flex mb-8 cursor-pointer ${
                  currentMovieId === id ? "relative z-[1]" : ""
                }`}
              >
                <motion.div layout layoutId={`image-${id}`}>
                  <Image alt={"images from unsplash"} {...rest} />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </Dialog.Root>
  );
};
