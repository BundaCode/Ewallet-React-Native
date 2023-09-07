import React from 'react'
import { Text, View, TouchableOpacity, } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, SIZES } from './theme';


const Headers = () => {

  
  return (
    <View>
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin:20 }}>
        <Text style={{ ...FONTS.h2}}>OKO</Text>
        <TouchableOpacity style={{flexDirection:'row', backgroundColor:  COLORS.primary,justifyContent:'space-between', borderRadius: 5,margin:5, }}>
        <Icon name="arrow-redo-outline" size={18} color="#fff" style={{ marginLeft: 5 ,marginTop:6}} />
          <Text style={{ ...FONTS.body3,color:COLORS.white, fontWeight: 'bold',margin:4}}>Promo</Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: COLORS.primary, borderRadius: 20, marginTop: 5,marginLeft:20,marginRight:20, padding: 15 }}>
        <Text style={{ ...FONTS.body3,color:COLORS.white}}>Total Saldo</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
          <Text style={{...FONTS.body2,color:COLORS.white }}>Rp.532.000.000</Text>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',borderRadius:5,backgroundColor:COLORS.lightpurple }}>
            <Text style={{ ...FONTS.body3,color:COLORS.primary,margin:2 }}>186 Points</Text>
            <Icon name="chevron-forward-outline" size={18} color={COLORS.primary} style={{ marginLeft: 1,marginTop:2 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <ActionButton iconName="add-circle-outline" text="Top Up" />
          <ActionButton iconName="arrow-up-circle-outline" text="Transfer" />
          <ActionButton iconName="arrow-down-circle-outline" text="Tarik Tunai" />
          <ActionButton iconName="compass-outline" text="History" />
        </View>
      </View>

    </View>
  )
}

const ActionButton: React.FC<{ iconName: string; text: string }> = ({ iconName, text }) => {
  return (
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Icon name={iconName} size={25} color="#fff" />
      <Text style={{ ...FONTS.body3, color: 'white', marginTop: 5 }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Headers