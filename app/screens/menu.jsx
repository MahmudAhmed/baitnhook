import React from "react";
import { StyleSheet, Text, View, Image, FlatList, ImageBackground } from "react-native";

import { MainDish }from "../utils/maindish"
import { sides, dessert } from "../utils/sides";
import SoupsNVeggies from "../utils/soupsngreens";
import Starters from "../utils/starters";


export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image
            style={styles.img}
            source={{
              uri:
                "https://images.squarespace-cdn.com/content/5e4c85ec9d8d286b95e16196/1582073566753-805DEDK0T3Q6NDZYCOF0/baitnhook-logo.png?content-type=image%2Fpng",
            }}
          />
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.menu}>
            <Text style={styles.h1}>Starters</Text>
            <FlatList
              data={Starters}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.menuItem}>
                  <View style={styles.item}>
                    <Text style={styles.h2}>{item.item}</Text>
                    <Text style={styles.h3}>{item.details}</Text>
                  </View>
                  { item.url ? (
                    <ImageBackground
                      source={{
                        uri: item.url,
                      }}
                      style={styles.imgBackground}
                    >
                      <View style={styles.priceContainer}>
                        <Text style={styles.price}>${item.price}.00</Text>
                      </View>

                    </ImageBackground>
                    
                  ) : (
                  <View>
                        <Text style={styles.regPrice}>${item.price}.00</Text>
                  </View>
                  )}
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  price: { 
    color: 'white', 
    fontWeight: 'bold'
  },
  regPrice: {
    color: 'black',
    fontWeight: 'bold',
    padding: 10
  },
  priceContainer: { 
    marginTop: 15,
    marginLeft: 30,
    paddingHorizontal: 1, 
    paddingVertical: 5, 
    backgroundColor: '#051057', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 30
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 18
  },
  h3: {
    // fontWeight: 'bold',
    // fontSize: 
    fontStyle: 'italic',
    color: 'grey'
  },
  item: { 
    flex: 3, 
    overflow: 'hidden',
    padding: 10,
  },
  imgBackground: {
    height: 120,
    width: 140,
    // borderWidth: 0,
    // borderColor: "white",
    flex: 2,
    resizeMode: 'cover'

  },
  menuItem: {
    width: '90%',
    backgroundColor: '#FFF',
    overflow: 'hidden',
    flexDirection: 'row',
    marginVertical: 5,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 1   
  },
  menu: {
    width: '100%',
    marginVertical: 5,
    marginHorizontal: 20,
  },
  menuContainer: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: '#FFF'
  },
  img: {
    resizeMode: "contain",
    width: "35%",
    height: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
