import axios from 'axios';

// 創建axios實例
const service = axios.create({
  baseURL: 'https://ae-api.ifalink.com/api/', // api的base_url
  // withCredentials: true, // 跨域請求時是否發送cookies
  timeout: 5000, // 請求超時設置
});

// 請求攔截器
service.interceptors.request.use((config) => {
  // 請求前做點什麼？
  // if (!config.data) {
  //     config.data = {};
  // }

  console.log('請求前');
  // // console.log(config)
  // // 設置公共參數
  // console.log(qs.stringify(config.data));

  return config;
}, (error) => {
  // 處理請求錯誤
  console.log(error); // 用於調試
  return Promise.reject(error);
});

// 響應攔截器
service.interceptors.response.use((response) => {
  // let res = respone.data; // 如果返回的結果是data.data的，嫌麻煩可以用這個，return res
  console.log('發送API後攔截');
  // 如果回應200表示正常連線，可以返回資料結果，反之reject
  if (response.status === 200) {
    return Promise.resolve(response);
  }
  return Promise.reject(response);
}, (error) => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = 'Request Error!';
        break;
      case 401:
        error.message = 'No permission, need login.';
        break;
      case 403:
        error.message = 'Access denied!';
        break;
      case 404:
        error.message = 'Address not exist!';
        break;
      case 408:
        error.message = 'Request timeout!';
        break;
      case 500:
        error.message = 'Server inside error!';
        break;
      case 501:
        error.message = 'Service not allowed!';
        break;
      case 502:
        error.message = 'Bad gateway!';
        break;
      case 503:
        error.message = 'No service!';
        break;
      case 504:
        error.message = 'Gateway timeout!';
        break;
      case 505:
        error.message = 'http version not supported!';
        break;

      default:
        break;
    }
  }
  console.error(`錯誤請求：${error}`); // 用於調試
});

export default service;
