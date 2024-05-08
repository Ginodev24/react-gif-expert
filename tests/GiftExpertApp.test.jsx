import { fireEvent, render, screen } from "@testing-library/react"
import { GiftExpertApp } from "../src/GiftExpertApp";

describe('GiftExpertApp', () => { 

    test('Debe de agregar la nueva categoría si no existe', () => { 

        let newCategory = "Dragon Ball";
        
        render(<GiftExpertApp/>);
        
        const input = screen.getByRole("textbox");
        const form = screen.getByRole('form');
        
        fireEvent.input( input, {target: {value:newCategory} } );
        fireEvent.submit( form );
        
        //screen.debug();
        expect( screen.getByText(newCategory) );
    })

    test('NO Debe de agregar la nueva categoría si YA existe', () => { 

        let newCategory = "One Punch";
        
        render(<GiftExpertApp/>);
        
        const input = screen.getByRole("textbox");
        const form = screen.getByRole('form');
        
        fireEvent.input( input, {target: {value:newCategory} } );
        fireEvent.submit( form );
        
        screen.debug();
        expect( screen.getAllByText(newCategory).length ).toBe(1);
    })

})