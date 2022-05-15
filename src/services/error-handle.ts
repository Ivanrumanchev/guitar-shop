import request from 'axios';
import { toast } from 'react-toastify';
import { HttpCode } from '../const';
import { ErrorType } from '../types/error';

export const errorServerHandle = (error: ErrorType): void | HttpCode => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        toast.info(response.data.error);
        break;
      case HttpCode.NotFound:
        toast.error(response.statusText);

        return HttpCode.NotFound;
    }
  }
};
