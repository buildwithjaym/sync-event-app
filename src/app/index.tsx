import { useEffect, useRef } from "react";

import { Animated, Image, StyleSheet, TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const slideAnim = useRef(new Animated.Value(40)).current;

  const logoScale = useRef(new Animated.Value(0.8)).current;

  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Entrance Animation

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),

      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 7,
        useNativeDriver: true,
      }),

      Animated.spring(logoScale, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();

    // Subtle logo breathing

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 1800,
          useNativeDriver: true,
        }),

        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1800,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Animated.View
          style={[
            styles.content,

            {
              opacity: fadeAnim,

              transform: [
                {
                  translateY: slideAnim,
                },

                {
                  scale: logoScale,
                },
              ],
            },
          ]}
        >
          {/* SYNC LOGO */}

          <Animated.View
            style={{
              transform: [
                {
                  scale: pulseAnim,
                },
              ],
            }}
          >
            <Image
              source={require("@/assets/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </Animated.View>

          {/* BRAND NAME */}

          <ThemedText style={styles.brand}>SYNC</ThemedText>

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

          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <ThemedText style={styles.buttonText}>Create Identity</ThemedText>
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
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",
  },

  content: {
    alignItems: "center",

    paddingHorizontal: 30,
  },

  logo: {
    width: 150,

    height: 150,

    marginBottom: 30,
  },

  brand: {
    fontSize: 42,

    fontWeight: "900",

    letterSpacing: 6,
  },

  tagline: {
    marginTop: 20,

    textAlign: "center",

    fontSize: 28,

    fontWeight: "800",
  },

  description: {
    marginTop: 20,

    textAlign: "center",

    fontSize: 16,

    opacity: 0.6,

    lineHeight: 24,
  },

  button: {
    marginTop: 45,

    backgroundColor: "#F97316",

    paddingVertical: 17,

    paddingHorizontal: 60,

    borderRadius: 30,
  },

  buttonText: {
    color: "#FFFFFF",

    fontSize: 16,

    fontWeight: "700",
  },

  secondary: {
    marginTop: 25,

    opacity: 0.6,
  },
});
