const floorsNumber = 10;
let currentFloor = 0;
const calls = [];
let areDoorsOpen = false;
let direction = 0;

let index = 0;

while (index < floorsNumber) {
    calls.push(false);
    index++;
}

const decideDirection = () => {
    if (direction === 0) {
        if (isCalledBelow()) {
            direction = -1;
        } else if (isCalledAbove()) {
            direction = 1;
        }
    }
};

const callElevator = (floor) => {
    calls[floor] = true;
    decideDirection();
};

const isCalledOnSameFloor = () => {
    return calls[currentFloor];
};

const isCalledAbove = () => {
    let i = currentFloor + 1;
    while (i < floorsNumber) {
        if (calls[i]) {
            return true;
        }
        i++;
    }
    return false;
};

const isCalledBelow = () => {
    let i = currentFloor - 1;
    while (i >= 0) {
        if (calls[i]) {
            return true;
        }
        i--;
    }
    return false;
};

const isTopMostCall = () => {
    let i = currentFloor + 1;
    while (i < floorsNumber) {
        if (calls[i]) {
            return false;
        }
        i++;
    }
    return true;
};

const goOneFloor = (delta) => {
    currentFloor += delta;
};

const goOneFloorDown = () => {
    goOneFloor(-1);
}

const goOneFloorUp = () => {
    goOneFloor(1);
};

const openDoors = () => {
    calls[currentFloor] = false;
    areDoorsOpen = true;
    direction = 0;
};

const closeDoors = () => {
    areDoorsOpen = false;
    decideDirection();
}

const isGoingUp = () => {
    return direction === 1;
};

const isGoingDown = () => {
    return direction === -1;
};

const isStopped = () => {
    return direction === 0;
};

const elevator = () => {
    if (isGoingUp()) {
        if (isCalledOnSameFloor() && isTopMostCall()) {
            openDoors();
        } else {
            goOneFloorUp();
        }
        return;
    }
    if (isGoingDown()) {
        if (isCalledOnSameFloor()) {
            openDoors();
        } else {
            goOneFloorDown();
        }
        return;
    }
    if (isCalledOnSameFloor()) {
        openDoors();
    }
};

callElevator(4);
while (!isStopped()) {
    if (currentFloor === 1) {
        callElevator(2);
    }
    console.log('was: ', currentFloor + 1, `doors: ${areDoorsOpen ? 'open' : 'close'}`);
    elevator();
    console.log('became: ', currentFloor + 1, `doors: ${areDoorsOpen ? 'open' : 'close'}`);
    console.log('---------------------');
}
closeDoors();
while (!isStopped()) {
    console.log('was: ', currentFloor + 1, `doors: ${areDoorsOpen ? 'open' : 'close'}`);
    elevator();
    console.log('became: ', currentFloor + 1, `doors: ${areDoorsOpen ? 'open' : 'close'}`);
    console.log('---------------------');
}
callElevator(0);
closeDoors();
while (!isStopped()) {
    console.log('was: ', currentFloor + 1, `doors: ${areDoorsOpen ? 'open' : 'close'}`);
    elevator();
    console.log('became: ', currentFloor + 1, `doors: ${areDoorsOpen ? 'open' : 'close'}`);
    console.log('---------------------');
}
