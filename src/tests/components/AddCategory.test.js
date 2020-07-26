import React from 'react';
// import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { AddCategory } from '../../Components/AddCategory';

describe('Pruebas en AddCategory', () => {
    
    const setCategories = jest.fn();
    let wrapper;

    beforeEach(()=>{

        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)

    });
    
    test('AddCategory debe mostrarse correctamente', ()=> {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe Cambiar la caja de texto',()=>{

        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change',{target: {value} });

        expect(wrapper.find('p').text().trim()).toBe(value);

    }); 

    test('No debe de procesar la información al hacer submit',() => {

        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();

    });

    test('Debe llamar a setCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input');
        input.simulate('change',{target: {value:'Hola mundo'} });

        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect(setCategories).toHaveBeenCalled(); //evalua que se haya llamado la funcion
        expect(setCategories).toHaveBeenCalledTimes(1); //evalua que se haya llamado la funcion 1 vez
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //evalua que se haya llamado la funcion con parámetro de tipo funcion

        expect(input.prop('value')).toBe('');

    });

});
