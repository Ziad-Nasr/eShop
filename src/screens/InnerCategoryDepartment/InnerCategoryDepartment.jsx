import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
// import Dropdown from 'react-dropdown';
import BackArrow from '../../components/BackArrow/BackArrow';
import FormScan from '../../components/FormScan/FormScan';
import DropShadow from 'react-native-drop-shadow';
// import DropDownPicker from 'react-native-dropdown-picker';

import styles from './InnerCategoryDepartment.styles.js';

const InnerCategoryDepartment = ({navigation}) => {
  const [currentClothType, setCurrentClothType] = React.useState('');
  const [heart, setHeart] = React.useState(false);
  const options = [
    {
      value: 'Banana',
    },
    {
      value: 'Mango',
    },
    {
      value: 'Pear',
    },
  ];
  const defaultOption = options[0];

  const clothTypes = [
    {
      clothType: 'All Clothing',
    },
    {
      clothType: 'Activewear',
    },
    {
      clothType: 'Blazer',
    },
    {
      clothType: 'T-Shirt',
    },
    {
      clothType: 'Shirt',
    },
  ];

  const cloths = [
    {
      image: require('../../assets/Zara/front1.jpg'),
      rating: 4.5,
      name: 'Adidas Checkered',
      catagory: 'Shoes for Man',
      price: '39.99 €',
    },
    {
      image: require('../../assets/Zara/sideZara.jpg'),
      rating: 3.5,
      name: 'Checkered',
      catagory: 'Man',
      price: '139.99 €',
    },
    {
      image: require('../../assets/Zara/alone.jpg'),
      rating: 1.3,
      name: 'Adidas Checkered',
      catagory: 'for Man',
      price: '999,99 €',
    },
    {
      image: require('../../assets/Zara/front2.jpg'),
      rating: 4.5,
      name: 'Nike Checkered',
      catagory: 'Shirts for Man',
      price: '49.99 €',
    },
    {
      image: require('../../assets/Zara/front2.jpg'),
      rating: 4.5,
      name: 'Nike Checkered',
      catagory: 'Shirts for Man',
      price: '49.99 €',
    },
    {
      image: require('../../assets/Zara/front2.jpg'),
      rating: 4.5,
      name: 'Nike Checkered',
      catagory: 'Shirts for Man',
      price: '49.99 €',
    },
    {
      image: require('../../assets/Zara/front2.jpg'),
      rating: 4.5,
      name: 'Nike Checkered',
      catagory: 'Shirts for Man',
      price: '49.99 €',
    },
    {
      image: require('../../assets/Zara/sideZara.jpg'),
      rating: 4.3,
      name: 'Adibas',
      catagory: 'for Man',
      price: '43.95 €',
    },
    {
      image: require('../../assets/Zara/sideZara.jpg'),
      rating: 4.3,
      name: 'Adibas',
      catagory: 'for Man',
      price: '43.95 €',
    },
    {
      image: require('../../assets/Zara/front1.jpg'),
      rating: 4.3,
      name: 'Adibas',
      catagory: 'for Man',
      price: '43.95 €',
    },
  ];

  return (
    <View style={styles.body}>
      {/* <App /> */}
      {/* <ScrollView
        style={{height: '80%'}}
        // horizontal
        showsVerticalScrollIndicator={false}> */}
      <View style={{paddingHorizontal: 20}}>
        <View style={styles.Header}>
          <BackArrow navigation={navigation} navigate={'Home'} />
          <Text style={{color: 'black'}}>Categories</Text>
          <TouchableOpacity style={styles.BlueCircle}>
            <Image
              style={styles.Bell}
              source={require('../../assets/notification.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.Form}>
          <FormScan />
        </View>
      </View>
      <View style={{paddingStart: 20}}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={clothTypes}
          renderItem={({item}) => {
            return (
              <DropShadow style={styles.Shadow}>
                <TouchableOpacity
                  style={[
                    styles.size,
                    currentClothType == item.clothType
                      ? {
                          backgroundColor: '#fe7052d6',
                          borderColor: '#fe7052d6',
                        }
                      : null,
                  ]}
                  onPress={() => setCurrentClothType(item.clothType)}>
                  <Text
                    style={[
                      styles.sizetext,
                      currentClothType == item.clothType
                        ? {color: 'white'}
                        : null,
                    ]}>
                    {item.clothType}
                  </Text>
                </TouchableOpacity>
              </DropShadow>
            );
          }}
        />
      </View>
      <View style={{paddingHorizontal: 20}}>
        <View style={styles.Results}>
          <Text style={styles.NumberResults}>920 </Text>
          <Text style={styles.TextResults}>Results Found</Text>
        </View>
        <View style={{height: '75%'}}>
          <View style={{}}>
            <FlatList
              data={cloths}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              // nestedScrollEnabled={true}
              renderItem={({item}) => {
                return (
                  <View style={styles.ItemsContainer}>
                    <TouchableOpacity>
                      <ImageBackground
                        source={item.image}
                        style={styles.imgMain}>
                        <View style={styles.topIconsItem}>
                          <View style={styles.StarContainer}>
                            <Image
                              source={require('../../assets/star.png')}
                              style={styles.imgStar}
                            />
                            <Text>{item.rating}</Text>
                          </View>
                          <TouchableOpacity
                            style={styles.whiteCircleHeart}
                            onPress={() => setHeart(!heart)}>
                            <Image
                              source={
                                heart
                                  ? require('../../assets/blackheart.png')
                                  : require('../../assets/heart.png')
                              }
                              style={styles.heart}
                            />
                          </TouchableOpacity>
                        </View>
                        <Image />
                      </ImageBackground>
                    </TouchableOpacity>
                    <View>
                      <Text>{item.name}</Text>
                      <Text>{item.catagory}</Text>
                      <Text style={styles.black}>{item.price}</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
        {/* </ScrollView> */}
      </View>
      {/* <View style={{paddingHorizontal: 20}}> */}
      <View style={styles.BottomContainer}>
        <TouchableOpacity style={styles.ThreeContainers}>
          <Image
            source={require('../../assets/setting.png')}
            style={styles.bottomImg}
          />
          <Text style={styles.bottomText}>Filter</Text>
        </TouchableOpacity>
        <View style={styles.verticalLine}></View>
        <TouchableOpacity style={styles.ThreeContainers}>
          <Image
            source={require('../../assets/up-down.png')}
            style={styles.bottomImg}
          />
          <Text style={styles.bottomText}>Sort</Text>
        </TouchableOpacity>
        <View style={styles.verticalLine}></View>
        <TouchableOpacity style={styles.ThreeContainers}>
          <Image
            source={require('../../assets/location.png')}
            style={styles.bottomImg}
          />
          <Text style={styles.bottomText}>Pickup</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </View>
  );
};

export default InnerCategoryDepartment;
