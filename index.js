/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// Your code here
function createEmployeeRecord(params) {
    let myObj = {
        firstName: params[0],
        familyName: params[1],
        title: params[2],
        payPerHour: params[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return myObj;

}

function createEmployeeRecords(array) {
    let newArray = [];

    for (const employee of array) {

        newArray.push(createEmployeeRecord(employee));

    }
    return newArray;
}

const createTimeInEvent = function (dataStamp) {
    let [date, hour] = dataStamp.split(' ');

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    });

    return this;
}

let createTimeOutEvent = function (dataStamp) {
    let [date, hour] = dataStamp.split(' ');

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this;
}

function hoursWorkedOnDate(dataStamp) {
    const timeIn = this.timeInEvents.find(function (e) {
        return e.date === dataStamp
    });
    const timeOut = this.timeOutEvents.find(function (e) {
        return e.date === dataStamp
    });

    let workedHours = (timeOut.hour - timeIn.hour) / 100;
    // console.log(workedHours);
    return workedHours;
}

function wagesEarnedOnDate(dataStamp) {
    let workedHours = hoursWorkedOnDate.call(this, dataStamp);
    let payPerHour = this.payPerHour;
    let EarnedOnDate = workedHours * payPerHour;
    return EarnedOnDate;
}
let findEmployeeByFirstName = function (array, name) {
    return array.find(function (arr) {
        return arr.firstName === name;
    })
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}





function calculatePayroll(recordObj) {
    let all = recordObj.reduce(function (acc, value) {
        return acc + allWagesFor.call(value)
    }, 0);

    return all;
}
