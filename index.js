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
        for (let j = i; j < sortArray.length - 1; j++) {
            if (sortArray[j] > sortArray[j + 1]) {
                const next = sortArray[j + 1];
                sortArray[j + 1] = sortArray[j];
                sortArray[j] = next;

                break;
            }
        }
    }

    return sortArray;
};
