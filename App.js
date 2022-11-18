import React, { Component } from "react";
import {Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {count: 0};
        const isPortrait = () => {
            const dim = Dimensions.get('screen');
            return dim.height >= dim.width;
        };

        this.state = {
            orientation: isPortrait() ? 'portrait' : 'landscape'
        };


        // Event Listener for orientation changes
        Dimensions.addEventListener('change', () => {
            this.setState({
                orientation: isPortrait() ? 'portrait' : 'landscape'
            });
        });

    onPress = (buttonValue: string) => {
        if(this.state.count == '0' || this.state.count == undefined){
            this.setState({
              count: buttonValue
            });
        }else{
            this.setState({
                count: this.state.count + buttonValue
            });
        }
      };

        onACPress = () => {
                this.setState({
                     count: '0'
                });
            };

        onEQPress = () => {
                const text = this.state.count
                this.setState({
                     count: eval(text)
                });
            };
        onScPress = (buttonValue: string) => {
                let text = this.state.count
                switch (buttonValue){
                    case 'sqrt':
                        this.setState({
                            count: Math.sqrt(text)
                        });
                        break;
                    case '!':
                        if (text === 0) this.setState({
                            count: 1
                        });
                        let f = 1;
                        for (let i = 1; i < text; i++) {
                            f = f * (i + 1);
                        }
                        this.setState({
                            count: f
                        });
                        break;
                    case 'e^x':
                        this.setState({
                            count: Math.exp(text)
                        });
                        break;
                    case '10^x':
                        this.setState({
                            count: Math.pow(10, text)
                        });
                        break;
                    case 'ln':
                        this.setState({
                            count: Math.log(text)
                        });
                        break;
                    case 'log10':
                        this.setState({
                            count: Math.log10(text)
                        });
                        break;
                    case 'e':
                        this.setState({
                            count: Math.E
                        });
                        break;
                    case 'x^2':
                        this.setState({
                            count: Math.pow(text, 2)
                        });
                        break;
                    case 'pi':
                        this.setState({
                            count: Math.PI
                        });
                        break;
                    case 'x^3':
                        this.setState({
                            count: Math.pow(text, 3)
                        });
                        break;
                    case '%':
                        this.setState({
                            count: (text * 100) / 100
                        });
                        break;
                    case '+/-':
                        if(Array.from(text[0]) == '-'){
                            this.setState({
                                count: text.substring(1)
                            });
                        }else{
                            this.setState({
                                count: '-' + text
                            });
                        }
                        break;
                    default:
                        Alert.alert("err");
                }


            };
    }


  render() {

    const { count } = this.state;

    if (this.state.orientation === 'portrait') {
          return (
              <View style={styles.container}>
                  <View style={styles.row}>
                      <View style={styles.wynikV}>
                          <Text style={styles.wynikT}>{this.state.count}</Text>
                      </View>
                  </View>
                  {
                      buttons.map(row => (
                        <View style={styles.row}>

                        {
                          row.map((item, index) => (
                            <TouchableOpacity disabled={item.disable} style={item.styl} onPress={item.onPress} key={index}>
                              <Text>{item.title}</Text>
                            </TouchableOpacity>
                          ))
                        }

                        </View>
                      ))
                    }


              </View>);



    }else {
        return (
              <View style={styles.container}>
                  <View style={styles.row}>
                      <View style={styles.wynikV}>
                          <Text style={styles.wynikT}>{this.state.count}</Text>
                      </View>
                  </View>
                  {
                      buttons2.map(row => (
                        <View style={styles.row}>

                        {
                          row.map((item, index) => (
                            <TouchableOpacity disabled={item.disable} style={item.styl} onPress={item.onPress} key={index}>
                              <Text>{item.title}</Text>
                            </TouchableOpacity>
                          ))
                        }

                        </View>
                      ))
                    }


              </View>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    flex: 1,
    backgroundColor: "#DDDDDD",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
      marginLeft: 1,
      marginRight: 1,
      marginBottom: 1,
      borderRadius: 1
    },
  buttonB: {
    flex: 1,
    backgroundColor: "blue",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
      marginLeft: 1,
      marginRight: 1,
      marginBottom: 1,
      borderRadius: 1
    },

  row: {
    maxwidth: '100%',
    flexDirection: 'row',
    backgroundColor: 'grey'
  },
  wynikV: {
    padding: 10,
    flexDirection: 'row',
    flex: 1
  },
  wynikT: {
    padding: 10,
    color: 'white',
    marginLeft: 'auto'
  },
  HwynikV: {
    padding: 10,
    flexDirection: 'row',
    flex: 1
  },
  HwynikT: {
    padding: 10,
    color: 'white',
    marginLeft: 'auto'
  },
  textB: {
    color: 'white',
    fontWeight: 'bold',
  }
});

const buttons = [
                [
                {
                    styl: styles.button,
                    title: 'AC',
                    disable: false,
                    onPress: () => this.onACPress(),
                    color: 'black'

                },
                {
                    styl: styles.button,
                    title: '',
                    disable: true,
                    onPress: () => {

                    },
                    color: 'black'

                },
                {
                    styl: styles.button,
                    title: '',
                    disable: true,
                    onPress: () => {

                    },
                    color: 'black'

                },
                {
                    styl: styles.buttonB,
                    title: '/',
                    disable: false,
                    onPress: () => this.onPress("/"),
                    color: 'white'

                }],
                [
                {
                    styl: styles.button,
                    title: '7',
                    disable: false,
                    onPress: () => this.onPress("7"),
                    color: 'black'
                },
                {
                    styl: styles.button,
                    title: '8',
                    disable: false,
                    onPress: () => this.onPress("8"),
                    color: 'black'
                },
                {
                    styl: styles.button,
                    title: '9',
                    disable: false,
                    onPress: () => this.onPress("9"),
                    color: 'black'
                },
                {
                    styl: styles.buttonB,
                    title: 'X',
                    disable: false,
                    onPress: () => this.onPress("*"),
                    color: 'white'
                }],
                [
                {
                    styl: styles.button,
                    title: '4',
                    disable: false,
                    onPress: () => this.onPress("4"),
                    color: 'black'
                },
                {
                    styl: styles.button,
                    title: '5',
                    disable: false,
                    onPress: () => this.onPress("5"),
                    color: 'black'

                },
                {
                    styl: styles.button,
                    title: '6',
                    disable: false,
                    onPress: () => this.onPress("6"),
                    color: 'black'

                },
                {
                    styl: styles.buttonB,
                    title: '-',
                    disable: false,
                    onPress: () => this.onPress("-"),
                    color: 'white'

                }],
                [
                {
                    styl: styles.button,
                    title: '1',
                    disable: false,
                    onPress: () => this.onPress("1"),
                    color: 'black'

                },
                {
                    styl: styles.button,
                    title: '2',
                    disable: false,
                    onPress: () => this.onPress("2"),
                    color: 'black'

                },
                {
                    styl: styles.button,
                    title: '3',
                    disable: false,
                    onPress: () => this.onPress("3"),
                    color: 'black'

                },
                {
                    styl: styles.buttonB,
                    title: '+',
                    disable: false,
                    onPress: () => this.onPress("+"),
                    color: 'white'

                }],
                [
                {
                    styl: styles.button,
                    title: '0',
                    disable: false,
                    onPress: () => this.onPress("0"),
                    color: 'black'

                },
                {
                    styl: styles.button,
                    title: '',
                    disable: true,
                    onPress: () => {

                    },
                    color: 'black'

                },
                {
                    styl: styles.button,
                    title: ',',
                    disable: false,
                    onPress: () => this.onPress(","),
                    color: 'black'

                },
                {
                    styl: styles.buttonB,
                    title: '=',
                    disable: false,
                    onPress: () => this.onEQPress(),
                    color: 'white'

                }]
            ]
const buttons2 = [
                [
                {
                    styl: styles.button,
                    title: '√',
                    disable: false,
                    onPress: () => this.onScPress("sqrt"),
                    color: 'black'

                },
                {
                    styl: styles.button,
                    title: 'x!',
                    disable: false,
                    onPress: () => this.onScPress("!"),
                    color: 'black'

                },
                {
                    styl: styles.button,
                    title: 'AC',
                    disable: false,
                    onPress: () => this.onACPress(),
                    color: 'black'

                },
                {
                    styl: styles.button,
                    title: '+/-',
                    disable: false,
                    onPress: () => this.onScPress("+/-"),
                    color: 'black'

                },
                {
                    styl: styles.button,
                    title: '%',
                    disable: false,
                    onPress: () => this.onPress("%"),
                    color: 'black'

                },
                {
                    styl: styles.buttonB,
                    title: '/',
                    disable: false,
                    onPress: () => this.onPress("/"),
                    color: 'white'

                }],
                [
                                {
                                    styl: styles.button,
                                    title: 'e^x',
                                    disable: false,
                                    onPress: () => this.onScPress("e^x"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: '10^x',
                                    disable: false,
                                    onPress: () => this.onScPress("10^x"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: '7',
                                    disable: false,
                                    onPress: () => this.onPress("7"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: '8',
                                    disable: false,
                                    onPress: () => this.onPress("8"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: '9',
                                    disable: false,
                                    onPress: () => this.onPress("9"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.buttonB,
                                    title: '*',
                                    disable: false,
                                    onPress: () => this.onPress("*"),
                                    color: 'white'

                                }],
                [
                                {
                                    styl: styles.button,
                                    title: 'ln',
                                    disable: false,
                                    onPress: () => this.onScPress("ln"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: 'log10',
                                    disable: false,
                                    onPress: () => this.onScPress("log10"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: '4',
                                    disable: false,
                                    onPress: () => this.onPress("4"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: '5',
                                    disable: false,
                                    onPress: () => this.onPress("5"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: '6',
                                    disable: false,
                                    onPress: () => this.onPress("6"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.buttonB,
                                    title: '-',
                                    disable: false,
                                    onPress: () => this.onPress("-"),
                                    color: 'white'

                                }],
                [
                                {
                                    styl: styles.button,
                                    title: 'e',
                                    disable: false,
                                    onPress: () => this.onScPress("e"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: 'x^2',
                                    disable: false,
                                    onPress: () => this.onScPress("x^2"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: '1',
                                    disable: false,
                                    onPress: () => this.onPress("1"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: '2',
                                    disable: false,
                                    onPress: () => this.onPress("2"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: '3',
                                    disable: false,
                                    onPress: () => this.onPress("3"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.buttonB,
                                    title: '+',
                                    disable: false,
                                    onPress: () => this.onPress("+"),
                                    color: 'white'

                                }],
                [
                                {
                                    styl: styles.button,
                                    title: 'π',
                                    disable: false,
                                    onPress: () => this.onScPress("pi"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: 'x^3',
                                    disable: false,
                                    onPress: () => this.onScPress("x^3"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: '0',
                                    disable: false,
                                    onPress: () => this.onPress("0"),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: '',
                                    disable: true,
                                    onPress: () => this.onScPress(),
                                    color: 'black'

                                },
                                {
                                    styl: styles.button,
                                    title: ',',
                                    disable: false,
                                    onPress: () => this.onPress(","),
                                    color: 'black'

                                },
                                {
                                    styl: styles.buttonB,
                                    title: '+',
                                    disable: false,
                                    onPress: () => this.onEQPress(),
                                    color: 'white'

                                }]
            ]