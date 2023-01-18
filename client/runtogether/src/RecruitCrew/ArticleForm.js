import React from 'react';
import './ArticleForm.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faPersonDress, faQuestion } from "@fortawesome/free-solid-svg-icons";



const ArticleForm = () => {

    return (
        <form className='article-form'>
            <div className='title'>TITLE</div>
            <input className='title-input' placeholder='제목을 입력해주세요' type='text'></input>
            <div className='content' type='text'>CONTENT</div>
            <textarea className='content-input' placeholder='내용을 입력해주세요' rows="3"></textarea>
            <div className='location'>LOCATION</div>
            <input className='location-input' placeholder='위치를 입력해주세요' type='text'></input>
            <div className='people'>PEOPLE</div>
            <div className='people-input'>
                <div className='man-input'>
                    <FontAwesomeIcon icon={faPerson} className='man-icon' />
                    <input placeholder='남자 수' className='man-number' type="number"></input>
                </div>
                <div className='woman-input'>
                    <FontAwesomeIcon icon={faPersonDress} className='woman-icon' />
                    <input placeholder='여자 수' className='man-number' type="number"></input>
                </div>
                <div className='whoever-input'>
                    <FontAwesomeIcon icon={faQuestion} className='whoever-icon' />
                    <input placeholder='성별 무관 수' className='whoever-number' type="number"></input>
                </div>
            </div>
            <div className='time'>TIME</div>
            <div className='time-input'>
                <input className='start-date-input' type='date'></input>
                <input className='start-time-input' type='time'></input>
                <div className='between'>~</div>
                <input className='end-date-input' type='date'></input>
                <input className='end-time-input' type='time'></input>
            </div>
            <div className='submit-and-cancel'>
                <div className='submit-btn' type='submit'><p>등록</p></div>
                <div className='cancel-btn'><p>취소</p></div>
            </div>
        </form>
    );
}

export default ArticleForm;