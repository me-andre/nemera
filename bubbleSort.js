const m41Students = {
    "pesin": 190,
    "nemera": 182,
    "yarik": 185,
    "pazniak": 180
};

const bubbleSort2Arrays = (keys, values) => {
    const keysCopy = keys.slice();
    const valuesCopy = values.slice();

    let isSorted = false;

    while (!isSorted) {
        isSorted = true;

        for (let i = 0; i < valuesCopy.length - 1; i++) {
            const left = valuesCopy[i];
            const right = valuesCopy[i + 1];
            if (left > right) {
                valuesCopy[i] = right;
                valuesCopy[i + 1] = left;
                const leftKey = keysCopy[i];
                keysCopy[i] = keysCopy[i + 1];
                keysCopy[i + 1] = leftKey;
                isSorted = false;
                break;
            }
        }
    }

    return keysCopy;
};

const placeStudents = (students) => {
    const names = [];
    const heights = [];
    for (let name in students) {
        names.push(name);
        heights.push(students[name]);
    }
    return bubbleSort2Arrays(names, heights);
};

console.log(placeStudents(m41Students));
