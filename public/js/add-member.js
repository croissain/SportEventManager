

$(document).ready(function(){
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
});

document.addEventListener("DOMContentLoaded", function (e) {
	let playerId;
	//Variable delete product
	const btnDeleteMember = document.getElementById("btn-delete-member");
	const deleteMemberForm = document.forms["delete-member-form"];
	//Delete product
	$('#deleteMemberModal').on('show.bs.modal', function (event) {
		const button = $(event.relatedTarget)
		playerId = button.data('id')
	})
	// btnDeleteMember.onclick = function () {
	// 	deleteMemberForm.action = `/members/${playerId}?_method=DELETE`;
	// 	deleteMemberForm.submit();
	// }
})