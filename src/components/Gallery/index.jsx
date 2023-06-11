import React from "react";


const Gallery = ({ currentImg,  setCurrentImg, nextImg,previousImg }) => {
  
    const hideGallery = (e) => {
        setCurrentImg("");
    };
  
    return (
      < div className="z-50 select-none	">
        <div className="overlay flex items-center fixed top-0 left-0 right-0 w-full h-full dismiss" style={{backgroundColor: "rgba(0,0,0,0.9)"}} >
          <img className="block my-16 mx-auto shadow-lg" loading="lazy" style={{maxWidth: "60%" , maxHeight: "80%"}} src={currentImg} alt="bigger pic" />
          <span className="dismiss text-white absolute top-5 right-5 lg:right-10 text-3xl z-50 cursor-pointer" onClick={hideGallery}>
                {/* <FontAwesomeIcon icon={faXmark} /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </span>
          <div onClick={previousImg} className="gallery_left_arrow cursor-pointer absolute flex justify-center items-center top-1/2 left-0 h-20 w-12 z-50 " style={{backgroundColor: "rgba(0,0,0,0.8)"}}>
                {/* <FontAwesomeIcon className="text-3xl text-white" icon={faChevronLeft}/> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
          </div>
          <div onClick={nextImg} className="gallery_right_arrow  cursor-pointer absolute flex justify-center items-center top-1/2 right-0 h-20 w-12 z-50" style={{backgroundColor: "rgba(0,0,0,0.8)"}}>
                {/* <FontAwesomeIcon className="text-3xl text-white" icon={faChevronRight}/> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;