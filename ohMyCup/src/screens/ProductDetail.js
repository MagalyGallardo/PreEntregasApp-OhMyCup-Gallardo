import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import colors from '../utils/globals/colors'
import fonts from "../utils/globals/fonts"

const ProductDetail = ({route}) => {
  const { productId } = route.params
  const [product,setProduct] = useState({})

  useEffect(()=>{
    const productFinded = products.find(product => product.id === productId)
    setProduct(productFinded)
  },[productId])

  return (
    <View style={styles.container}>
    <View style={styles.content} >
        <Image
          style={styles.image}
          source={{uri:product?.images ? product.images[0] : null}}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.titleProduct}>{product.title}</Text>
          <Text style={styles.descriptionText}>{product.description}</Text>
        </View>
        <View style={styles.containerPrice}>
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
    alignItems:"center",
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
  titleProduct:{
    fontSize:25,
    color:"white",
    fontFamily: fonts.PoppinsBold,

  },
  descriptionText: {
    color:"white",
    fontFamily: fonts.PoppinsRegular
  },
  price:{
    fontSize:30,
    color:"white",
    fontFamily: fonts.PoppinsBold,
  },
  buyNow:{
    backgroundColor:colors.brown2,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5
  },
  buyNowText:{
    color:"white",
    fontSize:22,
    fontFamily: fonts.PoppinsLightItalic,
  }
})