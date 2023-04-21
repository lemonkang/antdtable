declare namespace AxiosType{
    type Result<T> = {
        code: number,
        message: string,
        result: T
      }
}