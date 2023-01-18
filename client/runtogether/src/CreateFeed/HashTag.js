import React, {useState} from 'react';
import './HashTag.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";


const HashTag = () => {
    // const redux = require('redux');
    // const createStore = redux.createStore;

    const [hashTag, setHashTag] = useState([
        {
            title: '# 10대',
            className: 'hashtag'
        },
        {
            title: '# 20대',
            className: 'hashtag'
        },
    ]);

    function changeColor(i) {
        let copy = [...hashTag]
        if(copy[i].className == 'hashtag') {
            copy[i] = {title: copy[i].title, className: 'hashtag selected'}
        }
        else {
            copy[i] = {title: copy[i].title, className: 'hashtag'}
        }
    }

    // const [classNames, setClassNames] = useState(`hashtag`);
    // const [isClicked, setIsClicked] = useState(false);

    // const changeColor = (i) => {
    //     if(hashTag[i].className === 'hashtag') {
    //         // hashTag[i].setHashTag({title: hashTag[i].title, className: 'hashtag selected'})
    //         hashTag[i].className = 'hashtag selected'
    //     }
    //     else {
    //         hashTag[i].className = 'hashtag'
    //     }
    // }

    
    React.useEffect(() => {
        setClassNames(`${hashTag[0].isClicked ? "hashtag selected" : "hashtag"}`);
    }, [hashTag[0].isClicked]);

    // action 
    // const HASHTAG_CLICK = 'HASHTAG_CLICK'

    // const clickHashtag = () => {
    //     return {
    //         type: 'HASHTAG_CLICK'
    //     }
    // }

    // const initialState = {
    //     isClicked: false
    // }

    // const reducer = (state=initialState, action) => {
    //     switch(action.type) {
    //         case HASHTAG_CLICK:
    //             return {
    //                 ...state,
    //                 isClicked: !isClicked
    //             }
    //         default:
    //             return state;
    //     }
    // }
    // const store = createStore(reducer);
    // store.subscribe(() => {
    //     console.log('SUBSCRIBE ---> ', store.getState())
    // })


  return (
    <div className='hashtags'>
        <button className={hashTag[0].className} onClick={changeColor(0)}>
            <p className='hashtag-content'>{hashTag[0].title}</p>
        </button>
        <button className={hashTag[1].className} onClick={changeColor(1)}>
            <p className='hashtag-content'>{hashTag[1].title}</p>
        </button>
        {/* <div className="hashtag" onClick={select(this)}>
            <p className='hashtag-content'># 10대</p>
        </div> */}
        {/* <div className={ 'hashtag' + (this.isActive ? ' selected' : '') }>
            <p className='hashtag-content'># 20대</p>
        </div>
        <div className={"hashtag" + (this.isActive ? " active" : "")}>
            <p className='hashtag-content'># 30대</p>
        </div>
        <div className={"hashtag" + (this.isActive ? " active" : "")}>
            <p className='hashtag-content'># 떠들면서</p>
        </div>
        <div className={"hashtag" + (this.isActive ? " active" : "")}>
            <p className='hashtag-content'># 조용히</p>
        </div>
        <div className={"hashtag" + (this.isActive ? " active" : "")}>
            <p className='hashtag-content'># 강아지랑</p>
        </div>
        <div className={"hashtag" + (this.isActive ? " active" : "")}>
            <p className='hashtag-content'># 사람들끼리</p>
        </div>
        <div className={"hashtag" + (this.isActive ? " active" : "")}>
            <p className='hashtag-content'># 정기적으로</p>
        </div>
        <div className={"hashtag" + (this.isActive ? " active" : "")}>
            <p className='hashtag-content'># 오늘만</p>
        </div> */}
    </div>
  )
}

export default HashTag;