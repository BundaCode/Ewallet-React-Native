import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomerScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Halaman Utama</Text>
      <Button
        title="Pergi ke Halaman Lain"
        // onPress={() => navigation.navigate('HomerScreen')} // Ganti dengan nama layar yang sesuai
      />
    </View>
  );
};

export default HomerScreen;
