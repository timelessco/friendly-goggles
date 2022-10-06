import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export type AspectRatioProps = ComponentPropsWithoutRef<"div"> & {
  ratio?: number;
};

export const AspectRatioImage: React.FC<AspectRatioProps> = ({
  ratio = 4 / 3,
  className,
  style,
  children,
  ...rest
}) => {
  const _style = { paddingBottom: `${(1 / ratio) * 100}%`, ...style };

  return (
    <>
      <div
        className={clsx("h-0 block", className)}
        style={_style}
        aria-hidden={true}
        {...rest}
      />
      {children}
    </>
  );
};
