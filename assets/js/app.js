



function website() {
    $('#abtMeContainer').show();
    $('#myExpContainer').hide();
    $('#myProjContainer').hide();
    $('#contactContainer').hide();
}
website()

$('#btn1').on("click", function () {
    $('#header').html("About Me <br> <br>");
    $('#abtMeContainer').show();
    $('#myExpContainer').hide();
    $('#myProjContainer').hide();
    $('#contactContainer').hide();
});

$('#btn2').on("click", function () {
    $('#header').html(" My Experience <br> <br>")
    $('#abtMeContainer').hide();
    $('#myExpContainer').show();
    $('#myProjContainer').hide();
    $('#contactContainer').hide();
});

$('#btn3').on("click", function () {
    $('#header').html(" My Projects <br> <br>")
    $('#abtMeContainer').hide();
    $('#myExpContainer').hide();
    $('#myProjContainer').show();
    $('#contactContainer').hide();
});

$('#btn4').on("click", function () {
    $('#header').html(" My Projects <br> <br>")
    $('#abtMeContainer').hide();
    $('#myExpContainer').hide();
    $('#myProjContainer').hide();
    $('#contactContainer').show();
});
// $('#btn2').on("click", function () {
//     $('#body').html('<style> #container{display: none;} </style>');
//     $('#body').text('I have learned and earned experience in html, css, javascript, jQuery, bootstrap, AJAX, JSON and with APIs. I have also create a project with my group to track interesting events in any cities that have events. This is available to be viewed down below in the project section.');
//     $('#header').html(" My Experience <br> <br>")
// });

// $('#btn3').on("click", function () {
//     $('#body').html('<style> #container{display: none;} </style>');
//     $('#body').text('');
//     $('#header').html(" My Projects <br> <br>")
// });

// $('#btn4').on("click", function () {
//     $('#body').html('<style> #container{display: none;} </style>');
//     $('#body').html("<div class = 'row' <div class= 'col-12'><p> Github Profile: https://github.com/Developer994 </p></div> </div>");
//     $('#contact2').html("<div class = 'row' <div class= 'col-12'><p> Linkedin Profile: </p></div> </div>");
//     $('#contact3').html("<div class = 'row' <div class= 'col-12'><p> Email Address: rez_a@outlook.com </p></div> </div>");
//     $('#contact4').html("<div class = 'row' <div class= 'col-12'><p> Phone Number: (647) 608-0453 </p></div> </div>");
//     $('#header').html(" Contact <br> <br>")
// });