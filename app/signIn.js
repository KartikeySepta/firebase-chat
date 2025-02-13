import { View, Text ,Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import Loading from '../components/loading';


export default function SignIn() {

    const[loading,setLoading]=useState(false );

    const router = useRouter();

    const emailRef=useRef("");
    const passwordRef=useRef("");

    const handleLogin = async ()=>{
        if(!emailRef.current || !passwordRef.current){
            Alert.alert("Sign Up","Please fill all fields!");
            return;
        }

        //login Process
    }

  return (
    <View className="flex-1 px-4">
      <StatusBar style='dark'/>
      <View className='flex-1 gap-12'>
         {/* SignIn Image */}
         <View style={{paddingTop:hp(8),paddingHorizontal:hp(5)}} className='items-center'>
            <Image style={{height:hp(25)}} resizeMode='contain' source={require('../assets/images/login.png')}/>
         </View>
         <View className='gap-10'>
            <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign In</Text>
            {/* inputs */}
            <View className="gap-4">
            <View style={{height:hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                <Octicons name='mail' size={hp(2.6)} color="gray"/>
                <TextInput
                onChangeText={value=>emailRef.current=value}
                style={{fontSize: hp(2)}}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Email Address"
                placeholderTextColor="gray"
                />
            </View>
            <View className="gap-3">
            <View style={{height:hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 rounded-xl items-center">
                <Octicons name='lock' size={hp(2.6)} color="gray"/>
                <TextInput
                onChangeText={value=>passwordRef.current=value}      
                style={{fontSize: hp(2)}}
                secureTextEntry={true}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Password"
                placeholderTextColor="gray"
                />
            </View>
            <Text style={{fontSize: hp(1.8)}} className="text-neutral-400 text-right">Forgot Password?</Text>
            </View>
            {/* Submit Button */}

            <View>
                {
                    loading ?(
                        <View className="flex-row justify-center">
                            <Loading size={hp(20)}/>
                        </View>
                    ):(
                        <TouchableOpacity onPress={(handleLogin)} style={{height:hp(6.5)}}className="bg-indigo-500 rounded-xl justify-center items-center ">
                        <Text style={{fontSize:hp(2.7)}} className="text-white font-bold tracking-wider">Sign In</Text>
                    </TouchableOpacity>
                    )
                }
            </View>



            {/* Sign up text */}
            <View className="flex-row justify-center">      
                <Text style={{fontSize:hp(1.8)}} className="font-semibold text-neutral-500">Don't have an account? </Text>
                <Pressable onPress={()=>router.push('signUp')}>
                <Text style={{fontSize:hp(1.8)}} className="font-bold text-indigo-500">Sign Up</Text> 
                </Pressable>
                </View> 
            </View>
        </View>
      </View>
    </View>
  )
}