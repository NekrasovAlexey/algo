const bubleSort = array => {
    const sortArray = [...array];

    for (let i = 0; i < sortArray.length; i++) {
        for (let j = 0; j < sortArray.length - i - 1; j++) {
            if (sortArray[j] > sortArray[j + 1]) {
                const next = sortArray[j + 1];
                sortArray[j + 1] = sortArray[j];
                sortArray[j] = next;
            }
        }
    }

    return sortArray;
};
