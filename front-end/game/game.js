import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeConsumer } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'
import { setLocalDatastoreController } from 'parse';

export default class TicTacToe extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            gameState: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            code:
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            data:
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            cpt : 1,
            currentIcon : 1
        }
    }
    componentDidMount() {
        this.initializeGame();
    }

    initializeGame = () => {
        this.setState({gameState:
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            code:
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            data:
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            cpt : 1,
            currentIcon : 1,
            reset: 0

        });
    }

    onTilePress = (row, col) => {
        if(this.state.cpt < 6)
        {
            var value = this.state.gameState[row][col];
            if(value !== 0) { return -1; }

            var val = this.state.code[row][col];
            if(val !== 0) { return -1; }

            var currentIcon = this.state.currentIcon;
            var arr = this.state.gameState.slice();
            arr[row][col] = currentIcon;

            var num = this.state.code.slice();
            num[row][col] = this.state.cpt;
            var newCpt = this.state.cpt + 1;
            
            this.setState({gameState: arr});
            this.setState({code: num});
            this.setState({cpt: newCpt});

            var nextIcon = (currentIcon == 1) ? -1 : 1;
            this.setState({currentIcon: nextIcon});
        }
    }
    componentDidUpdate = async () => {
        if(this.state.cpt === 6){
            this.props.setCode(this.state.code);
            var newCpt = this.state.cpt + 1;
            this.setState({cpt: newCpt});
        }
        if(this.props.action === 'connexion'){
            if(this.props.reset)
            {
                this.props.setReset(false);
                this.initializeGame()
            }
        }
    }
    renderIcon = (row,col) => {
        var value = this.state.gameState[row][col];
        switch(value)
        {
            case 1: return <Icon name="close" style={styles.tileX} />;
            case -1: return <Icon name="circle-outline" style={styles.tileO} />;
            default: return <View />;
        }
    }

    render () {
        return(
            <>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <TouchableOpacity onPress={() => this.onTilePress(0,0)} style={[styles.tile, { borderLeftWidth: 5, borderTopWidth: 5}]}>
                        {this.renderIcon(0,0)}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onTilePress(0,1)} style={[styles.tile, { borderTopWidth: 5}]}>
                        {this.renderIcon(0,1)}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onTilePress(0,2)} style={[styles.tile, { borderRightWidth: 5, borderTopWidth: 5}]}>
                        {this.renderIcon(0,2)}
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <TouchableOpacity onPress={() => this.onTilePress(1,0)} style={[styles.tile, { borderLeftWidth:5}]}>
                        {this.renderIcon(1,0)}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onTilePress(1,1)} style={[styles.tile, {  }]}>
                        {this.renderIcon(1,1)}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onTilePress(1,2)} style={[styles.tile, { borderRightWidth: 5 }]}>
                        {this.renderIcon(1,2)}
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => this.onTilePress(2,0)} style={[styles.tile, { borderLeftWidth: 5 , borderBottomWidth : 5}]}>
                        {this.renderIcon(2,0)}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onTilePress(2,1)} style={[styles.tile, { borderBottomWidth : 5 }]}>
                        {this.renderIcon(2,1)}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onTilePress(2,2)} style={[styles.tile, { borderRightWidth: 5, borderBottomWidth : 5}]}>
                        {this.renderIcon(2,2)}
                    </TouchableOpacity>
                </View>
                { ( (this.state.cpt === 7) && (this.props.action === 'creation') )? (
                    <>
                    <Button color={'rgb(68,156,153)'} title={"Valider"} onPress={() => this.props.handleSave(this.state.code)} /> 
                    <Button color={'rgb(68,156,153)'} title={"Reset"} onPress={() => this.initializeGame()} /> 
                    </>
                    ):
                    <View />
                }
               </> 
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tile: {
        borderColor:'rgb(68,156,153)',
        borderWidth: 3,
        width: 100,
        height: 100
    },
    tileX: {
        color: 'rgb(68,156,153)',
        fontSize: 95,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tileO: {
        color: 'rgb(68,156,153)',
        fontSize: 95,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
  });