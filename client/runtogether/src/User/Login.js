import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";
import axios from './api/axios';
import KakaoLogin from './KakaoLogin';
import './Login.css'
import {
    Divider,
    ChakraProvider,
  } from '@chakra-ui/react';

const LOGIN_URL = '/user/login';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
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

            {success ? (
                <section>
                    <h1>로그인 성공</h1>
                    <br />
                    <p>
                        <a href="/">프로필로</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>로그인</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">닉네임</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            />
                        <Divider/>
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            />
                        <Divider/>
                        <KakaoLogin/>
                        <button>로그인</button>
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
            </ChakraProvider>
    )
}

export default Login;