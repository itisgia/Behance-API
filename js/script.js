
var imageDiv = document.getElementById('projectImage');

function getData() {
	$.ajax({
            url: 'https://api.behance.net/v2/users/thisispacifica/projects?client_id=iYFYIUIra6sMY9ML07OqQwvcNaYZtU45',
            dataType: 'jsonp',
            type: 'GET',
            success: function(data) {
				getImage(data);
            },
            error: function(error) {
                console.log(error);
            }
    });

	function getImage(data) {
		var image = data.projects
		var x = document.createElement("IMG");
			x.setAttribute("src", image[2].covers.original);
			x.setAttribute("width", "400");
			x.setAttribute("height", "350");
			imageDiv.appendChild(x);
	}
}

getData();
