var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var paramObject = {
    'api-key': "6bf427aa067d43458657331022771c83",
    'q': "",
    'begin_date': "",
    'end_date': "20180101",
    'sort': "newest"
}
url += '?' + $.param(paramObject);
$('#search').on('click', function () {

    event.preventDefault();

    paramObject['q'] = $('#keyword').val();
    paramObject['begin_date'] = $("#start-date").val();
    paramObject['end_date'] = $('#end-date').val(); 

    $.ajax({
        url: url,
        method: 'GET',
    }).then(function (response) {
        var result = response;
        console.log(result);
        console.log(result.response.docs.length);

        for (i = 0; i < result.response.docs.length; i++) {

            var articleDiv = $('<div>');

            articleDiv.html(JSON.stringify(result.response.docs[i].headline.main));

            $('#top-articles').prepend(articleDiv);
            console.log(result.response.docs[i].headline.main);
            
        }


    })
    

})
