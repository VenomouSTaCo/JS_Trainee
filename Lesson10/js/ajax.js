const ajax = (function () {
    function send(settings) {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('error', function (ev) {
            settings.error({
                errorText: xhr.responseText,
                code: xhr.status,
            });
        });

        xhr.addEventListener('load', function(ev){
            settings.success(xhr.responseText)
        })
        xhr.open(settings.method, settings.url);

        if (settings.headers) {
            for (let headerName in settings.headers) {
                xhr.setRequestHeader(headerName, settings.headers[headerName]);
            }
        }

        xhr.timeout = settings.timeout || 3000;

        xhr.send(settings.data);
    }

    return {
        send: send,
    }
})();