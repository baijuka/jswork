var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        alert('hello');
        document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET","https://ci-swapi.herokuapp.com/api/");
xhr.send;