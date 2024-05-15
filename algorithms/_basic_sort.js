const points = [40, 100, 1, 5, 25, 10];

// Sort the numbers in ascending order
points.sort(function(a, b){return a-b});

let lowest = points[0];

console.log(lowest)


const pointsA = [40, 100, 32, 5, 25, 10];

let lowestA = pointsA[0];



const basicSort = (arr) =>{
    return arr.sort((a,b) =>{
        return a-b
    })
}

console.log(lowestA)