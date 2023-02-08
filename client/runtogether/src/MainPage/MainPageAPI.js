import axios from 'axios'

async function getFeed() { // async, await을 사용하는 경우
    try {
        // GET 요청은 params에 실어 보냄
      const response = await axios.get('https://cb711138-92f5-47a5-9bbc-6f98788338c4.mock.pstmn.io/main/feed');
      return response
    } catch (e) {
        // 실패 시 처리
        console.error(e);
    }
}