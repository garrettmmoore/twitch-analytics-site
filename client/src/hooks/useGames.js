import axios from 'axios';
import { useQuery } from 'react-query';

const URL = process.env.REACT_APP_API_BASE_URL;

export const fetchGames = values =>
  axios.get(`${URL}/games/${values}`).then(res => res.data);

export default function useGames(gameId) {
  return useQuery(['games', gameId], () => fetchGames(gameId));
}
