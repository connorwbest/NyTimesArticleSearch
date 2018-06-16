var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "6bf427aa067d43458657331022771c83",
    'q': "Bill Clinton",
    'begin_date': "20000101",
    'end_date': "20180101",
    'sort': "newest"
});
$('#search').on('click', function () {

    event.preventDefault();

    $.ajax({
        url: url,
        method: 'GET',
    }).then(function (response) {
        var result = response;
        console.log(result);
        console.log(result.response.docs.length);

        for (i = 0; i < result.response.docs.length; i++) {

            var articleDiv = $('<div>');

            articleDiv.html(result.response.docs[i]);

            $('#top-articles').prepend(articleDiv);
            
        }


    })
    

})
