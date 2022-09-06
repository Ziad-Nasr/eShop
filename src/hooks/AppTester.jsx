import makeAxios from './useAxios';
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
const AppTester = () => {
  const {response, loading, error} = makeAxios({
    method: '.post',
    url: '/https://62e10e64fa99731d75cca409.mockapi.io/Cards',
    body: JSON.stringify({
      userId: 1,
      id: 19392,
      title: 'title',
      body: 'Sample text',
    }),
    headers: JSON.stringify({accept: '*/*'}),
  });
  
  Pause


  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);

  return (
    <View className="App">
      <Text>Posts</Text>

      {loading ? (
        <Text>loading...</Text>
      ) : (
        <View>
          {error && (
            <View>
              <Text>{error.message}</Text>
            </View>
          )}
          <Text>{data && <Text>{data.id}</Text>}</Text>
        </View>
      )}
    </View>
  );
};

export default AppTester;
