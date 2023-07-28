import Image, { ImageProps } from "next/future/image";

import { AspectRatioImage } from "./AspectRatioImage";

export type AspectBlurImageProps = Omit<ImageProps, "src"> & {
  ratio?: number;
  src?: string;
};

export const AspectBlurImage: React.FC<AspectBlurImageProps> = ({
  ratio = 4 / 3,
  width,
  height,
  src,
  ...rest
}) => {
  return (
    <AspectRatioImage ratio={ratio}>
      {src ? (
        <Image
          className="overflow-hidden inset-0 object-cover"
          fill
          sizes="100vw"
          src={src}
          {...rest}
        />
      ) : null}
    </AspectRatioImage>
  );
};
