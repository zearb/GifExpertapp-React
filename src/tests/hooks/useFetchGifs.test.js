import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import {useFetchGifs} from '../../Hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe retornar el estado inicial', async() => {
        
        // const { result } = renderHook( () => useFetchGifs('DBZ') );        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'DBZ' ) );

        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect( loading ).toBe(true);

    });

    test('Debe retornar un arreglo de imgs y el loading en false', async()=>{

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'DBZ' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect( loading ).toBe(false);

    });
    

});
