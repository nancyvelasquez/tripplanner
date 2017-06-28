$(document).ready(function(){
    hotels.forEach((hotel) => {
        var hotelTag = $("<option>", { value: hotel.id, text: hotel.name });
        $("#hotel-choices").append(hotelTag);
    });

    restaurants.forEach((restaurant) => {
        var restaurantTag = $("<option>", { value: restaurant.id, text: restaurant.name });
        $("#restaurant-choices").append(restaurantTag);
    });

    activities.forEach((activity) => {
        var activityTag = $("<option>", { value: activity.id, text: activity.name });
        $("#activity-choices").append(activityTag);
    });

    $("#hotelButton").click(function() {
        var selectedVal = $("#hotelButton").parent().find("select").val();
        var hotelName;
        for(var x = 0; x < hotels.length; x++){
            if(hotels[x].id === Number(selectedVal)){
                hotelName = hotels[x].name;
            }
        }
        var newButton = $('<button data-action="add" class="btn btn-primary btn-circle pull-right" id="genericButton">x</button>').css("background-color", '#d9534f');
        $('.hotel-group .title').append('<li>'+ hotelName + $(newButton).prop('outerHTML') + '</li>')
        
    })

    $('.btn btn-primary btn-circle pull-right').on('click', '.remove', function () {
        
    });

    $("#restaurantButton").click(function() {
         var selectedVal = $("#restaurantButton").parent().find("select").val();
         var restaurantName;
        for(var x = 0; x < restaurants.length; x++){
            if(restaurants[x].id === Number(selectedVal)){
                console.log("reached");
                restaurantName = restaurants[x].name;
            }
        
        }
        var newButton = $('<button data-action="add" class="btn btn-primary btn-circle pull-right">x</button>').css("background-color", '#d9534f');
        $('.restaurant-group .title').append('<li>'+restaurantName+$(newButton).prop('outerHTML')+'</li>');
    })

    $("#activityButton").click(function() {
        var selectedVal = $("#activityButton").parent().find("select").val(); 
        var activityName;
        for(var x = 0; x < activities.length; x++){
            if(activities[x].id === Number(selectedVal)){
                activityName = activities[x].name;
            }
        }
        var newButton = $('<button data-action="add" class="btn btn-primary btn-circle pull-right" >x</button>').css("background-color", '#d9534f');
        $('.activity-group .title').append('<li>'+activityName+$(newButton).prop('outerHTML')+'</li>');
    })


});
