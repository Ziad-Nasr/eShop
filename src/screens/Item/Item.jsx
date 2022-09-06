import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import styles from './Item.styles';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
import BackArrow from '../../components/BackArrow/BackArrow';

const Item = ({navigation}) => {
  const [photo, setPhoto] = React.useState(
    require('../../assets/Zara/front1.jpg'),
  );
  const [heart, setHeart] = React.useState(false);
  const [itemCount, setItemCount] = React.useState(1);
  const [currentSize, setCurrentSize] = React.useState('');
  //   const [sizee, setSizee] = React.useState([
  //     {
  //       S: false,
  //       M: false,
  //       L: true,
  //       XL: false,
  //       XXL: false,
  //     },
  //   ]);
  const items = [
    {
      image: require('../../assets/Zara/front1.jpg'),
      name: 'item1front',
    },
    {
      image: require('../../assets/Zara/sideZara.jpg'),
      name: 'item1side',
    },
    {
      image: require('../../assets/Zara/front2.jpg'),
      name: 'item2front',
    },
    {
      image: require('../../assets/Zara/alone.jpg'),
      name: 'item2alone',
    },
  ];
  const sizes = [
    {
      size: 'S',
    },
    {
      size: 'M',
    },
    {
      size: 'L',
    },
    {
      size: 'XL',
    },
    {
      size: 'XXL',
    },
  ];

  return (
    <View style={styles.body}>
      <View style={styles.topContainer}>
        <ImageBackground
          source={photo}
          style={styles.frontImage}
          resizeMode="cover">
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              padding: 15,
            }}>
            <BackArrow navigation={navigation} navigate="Home" />
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
        </ImageBackground>
      </View>

      <View style={styles.MiddleContainer}>
        <Text style={[styles.black, styles.itemTitle]}>Men's Cardigan</Text>
        <View style={styles.itemList}>
          <FlatList
            style={styles.itemList2}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={items}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => setPhoto(item.image)}>
                  <Image source={item.image} style={styles.cardItems} />
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View>
          <View style={styles.review}>
            <Image
              source={require('../../assets/star.png')}
              style={styles.star}
            />
            <Text style={styles.black}>4.9</Text>
            <Text style={styles.secondary}>(120)</Text>
            <Text style={styles.orange}>reviews</Text>
          </View>
          <Text style={[styles.black, styles.MainName]}>
            Men Green Raglan Sleeved Cardigan
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.black, styles.cost]}>49,00 €</Text>
          <Text style={styles.secondary}>VAT included</Text>
        </View>
        <View style={styles.sizeContainer}>
          <View>
            <Text style={[styles.black, styles.selectSize]}>Select Size</Text>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={sizes}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.size,
                    currentSize == item.size
                      ? {backgroundColor: '#14245b'}
                      : null,
                  ]}
                  onPress={() => setCurrentSize(item.size)}>
                  <Text
                    style={[
                      styles.sizetext,
                      currentSize == item.size ? {color: 'white'} : null,
                    ]}>
                    {item.size}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.BottomContainer}>
          <View style={styles.itemcounting}>
            <TouchableOpacity
              style={styles.plusMinus}
              onPress={() =>
                itemCount > 0 ? setItemCount(itemCount - 1) : null
              }>
              <Text style={styles.plusMinusText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{itemCount}</Text>
            <TouchableOpacity
              style={styles.plusMinus}
              onPress={() =>
                itemCount < 5 ? setItemCount(itemCount + 1) : null
              }>
              <Text style={styles.plusMinusText}>+</Text>
            </TouchableOpacity>
          </View>
          <OrangeButton
            ButtonText="Add to cart"
            Iconsrc={require('../../assets/whitebag.png')}
            onPress={() => navigation.navigate('Payment')}
          />
        </View>
      </View>
    </View>
  );
};

export default Item;
