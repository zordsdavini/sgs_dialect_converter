var dialectMap = ['sgs', 'tls', 'vrn', 'mzk', 'akm', 'krt', 'rsn'];

var letterMap = [
    ['Ë', 'ĖI', 'Ī', 'ĖI', 'ĖI', 'ĖI', 'Ī'],
    ['Ů', 'OU', 'Ū', 'OU', 'OU', 'OU', 'Ū'],
    ['Ȧ', 'A', 'A', 'E', 'E', 'E', 'E'],
    ['Ǡ', 'Ā', 'Ā', 'Ē', 'Ē', 'Ē', 'Ē'],
    ['Ť', 'Č', 'Č', 'Č', 'Č', 'T', 'Č'],
    ['Ď', 'DŽ', 'DŽ', 'DŽ', 'DŽ', 'D', 'DŽ'],
    ['Ė̄', 'ĖN', 'ĖN', 'Ė̄', 'ĖI', 'ĖI', 'EN'],
    ['Ō', 'ON', 'ON', 'Ō', 'OU', 'OU', 'AN'],
    ['Ā', 'Ā', 'Ā', 'Ā', 'Ā', 'Ā', 'AI'],
    ['Ē', 'Ē', 'Ē', 'Ē', 'Ē', 'Ē', 'EI'],
    ['É', 'I', 'Ė', 'I', 'Ė', 'Ė', 'Ė'],
    ['Ó', 'U', 'O', 'U', 'O', 'O', 'O'],

    ['ë', 'ėi', 'ī', 'ėi', 'ėi', 'ėi', 'ī'],
    ['ů', 'ou', 'ū', 'ou', 'ou', 'ou', 'ū'],
    ['ȧ', 'a', 'a', 'e', 'e', 'e', 'e'],
    ['ǡ', 'ā', 'ā', 'ē', 'ē', 'ē', 'ē'],
    ['ť', 'č', 'č', 'č', 'č', 't', 'č'],
    ['ď', 'dž', 'dž', 'dž', 'dž', 'd', 'dž'],
    ['ė̄', 'ėn', 'ėn', 'ė̄', 'ėi', 'ėi', 'en'],
    ['ō', 'on', 'on', 'ō', 'ou', 'ou', 'an'],
    ['ā', 'ā', 'ā', 'ā', 'ā', 'ā', 'ai'],
    ['ē', 'ē', 'ē', 'ē', 'ē', 'ē', 'ei'],
    ['é', 'i', 'ė', 'i', 'ė', 'ė', 'ė'],
    ['ó', 'u', 'o', 'u', 'o', 'o', 'o']
];

$(function(){
    var text = document.body.innerHTML;

    $('body').on('click', '.dialects', function(){
        var workingText = text;
        var slct = $(this).data('dialect');
        var dlct = dialectMap.indexOf(slct);

        $(letterMap).each(function(j, map){
            workingText = workingText.replace(new RegExp(map[0], 'g'), map[dlct]);
            document.body.innerHTML = workingText;
        });

        $('.dropdown-tarmie').text($('.dialects[data-dialect="'+slct+'"]').text()).append(' <span class="caret"></span>');
    });
});

/*
// pakeit vėsus tekstu torėnius naujē
$('*').contents().filter(function() {
    return this.nodeType == Node.TEXT_NODE && this.nodeValue.trim() != '';
}).each(function() {
    this.nodeValue = '@@@@';
});
*/
