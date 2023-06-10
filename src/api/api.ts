import axios from 'axios';

const apiManager = axios.create({
  baseURL: 'http://192.168.1.44:3000', // veya API'nin URL'sini buraya yazın
  timeout: 5000, // İsteğin zaman aşımı süresini burada belirleyebilirsiniz
});

export default apiManager;
