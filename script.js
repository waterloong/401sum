$('td').map(function(){return $(this).text()}).get().filter(t => t.includes('$')).map(t => parseFloat(t.substring(1))).reduce((a,b) => a + b, 0)
