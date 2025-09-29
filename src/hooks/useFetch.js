import { useCallback, useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw Error('데이터를 받아오지 못했습니다.');
      }
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.error(err);
      setError({ message: '네트워크 오류가 발생했습니다.' });
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
}

export default useFetch;
