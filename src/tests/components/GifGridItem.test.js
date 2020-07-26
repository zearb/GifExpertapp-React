import React from 'react';
// import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifGridItem from '../../Components/GifGridItem';

describe('Pruebas en el componente GifGridItem', () => {
    
    const title = 'DBZ';
    const url = 'urlDeUnaImagen.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    
    test('GifGridItem debe mostrarse correctamente', () => {        

        expect(wrapper).toMatchSnapshot();

    });

    test('GifGridItem debe tener la imagen con url y alt de los props', () => {

        const img = wrapper.find('img');

        // console.log(img.html());
        // console.log(img.props());
        // console.log(img.prop('src'));

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('GifGridItem debe tener un parrafo con el title', () => {

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);

    });

    test('El div contenedor debe tener la clase animate__zoomIn',()=>{

        const div = wrapper.find('div');

        // console.log(div.prop('className'));

        expect(div.prop('className').includes('animate__zoomIn')).toBe(true);

    });
    

});
