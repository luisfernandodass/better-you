
function simpleArraySum(ar: number[]): number {
    // Write your code here
    let result = 0;

    for (let i = 0; i < ar.length; i++) {
        let x = 1;
        x = x + 1;
        console.log('show i', x, ar.length)
        result = ar[i] + result
        //   0        1       0
        //   1        2   +   1
        //   3        3   +   3
        //   6        4   +   6
        //   10       10  +   10
        //   20       11  +   20
        //   31
    }

    console.log('result', result)
    return result;
}

// simpleArraySum([1, 2, 3, 4, 10, 11]) // 31

function sequentialSearch1(array: any[]) {
    let cost = 0;
    for (let i = 0; i < array.length; i++) {
        cost++;
        console.log(i);
    }
    console.log('custo O(n)', cost)
    return -1;
}

// sequentialSearch1([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

function sequentialSearch2(array: any[]) {
    let cost = 0;

    for (let i = 0; i < array.length; i++) { // percorre o array 10x
        cost = cost + 1; 
        // 1  => sai do 1º loop
        // 12 => sai do 2º loop
        // 23 => sai do 3º loop
        // 34 => sai do 4º loop
        // 45 => sai do 5º loop

        console.log(`primeiro loop ${cost}`)

        for (let j = 0; j < array.length; j++) { // percorre o array 10x
            cost = cost + 1; 
            // 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 => sai do 1º loop
            // 13, 14, 15, 16, 17, 18, 19, 20, 21, 22 => sai do 2º loop
            // 24, 25, 26, 27, 28, 29, 30, 31, 32, 33 => sai do 3º loop
            // 35, 36, 37, 38, 39, 40, 41, 42, 43, 44 => sai do 4º loop
            // 46, 47, 48, 49, 50, 51, 52, 53, 54, 55 => sai do 5º loop
            // 66 => sai do 6º loop
            // 77 => sai do 7º loop
            // 88 => sai do 8º loop
            // 99 => sai do 9º loop
            // 110 => sai do 10º loop
            console.log(`segundo loop ${cost}`)
        }

    }

    console.log('custo O(n log n)', cost)
    return -1;
}

sequentialSearch2([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
