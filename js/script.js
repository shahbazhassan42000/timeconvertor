document.addEventListener("DOMContentLoaded", function () {
    const patterns = {
        hour: /(^0?[1-9]$)|(^1[0-2]$)/,
        minutes: /(^0?\d$)|(^[1-5]\d$)/,
        seconds: /(^0?\d$)|(^[1-5]\d$)/
    };
    document.addEventListener("keyup", function (event) {
        if ((event.target.tagName) === "INPUT") //check if input filed is triggered
        {
            validate(event.target, patterns[event.target.attributes.name.value]);
        }
    });

    function validate(inputField, regex) {

        if (regex.test(inputField.value)) {
            inputField.style.borderColor = "#36cc36";
            inputField.nextElementSibling.style.opacity = "0";
            inputField.nextElementSibling.style.height = "0";
        } else {
            inputField.style.borderColor = "orange";
            inputField.nextElementSibling.style.opacity = "1";
            inputField.nextElementSibling.style.height = "auto";
            inputField.nextElementSibling.style.marginBottom = "20px";
        }
    }

    let form = document.forms.time_form;
    form.addEventListener("submit", format_convertor, true);

    function format_convertor(event) {
        event.preventDefault();
        let h = +form.elements.namedItem("hour").value
        let m = +form.elements.namedItem("minutes").value
        let s = +form.elements.namedItem("seconds").value
        let format = form.elements.namedItem("time").value
        if (h === 12)
            h = 0;
        if (format === "PM")
            h += 12;
        let formatted_time=document.getElementById("formatted_time");
        formatted_time.innerText=h.toString().padStart(2, '0') + ":" + m.toString().padStart(2, '0') + ":" + s.toString().padStart(2, '0');
        if(formatted_time.style.display!=="block")
            formatted_time.style.display="block";
    }
});