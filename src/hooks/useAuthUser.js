import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
function useAuthUser() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(value => {
        setLoggedIn(!!value);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    isLoggedIn,
    setLoggedIn,
    loading,
  };
}

export default useAuthUser;
