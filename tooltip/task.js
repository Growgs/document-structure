document.addEventListener("DOMContentLoaded", function () {
    let tooltipTriggers = document.querySelectorAll(".has-tooltip");
    let activeTooltip = null; 

    tooltipTriggers.forEach(function (trigger) {
        trigger.addEventListener("click", function (event) {
            event.preventDefault();

            let tooltipText = trigger.getAttribute("title");
            let tooltipElement = document.createElement("div");
            tooltipElement.classList.add("tooltip");
            tooltipElement.textContent = tooltipText;

            if (activeTooltip) {
                document.body.removeChild(activeTooltip);
                activeTooltip.classList.remove("tooltip_active");
            }

            document.body.appendChild(tooltipElement);
            let rect = trigger.getBoundingClientRect();
            tooltipElement.style.left = rect.left + "px";
            tooltipElement.style.top = rect.bottom + "px";
            tooltipElement.classList.add("tooltip_active");
            activeTooltip = tooltipElement;
        });
    });
});
