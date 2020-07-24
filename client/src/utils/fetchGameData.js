import axios from 'axios';

const fetchGameData = async (url, setGameData, setIsError, setIsLoading) => {
  setIsError(false);
  setIsLoading(true);

  try {
    const result = await axios(url);
    setGameData(result.data.data || []);
  } catch (err) {
    setIsError(true);
    console.error(err);
  }

  setIsLoading(false);
};

export default fetchGameData;
