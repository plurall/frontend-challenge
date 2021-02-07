class FormataData {

    /**
     * Formata a data string recebida como YYYY-MM-DD pra DD/MM/YYYY
     * @param {Date} data 
     */
    static toPtBr(data = ''){
        let dateParts = data.split('-');
        
        if(dateParts.length !== 3) return '';
  
        return (new Date(dateParts[0], dateParts[1] - 1, dateParts[2])).toLocaleDateString('pt-BR');
      }

}

export default FormataData