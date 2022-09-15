import axios from 'axios';

export const API_LINK = 'https://62e10e64fa99731d75cca409.mockapi.io/';

export const post = async (url, data = {}) => {
  return await axios({
    method: 'POST',
    url: API_LINK + url,
    data: data,
    // headers: {
    //   Accept: 'application/json, text/plain, /',
    //   'Content-Type': 'multipart/form-data',
    // },
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export const get = async (url, params = {}) => {
  return await axios({
    method: 'GET',
    url: API_LINK + url,
    params: params,
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

// const makeAxios = (method, URL, data = null, headers = null) => {
//   const [response, setResponse] = useState(undefined);
//   const [error, setError] = useState('');
//   const [loading, setloading] = useState(true);

//   const fetchData = () => {
//     axios[method](URL, JSON.parse(headers), JSON.parse(data))
//       .then(res => {
//         setResponse(res.data);
//       })
//       .catch(err => {
//         setError(err);
//       })
//       .finally(() => {
//         setloading(false);
//       });
//   };
//   React.useEffect(() => {
//     fetchData();
//   }, [method, URL, data, headers]);
//   return {response, error, loading};
// };

// export default makeAxios;

////////////////////////////////////////////////////////////////////////////////////

// import useAxios from 'axios-hooks';
// import {configure} from 'axios-hooks';
// import axios from 'axios';

// function axiosPost(props) {
//   axios.post(`https://62e10e64fa99731d75cca409.mockapi.io/Cards`, {
//     props,
//     props,
//     props,
//     props,
//   });
// }

// export function axiosGet() {
//   axios
//     .get(`https://62e10e64fa99731d75cca409.mockapi.io/Cards`)
//     .then(response => {
//       console.log(response.data);
//     });
// }
// function axiosDelete(id) {
//   axios
//     .delete(`https://62e10e64fa99731d75cca.mockapi.io/Cards${id}`)
//     .then(response => {
//       console.log('deleted');
//       console.log(response.data);
//     });
// }
