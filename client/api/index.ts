import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

type ServerError = {
  error: string;
  msg: string;
  data: any;
};

export const loginWithLN = async (): Promise<any> => {
  try {
    console.log('axios.defaults.baseURL',axios.defaults.baseURL)
    const response = await axios.get('user/login-lnurl');
    console.log('response',response)
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }
  }
}