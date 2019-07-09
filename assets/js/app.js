$("#login").click(function() {
	fetch('https://jsonplaceholder.typicode.com/users?username=' + $('#username').val())
	.then(function(response){
		return response.json();
	})
	.then(function(json) {
		var user = json[0];

		$("#login-form").hide();
		$("#homepage").show();

		$("#name").html(user.name);

		var list = $("ul#postsList");
		$.get("http", function(posts){
			userID.forEach("<li></li>")
		})

		$("#posts").html(user.posts);

		$("#albums").html(user.albums);

		

	})
	.catch(function(error){
		alert(error);
	})
})