class ConvertDate {

    setDate = (date) => {
        this.dateDividido = date.split('-')
        if(this.dateDividido.length === 1) {
            return this.result = this.precisionYear(date)
        }else if(this.dateDividido.length === 2) {
            return this.result = this.precisionMonth(date)

        }else {
            return this.result = this.precisionDay(date)
        }
    }
    

    precisionDay = () => `${this.dateDividido[2]}/${this.dateDividido[1]}/${this.dateDividido[0]}`

    precisionMonth = () => `${this.dateDividido[1]}/${this.dateDividido[0]}`

    precisionYear = () => `${this.dateDividido[0]}`
}

export default ConvertDate;