import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";
import axios from './api/axios';
import KakaoLogin from './KakaoLogin';
import './Login.css'
import {
    Divider,
    ChakraProvider,
  } from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';


const LOGIN_URL = '/auth/login';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [id, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 서버에 데이터직렬화를 통해 post 요청 보냄
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ id, password }),
                {
                    headers: { 'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*" },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            const roles = response?.data?.roles;
            const accessToken = response?.data?.accessToken;
            setAuth({ id, password, roles, accessToken });
            setId('test');
            setPassword('1234');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('에러');
            } else if (err.response?.status === 400) {
                setErrMsg('이메일 혹은 비밀번호가 잘못되어있습니다.');
            } else if (err.response?.status === 401) {
                setErrMsg('인증되지 않은 사용자');
            } else {
                setErrMsg('로그인 실패');
            }
            errRef.current.focus();
        }
    }

    return (
        <ChakraProvider>
        <Header></Header>
            {success ? (
                <section style={{width : '90%'}} >
                    <h1>로그인 성공</h1>
                    <br />
                    <p>
                        <a href="/">프로필로</a>
                    </p>
                </section>
            ) : (
                <section className='LoginSection' style={{width : '90%'}}>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 style={{textAlign:'center'}}>로그인</h1>
                    <form className='LoginForm' onSubmit={handleSubmit}>
                        <label className='LoginLabel' htmlFor="username">닉네임</label>
                        <input
                            className='LoginInput'
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setId(e.target.value)}
                            value={id}
                            required
                            />
                        <Divider style={{margin: '5px'}}/>
                        <label htmlFor="password">비밀번호</label>
                        <input
                            className='LoginInput'
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            />
                        <Divider style={{margin: '5px'}}/>
                        <KakaoLogin/>
                        <button className='LoginButton'>로그인</button>
                    </form> 
                    <p>
                        계정이 필요하다면<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/user/signup">회원가입</a>
                        </span>
                    </p>
                </section>
            )}
            <Footer></Footer>
            </ChakraProvider>
    )
}

export default Login;