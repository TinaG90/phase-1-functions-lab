// Code your solution in this file!
function distanceFromHqInBlocks(HqBlock) {
    if (HqBlock > 42) {
        return HqBlock - 42
    }
    else if (HqBlock < 42) {
        return 42 - HqBlock
    }
}

function distanceFromHqInFeet(Blocks) {
    distanceFromHqInBlocks(Blocks);
    return distanceFromHqInBlocks(Blocks) *264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination)*264;
    } else {
        return (destination - start)*264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}