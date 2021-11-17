try {
    fetchBreweryApi();
} catch (error) {
    console.error(error);
}
async function fetchBreweryApi() {
    var breweryApiResponse = await fetch('https://api.openbrewerydb.org/breweries')
                    .then(response => response.json());
    breweryApiResponse.forEach(function(row) {
        var div = document.createElement('div');
        div.id = 'breweries_id';
        div.className = 'main_content_breweries';
        div.append("Name: "+row.name+ " ");
        div.append("Type: "+row.brewery_type+ " ");
        div.append("Address: "+row.street+ " ");
        div.append("URL: "+row.website_url+ " ");
        div.append("Phone: "+row.phone);
        document.body.appendChild(div);
    });
}