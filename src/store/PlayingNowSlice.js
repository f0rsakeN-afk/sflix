import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2YxZDA1NzQ3MzQ5NTY2YjVhZjhlMmJlY2ExYTE3OCIsInN1YiI6IjY1ZmM1OWU2NjA2MjBhMDEzMDI1NTY0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lw9nf130uEt4eiAXHM3H_qUc7u-aSQeRCHLVv1uEKH8'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });