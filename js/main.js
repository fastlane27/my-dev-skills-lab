$('input').val('');

$('button').on('click', createLi);
$('input').on('keydown', function(evt) {
    if (evt.keyCode === 13) createLi();
});

$('ul').on('click', 'span', function() {
    $(this).closest('li').fadeOut(200, function() {
        $(this).remove();
    });
});

function createLi() {
    if ($('input').val() === '') return;
    let liTemplate = `<li><span>X</span>${$('input').val()}</li>`;
    $('ul').append(liTemplate);
    $('li').last().hide().fadeIn(200);
    $('input').val('');
}