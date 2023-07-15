export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dd3b880c78msh9e3ad82f1da0b9dp1aec0cjsnda4511c6f494",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dd3b880c78msh9e3ad82f1da0b9dp1aec0cjsnda4511c6f494",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
