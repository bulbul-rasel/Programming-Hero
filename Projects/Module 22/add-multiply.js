function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairQuantity = 3;
    const perTableQuantity = 10;
    const perBedQuantity = 50;

    var totalChairWood = chairQuantity * perChairQuantity;
    var totalTableWood = tableQuantity * perTableQuantity;
    var totalBedWood = bedQuantity * perBedQuantity;

    var totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood;
}

var totaWoodCount = woodQuantity(1, 1, 1);
console.log(totaWoodCount);