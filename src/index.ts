import { timer, interval } from 'rxjs';

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete'),
    error: err => console.log('error: ', err)
}

const interval$ = interval(1000);

console.log('inicio')
interval$.subscribe(observer);