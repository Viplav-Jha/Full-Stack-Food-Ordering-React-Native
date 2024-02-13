import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import Button from "@/components/Button";
import { Link, Stack } from "expo-router";

function Signin() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [loading, SetLoading] = useState(false);
  
  const signInWithAuth=()=>{
       SetLoading(true)
       if(error) Alert.alert(error.message);
       SetLoading(false)
       
  }

  return (
    <View style={styles.container}>
        <Stack.Screen options={{title:"Sign In "}} />
        
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        placeholder="john@gmail.com"
        onChangeText={SetName}
        style={styles.input}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        value={email}
        placeholder=""
        onChangeText={SetEmail}
        style={styles.input}
        secureTextEntry
      />
      <Button
        onPress={signInWithAuth}
        disabled={loading}
        text={loading ? "Sigining In...." : "Sign In"}
      ></Button>
      <Link href="/sign-up" style={styles.textInput}>
        Create an account
      </Link>
    </View>
  );
}

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  label: {
    color: "gray",
  },
  input: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
  },
  textInput: {
    fontWeight: "bold",
    alignSelf: "center",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});
