import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import colors from '../utils/globals/colors'
import Header from '../components/Header'
import fonts from "../utils/globals/fonts"

const ProductDetail = ({productId,portrait}) => {

  const [product,setProduct] = useState({})

  useEffect(()=>{
    const productFinded = products.find(product => product.id === productId)
    setProduct(productFinded)
  },[productId])

  return (
    <View style={styles.container}>
    <Header title="Detalle del producto"/>
    <View style={[styles.content,!portrait && {flexDirection:"row",gap:30,padding:20}] } >
        <Image
          style={[styles.image,!portrait && {width:"50%",height:200}]}
          source={{uri:product?.images ? product.images[0] : null}}
          resizeMode='cover'
        />
        <View style={[styles.containerText,!portrait && {width:"40%"}]}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.descriptionText}>{product.description}</Text>
        </View>
        <View style={[styles.containerPrice ,!portrait && {width:"20%",flexDirection:"column"}]}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Comprar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container:{
    width:"100%",
    flex:1,
    justifyContent:"start",
    alignItems:"center"
  },
  content:{
    width:"100%"
  },

  image:{
    width:"100%",
    height:300
  },
  containerText:{
    gap:20,
    paddingHorizontal:20,
    paddingVertical:40
  },
  containerPrice:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      marginVertical:10
  },
  title:{
    fontSize:20,
    fontWeight:"bold",
    color:"white",
    fontFamily: fonts.PoppinsLightItalic
    
  },
  descriptionText: {
    color:"white"
  },
  price:{
    fontSize:30,
    color:"white"
  },
  buyNow:{
    backgroundColor:colors.brown2,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5
  },
  buyNowText:{
    color:"white",
    fontSize:25
  }
})