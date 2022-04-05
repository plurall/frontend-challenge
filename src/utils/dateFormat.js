
class DateFormat {
  /**
   * Função que efetua o formatada da data de acordo com a localização informada.
   * @param {*} date 
   * Data a ser formatada
   * @param {*} locale 
   * Internacionalização da data padrão: pt-BR
   * @returns 
   */
  static format(date, locale = "pt-BR") {
    try {
      let dateToFormat = date
      if (!(date.lenght === 10))
        dateToFormat = `${date} 00:00:00`;

      let dateFormatted = new Date(dateToFormat);
      dateFormatted = new Intl.DateTimeFormat(locale, {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      }).format(dateFormatted)
      
      if (dateFormatted !== "Invalid Date") {
        return dateFormatted;
      }
      return date;
    } catch (error) {
      return date;
    }

  }
}

export default DateFormat
