    function Ajax(opt) {
        function fn() {
        }

        var async = opt.async,
            method = opt.method || "get",
            url = opt.url,
            data = opt.data || null,
            success = opt.success || fn,
            failure = opt.failure || fn;
        method = method.toUpperCase();
        if (method == "GET" && data) {
            url += (url.indexOf("?") == -1 ? "?" : "&") + data;
            data = null;
        }
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft XMLHTTP");
        xhr.open(method, url, async);
        if (method == "POST") {
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
        }
        if (data instanceof Object) {
            data = JSON.stringify(data).replace(/[{"}]/g, "").replace(/:/g, "=").replace(/,/g, "&");
        }
        xhr.send(data);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                success(xhr);
            } else {
                failure(xhr);
            }
        }
    };
