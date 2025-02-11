import { View, Text ,Image, TextInput } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';


export default function SignIn() {
  return (
    <View className="flex-1">
      <StatusBar style='dark'/>
      <View className='flex-1 gap-12'>
         {/* SignIn Image */}
         <View style={{paddingTop:hp(8),paddingHorizontal:hp(5)}} className='items-center'>
            <Image style={{height:hp(35)}} resizeMode='contain' source={require('../assets/images/login.png')}/>
         </View>
         <View className='gap-10'>
            <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign In</Text>
            {/* inputs */}
            <View style={{height:hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 rounded-xl items-center">
                <Octicons name='mail' size={hp(2.6)} color="grey"/>
                <TextInput
                style={{fontSize: hp(2)}}
                className="flex-1 font-semibold text-neutral-700"
                />
            </View>
        </View>
      </View>
    </View>
  )
}