export const GetDateFormated = (str) => {
    var date = new Date(str.replace("T", " "));
    var options = {day: 'numeric', month: 'long', year: 'numeric'};
    return  date.toLocaleDateString('es-ES', options);
}