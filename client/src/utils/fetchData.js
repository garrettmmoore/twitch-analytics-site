import axios from 'axios';

const fetchData = async (url, setData, setIsError, setIsLoading) => {
  setIsError(false);
  setIsLoading(true);

  try {
    const result = await axios(url);
    // console.log(Object.entries(result.data));
    // console.log(result.data.data);
    setData(result.data.data[0] || result.data.data || []);
  } catch (err) {
    setIsError(true);
    console.error(err);
  }

  setIsLoading(false);
};

export default fetchData;
