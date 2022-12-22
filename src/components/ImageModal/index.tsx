import { ImageModalProps } from './types';
import * as React from 'react';
import Modal from '@mui/material/Modal';;
import Image from 'next/image';
import Kakashi from '@/assets/images/kakashi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { APP_CONFIGS } from '@/configs/app';

function ModalImage(props: ImageModalProps) {
  const { handleClose, isOpen, imgSrc } = props;

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="my-modal"
    >
      <>
        <div className='close hover:tw-cursor-pointer' style={{color: 'white', zIndex: 100, position: 'absolute', top: '10px', right: '10px'}} onClick={handleClose}> 
          <FontAwesomeIcon size='2x' icon={faXmark} />
        </div>
        <div className='blog-img-modal' style={{ placeItems: 'center', display: 'grid', height: '100vh', maxWidth: '897px', margin: '0 auto' }}>
          <Image src={imgSrc ?? Kakashi} alt='img demo...' layout='fill' objectFit='contain'  quality={100}
              blurDataURL={APP_CONFIGS.BLUR_IMAGE_BASE64} />
        </div>
      </>
    </Modal>
  )
}

export default ModalImage;