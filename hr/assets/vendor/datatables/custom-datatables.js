// Vertical Scroll
$(function(){
	$('#scrollVertical').DataTable({
		"scrollY": "207px",
		"scrollCollapse": true,
		"paging": false,
		"bInfo" : false,
		"language": {
        "sProcessing":    "Загрузка...",
        "sSearch":        "Поиск:",
        "oPaginate": {
            "sFirst":    "Первая",
            "sLast":    "Последняя",
            "sNext":    "Следующая",
            "sPrevious": "Предыдущая"
        }
    }
	});
});