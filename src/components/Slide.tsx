import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS, FONTS } from './theme';

const Slide = () => {
  const slides = [
    {
      imageSource: {
        uri: 'https://images.unsplash.com/photo-1693115823976-7809af2b2c87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      },
      text: 'Roma',
    },
    {
      imageSource: {
        uri: 'https://images.unsplash.com/photo-1693115236667-7a1703506fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      },
      text: 'Bali',
    },
    {
      imageSource: {
        uri: 'https://lh3.googleusercontent.com/p/AF1QipOMIhYX2U_mAP2wsf95PLhSTlnRgEgdGjpqoLQo=s1360-w1360-h1020',
      },
      text: 'Pantai Holtekam Jayapura',
    },
    {
      imageSource: require('../images/beach.jpeg'),
      text: 'Pantai Hamadi Jayapura',
    },
  ];

  return (
    <View style={{ backgroundColor: 'white', marginTop: 20,height:320,width:'auto', }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
        <Text style={{ ...FONTS.body3 }}>Top Wisata</Text>
        <Text style={{ ...FONTS.body3, color: COLORS.primary }}>Lihat Semua</Text>
      </View>
      <Swiper style={styles.wrapper} autoplay={true}>
        {slides.map((slide, index) => (
          <View style={styles.slide} key={index}>
            <Image source={slide.imageSource} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{slide.text}</Text>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    marginTop:2,
    marginLeft:20,
    marginRight:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  image: {
    borderRadius: 20,
    width: 350,
    height: 200,
  },
  textContainer: {
    position: 'absolute',
    bottom: 10, // Sesuaikan jarak teks ke bawah jika perlu
    left: 10, // Sesuaikan jarak teks ke kiri jika perlu
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Slide;
