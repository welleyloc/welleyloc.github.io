$(document).ready(function () {
    $("#person_table").DataTable({
        columnDefs: [
            {targets: "_all", className: "dt-body-center"}
        ]
    });
});

$(document).ready(function () {
    $('#base_table').DataTable({
        "data": objs,
        columns: [
            {title: "Name", data: "name", target: [0], className: "la"},
            {title: "Position", data: "position", target: [1], className: "la"},
            {title: "Salary", data: "salary", target: [2], className: "la"},
            {title: "Start date", data: "start_date", target: [3], className: "la"},
            {title: "Office", data: "office", target: [4], className: "la"},
        ]
    });
});

var objs = [
    {
        "name": "Jerry Nixon",
        "position": "System Architect",
        "salary": "$95,000",
        "start_date": "2010/03/09",
        "office": "Scottsdale"
    },
    {
        "name": "George Parker",
        "position": "Director",
        "salary": "$123,000",
        "start_date": "2002/01/19",
        "office": "Phoenix"
    },
    {
        "name": "Cindy Stackhouse",
        "position": "Development Manager",
        "salary": "$93,000",
        "start_date": "2016/04/25",
        "office": "Dallas"

    }];