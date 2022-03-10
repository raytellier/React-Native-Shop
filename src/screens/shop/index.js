import { View, Text } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/products";

export default function ShopScreen() {
  const dispatch = useDispatch();

  const productsList = useSelector((state) => state.products);

  const { products, loaded, error } = productsList;

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);

  return (


    <View style={styles.container}>

      {loaded ? (
        <Text>Loaded</Text>
       ) : (
         <Text>Not Loaded</Text>
       )}
      <Text>Shop Screen</Text>
    </View>
  );
}
