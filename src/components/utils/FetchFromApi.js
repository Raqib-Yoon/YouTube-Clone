import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '80',
  },
  headers: {
    'X-RapidAPI-Key': '8f42ae1204mshb087429a097b55dp185835jsn9f105a4b79fa',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


const FetchFromApi = async (url) => {

  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data)
  return data;



}


const relatedVideos = async (videoId) => {

  const options = {
    params: {
      relatedToVideoId: videoId,
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '8f42ae1204mshb087429a097b55dp185835jsn9f105a4b79fa',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  const { data } = await axios.get('https://youtube-v31.p.rapidapi.com/search', options);
  console.log(data);
  return data



}
export default FetchFromApi
export { relatedVideos }