import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas en el componente <GifGrid/>', () => {

    const category = "One Punch";

    test('Debe de mostrar el loading inicialmente', () => {

        render(<GifGrid category={category}/>);
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
        //screen.debug();
    })

    test('debe de mostrar imagenes cuando se cargan desde useFetchGif', () => { second })
})