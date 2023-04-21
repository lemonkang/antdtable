import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://api.example.com'
  });

  // Add a request interceptor
  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
  export const axiosGet=(url,param,config)=>{
    return instance({
        method: 'get',
        url: url, 
        params:param,
        ...config
    })
  }
  export const axiosPostASJson=(url,data,config)=>{
    return instance({
        method: 'post',
        url: url, 
        data:data,
        headers: {
            'Content-Type': 'application/json'
          },
       ...config   
    })
  }
  export const axiosPostASFormData=(url,data,config)=>{
    return instance({
        method: 'post',
        url: url, 
        data:data,
        headers: {
            'Content-Type': 'multipart/form-data'
          },
       ...config   
    })
  }
  export const axiosPutASJson=(url,data,config)=>{
    return instance({
        method: 'post',
        url: url, 
        data:data,
        headers: {
            'Content-Type': 'application/json'
          },
       ...config   
    })
  }
  export const axiosPutASFormData=(url,data,config)=>{
    return instance({
        method: 'post',
        url: url, 
        data:data,
        headers: {
            'Content-Type': 'multipart/form-data'
          },
       ...config   
    })
  }