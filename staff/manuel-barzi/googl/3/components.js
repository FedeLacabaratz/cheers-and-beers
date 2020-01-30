'use strict';

function createSearch(selector, callback) {
    var search = document.querySelector(selector);

    // search.onsubmit = function (event) {
    search.addEventListener('submit', function (event) {
        event.preventDefault();

        var query = this.query.value;

        callback(query);
        // };
    });

    return search;
}

function createResults(selector, results) {
    var list = document.querySelector(selector);

    list.innerHTML = '';

    results.forEach(function (result) {
        var item = document.createElement('li');

        var title = document.createElement('h3');
        title.innerText = result.title;

        var link = document.createElement('a');
        link.target = '_blank';
        link.href = result.link;

        link.append(title);

        item.append(link);

        if (result.rating) {
            var rating = document.createElement('span');
            rating.innerText = result.rating;

            item.append(rating);
        }

        var description = document.createElement('p');
        description.innerText = result.description;

        item.append(description);

        list.append(item);
    });
}

function createLogin(selector, onSubmit, onToRegister) {
    var login = document.querySelector(selector);

    login.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

        onSubmit(username, password);
    });

    var register = login.querySelector('a');

    register.addEventListener('click', function(event) {
        event.preventDefault();

        onToRegister();
    });

    return login;
}

function createRegister(selector, onSubmit, onToLogin) {
    var register = document.querySelector(selector);

    register.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = this.name.value;
        var surname = this.surname.value;
        var username = this.username.value;
        var password = this.password.value;

        onSubmit(name, surname, username, password);
    });

    var login = register.querySelector('a');

    login.addEventListener('click', function(event) {
        event.preventDefault();

        onToLogin();
    });

    return register;
}