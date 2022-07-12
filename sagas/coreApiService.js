import * as AsyncStorage from 'react-native/Libraries/Storage/AsyncStorage';
import axios from 'axios';
import {put} from '@redux-saga/core/effects';

let api = 'https://api-dev.axonvibelabs.com/coral-uk/dev/'
let querry = {
	"query": "query { allPlaces: getUserPlaces { id lat lon name address { street streetNumber locality adminAreaLevel1 adminAreaLevel2 country postalCode } timezone placeDetectionDetails {radius dwellIds placeRegularity centroidLat centroidLon centroidHorizontalAccuracy firstDwellTimestamp lastDwellTimestamp averageDwellTimeMins dowOccurrences hodOccurrences significanceScore labelConfidences} source blockDetails {reason timestamp} labels poi { sourceName sourceId type categories } } }"
}

axios.interceptors.request.use(async (config) => {
    const jwtToken = await AsyncStorage.getItem('token');
    config.headers = {
        'x-vibe-client-id': 'coral-uk_sdk',
        'authorization': 'Bearer ' + "om0H9b7crsZob-rSB4qpCqgIH9I"
    };
    
    return config;
})

export function* postRequest(action) {
    console.log(`mine url: ${api}${action.suffix}`);
    let request = axios.post(`${api}${action.suffix}`, querry)
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(`mine error ${error}`);
        return []
    })

    return yield(request);
}

export function* pushRequest(action) {
    let data;
    switch (action.method) {
        case 'post':
            data = yield postRequest(action)
    }
    try {
        yield put({
            type: action.fetchSuccessType, data: data
        });
    } catch (error) {
        yield put({type: action.fetchFailedType, error});
    }
}