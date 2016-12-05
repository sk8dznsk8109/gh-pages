document.addEventListener('DOMContentLoaded', function(e) {
    HideWithoutDisplayNone("demo-carousel", true);
    var carousel = new ch.Carousel(ch('.demo-carousel')[0], {
        'pagination': true,
        'limitPerPage': 3,
        'autoHeight': false
    });

    //Fix to fit three items per page
    // carousel.on('ready', function () {
    //     var items = document.getElementsByClassName("ch-carousel-item");
    //     for(var i = 0; i < items.length; i++)
    //     {
    //         var calculatedWidth = GetNumber(items[i].style.width, "px");
    //         var defaultFixedWidth = items[i].offsetWidth;
    //         if(calculatedWidth > defaultFixedWidth) {
    //             var newMargin = (calculatedWidth - defaultFixedWidth) + GetNumber(items[i].style.marginRight, "px");
    //             items[i].style.marginRight = newMargin.toString() + "px";
    //         }
    //     }
    //     document.getElementsByClassName("ch-loading")[0].style.display = "none";
    //     HideWithoutDisplayNone("demo-carousel", false);
    // });

    document.getElementsByClassName("ch-loading")[0].style.display = "none";
    HideWithoutDisplayNone("demo-carousel", false);
});

function GetNumber(value, replace) {
    value = value.toString().replace(replace, "");
    return parseInt(value);
}

//Workaround to keep carousel working even when its not showing up
function HideWithoutDisplayNone(elementClass, hide) {
    var hiddenMargin = GetNumber(document.getElementsByClassName(elementClass)[0].style.marginLeft, "px") + (hide ? -9999 : 9999);
    document.getElementsByClassName(elementClass)[0].style.marginLeft = hiddenMargin.toString() + "px";
}

function SetAriaAttributeForSelect(element) {
    var items = element.getElementsByTagName('option');
    for(var i = 0; i < items.length; i++)
        items[i].setAttribute('aria-selected', 'false');
    element.options[element.selectedIndex].setAttribute('aria-selected', 'true');
}

function SetAriaAttributeForRadio(element) {
    var items = document.getElementsByName(element.name);
    for(var i = 0; i < items.length; i++)
        items[i].setAttribute('aria-selected', 'false');
    element.setAttribute('aria-selected', 'true');
}