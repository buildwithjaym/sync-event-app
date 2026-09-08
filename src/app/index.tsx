import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";


export default function HomeScreen() {

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;


  useEffect(() => {


    // Entrance animation
    Animated.parallel([

      Animated.timing(fadeAnim,{
        toValue:1,
        duration:1000,
        useNativeDriver:true
      }),

      Animated.spring(slideAnim,{
        toValue:0,
        friction:7,
        useNativeDriver:true
      }),

      Animated.spring(scaleAnim,{
        toValue:1,
        friction:6,
        useNativeDriver:true
      })

    ]).start();



    // Logo breathing animation

    Animated.loop(

      Animated.sequence([

        Animated.timing(pulseAnim,{
          toValue:1.08,
          duration:1500,
          useNativeDriver:true
        }),

        Animated.timing(pulseAnim,{
          toValue:1,
          duration:1500,
          useNativeDriver:true
        })

      ])

    ).start();



  },[]);



  return (

    <ThemedView style={styles.container}>

      <SafeAreaView style={styles.safeArea}>


        <Animated.View
          style={[
            styles.content,
            {
              opacity:fadeAnim,
              transform:[
                {
                  translateY:slideAnim
                }
              ]
            }
          ]}
        >


          {/* LOGO */}

          <Animated.View
            style={[
              styles.logoContainer,
              {
                transform:[
                  {
                    scale:scaleAnim
                  },
                  {
                    scale:pulseAnim
                  }
                ]
              }
            ]}
          >

            <ThemedText style={styles.logo}>
              S
            </ThemedText>


          </Animated.View>




          {/* BRAND */}

          <ThemedText style={styles.brand}>
            SYNC
          </ThemedText>



          <ThemedText style={styles.tagline}>

            One Identity.
            {"\n"}
            Every Event.

          </ThemedText>




          <ThemedText style={styles.description}>

            Your digital participation passport
            {"\n"}
            for every activity.

          </ThemedText>




          {/* BUTTON */}

          <TouchableOpacity
            style={styles.button}
          >

            <ThemedText style={styles.buttonText}>
              Create Identity
            </ThemedText>

          </TouchableOpacity>



          <TouchableOpacity>

            <ThemedText style={styles.secondary}>
              Already have an identity?
            </ThemedText>

          </TouchableOpacity>



        </Animated.View>


      </SafeAreaView>


    </ThemedView>

  );
}




const styles = StyleSheet.create({

container:{
  flex:1,
},


safeArea:{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
},


content:{
  alignItems:"center",
  paddingHorizontal:30,
},



logoContainer:{

  width:120,
  height:120,

  borderRadius:60,

  backgroundColor:"#F97316",

  justifyContent:"center",
  alignItems:"center",

  marginBottom:30,

  shadowColor:"#F97316",
  shadowOpacity:0.3,
  shadowRadius:20,

},



logo:{

  color:"#FFFFFF",

  fontSize:60,

  fontWeight:"900",

},



brand:{

  fontSize:38,

  fontWeight:"900",

  letterSpacing:5,

},



tagline:{

  marginTop:20,

  textAlign:"center",

  fontSize:28,

  fontWeight:"800",

},



description:{

  marginTop:20,

  textAlign:"center",

  opacity:0.6,

  fontSize:16,

},



button:{

  marginTop:50,

  backgroundColor:"#F97316",

  paddingVertical:16,

  paddingHorizontal:60,

  borderRadius:30,

},



buttonText:{

  color:"#FFFFFF",

  fontSize:16,

  fontWeight:"700",

},



secondary:{

  marginTop:25,

  opacity:0.6,

}


});