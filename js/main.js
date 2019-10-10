(function() {
    browseDocs();
    accordionExpand();
    languageSelectHandler();
})();

function browseDocs() {
    var browseSelect = document.querySelector('.js-browse-select');
    if (browseSelect) {
        var browseArrow = document.querySelector('.js-browse-select__arrow');
        var docsOptions = document.querySelector('.js-browse-select-options');
        browseSelect.open = false;
        browseSelect.addEventListener('click', function(e) {
            var classRemove = e.target.open ? 'browse-select__arrow' : 'browse-select__arrow--rotated'; 
            var classAdd = e.target.open ? 'browse-select__arrow--rotated' : 'browse-select__arrow'; 
            browseArrow.classList.remove(classRemove);
            browseArrow.classList.add(classAdd);

            if (!e.target.open) {
                docsOptions.classList.remove("browse-select-options--hidden")
            } else {
                docsOptions.classList.add("browse-select-options--hidden")
            }
            e.target.open = e.target.open ? false : true;
        });
    }
}

function accordionExpand() {
    var accordions = document.querySelectorAll('.accordion');
    for (var i = 0; i<accordions.length; i++) {
        accordions[i].open = false;
        accordions[i].addEventListener('click', accordionListener);
    }
}

function accordionListener(e) {
    var accordion = e.target;
    var panel = accordion.nextElementSibling;
    if (!accordion.open) {
        accordion.classList.remove('accordion--closed');
        accordion.classList.add('accordion--open');
        panel.classList.remove('panel--closed');
    } else {
        accordion.classList.add('accordion--closed');
        accordion.classList.remove('accordion--open');
        panel.classList.add('panel--closed');
    }
    accordion.open = accordion.open ? false : true;
}

function languageSelectHandler() {
    var languageSelect = document.querySelector('.js-language-select');
    if (languageSelect) {
        var languageSelectOptions = document.querySelector('.js-language-select-options');
        languageSelect.open = false;
        languageSelect.addEventListener('click', function(e) {
            if (!languageSelect.open) {
                languageSelect.open = true;
                languageSelect.classList.add('language-select--open');
                languageSelectOptions.classList.remove('language-select-options--hidden');
            } else {
                languageSelect.open = false;
                languageSelect.classList.remove('language-select--open');
                languageSelectOptions.classList.add('language-select-options--hidden');
            }
        });
    
        var languageOptions = languageSelectOptions.children;
        for (var i =0; i< languageOptions.length; i++) {
            languageOptions[i].addEventListener('click', languageClick)
        }
    }

    function languageClick(e) {
        var selectedLanguage = document.querySelector('.language-select-option--selected');
        if (e.target != selectedLanguage) {
            selectedLanguage.classList.remove('language-select-option--selected');
            e.target.classList.add('language-select-option--selected');
            languageSelect.innerHTML = e.target.innerHTML;
            languageSelect.open = false;
            languageSelectOptions.classList.add('language-select-options--hidden');
        }
    }

}