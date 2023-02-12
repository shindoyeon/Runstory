// 팔로우 팔로워 및 개인피드페이지 -팔로워, 팔로우 부분 구현
import React from 'react';
import axios from '../common/axios';

async function followUser(TOKEN, accountname) {
  try {
    const data = await axios.post(axios.baseURL + `/profile/${accountname}/follow`, {
      headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${TOKEN}`,
        Authorization: localStorage.getItem(TOKEN),
      },
    });
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
export { followUser };
