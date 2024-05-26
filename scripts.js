const ConvertButton = document.querySelector(".convert-button")
const selectToconvert = document.querySelector(".currency-select")
const selectValue = document.querySelector(".currency-value")

function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyvalueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueConverted = document.querySelector(".value-currency")

   const realToDay = 1.00
   const dolarToDay = 5.10
   const euroToDay = 5.55
   const libraToDay = 6.49
  
   if (selectValue.value == "real") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(inputCurrencyValue / realToDay)

   } if (selectValue.value == "dolar") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue / dolarToDay)

   } if (selectValue.value == "libra") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-uk", {
         style: "currency",
         currency: "GBP"
      }).format(inputCurrencyValue / libraToDay)

   } if (selectValue.value == "euro") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue / euroToDay)

   }

 



}


function changeCurrency() {
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".img-2")

   if (selectValue.value == "dolar") {
      currencyName.innerHTML = "Dólar"
      currencyImage.src = "./assets/dolar.png"


   } if (selectValue.value == "euro") {
      currencyName.innerHTML = "Euro"
      currencyImage.src = "./assets/euro.png"

   } if (selectValue.value == "libra") {
      currencyName.innerHTML = "Libra"
      currencyImage.src = "./assets/libra.png"

   } if (selectValue.value == "real") {
      currencyName.innerHTML = "Real"
      currencyImage.src = "./assets/real.png"

   }

   convertValues()
}

function valueCurrency() {
   const valueConvert = document.getElementById("value-convert")
   const imageCovert = document.querySelector(".img-1")
   if (selectToconvert.value == "dolar") {
      valueConvert.innerHTML = "Dólar"
      imageCovert.src = "./assets/dolar.png"

   } if (selectToconvert.value == "euro") {
      valueConvert.innerHTML = "Euro"
      imageCovert.src = "./assets/euro.png"

   } if (selectToconvert.value == "libra") {
      valueConvert.innerHTML = "Libra"
      imageCovert.src = "./assets/libra.png"

   } if (selectToconvert.value == "real") {
      valueConvert.innerHTML = "Real"
      imageCovert.src = "./assets/real.png"

   }

}

selectToconvert.addEventListener("change", valueCurrency)
selectValue.addEventListener("change", changeCurrency)
ConvertButton.addEventListener("click", convertValues)