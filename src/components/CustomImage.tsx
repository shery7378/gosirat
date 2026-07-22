import NextImage, { ImageProps } from 'next/image';

export default function CustomImage(props: ImageProps) {
  return (
    <NextImage
      {...props}
      className={`${props.className || ''} image-transparent`.trim()}
      style={{ color: undefined, ...props.style }}
    />
  );
}
