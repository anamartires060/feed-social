import React from 'react'
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "@/assets/styles/home.styles";
import { Ionicons } from '@expo/vector-icons';

export default function Feed() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
            <Image source={{ uri: "https://i.pinimg.com/736x/28/c4/6a/28c46a50d2497fc8fa993f88312e1349.jpg" }} style={styles.imageUserIndex}resizeMode="cover"></Image>
        </View>
        <Text style={styles.username}>User</Text>
         
      </View>

      {/* Input */}
      <TextInput
        placeholder="What are you thinking about?"
        style={styles.input}
        placeholderTextColor="#000000"
      />

      {/* Card do post */}
      <View style={styles.card}>
        {/* foto do card */}
        <View style={styles.imagePlaceholder}>
          <Image source={{uri : "https://i.pinimg.com/1200x/76/80/d4/7680d40005c4ee3c60eb3e0dc2c12c62.jpg"}} style={styles.imagePost1}></Image>
        </View>
        {/* parte do texto */}
        <View style={styles.cardFooter}>
          <View style={styles.avatar}>
            <Image source={{uri : "https://i.pinimg.com/736x/28/c4/6a/28c46a50d2497fc8fa993f88312e1349.jpg"}} style={styles.imageUserIndex}></Image>
          </View>

          <View style={styles.textContainer}>
            @anawxs
            <View style={styles.textLine}>
              I believe that marriage isn't between a man and a woman, but between love and love.
            </View>
            <View style={styles.smallLine} />
          </View>

          <TouchableOpacity 
          style={styles.likeButton} 
          onPress={() => console.log("Curtiu!")}
          >
          <Text style={{ fontSize: 22, marginTop: -1 }}>❤️</Text>
            </TouchableOpacity>
          </View>
        </View>

      {/* Outro card */}
      <View style={styles.card}>
        {/* foto do card */}
        <View style={styles.imagePlaceholder}>
          <Image source={{uri : "https://i.pinimg.com/1200x/76/80/d4/7680d40005c4ee3c60eb3e0dc2c12c62.jpg"}} style={styles.imagePost1}></Image>
        </View>
        {/* parte do texto */}
        <View style={styles.cardFooter}>
          <View style={styles.avatar}>
            <Image source={{uri : "https://i.pinimg.com/736x/28/c4/6a/28c46a50d2497fc8fa993f88312e1349.jpg"}} style={styles.imageUserIndex}></Image>
          </View>

          <View style={styles.textContainer}>
            @anawxs
            <View style={styles.textLine}>
              It's all downhill from here.
            </View>
            <View style={styles.smallLine} />
          </View>

          <TouchableOpacity 
          style={styles.likeButton} 
          onPress={() => console.log("Curtiu!")}
          >
          <Text style={{ fontSize: 22, marginTop: -1 }}>❤️</Text>
            </TouchableOpacity>
          </View>
        </View>
      
    </ScrollView>
  );
}