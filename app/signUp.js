import { View, Text ,Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Feather, Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
// import Loading from '../components/loading';
import CustomKeyboardView from '../components/CustomKeyboardView';


export default function SignUp() {

    const[loading,setLoading]=useState(false );

    const router = useRouter();

    const emailRef=useRef("");
    const passwordRef=useRef("");
    const usernameRef=useRef("");
    const profileRef=useRef("");

    const handleRegister = async ()=>{
        if(!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current){
            Alert.alert("Sign Up","Please fill all fields!");
            return;
        }

        //login Process
    }

  return (
    <CustomKeyboardView>
      <StatusBar style='dark'/>
      <View className='flex-1 gap-12'>
         {/* SignIn Image */}
         <View style={{paddingTop:hp(7),paddingHorizontal:hp(5)}} className='items-center'>
            <Image style={{height:hp(25)}} resizeMode='contain' source={require('../assets/images/register.jpg')}/>
         </View>
         <View className='gap-10'>
            <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign Up</Text>
            {/* inputs */}
            <View className="gap-4">

            <View style={{height:hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                <Feather name='user' size={hp(2.6)} color="gray"/>
                <TextInput
                onChangeText={value=>usernameRef.current=value}
                style={{fontSize: hp(2)}}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Username"
                placeholderTextColor="gray"
                />
            </View>

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
        
            <View style={{height:hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                <Feather name='mail' size={hp(2.6)} color="gray"/>
                <TextInput
                onChangeText={value=>profileRef.current=value}
                style={{fontSize: hp(2)}}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Profile Url"
                placeholderTextColor="gray"
                />
            </View>
           
            {/* Submit Button */}

            <View>
                {
                    loading ?(
                        <View className="flex-row justify-center">
                            <Loading size={hp(20)}/>
                        </View>
                    ):(
                        <TouchableOpacity onPress={(handleRegister)} style={{height:hp(6.5)}}className="bg-indigo-500 rounded-xl justify-center items-center ">
                        <Text style={{fontSize:hp(2.7)}} className="text-white font-bold tracking-wider">Sign Up</Text>
                    </TouchableOpacity>
                    )
                }
            </View>



            {/* Sign up text */}
            <View className="flex-row justify-center">      
                <Text style={{fontSize:hp(1.8)}} className="font-semibold text-neutral-500">Already have an account? </Text>
                <Pressable onPress={()=>router.push('signIn')}>
                <Text style={{fontSize:hp(1.8)}} className="font-bold text-indigo-500">Sign In</Text> 
                </Pressable>
                </View> 
            </View>
        </View>
      </View>
      </CustomKeyboardView>
  )
}