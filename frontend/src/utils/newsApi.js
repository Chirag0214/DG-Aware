import axios from 'axios';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5001';

export const getAllNews = async () => {
  const res = await axios.get(`${API_BASE_URL}/news/getall`);
  return res.data;
};

export const getNewsById = async (id) => {
  const res = await axios.get(`${API_BASE_URL}/news/${id}`);
  return res.data;
};
