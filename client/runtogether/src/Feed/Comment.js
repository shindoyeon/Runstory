import Header from "../common/Header";
import Footer from "../common/Footer";
import './Comment.css';
import axios from "../api/axios";
import {NavLink} from "react-router-dom";
import React from "react";


const comment = props =>{

  return(
      <div className='mar' style={{width: "90%"}}>
        <Header></Header>
        <p className='tag'>댓글</p>
        <div className='wrapper' key={props.key}>
          <div className= 'imageContainer'>
            <NavLink to='/userid'>
            < img src={props.img} alt=""
                 className='image' />
            </NavLink>
          </div>
          <div className= 'contentContainer'>
            <NavLink to='/userid'>
            <span className='nameText'> {props.username} </span>
            </NavLink>
            <span className='commentText'> {props.content} </span>
          </div>
        </div>
        <div className='wrapper'>
          <div className= 'imageContainer'>
            <img src="https://www.pcclean.io/wp-content/uploads/2020/4/67zyMf.jpg" alt=""
                 className='image' />
          </div>
          <div className= 'contentContainer'>
            <span className='nameText'> dragon_chan </span>
            <span className='commentText'> 내 이름은 박용찬이야 안녕 </span>
          </div>
        </div>
        <div className='wrapper'>
          <div className= 'imageContainer'>
            <img src="https://www.pcclean.io/wp-content/uploads/2020/4/ma6jAj.jpg" alt=""
                 className='image' />
          </div>
          <div className= 'contentContainer'>
            <span className='nameText'> dragon_chan </span>
            <span className='commentText'> 내 이름은 박용찬이야 안녕 </span>
          </div>
        </div>
        <div className='wrapper'>
          <div className= 'imageContainer'>
            <img src="https://www.pcclean.io/wp-content/uploads/2020/4/ma6jAj.jpg" alt=""
                 className='image' />
          </div>
          <div className= 'contentContainer'>
            <span className='nameText'> dragon_chan </span>
            <span className='commentText'> 내 이름은 박용찬이야 안녕 </span>
          </div>
        </div>
        <div className='wrapper'>
          <div className= 'imageContainer'>
            <img src="https://www.pcclean.io/wp-content/uploads/2020/4/ma6jAj.jpg" alt=""
                 className='image' />
          </div>
          <div className= 'contentContainer'>
            <span className='nameText'> dragon_chan </span>
            <span className='commentText'> 내 이름은 박용찬이야 안녕 </span>
          </div>
        </div>
        <div className='wrapper'>
          <div className= 'imageContainer'>
            <img src="https://www.pcclean.io/wp-content/uploads/2020/4/ma6jAj.jpg" alt=""
                 className='image' />
          </div>
          <div className= 'contentContainer'>
            <span className='nameText'> dragon_chan </span>
            <span className='commentText'> 내 이름은 박용찬이야 안녕 </span>
          </div>
        </div>
        <Footer></Footer>
      </div>

  );
};
export default comment;