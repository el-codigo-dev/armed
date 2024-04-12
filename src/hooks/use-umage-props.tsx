import { StaticImageData, getImageProps } from "next/image";

export const useImageProps = (srcWebp: StaticImageData, srcPng: StaticImageData, alt: string) => {
    const common = { alt: alt};
    const {
      props: { srcSet: webp },
    } = getImageProps({ ...common, src: srcWebp });
    const {
      props: { srcSet: png, ...rest },
    } = getImageProps({ ...common, src: srcPng });
  
    return { webp, png, rest };
  };