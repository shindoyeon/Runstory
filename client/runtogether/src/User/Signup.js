import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from './api/axios';
// import axios from './axios';
import './Signup.css'
import {
    ChakraProvider,
  } from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import DaumPostcode from 'react-daum-postcode';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/user/signup';

// 아이디, 비밀번호, 비밀번호 확인, 이름, 성별, 나이, 닉네임, 주소, 전화 
const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [id, setId] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [userName, setUserName] = useState('');
    const [userGender, setUserGender] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userNickname, setUserNickname] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userPhonenum, setUserPhonenum] = useState('');

    const [openPostcode, setOpenPostcode] = useState(false);

    const handle = {
        // 버튼 클릭 이벤트
        clickButton: () => {
            setOpenPostcode(current => !current);
        },

        // 주소 선택 이벤트
        selectAddress: (data: any) => {
            console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `)
            setOpenPostcode(false);
        },
    }

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(id));
    }, [id])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [id, password, matchPwd])
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(id);
        const v2 = PWD_REGEX.test(password);  
        if (!v1 || !v2) {
            setErrMsg("일치하지 않음");
            return;
        }
        try {
            console.log("try문  id :  "+id+" password : "+password)
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ id, password
                    
                    , userName, userGender, userAge, userNickname, userAddress, userPhonenum }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                    );
                    // TODO: remove console.logs before deployment
            console.log(response)
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            setId('');
            setPassword('');
            setMatchPwd('');
            setUserName('');
            setUserAge('');
            setUserGender('');
            setUserNickname('');
            setUserAddress('');
            setUserPhonenum('');

        } catch (err) {
            if (!err?.response) {
                setErrMsg('서버에 반응이 없습니다.');
            } else if (err.response?.status === 409) {
                setErrMsg('사용된 사용자이름');
            } else {
                setErrMsg('등록 실패')
            }
            errRef.current.focus();
        }
    }

    return (
        <ChakraProvider>    
        <Header></Header>
            {success ? (
                <section className="SignupSection" style={{width : '90%'}}>
                    <h1>Success!</h1>
                    <p>
                        <a href="/user/login">로그인</a>
                    </p>
                </section>
            ) : (
                <section className="SignupSection" style={{width : '90%'}}>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 style={{textAlign:'center'}}>회원가입</h1>
                    <form className="SignupForm" onSubmit={handleSubmit}>

                        <label className='SignLabel' htmlFor="username">
                            아이디
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !id ? "hide" : "invalid"} />
                        </label>
                        <input
                            className="SignupInput"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setId(e.target.value)}
                            value={id}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                            placeholder='아이디를 입력하세요'
                        />
                        <p id="usernote" className={userFocus && id && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4~24자까지<br />
                            문자로 시작해야 합니다.<br />
                            문자, 숫자, 밑줄, '-'만 가능합니다.
                        </p>

                        <label className='SignLabel' htmlFor="password">
                            비밀번호
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hide" : "invalid"} />
                        </label>
                        <input
                            className="SignupInput"
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            placeholder='비밀번호를 입력하세요'
                            />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8~24자까지<br />
                            소문자, 숫자, 특수문자를 포함해야 합니다.<br />
                            허용 특수문자: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
                        <br/>
                        <label htmlFor="confirm_pwd">
                            비밀번호 확인
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            className="SignupInput"
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            placeholder='비밀번호를 다시 입력하세요'
                            />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            입력했던 비밀번호와 정확히 일치해야 합니다.
                        </p>
                        {/* 상세정보 */}
                        <label className='signup-detail-label' htmlFor="confirm_pwd">
                            이름
                        </label>
                        <input
                            className="SignupInput"
                            type="userName"
                            id="confirm_pwd"
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            placeholder='이름을 입력하세요'
                            />

                        <label className='signup-detail-label' htmlFor="confirm_pwd">
                            나이
                        </label>
                        <input
                            className="SignupInput"
                            type="userAge"
                            id="confirm_pwd"
                            onChange={(e) => setUserAge(e.target.value)}
                            value={userAge}
                            placeholder='성별을 입력하세요'
                            />

                        <label className='signup-detail-label' htmlFor="confirm_pwd">
                            성별
                        </label>
                        <div style={{display:'flex', justifyContent:'space-around'}} > 
                            <p>
                                <label for="male">남성</label>
                                <input style={{marginLeft:'10px'}} id="male" type="radio" value="남성" name="ss"/>
                            </p>
                            <p>
                                <label for="female">여성</label>
                                <input style={{marginLeft:'10px'}} id="female" type="radio" checked value="여성" name="ss"/>
                            </p>
                        </div>

                        {/* 중복여부 설정해야함 */}
                        <label className='signup-detail-label' htmlFor="confirm_pwd">
                            닉네임
                        </label>

                        <input
                            className="SignupInput"
                            type="userNickname"
                            id="confirm_pwd"
                            onChange={(e) => setUserNickname(e.target.value)}
                            value={userNickname}
                            placeholder='닉네임을 입력하세요'
                            />
                        
                        {/* 다음주소 라이브러리 끌어오기 */}
                        <label className='signup-detail-label' htmlFor="confirm_pwd">
                            주소
                        </label>
                        <input
                            className="SignupInput"
                            type="userAddress"
                            id="confirm_pwd"
                            onChange={openPostcode}
                            value={openPostcode}
                            // onChange={() => (openPostcode)}
                            // value={setOpenPostcode}
                            />

                            <div>
                                <button onClick={handle.clickButton}>주소 찾기</button>
                                    {openPostcode && 
                                        <DaumPostcode 
                                            onComplete={handle.selectAddress}  // 값을 선택할 경우 실행되는 이벤트
                                            autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                                            defaultQuery='테헤란로 212' // 팝업을 열때 기본적으로 입력되는 검색어 
                                            />}
                            </div>

                            <label className='signup-detail-label' htmlFor="confirm_pwd">
                                핸드폰 번호
                            </label>
                            <input
                                className="SignupInput"
                                type="userPhonenum"
                                id="confirm_pwd"
                                onChange={(e) => setUserPhonenum(e.target.value)}
                                value={userPhonenum}
                                placeholder='핸드폰 번호를 입력하세요'
                                />

                            <button className='signup-button'> 완료 </button>
                     </form>
                    <p>
                        이미 회원가입을 하셨다면?
                     <a href="/user/login" style={{ textDecoration: 'underline'}}>로그인페이지로 이동</a>
                    </p>
                </section>
            )}
    <Footer></Footer>
    </ChakraProvider>
    )
}

export default Register;