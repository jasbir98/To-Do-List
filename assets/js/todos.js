// Check off Specific Todos By Clicking
$("ul").on("click", "li", function(){ // ul is called because with on function we can only call those elements
	$(this).toggleClass("completed"); // which we can all access right now. Since the li's are changing so we selected 
});									// 'ul' i.e Their parent element and then inside ON function we have li .
// Click on X to delete TODO 	
$("ul").on("click", "span", function(event){		// Same goes for span and ul
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		//Grabbing new Todo Text from Input
		var todoText = $(this).val();
		// Create a new li and add to ul
		$(this).val("");// To clear out the input after we hit enter key
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").slideToggle(250);
});