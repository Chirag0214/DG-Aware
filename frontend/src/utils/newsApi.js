import axios from 'axios';

export const getAllNews = async () => {
  const res = await axios.get('http://localhost:5001/news/getall');
  return res.data;
};

export const getNewsById = async (id) => {
  const res = await axios.get(`http://localhost:5001/news/${id}`);
  return res.data;
};
