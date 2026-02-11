// src/utils/articleApi.js
import axios from 'axios';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5001';

export const getAllArticles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/article/getall`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch articles');
  }
};

export const getArticleById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/article/getbyid/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch article');
  }
};
