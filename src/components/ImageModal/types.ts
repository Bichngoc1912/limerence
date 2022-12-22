import { ImageProps } from 'next/image';

export interface ImageModalProps {
  handleClose: () => void;
  isOpen: boolean;
  imgSrc: ImageProps['src'];
}
