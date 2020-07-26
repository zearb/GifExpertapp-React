import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GifGrid } from '../../Components/GifGrid';
import { useFetchGifs } from '../../Hooks/useFetchGifs';

jest.mock('../../Hooks/useFetchGifs');

describe('Pruebas en componente <GifGrid/>', () => {
    
    const category = 'DBZ';

    test('Se debe mostrar correctamente',()=>{

        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        
        const wrapper = shallow(<GifGrid category = {category} />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar items cuando se cargan imágenes con useFetchGifs',()=>{

        const gifs = [{
             id: 'ABC',
             title: 'DBZ' ,
             url: 'https//:localhost/unaimagen.jpg'
        }]
        
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });

        const wrapper = shallow(<GifGrid category = {category} />);

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });


});
