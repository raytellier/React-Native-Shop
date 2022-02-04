import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAuthStateListener } from "../redux/actions";

export default function Route() {
  const currentUserObj = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAuthStateListener());
  }, []);

  console.log(currentUserObj);

  return (
    <View>
      <Text></Text>
    </View>
  );
}
