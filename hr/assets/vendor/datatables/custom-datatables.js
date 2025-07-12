// Vertical Scroll
$(function(){
	$('#scrollVertical').DataTable({
		"paging": true,
		"language": {
        "sProcessing":    "Загрузка...",
        "sSearch":        "Поиск:",
        "oPaginate": {
            "sFirst":    "Первая",
            "sLast":    "Последняя",
            "sNext":    "Следующая",
            "sPrevious": "Предыдущая"
        },
        "lengthMenu":    "Показывать по _MENU_",
        "info":          "Показаны с _START_ по _END_ из _TOTAL_",
    }
	});
});