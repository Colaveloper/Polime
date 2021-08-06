import React from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class AreaChartExample extends React.PureComponent {

    state = {
        mindScores: [],
        bodyScores: [],
        creativityScores: [],
        socialityScores: [],
        learningScores: []
    }

    componentDidMount() {
        this.retriveData();
    }

    retriveData() { //                             Retrives data from AsyncStorage and sets them in State
        var back6days = new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24 * 6);
        var back5days = new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24 * 5);
        var back4days = new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24 * 4);
        var back3days = new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24 * 3);
        var back2days = new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24 * 2);
        var yesterday = new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24);

        const PreviousWeeks = [
            back6days.getDate() - 6 + '/' + back6days.getMonth() + '/' + back6days.getFullYear(),
            back5days.getDate() - 5 + '/' + back5days.getMonth() + '/' + back5days.getFullYear(),
            back4days.getDate() - 4 + '/' + back4days.getMonth() + '/' + back4days.getFullYear(),
            back3days.getDate() - 3 + '/' + back3days.getMonth() + '/' + back3days.getFullYear(),
            back2days.getDate() - 2 + '/' + back2days.getMonth() + '/' + back2days.getFullYear(),
            yesterday.getDate() - 1 + '/' + yesterday.getMonth() + '/' + yesterday.getFullYear(),]

        AsyncStorage.multiGet(PreviousWeeks, (err, stores) => {
            stores.map((result, i, store) => {

                let key = store[i][0];
                let value = store[i][1];
                const data = JSON.parse(value)

                data == null
                    ? null
                    : (this.setState((prevState) => ({ mindScores: [...prevState.mindScores, data.body.defaultScore] })),
                        this.setState((prevState) => ({ mindScores: [...prevState.mindScores, data.mind.defaultScore] })),
                        this.setState((prevState) => ({ bodyScores: [...prevState.bodyScores, data.body.defaultScore] })),
                        this.setState((prevState) => ({ creativityScores: [...prevState.creativityScores, data.creativity.defaultScore] })),
                        this.setState((prevState) => ({ socialityScores: [...prevState.socialityScores, data.sociality.defaultScore] })),
                        this.setState((prevState) => ({ learningScores: [...prevState.learningScores, data.learning.defaultScore] })))
            })
        })
    };

    render() {

        return (
            <>
                <AreaChart
                    style={{ height: 80 }}
                    data={this.state.mindScores}
                    contentInset={{ top: 20, bottom: 20 }}
                    curve={shape.curveNatural}
                    backgroundColor={"#ECECEC"}
                    svg={{ fill: "#EAAA39" }}
                />
                <AreaChart
                    style={{ height: 80 }}
                    data={this.state.bodyScores}
                    contentInset={{ top: 20, bottom: 20 }}
                    curve={shape.curveNatural}
                    backgroundColor={"#ECECEC"}
                    svg={{ fill: "#76B947" }}
                />
                <AreaChart
                    style={{ height: 80 }}
                    data={this.state.creativityScores}
                    contentInset={{ top: 20, bottom: 20 }}
                    curve={shape.curveNatural}
                    backgroundColor={"#ECECEC"}
                    svg={{ fill: "#37ADE4" }}
                />
                <AreaChart
                    style={{ height: 80 }}
                    data={this.state.socialityScores}
                    contentInset={{ top: 20, bottom: 20 }}
                    curve={shape.curveNatural}
                    backgroundColor={"#ECECEC"}
                    svg={{ fill: "#DA56ED" }}
                />
                <AreaChart
                    style={{ height: 80 }}
                    data={this.state.learningScores}
                    contentInset={{ top: 20, bottom: 20 }}
                    curve={shape.curveNatural}
                    backgroundColor={"#ECECEC"}
                    svg={{ fill: "#EB5656" }}
                />
            </>
        )
    }
}