import { fromEvent, Observable } from 'rxjs';

//Eventos del DOM

const src1$ = fromEvent<MouseEvent>( document, 'click');
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');
const src3$ = fromEvent( document, 'scroll');

const observer = {
    next: val => console.log('next', val)
}

src1$.subscribe( ({x,y}) => console.log(x,y) );
src2$.subscribe( event => event.key === 'ArrowDown' ? console.log("se apreto abajo") : console.log("otra tecla") );
src3$.subscribe(observer);