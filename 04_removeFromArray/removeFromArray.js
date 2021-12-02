const removeFromArray = function(items, ...removals) {
    let returnItems = items;
    console.log("removals " + removals);
    for(const removalItem of removals) {
        let removalIndex;
        do {
            removalIndex = returnItems.indexOf(removalItem);
            if (removalIndex >= 0) returnItems.splice(removalIndex, 1);
            console.log("item to remove " + removalItem);
            console.log("return items " + returnItems);
            console.log("removalIndex " + removalIndex)
        } while (removalIndex >= 0);

    }

    return returnItems;
};

// Do not edit below this line
module.exports = removeFromArray;
