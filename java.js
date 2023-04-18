window.addEventListener("scroll", function() {
	var scroll = document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var opacity = 1 - scroll / height;
	document.body.style.background = "rgba(255, 0, 0, " + opacity + ")";
});
