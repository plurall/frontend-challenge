var parseMS = (duration) => {
    var ms = parseInt((duration%1000)/100)
        , s = parseInt((duration/1000)%60)
        , m = parseInt((duration/(1000*60))%60)
        , h = parseInt((duration/(1000*60*60))%24);

    m = (m < 10) ? m : m;
    s = (s < 10) ? "0" + s : s;

    return m + ":" + s;
}

var capitalize = (str) => {
    str = str.split(" ");

    for (var i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

var formatDate = (date) => {
    date = date.split('-')

    return date.length > 1 ? `${date[2]}/${date[1]}/${date[0]}` : date[0]
}

export { parseMS, capitalize, formatDate }