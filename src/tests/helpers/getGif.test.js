import React from 'react';
// import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { getGif } from '../../Helpers/getGif';

describe('Pruebas en getGif', () => {
    
    test('Debe traer 10 elementos', async() => {

        const gifs = await getGif('DBZ');

        expect(gifs.length).toBe(10);

    });

    test('Evaluar string vacío como argumento', async() => {

        const gifs = await getGif('');

        expect(gifs.length).toBe(0);

    });

});
