const BasePage = require('./BasePage')

class CalculatorPage extends BasePage {

    async simpleCalculating(numberOne, operation, numberTwo, equal, result) {
        await this.findAndClick(numberOne)
        await this.findAndClick(operation)
        await this.findAndClick(numberTwo)
        await this.findAndClick(equal)
        const data = await this.getAttribute(result, 'value')
        return data
    }

}

module.exports = CalculatorPage