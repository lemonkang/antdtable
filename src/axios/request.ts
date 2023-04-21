import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
// 导出Request，可以用来自定义传递配置来创建实例
export class Request {
    // axios 实例
  private  instance: AxiosInstance
    // 基础配置，url和超时时间
  private  baseConfig: AxiosRequestConfig = { baseURL: "/api", timeout: 60000 }

    constructor(config?: AxiosRequestConfig) {
        this.instance = axios.create(Object.assign(this.baseConfig, config))

        this.instance.interceptors.request.use(
            (config) => {
                // 一般会请求拦截里面加token，用于后端的验证
                const token = localStorage.getItem("token") as string
                if (token) {
                    config.headers!.Authorization = token;
                }

                return config
            },
            (err: any) => {
                // 请求错误，这里可以用全局提示框进行提示
                return Promise.reject(err)
            },
        )

        this.instance.interceptors.response.use( 
              (res: AxiosResponse) => {
            // 直接返回res，当然你也可以只返回res.data
            // 系统如果有自定义code也可以在这里处理
            return res
          },
        
          (err: any) => {
            // 这里用来处理http常见错误，进行全局提示
            let message = "";
            switch (err.response.status) {
              case 400:
                message = "请求错误(400)";
                break;
              case 401:
                message = "未授权，请重新登录(401)";
                // 这里可以做清空storage并跳转到登录页的操作
                break;
              case 403:
                message = "拒绝访问(403)";
                break;
              case 404:
                message = "请求出错(404)";
                break;
              case 408:
                message = "请求超时(408)";
                break;
              case 500:
                message = "服务器错误(500)";
                break;
              case 501:
                message = "服务未实现(501)";
                break;
              case 502:
                message = "网络错误(502)";
                break;
              case 503:
                message = "服务不可用(503)";
                break;
              case 504:
                message = "网络超时(504)";
                break;
              case 505:
                message = "HTTP版本不受支持(505)";
                break;
              default:
                message = `连接出错(${err.response.status})!`;
            }
            // 这里错误消息可以使用全局弹框展示出来
            // 比如element plus 可以使用 ElMessage
            // ElMessage({
            //   showClose: true,
            //   message: `${message}，请检查网络或联系管理员！`,
            //   type: "error",
            // });
            // 这里是AxiosError类型，所以一般我们只reject我们需要的响应即可
            return Promise.reject(err.response)
        })

    }

    public get<T>(url:string,params?:any,config?:AxiosRequestConfig):Promise<AxiosResponse<AxiosType.Result<T>>>{
        return this.instance({
            method:'get',
            url:url,
            params:params,
            ...config
        })
    }

    public postAsJson<T>(url:string,data?:any,config?:AxiosRequestConfig):Promise<AxiosResponse<AxiosType.Result<T>>>{
        return this.instance({
            method: 'post',
            url: url, 
            data:data,
            headers: {
                'Content-Type': 'application/json'
              },
           ...config   
        })
    }

    public postAsFormData<T>(url:string,data?:any,config?:AxiosRequestConfig):Promise<AxiosResponse<AxiosType.Result<T>>>{
        return this.instance({
            method: 'post',
            url: url, 
            data:data,
            headers: {
                'Content-Type': 'multipart/form-data'
              },
           ...config   
        })    
    }

    public putAsJson<T>(url:string,data?:any,config?:AxiosRequestConfig):Promise<AxiosResponse<AxiosType.Result<T>>>{
        return this.instance({
            method: 'put',
            url: url, 
            data:data,
            headers: {
                'Content-Type': 'application/json'
              },
           ...config   
        })    
    }
    public putAsFormData<T>(url:string,data?:any,config?:AxiosRequestConfig):Promise<AxiosResponse<AxiosType.Result<T>>>{
        return this.instance({
            method: 'put',
            url: url, 
            data:data,
            headers: {
                'Content-Type': 'application/json'
              },
           ...config   
        })    
    }
    public delete<T>(url:string,config?:AxiosRequestConfig):Promise<AxiosResponse<AxiosType.Result<T>>>{
        return this.instance({
            method: 'delete',
            url: url, 
           ...config   
        })    
    }

}
export const ApiService=new Request()

