import { PropsWithChildren } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { GetStaticProps } from "next";

import { AspectBlurImage } from "../../components/AspectBlurImage";
import { ImageType, localImages } from "../../data";

interface ImageIndexProps extends PropsWithChildren {
  image: ImageType;
}

const ImageIndex: React.FC<ImageIndexProps> = ({ image, children }) => {
  const { id, ...rest } = image;
  return (
    <AnimatePresence>
      <Dialog.Overlay asChild key={`overlay-${id}`}>
        <motion.div className="z-10 fixed inset-0 bg-black/95 overflow-y-auto">
          <Dialog.Content forceMount asChild key={`content-${id}`}>
            <motion.div className="flex flex-col h-screen justify-center items-center">
              <motion.div
                layoutId={`image-${id}`}
                className="relative w-full sm:w-[480px]"
              >
                <AspectBlurImage
                  alt="Unsplash Image"
                  priority
                  {...rest}
                ></AspectBlurImage>
              </motion.div>
            </motion.div>
          </Dialog.Content>
        </motion.div>
      </Dialog.Overlay>
    </AnimatePresence>
  );
};

export default ImageIndex;

export async function getStaticPaths() {
  const paths = localImages.map(item => {
    return {
      params: { id: JSON.stringify(item.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async context => {
  const id = parseInt(context.params?.id as unknown as string) as number;
  const imageData = localImages.filter(item => item.id === id)[0];
  if (!imageData) return { notFound: true };
  return {
    props: { image: imageData },
  };
};
