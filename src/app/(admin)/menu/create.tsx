import { StyleSheet, Text, View, TextInput, Image, Alert } from "react-native";
import React, { useState } from "react";
import Button from "@/components/Button";
import { defaultPizzaimage } from "@/components/ProductListItem";
import Colors from "@/constants/Colors";
import * as ImagePicker from "expo-image-picker";
import { Stack, useLocalSearchParams } from "expo-router";

function CreateProductScreen() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const validateInput = () => {
    setErrors("");
    if (!name) {
      setErrors("Name is required");
      return false;
    }
    if (!price) {
      setErrors("Price is required");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("Price is not a number");
      return false;
    }
    return true;
  };

  //Create call
  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("Creating product", name);
    //save in the database

    resetFields();
  };
  //updating call
  const onUpdateCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("updating product", name);
    //save in the database

    resetFields();
  };
  // Submit
  const OnSubmit = () => {
    if (isUpdating) {
      onUpdateCreate();
    } else onCreate();
  };

  //image picker code
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const onDelete = () => {
    console.warn("DELETE!!!!!");
  };
  const confirmDelete = () => {
    Alert.alert("Confirm", "Are you sure you want to delete this product", [
      {
        text: "Cancle",
      },
      {
        text:'Delete',
        style:'destructive',
        onPress:onDelete
      }
    ]);
  };
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: isUpdating ? "Update Product" : "Create Product" }}
      />
      <Image
        source={{ uri: image || defaultPizzaimage }}
        style={styles.image}
      />
      <Text onPress={pickImage} style={styles.textButton}>
        Select Image
      </Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="9.99"
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={{ color: "red" }}>{errors}</Text>
      <Button onPress={OnSubmit} text={isUpdating ? "Update" : "Create"} />
      {isUpdating && (
        <Text onPress={confirmDelete} style={styles.textButton}>
          Delete
        </Text>
      )}
    </View>
  );
}

export default CreateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
});
