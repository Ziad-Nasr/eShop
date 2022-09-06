import React from 'react';
import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import {Text} from '../../wrappers';
import FormInput from '../../components/Form/FormInput';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
import FormScan from '../../components/FormScan/FormScan';
import BlueBell from '../../components/BlueBell/BlueBell';
import Item from '../Item/Item';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import styles from './Home.styles';

const Home = ({navigation}) => {
  // const Tab = createBottomTabNavigator();

  const Recommended = [
    {
      image: require('../../assets/Zara/front1.jpg'),
      rating: 4.5,
      name: 'Adidas Checkered',
      catagory: 'Shoes for Man',
      price: '39.99 €',
    },
    {
      image: require('../../assets/Zara/front2.jpg'),
      rating: 3.5,
      name: 'Checkered',
      catagory: 'Man',
      price: '139.99 €',
    },
    {
      image: require('../../assets/mountain.jpg'),
      rating: 1.3,
      name: 'Adidas Checkered',
      catagory: 'for Man',
      price: '999,99 €',
    },
    {
      image: require('../../assets/forest.jpg'),
      rating: 4.5,
      name: 'Nike Checkered',
      catagory: 'Shirts for Man',
      price: '49.99 €',
    },
    {
      image: require('../../assets/beach.jpg'),
      rating: 4.3,
      name: 'Adibas',
      catagory: 'Stuff for Man',
      price: '43.95 €',
    },
  ];
  const Departments = [
    {
      image: require('../../assets/shoes.png'),
      name: 'Sale',
    },
    {
      image: require('../../assets/woman.png'),
      name: 'Women',
    },
    {
      image: require('../../assets/man.png'),
      name: 'Men',
    },
    {
      image: require('../../assets/kid.png'),
      name: 'Kids',
    },
    {
      image: require('../../assets/dog.png'),
      name: 'Dogs',
    },
    {
      image: require('../../assets/electronics.png'),
      name: 'Electronics',
    },
  ];
  return (
    <View style={styles.MainContainer}>
      <View>
        <View style={styles.NameBell}>
          <Text>Morning, User!</Text>
          <BlueBell />
        </View>
        <Text style={styles.Title}>What are you looking for today!</Text>
      </View>

      <View style={{marginTop: 20}}>
        <FormScan />
      </View>

      <View style={styles.Offers}>
        <View style={styles.TextButton}>
          <Text style={styles.whiteText}>
            <Text style={styles.UniquePercent}>60% </Text>off
          </Text>
          <Text style={styles.whiteText}>everything</Text>
          <View style={styles.OrangeButton}>
            <OrangeButton ButtonText="Explore" />
          </View>
        </View>
        <View style={{flexDirection: 'column-reverse'}}>
          <Image
            source={require('../../assets/FictionalCharacter.png')}
            style={styles.FinctionalCharacter}
          />
        </View>
      </View>
      <View style={{paddingStart: 8}}>
        <View style={styles.InnerTitle}>
          <Text style={styles.MainSubTitle}>Shop by Department</Text>
          <TouchableOpacity>
            <Text>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.ProductList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Departments}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.ProductTouch}>
                <View style={styles.Product}>
                  <Image source={item.image} style={styles.ProductImage} />
                </View>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={{paddingStart: 8}}>
        <View style={styles.InnerTitle}>
          <Text style={styles.MainSubTitle}>Recommended</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Department')}>
            <Text>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={Recommended}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.RecommendedContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Item')}>
                  <View style={styles.StarContainer}>
                    <Image
                      source={require('../../assets/star.png')}
                      style={styles.imgStar}
                    />
                    <Text>{item.rating}</Text>
                  </View>
                  <Image source={item.image} style={styles.imgMain} />
                </TouchableOpacity>
                <Text>{item.name}</Text>
                <Text>{item.catagory}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.black}>{item.price}</Text>
                  <View style={styles.grayContainer}>
                    <Image
                      source={require('../../assets/blackbag.png')}
                      style={styles.bag}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Item} />
      </Tab.Navigator> */}
    </View>
  );
};

export default Home;
