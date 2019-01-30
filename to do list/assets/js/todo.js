$("ul").on("click","li",function(){
	// if($(this).css("color")==="rgb(128, 128, 128)")
	// {
	// 	 $(this).css({
	// 	 	color:"black",
	// 	 	textDecoration:"none"
	// 	 });
		
	// }
	// else{
	// $(this).css({
	// 	color:"gray",
	// 	textDecoration:"line-through"
	// 		});
	// }
	$(this).toggleClass("complete");
});
$("ul").on("click","span",function(e) {
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	e.stopPropagation();
})
$("input[type='text']").on("keypress",function(x){
	if(x.which===13)
	{
		var textContent=$(this).val();
		$("ul").append("<li><span><i class='fas fa-trash-restore-alt'></i></span> "+textContent+"</li>");
		$(this).val("");

	}

});

$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle(500);
});
