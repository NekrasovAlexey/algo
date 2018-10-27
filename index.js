const bubleSort = array => {
    const sortArray = [...array];

    for (let i = sortArray.length - 1; i >= 0 ; i--) {
        for (let j = 0; j < i; j++) {
            if (sortArray[j] > sortArray[j + 1]) {
                const next = sortArray[j + 1];
                sortArray[j + 1] = sortArray[j];
                sortArray[j] = next;
            }
        }
    }

    return sortArray;
};

const byMaxSort = array => {
    const sortArray = [...array];

    for (let i = sortArray.length; i > 0; i--) {
        let maxIndex = 0;
        for (let j = 1; j < i; j++) {
            if (sortArray[j] > sortArray[maxIndex]) {
                maxIndex = j;
            }
        }

        const next = sortArray[i - 1];
        sortArray[i - 1] = sortArray[maxIndex];
        sortArray[maxIndex] = next;
    }

    return sortArray;
};

const insertSort = array => {
    const sortArray = [...array];

    for (let i = sortArray.length - 2; i >= 0; i--) {
        const current = sortArray[i];
        let j = i;
        while (j < sortArray.length - 1 && current > sortArray[j + 1]) {
            sortArray[j] = sortArray[j + 1];
            j++;
        }

        sortArray[j] = current;
    }

    return sortArray;
};

const treeExample = tree = {
    val: 1,
    children: [
        {
            val: 2,
            children: [
                {
                    val: 5
                },
                {
                    val: 6
                }
            ]
        },
        {
            val: 3
        },
        {
            val: 4,
            children: [
                {
                    val: 7
                },
                {
                    val: 8
                },
                {
                    val: 9
                }
            ]
        },
    ]
};

const deep = tree => {
    const {val, children} = tree;

    console.log(val);

    children && children.forEach(tree => deep(tree));
};

const wide = tree => {
    let queue = [tree];

    while (queue.length) {
        const {val, children} = queue.shift();

        console.log(val);
        if (children) {
            queue = queue.concat(children);
        }
    }
};

const checkPar = string => {
    const par = [];
    const open = ['(', '[', '{'];
    const close = [')', ']', '}'];

    const symbols = string.split('');

    while (symbols.length) {
        const symbol = symbols.shift();

        if (open.includes(symbol)) {
            par.push(symbol);
        } else if (close.includes(symbol)) {
            const index = close.findIndex(par => par === symbol);

            if (par.pop() !== open[index]) {
                return false;
            }
        }
    }

    return true;
};
