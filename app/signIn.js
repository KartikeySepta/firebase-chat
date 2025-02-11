import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native-web';

export default function SignIn() {
  return (
    <View className="flex-1">
      <StatusBar style='dark'/>
      <view className='flex-1 gap-12'>
         {/* SignIn Image */}
         <view className='items-center'>
            <Image source={require('../assets/images/login.png')}/>
         </view>
      </view>
    </View>
  )
}