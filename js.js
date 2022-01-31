// gets data for the header date
function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}

// // saves data to localStorage
function saveTasks() {
    localStorage.setItem("input", JSON.stringify(InputEvent));
}


getHeaderDate();

// creates the visuals for the scheduler body
InputEvent.forEach(function(thisHour) {
    // creates timeblocks row
    var hourColumn = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    if (thisHour.time < moment().format("HHMM")) {
        planData.attr ({
            "class": "past", 
        })
    } else if (thisHour.time === moment().format("HHMM")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HHMM")) {
        planData.attr({
            "class": "future"
        })
    }

    // creates save button
    var saveButton = $("<input class='far fa-save fa-lg'></input>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    saveButton.append(saveButton);
    hourColumn.append(hourField);
})

// loads existing localstorage data 



