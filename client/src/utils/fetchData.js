import axios from 'axios';

const fetchData = async (url, setData, setIsError, setIsLoading) => {
  setIsError(false);
  setIsLoading(true);

  try {
    const result = await axios(url);

    setData(result.data.data[0] || []);
  } catch (err) {
    setIsError(true);
    console.error(err);
  }

  setIsLoading(false);
};

export default fetchData;
