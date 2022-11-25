const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL";

const converter = () => {
  const value = document.getElementById("value").value;

  // Vai retornar uma promise
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.USDBRL.ask);

      const rates = data.USDBRL.ask;

      document.getElementById("res").innerHTML = rates * value;
    });
};
