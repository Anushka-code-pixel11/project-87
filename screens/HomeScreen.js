import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class HomeScreen extends Component{
  constructor(){
    super()
    this.state = {
      userId  : firebase.auth().currentUser.email,
      addedItemsList : []
    }
  this.addedRef= null
  }

  getAddedItemsList =()=>{
    this.addedRef = db.collection("items_added")
    .onSnapshot((snapshot)=>{
      var addedItemsList = snapshot.docs.map(document => document.data())
      console.log("in function" + addedItemsList)
      this.setState({
        addedItemsList : addedItemsList
      });
    })
  }

  componentDidMount(){
    this.getAddedItemsList()
    console.log(this.state.addedItemsList.length);

  }

  componentWillUnmount(){
    this.addedRef();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.item_name}
        subtitle={item.description}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}
              //onPress ={()=>{
               //this.props.navigation.navigate("RecieverDetails",{"details": item})
             // }}
              >
              <Text style={{color:'#ffff'}}>View</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title = "Home Screen" navigation ={this.props.navigation}/>
        <View style={{flex:1}}>
          {
            this.state.addedItemsList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Added Items </Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.addedItemsList}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})
