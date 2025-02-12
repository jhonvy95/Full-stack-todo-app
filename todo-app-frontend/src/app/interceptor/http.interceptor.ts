import { HttpInterceptorFn } from '@angular/common/http';
import { Constants } from '../constants/constants';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(Constants.ACCESS_TOKEN);
  const clonedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  return next(clonedReq);
};
