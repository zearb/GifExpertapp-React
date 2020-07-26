import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertapp';

describe('Pruebas en <GifExpertapp/>',()=>{


    test('Se debe mostrar correctamente',()=>{

        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar una lista de categorías',()=>{

        const categories = ['DBZ','Pizza'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });


});