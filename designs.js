// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$(document).ready(function(){
	$('#sizePicker').submit(function makeGrid(grid){
	var rows = $("#inputHeight").val();
	var cols = $("#inputWeight").val();
		for(var r=1; r<=rows; r++){
			$('table').append('<tr></tr>');
			for(l=1; l<=cols; l++){
				$('tr:last').append("<td></td>");
				$('td').attr("class", 'cells');
			}
		}
		grid.preventDefault();
		$('.cells').click(function(event){
		var paint=$('#colorPicker').val();
		$(event.target).css('background-color', paint);
		
		});
		
	});
	
});



// Your code goes here!




