document.querySelectorAll('a').forEach(function (link) {
	link.addEventListener('click', function (event) {
		event.preventDefault();
		window.open(link.href, '_blank');
	});
});

document.querySelector("#box").addEventListener("click", function() {
    alert("Hello, this is a moving box!");
  });