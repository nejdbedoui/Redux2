import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/movies';



export const getAll = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching all content:', error);
      throw error;
    }
  };
  


  
export const addPlayerToEvent = async (data) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${data.id}`,data);
  
      console.log('Player added successfully:', response.data);
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };
  