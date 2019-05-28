import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let didCancel = false;

    async function fetchStories() {
      try {
        setError(false);
        const res = await axios(url);
        if (!didCancel) {
          setData(res.data);
          setLoading(false);
        }
      } catch (err) {
        setError(true);
      }
    }

    fetchStories();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [data, loading, error];
};

export default useApi;
