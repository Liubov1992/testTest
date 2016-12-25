(function(){
    

   navigator.geolocation.getCurrentPosition(function(position){
       var x1 = position.coords.latitude;
       var y1 = position.coords.longitude;
       
       
       $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
			type: 'GET',
			success: function( res ){  
                var Users = [];
                var i = 0;
                 var user = {
                      id: res[i].id,
                      name: res[i].name,
                      userName: res[i].username,
                      email: res[i].email,
                      street: res[i].address.street,
                      suite: res[i].address.suite,
                      city: res[i].address.city,
                      zipcode: res[i].address.zipcode,
                      phone: res[i].phone,
                      website: $('.form').find('#website').val(),
                      companyName: res[i].company.name,
                      catchPhrase: res[i].company.catchPhrase,
                    };

                for( i; i < 10; i++ ){
                    Users.push(user);
                    var x2 = res[i].address.geo.lat;
                    var y2 = res[i].address.geo.lng;
                    var distance = Math.round(6371*(Math.acos(Math.sin(x1)*Math.sin(x2)+Math.cos(x1)*Math.cos(x2)*Math.cos(y1-y2))));  
             $('#container').append('<tr><td>'+Users.length+'</td><td>'+res[i].name+'</td><td>'+res[i].username+'</td><td>'+res[i].email+'</td><td>'+'Street: '+res[i].address.street+'<br>Suite :'+res[i].address.suite+'<br>City: '+res[i].address.city+'<br>Zipcode: '+res[i].address.zipcode+'<br>Distance: '+distance+' km</td><td>'+res[i].phone+'</td><td>'+res[i].website+'</td><td>'+'Name: '+res[i].company.name+'<br>Catch phrase: '+res[i].company.catchPhrase+'</td></tr>');
                
                };
                
                
                    $('.form').submit( function(e) {
                        e.preventDefault();
                                 var newUser = {
            name: $('#form').find("#name").val(),
            userName: $('#form').find('#userName').val(),
            email: $('#form').find('#email').val(),
            street: $('#form').find('#street').val(),
            suite: $('#form').find('#suite').val(),
            city: $('#form').find('#city').val(),
            zipcode: $('#form').find('#zipcode').val(),
            phone: $('#form').find('#phone').val(),
            website: $('#form').find('#website').val(),
            companyName: $('#form').find('#companyName').val(),
            catchPhrase: $('#form').find('#catchPhrase').val(),
            };
                        var a = Users.length+1;
                        var k = Users.length;
                                for (k; k < a; k++){
                                Users.push(newUser);
                                $('#container').append('<tr><td class="id">'+a+'</td><td>'+newUser.name+'</td><td>'+newUser.userName+'</td><td>'+newUser.email+'</td><td>Street: '+newUser.street+'<br>Suite: '+newUser.suite+'<br>City: '+newUser.city+'<br>Zipcode: '+newUser.zipcode+'</td><td>'+newUser.phone+'</td><td>'+newUser.website+'</td><td>Name: '+newUser.companyName+'<br>Catch phrase: '+newUser.catchPhrase+'</td></tr>');  
                        
                    }
            });
                

                
  
                
   var filter1 = $('#nameSearch');
        filter1.keyup(function(e){
            $('.table td:nth-child(2)').each(function(){
                if(filter1.val() != $(this).text().substr(0, filter1.val().length)) {
                    $(this).parent().hide();
                    } else (
                    $(this).parent().show()
                    )
             });
        });
    
    var filter2 = $('#userNameSearch');
        filter2.keyup(function(e){
            $('.table td:nth-child(3)').each(function(){
                if(filter2.val() != $(this).text().substr(0, filter2.val().length)) {
                    $(this).parent().hide();
                    } else (
                    $(this).parent().show()
                    )
             });
        });
    
    var filter3 = $('#emailSearch');
        filter3.keyup(function(e){
            $('.table td:nth-child(4)').each(function(){
                if(filter3.val() != $(this).text().substr(0, filter3.val().length)) {
                    $(this).parent().hide();
                    } else (
                    $(this).parent().show()
                    )
             });
        });
                
                
            
     
                
                
$(document).ready(function() { 
	$('a#go').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400,
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});

	$('#modal_close, #overlay').click( function(){ 
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});
});
                
                
                
                
                
                
                
                
            }
       });
   });
}());


		