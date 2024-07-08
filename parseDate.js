function parseDate(dateString) {
    var brasileiroRegex = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}$/;
    var americanoRegex = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}$/;

    if (brasileiroRegex.test(dateString)) {
        var [datePart, timePart] = dateString.split(' ');
        var [day, month, year] = datePart.split('/').map(Number);
        var [hours, minutes, seconds] = timePart.split(':').map(Number);
        return new Date(year, month - 1, day, hours, minutes, seconds);
    } else if (americanoRegex.test(dateString)) {
        var [datePart, timePart] = dateString.split(' ');
        var [month, day, year] = datePart.split('/').map(Number);
        var [hours, minutes, seconds] = timePart.split(':').map(Number);
        return new Date(year, month - 1, day, hours, minutes, seconds);
    } else {
        throw new Error('Formato de data inválido');
    }
}
