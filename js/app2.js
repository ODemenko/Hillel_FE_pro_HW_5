let distKm = parseFloat(prompt('Distance in km'));
let distFt = parseFloat(prompt('Distance in ft'));

let distKm2 = distFt*0.000305;

if (distKm === distKm2) {
    alert('The distance are equal')
} else if (distKm > distKm2) {
    alert('The distance in km is longer')
} else {
    alert('The distance in ft is longer')
}