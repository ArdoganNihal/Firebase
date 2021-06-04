import React, {Component} from 'react';
import { View, SafeAreaView, Text, TouchableOpacity ,StyleSheet, TextInput} from "react-native";

export default class Index extends Component{
    render() {
        return (
        <SafeAreaView  style={{flex: 1}}> 
            <View style={{backgroundColor:'white',flex:1, alignItems: "center"}}>
                 <View style={{alignItems: "center"}}>
                    <Text style={styles.hero}>Welcome Back!</Text>
                    <Text style={styles.sub_header}>Sign in to continue</Text>
                 </View>
              <View style={styles.form}>
                 <TextInput 
                 placeholderTextColor='#B4B3BD'
                 placeholder={"Email"}
                 style={styles.input}/>
                 <TextInput 
                 placeholderTextColor='#B4B3BD'
                 placeholder={"Password"}
                 style={styles.input}/>
                 <TouchableOpacity style={styles.forgot}>
                    <Text>Forgot Password?</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.signIn}>
                    <Text style={styles.signIn_text}>
                       Sign in My Account
                    </Text>
                 </TouchableOpacity>
                 <View style={styles.bottom}>
                    <Text style={{fontSize:14, fontFamily:'lucida grande'}}>Don’t have an account? -</Text>
                    <TouchableOpacity>
                       <Text style={{fontSize:16, fontWeight: '600', color:'#292745', fontFamily:'lucida grande'}}>Sign up</Text>
                    </TouchableOpacity>
                 </View>
              </View>
            </View>
        </SafeAreaView>
    )
    }
}
        
            
   const styles = StyleSheet.create({
       hero: {
           fontSize:35,
           padding:25,
           justifyContent:'center',
           alignItems: 'center',
           color:'#1C1939'
       },
       sub_header: {
           fontSize:15,
           justifyContent:'center',
           alignItems: 'center',
           color:'#1C1939',
           marginTop:5
       },
       form: {
           marginTop:50
       },
       input:{
           backgroundColor:'#F7F7F7',
           padding:15,
           width:300,
           height:50,
           borderRadius:10,
           paddingHorizontal:25,
           marginBottom:10
       },
       forgot:{
           flexDirection: 'row',
           justifyContent:'flex-end',
           marginTop:10,
           color:'#6D6B80'
       }, 
       signIn:{
           backgroundColor:'#7165E3',
           padding:20,
           borderRadius:10,
           marginTop:50,
           justifyContent:"center",
           alignItems: 'center'
       },
       signIn_text:{
           color:'white',
           fontWeight:'600',
           fontSize:15,
           textAlign:'center'
       }, 
       bottom: {
           flexDirection:"row",
           alignItems: 'center',
           justifyContent:"center",
           marginTop:15,
           color:'#1C1939'
       }

   })