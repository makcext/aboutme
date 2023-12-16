// hooks/useJwt.ts
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const useJwt = () => {
  const [jwt, setJwt] = useState(Cookies.get('jwt'));

  useEffect(() => {
    setJwt(Cookies.get('jwt'));
  }, [jwt]);

  let userId = '';
  if (jwt) {
    try {
      const decodedToken: any = jwtDecode(jwt);
      if (decodedToken) {
        userId = decodedToken.userId;
      }
    } catch (error) {
      console.error("Invalid token", error);
    }
  }

  return userId;
};