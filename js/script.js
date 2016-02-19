$(function() {
    
    $('#todoList ul').sortable({
        items: "li:not('.listTitle, .addItem')",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emtySpace"
    });
    
    $('input').keydown(function(e){
        if(e.keyCode == 13){
            var item = $(this).val();
            
            $(this).parent().parent().append('<li>' + item + '</li>');
            $(this).val('');
        }
    });
    
    $('#trash').droppable({
        drop: function(event, ui){
            ui.draggble.remove();
    }
    });
});