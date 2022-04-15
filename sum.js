/*
Uzduotis: reikia rasti VISU masyve esanciu "normaliu" skaiciu suma.
*/
const a = [1, 2, 3, 4, 10, 6, 7, 8, 10];
const b = [1, 2, true, 3, 4, '', 10, 6, NaN, 7, 8, -Infinity, 10];

function sum(list) {
    let total = 0;

    for (const n of list) {
        if (typeof n !== 'number'
        || !isFinite(n)) {
            continue;
        }
        total += n;
    }

    return total;
}

const r1 = sum(a);
console.log('SUMA:', r1, 51);

const r2 = sum(b);
console.log('SUMA:', r2, 51);

