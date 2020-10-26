"use strict";

const filterBy = (inputArr, dataType) => {
    const outputArr = [];

    inputArr.forEach(function (element) {
        typeof element !== dataType ? outputArr.push(element) : false;
    });
    return console.log(outputArr);
}

let array = ["Max Yevtushenko", 5, false, "Dan-IT", null, 17, "Pagan", true, undefined, 22];

filterBy(array, "object");