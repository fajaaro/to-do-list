$(document).ready(function() {
	$('.remove-item').on('click', function() {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this activity!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
		.then((willDelete) => {
			if (willDelete) {	
				swal({
					text: "Poof! Your activity has been deleted!",
					icon: "success",
				})
				.then((ok) => {
					if (ok) {
						$(this).parent().submit()
					}
				})
			} else {
				swal("Your activity is safe!")
			}
		})
	})

	$('.check-item').on('click', function() {
		$(this).parent().submit()
	})
})