const url = "https://api.usaspending.gov//api/v2/references/toptier_agencies/"
    async function fetchMessages() {

    const response = await fetch(url)
    const json = await response.json()
    console.log(json)

    const element = document.querySelector(".Header")
    element.innerHTML = "";

    if (json.results && json.results.length > 0) {
        const item = json.results[0];
        console.log(item)
        const amount = item.current_total_budget_authority_amount;
        element.innerHTML += "<h1>USA SPENDINGS</h1>" + "<h3>" + "current total budget authority amount: " + amount + "$" + "</h3>"
    }
  }

  async function fetchMessages() {

  const response = await fetch(url)
  const json = await response.json()
  console.log(json)

  const element = document.querySelector(".small")

    if (json.results && json.results.length > 0) {
        const item = json.results[0];
        console.log(item)
        const agency = item.agency_name;
        const outlay = item.outlay_amount;
        const obligated = item.obligated_amount;
        element.innerHTML += "<h3>" + agency + "</h3>"
    }
  }

  fetchMessages()