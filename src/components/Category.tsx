import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet,Image,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS, FONTS,SIZES } from './theme';
import icon from './icon';


const CategoryMenu = () => {

  const featuresData = [
    {
        id: 1,
        icon: icon.phone,
        color: COLORS.primary,
        backgroundColor: COLORS.lightGreen,
        description: "Pulsa"
    },
    {
        id: 2,
        icon: icon.send,
        color: COLORS.yellow,
        backgroundColor: COLORS.lightyellow,
        description: "PLN"
    },
    {
        id: 3,
        icon: icon.internet,
        color: COLORS.primary,
        backgroundColor: COLORS.lightGreen,
        description: "PDAM"
    },
    {
        id: 4,
        icon: icon.wallet,
        color: COLORS.red,
        backgroundColor: COLORS.lightRed,
        description: "Pasc\abayar"
    },
    {
        id: 5,
        icon: icon.bill,
        color: COLORS.yellow,
        backgroundColor: COLORS.lightyellow,
        description: "BPJS"
    },
    {
        id: 6,
        icon: icon.game,
        color: COLORS.primary,
        backgroundColor: COLORS.lightGreen,
        description: "Games"
    },
    {
        id: 7,
        icon: icon.train,
        color: COLORS.red,
        backgroundColor: COLORS.lightRed,
        description: "Kereta"
    },
    {
        id: 8,
        icon: icon.more,
        color: COLORS.purple,
        backgroundColor: COLORS.lightpurple,
        description: "More"
    },
]
  const categories: string[] = ['Favorit', 'Transfortasi', 'Grab', 'Financial'];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [showFavoriteContent, setShowFavoriteContent] = useState<boolean>(false);
  const [showPilihanLainContent, setShowPilihanLainContent] = useState<boolean>(false);

  const handleCategoryPress = (category: string) => {
    setActiveCategory(category);
    setShowFavoriteContent(category === 'Favorit');
    setShowPilihanLainContent(category === 'Pilihan Lain');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryContainer}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.categoryButton,
                  activeCategory === category && styles.activeCategoryButton,
                ]}
                onPress={() => handleCategoryPress(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    activeCategory === category && styles.activeCategoryText,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        
        <FlatList data={featuresData}
        numColumns={4}
        scrollEnabled={false} 
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={item => `${item.id}`}
        style={{paddingHorizontal:30,marginTop:-34}}
        renderItem={({item}) => (
          <View style={{}}>
          <TouchableOpacity
                        style={{
                          height: 50,
                          width: 50,
                          justifyContent: 'center', // Memusatkan vertikal
                          alignItems: 'center',     // Memusatkan horizontal
                          backgroundColor: item.backgroundColor,
                          borderRadius: 40,
                          shadowColor: '#000',
                          shadowOffset: { width: 0, height: 2 },
                          shadowOpacity: 0.3,
                          shadowRadius: 2,
                          // elevation: 4, // Android shadow
                       
                        }}
                    >
                        <Image
                          source={item.icon} 
                        resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: item.color,
                                
                            }}
                        />
                        
                        <View
                            style={{
                              position: 'absolute',
                              top: -5,
                              right: -5,
                              height: 15,
                              width: 15,
                              // /backgroundColor: 'red', // Change to your indicator color
                              borderRadius: 50,
                            }}
                        >
                        </View>

                        
            </TouchableOpacity>
            <View
                style={{
                  width: 50, 
                  justifyContent: 'center',
                  alignItems:'center',
                  
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    flexWrap: 'wrap', 
                                        ...FONTS.body4,
                  }}
                >
                  {item.description}
                </Text>
              </View>

        
       </View>

        )}

        >
         

        </FlatList>
       

       
                  
                    
                  
       
      </View>


     
    </View>
  );
};

const ActionButton: React.FC<{ iconName: string; text: string }> = ({ iconName, text }) => {
  return (
    <TouchableOpacity style={styles.actionButton}>
      <Icon name={iconName} size={25} color={COLORS.white} />
      <Text style={{color:COLORS.white,justifyContent:'center',alignItems:'center'}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: COLORS.white,
    height:280
    // borderWidth:4
  },
  categoryContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 35,
    alignItems: 'center',
  },
  categoryButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  activeCategoryButton: {
    backgroundColor: COLORS.primary,
  },
  categoryText: {
    ...FONTS.body4,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  activeCategoryText: {
    color: COLORS.white,
  },
 
  actionButton: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary, // Add a background color
    borderRadius: 8,
    marginRight: 10,
  },
  actionButtonText: {
    ...FONTS.body3,
    color: 'white',
    marginTop: 5,
  },
});

export default CategoryMenu;
