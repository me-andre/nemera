class Elevator {
    constructor(floorsNumber, currentFloor, areDoorsOpen) {
        this.floorsNumber = floorsNumber;
        this.currentFloor = currentFloor;
        this.areDoorsOpen = areDoorsOpen;
        this.direction = 0;

        const calls = [];

        let index = 0;

        while (index < floorsNumber) {
            calls.push(false);
            index++;
        }

        this.calls = calls;
    }
}

const decideDirection = (elevator) => {
    if (elevator.direction === 0) {
        if (isCalledBelow(elevator)) {
            elevator.direction = -1;
        } else if (isCalledAbove(elevator)) {
            elevator.direction = 1;
        }
    }
};

const callElevator = (elevator, floor) => {
    elevator.calls[floor] = true;
    decideDirection(elevator);
};

const isCalledOnSameFloor = (elevator) => {
    return elevator.calls[elevator.currentFloor];
};

const isCalledAbove = (elevator) => {
    let i = elevator.currentFloor + 1;
    while (i < elevator.floorsNumber) {
        if (elevator.calls[i]) {
            return true;
        }
        i++;
    }
    return false;
};

const isCalledBelow = (elevator) => {
    let i = elevator.currentFloor - 1;
    while (i >= 0) {
        if (elevator.calls[i]) {
            return true;
        }
        i--;
    }
    return false;
};

const isTopMostCall = (elevator) => {
    let i = elevator.currentFloor + 1;
    while (i < elevator.floorsNumber) {
        if (elevator.calls[i]) {
            return false;
        }
        i++;
    }
    return true;
};

const goOneFloor = (elevator, delta) => {
    elevator.currentFloor += delta;
};

const goOneFloorDown = (elevator) => {
    goOneFloor(elevator, -1);
};

const goOneFloorUp = (elevator) => {
    goOneFloor(elevator, 1);
};

const openDoors = (elevator) => {
    elevator.calls[elevator.currentFloor] = false;
    elevator.areDoorsOpen = true;
    elevator.direction = 0;
};

const closeDoors = (elevator) => {
    elevator.areDoorsOpen = false;
    decideDirection(elevator);
};

const isGoingUp = (elevator) => {
    return elevator.direction === 1;
};

const isGoingDown = (elevator) => {
    return elevator.direction === -1;
};

const isStopped = (elevator) => {
    return elevator.direction === 0;
};

const elevatorGo = (elevator) => {
    if (isGoingUp(elevator)) {
        if (isCalledOnSameFloor(elevator) && isTopMostCall(elevator)) {
            openDoors(elevator);
        } else {
            goOneFloorUp(elevator);
        }
        return;
    }
    if (isGoingDown(elevator)) {
        if (isCalledOnSameFloor(elevator)) {
            openDoors(elevator);
        } else {
            goOneFloorDown(elevator);
        }
        return;
    }
    if (isCalledOnSameFloor(elevator)) {
        openDoors(elevator);
    }
};

const elevatorTen = new Elevator(10, 0, false);

console.log(elevatorTen);

const inspectElevator = (elevator, prefix) => {
    console.log(`${prefix}: `, elevator.currentFloor + 1, `doors: ${elevator.areDoorsOpen ? 'open' : 'close'}`);
};

callElevator(elevatorTen, 4);
while (!isStopped(elevatorTen)) {
    if (elevatorTen.currentFloor === 1) {
        callElevator(elevatorTen, 2);
    }
    inspectElevator(elevatorTen, 'was');
    elevatorGo(elevatorTen);
    inspectElevator(elevatorTen, 'became');
    console.log('---------------------');
}
closeDoors(elevatorTen);
while (!isStopped(elevatorTen)) {
    inspectElevator(elevatorTen, 'was');
    elevatorGo(elevatorTen);
    inspectElevator(elevatorTen, 'became');
    console.log('---------------------');
}
callElevator(elevatorTen, 0);
closeDoors(elevatorTen);
while (!isStopped(elevatorTen)) {
    inspectElevator(elevatorTen, 'was');
    elevatorGo(elevatorTen);
    inspectElevator(elevatorTen, 'became');
    console.log('---------------------');
}
