function formatDate(albumDate) {
    return new Date(`${albumDate} 00:00`).toLocaleDateString('pt-br');
}

module.exports = formatDate;
