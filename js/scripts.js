//business logic
function Contact(first, last) { //defined contact constructor
  this.firstName = first;//what is in our defined contact constructor
  this.lastName = last;//what is in our defined contact constructor
  this.addresses = [];//an empty array in our contact constructor
}
function Address(street, city state) {//defined address constructor
  this.street = street;//what is in our defined address constructor
  this.city = city;//what is in our defined address constructor
  this.state = state;//what is in our defined address constructor
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
function Contact(first, last) { this.firstName = first; this.lastName = last;this.addresses = [];
}//Our created constructor
function Address(street, city, state) { this.street = street; this.city = city; this.state = state; }
//Our created constructor
var lisa = new Contact("Lisa", "Simpson");//contact object
var home = new Address("742 Evergreen Terrace", "Springfield", "Oregon");//adress object

$(".new-address").each(function() {
  var inputtedStreet = $(this).find("input.new-street").val();
  var inputtedCity = $(this).find("input.new-city").val();
  var inputtedState = $(this).find("input.new-state").val();
  var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
  newContact.addresses.push(newAddress);
});




//user interface logic

$(function() {
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);//contact object form/layout

    var person = { name: "PersonName", names; [firstName, lastName]};

    var newAddress - new Address(inputtedStreetAddress, inputtedCityName, inputtedState)//contact object form/layout

    var location = { address: "Address", addresses; [street, city, state]};

    var contacts = [person, location];

  person.personName.forEach(function(personName) {
      console.log(personName.name);
  location.address.forEach(function(address) {
  console.log(address.name);
    });

    $("#add-address").click(function() {
      $"#new-addresses").append('<div class="new-address">' +
                                    '<div class="form-group">' +
                                      '<label for="new-street">Street</label>' +
                                       '<input type="text" class="form-control new-street">'
                                     '</div>' +
                                     '<div class="form-group">' +
                                       '<label for="new-city">City</label>' +
                                       '<input type="text" class="form-control new-city">' +
                                     '</div>' +
                                     '<div class="form-group">' +
                                       '<label for="new-state">State</label>' +
                                       '<input type="text" class="form-control new-state">' +
                                     '</div>' +
                                   '</div>');
  });

  // console.log("\n");.forEach(function(contact) {
  //       consol.log()
  //   }

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
