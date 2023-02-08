import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";
import axios from './api/axios';
import KakaoLogin from './KakaoLogin';
import './Login.css'
import {
    Link,
    Button,
    Divider,
    ChakraProvider,
  } from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import  {useNavigate} from 'react-router-dom'; 


const LOGIN_URL = 'http://i8a806.p.ssafy.io/api/auth/login';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    // const dispatch = useDispatch();
    
    useEffect(() => {
        userRef.current.focus();
    }, [])
    
    useEffect(() => {
        setErrMsg('');
    }, [id, password])
    
    const navigate = useNavigate(); // navigate 변수 생성
    const navigateHome = () => { // 취소 클릭 시 홈으로 가기 위함
      navigate("/");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // dispatch(login(userData));
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
                // const roles = response?.data?.roles;
                const accessToken = response?.data?.accessToken;
                setAuth({ id, password, accessToken });
                setId('test');
                setPassword('qwer1234!');
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
                navigate('/')
            ) : (
                <section className='LoginSection' style={{width : '90%'}}>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 style={{ fontSize:'30px', textAlign:'center'}}>로그인</h1>
                    <form className='LoginForm' onSubmit={handleSubmit}>
                        <label className='LoginLabel' htmlFor="username">아이디</label>
                        <input
                            className='LoginInput'
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setId(e.target.value)}
                            value={id}
                            required
                            placeholder='아이디를 입력하세요'
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
                            placeholder='비밀번호를 입력하세요'
                            />
                        <Divider style={{margin: '5px'}}/>
                        <KakaoLogin/>
                        <Button onClick={navigateHome} style={{margin:'0 auto', marginTop:'10px'}}> 
                        완료
                        </Button>
                    </form> 
                    <p className="line">
                        계정이 필요하다면? : 
                            <a style={{textDecoration:'underline', marginLeft: '10px' }} href="/user/signup">회원가입페이지로 이동</a>
                    </p>
                </section>
            )}
            <Footer></Footer>
            </ChakraProvider>
    )
}

export default Login;