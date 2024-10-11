const url = "https://api.usaspending.gov//api/v2/references/toptier_agencies/";

async function fetchMessages() {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    const headerElement = document.querySelector(".Header");
    if (headerElement) {
        headerElement.innerHTML = "";

        if (json.results && json.results.length > 0) {
            const item = json.results[0];
            const amount = item.current_total_budget_authority_amount;

            headerElement.innerHTML += "<h1>USA SPENDINGS</h1>" +
                "<h3>current total budget authority amount: " + amount + "$</h3>" + "</br>";
        }
    }

    const smallElement = document.querySelector(".small");
    if (smallElement) {
        if (json.results && json.results.length > 0) {
            const item = json.results[0];
            const agency = item.agency_name;
            const outlay = item.outlay_amount;
            const obligated = item.obligated_amount;
            const year = item.active_fy;
            const cjurl = item.congressional_justification_url;

            smallElement.innerHTML += "<p><strong>Agency name:</strong> " + agency + "</p>";
            smallElement.innerHTML += "<p><strong>Congressional justification url:</strong> " + cjurl + "</p>";
            smallElement.innerHTML += "<p><strong>Outlay amount:</strong> " + outlay + "$</p>";
            smallElement.innerHTML += "<p><strong>Obligated amount:</strong> " + obligated + "$</p>";
            smallElement.innerHTML += "<p><strong>Purchase date:</strong> " + year + "</p>";
        }
    }

    const bigElement = document.querySelector(".big");
    if (bigElement) {
        if (json.results && json.results.length > 1) {
            json.results.forEach(item => {
                const agency = item.agency_name;
                const outlay = item.outlay_amount;
                const obligated = item.obligated_amount;
                const year = item.active_fy;
                const cjurl = item.congressional_justification_url;

                bigElement.innerHTML += "<p><strong>Agency name:</strong> " + agency + "</p>";
                bigElement.innerHTML += "<p><strong>Congressional justification url:</strong> " + cjurl + "</p>";
                bigElement.innerHTML += "<p><strong>Outlay amount:</strong> " + outlay + "$</p>";
                bigElement.innerHTML += "<p><strong>Obligated amount:</strong> " + obligated + "$</p>";
                bigElement.innerHTML += "<p><strong>Purchase date:</strong> " + year + "</p><br>";
            });
        }
    }
}

fetchMessages();