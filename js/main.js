$('button').on('click', function(evt) {
    if ($('input').val() === '') return;
    let liTemplate = `<li><span>X</span>${$('input').val()}</li>`;
    $('ul').append(liTemplate);
    $('li').last().hide().fadeIn(200);
    $('input').val('');
});

$('ul').on('click', 'span', function(evt) {
    $(this).closest('li').fadeOut(200, function() {
        $(this).remove();
    });
});