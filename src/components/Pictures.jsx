import React, { useState, useEffect } from "react";
import API_URL from "../helpers/apiHelper";
import '../styles/Pictures.css';
import PictureCard from './PictureCard';

import {
    faCamera,
    faPaperPlane
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pictures = () => {
    const [pictures, setPictures] = useState([]);


    const fetchPictures = (searchValue) => {
                
        fetch(`${API_URL}/pictures`)
        .then(response => response.json())
        .then(data => {
            setPictures(data);    
        });
      };

      useEffect(()=>{
          fetchPictures()        
      },[]);

      
      return (
      
      <div>
          <div>
            <main className="PicturesWrapper">
            <div className="MenuBar">
                <div className="LeftMenu">
                <div className="CameraIcon">
                    <FontAwesomeIcon
                    className="CamIcon"
                    id="CamIcon"
                    icon={faCamera}
                    size="2x"
                    />
                </div>
                <div className="LogoIconDiv">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1000px-Instagram_logo.svg.png"
                    alt="igLogo"
                    className="LogoIcon"
                    
                    />
                </div>
                </div>
                <div className="SendIcon">
                <FontAwesomeIcon size="2x" icon={faPaperPlane} />
                </div>
            </div>
            </main>
        </div>
        <div>
        {pictures.map(picture => (
        <div>
          <PictureCard
            key={picture.id}
            uName={picture.created_by.toLowerCase()}
            displayPicture={picture.img_link}
            picture={picture.img_link}
            caption={picture.caption}
            pid={picture.id}
            likes={picture.likes}
          />
        </div>
      ))};
        </div>
      </div>
      
      );
      

};

export default Pictures;