import React, { Component } from 'react';
import { View, Text, Box, FlatList, HStack, VStack, Image } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../repositories/userPlacesRepository'
import { SwipeListView } from 'react-native-swipe-list-view';

const styles = StyleSheet.create({
    header: {
        fontSize: 20
    }, userPlaceIcon: {
        height: 30,
        width: 30,
        marginLeft: 5,
        padding: 10
    },
    userPlaceTitle: {
        fontSize: 14,
    },
    userPlaceAddress: {
        fontSize: 10,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        paddingRight: 10,
        flexDirection: 'row',
        backgroundColor: "#ED5C69",
        justifyContent: "flex-end",
    },
})
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            userPlaces: this.props.userPlaces
        };
        this.loadUserPlacesList();
    }

    loadUserPlacesList() {
        this.props.onFetchUserPlaces();
    }

    render() {
        return (
            <Box>
                <SwipeListView data={this.getAvailabelState()} 
                    renderItem={ (data, rowMap) => this.renderCell(data) } 
                    renderHiddenItem={ (data, rowMap) => this.renderHiddenItem(data, rowMap)}
                    rightOpenValue={-65}
                    previewRowKey={'0'}
                    previewOpenValue={0}
                    previewOpenDelay={3000}
                    >
                </SwipeListView>
            </Box>
        )
    }

    renderCell(data) {
        const item = data.item
        return ( 
            <HStack style={styles.rowFront}>
                <Image source={this.getUserPlaceIcon(item)} tintColor="#ED5C69" alt={item.id} style={styles.userPlaceIcon}/>
                <VStack alignContent="center" pt="2" pb="2" pl="2" justifyContent="center">
                    <Text style={styles.userPlaceTitle} backgroundColor="FF0000">{this.getUserPlaceTitle(item)}</Text>
                    <Text style={styles.userPlaceAddress}>{this.getUserPlaceAddress(item)}</Text>
                </VStack>
            </HStack>
        )
    }
    
    renderHiddenItem(data, rowMap) { 
    return ( 
        <TouchableOpacity style={styles.rowBack} >
            <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
    )}

    getAvailabelState() {
        if (!Array.isArray(this.props.userPlaces) && this.props.userPlaces.length == 0) {
            return []
        }
        return this.props.userPlaces.filter((userPlace) => {
            return !userPlace.blockDetails
        })
    }

    getUserPlaceAddress(userPlace) {
        return `${userPlace.address?.streetNumber ? `${userPlace.address?.streetNumber} `: ""}${userPlace.address?.street}, ${userPlace.address?.adminAreaLevel2} ${userPlace.address?.postalCode}`
    }

    getUserPlaceTitle(userPlace) {
        return userPlace.name ? userPlace.name : userPlace.labels[0] ? userPlace.labels[0].charAt(0) + userPlace.labels[0].slice(1).toLocaleLowerCase() : userPlace.address?.street
    }

    getUserPlaceIcon(userPlace) {
        switch (userPlace.labels[0]) {
            case "HOME": 
                return require("../../assets/icon_24_home.png")
            case "SCHOOL":
                return require("../../assets/icon_24_school.png")
            case "FOOD":
                return require("../../assets/icon_24_food.png")
            default:
                return require("../../assets/mot_24_yellow_categorized.png")
        }
        return icon
    }
}

const account = connect(mapStateToProps, mapDispatchToProps)(Account);
export default account;