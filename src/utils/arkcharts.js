import axios from 'axios';

const httpurl = 'api/inquiry/gacha?';

const token = 'f4LPXHr4rhpucWlfe8CX4t73';

const page = 1;

export default function atest() {
  axios.get(`${httpurl}page=${page}&token=${token}`)
    .then((res) => {
      console.log(`抽卡总次数${res.data.pagination.total}`);
      console.log(res.data.list);
    });
}
