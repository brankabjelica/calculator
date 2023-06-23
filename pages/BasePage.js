class BasePage {
    constructor(driver){
        this.driver = driver
    }

    async visit(url) {
        await this.driver.get(url);
    }
    async closeBrowser() {
        await this.driver.close()
    }
    async find(locator) {
        return await this.driver.findElement(locator)
    }
    async findAndClick(locator) {
        await (await this.find(locator)).click()
    }
    async getAttribute(locator, attribute) {
        return await(await this.find(locator)).getAttribute(attribute)
    }
}

module.exports = BasePage