import React from "react";
import {AiFillTwitterSquare, AiOutlineInstagram, AiFillFacebook, AiFillYoutube, AiFillCopyrightCircle} from 'react-icons/ai';


const Footer = () => {
  return (
    <div className="footer vw-100 p-0 m-0 d-flex justify-content-beetwen w-100 py-2">
      <div className="h-100 d-flex align-items-center w-100">
        <div className="ps-2">Jacobo ocaña</div>
        <AiFillCopyrightCircle className="ms-4"/>
        <div className="ms-1">2022</div>
        
      </div>
      
      <div className="me-3 d-flex align-items-center mb-1">
        <a className='mx-2 social-media' href="https://twitter.com/JOposiciones"><AiFillTwitterSquare /></a>
        <a className='mx-2 social-media' href="https://www.instagram.com/jacoboposiciones/"><AiOutlineInstagram /></a>
        <a className='mx-2 social-media' href="https://www.facebook.com/JacobOposiciones"><AiFillFacebook /></a>
        <a className='mx-2 social-media' href="https://www.youtube.com/channel/UCF86X4iCUDsMfA-cmsJk-Ng"><AiFillYoutube /></a>
      </div>

    </div>
  )
}

export default Footer;