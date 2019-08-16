// Next iteration goal: use objects and JSON to recreate this script
// Last edit by Welley on August 9, 2019
// Assignment combines general HTML/CSS, JS, JQuery, DOMS/nodes lectures

jQuery(function ($) {
    $('.test').focusout(function () {
        var element = $(this);
        if (!element.text().replace(' ', '').length) {
            element.empty();
        }
    });
});

$(document).ready(function () {

    var toDoList = [];

    $('div.list').find('li').each(function (index, ele) {
        toDoList += ele.innerHTML + ',';
    })

    console.log(toDoList);

    // Takes user input as text. Appends text input to html list and pushes it into array as string in console. 
    $('.addbutton').click(function () {
        var userInput = $('.inputbox').val();

        $('.ulist').append($('<li>', {
            text: userInput
        }));

        toDoList.push(userInput);

        console.log(toDoList);
        document.getElementById('inputid').value = '';

        // LOCAL STORAGE SET ------
        var listSave = document.querySelector('#ulistid').innerHTML;
        localStorage.setItem('SavedList', listSave);
        // END LOCAL STORAGE SET ------
    })

    // Binds the addbutton click action to enter key (keycode 13)  
    $('#inputid').keyup(function (e) {
        if (e.which == 13) { // e.keyCode also works
            $('.addbutton').click();
        }
    })

    // Removes the target element by clicking
    var rmEvent = document.getElementById('ulistid').
        addEventListener('click', function (event) {
            event.target.remove();

            var removedTarget = event.target.innerHTML;

            // LOCAL STORAGE SET ------
            var listSave = document.querySelector('#ulistid').innerHTML;
            localStorage.setItem('SavedList', listSave);
            // END LOCAL STORAGE SET ------

            for (let z = 0; z < toDoList.length; z++) {
                if (toDoList[z] == removedTarget) {
                    toDoList.splice(z, 1);
                    console.log(toDoList);
                }
            }
        })

    // LOCAL STORAGE GET -----
    retrieve = localStorage.getItem('SavedList');
    console.log('Local Storage: ' + retrieve);
    // END LOCAL STORAGE GET -----

    // Regenerates the last list on browser on reload
    document.getElementById('ulistid').innerHTML = retrieve;

    // Updates the toDoList array in console on reload
    var newt = String(retrieve);
    var newt_list = newt.split('</li>');
    var new_newt_list = [];
    for (let i = 0; i < newt_list.length - 1; i++) {
        let short_lived_newt = newt_list[i].split('<li>');
        new_newt_list.push(short_lived_newt[1]);
    }
    var toDoList = new_newt_list;
})


