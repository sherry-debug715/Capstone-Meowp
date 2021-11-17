import Select from "./select.js"

//<select data-custom>
const selectElements = document.querySelectorAll("[data-custom]")

selectElements.forEach(selectElement => {
  new Select(selectElement)
})
