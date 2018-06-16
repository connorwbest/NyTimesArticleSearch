var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "6bf427aa067d43458657331022771c83",
  'q': "Bill Clinton",
  'begin_date': "20000101",
  'end_date': "20180101",
  'sort': "newest"
});

$.ajax({
    url: url,
    method: 'GET',
  }).then(function(response){
    console.log(response);
  })
 
