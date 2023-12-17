$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(e){
	$('#tab-contents .tab').hide();
	$('#tab-menu .active').removeClass("active");
	$(this).addClass("active");
	$($(this).attr("href")).show();
	e.preventDefault();
});
