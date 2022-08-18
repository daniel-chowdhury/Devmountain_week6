
const {By, Builder, Capabilities} = require('selenium-webdriver')


require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/foundations/week_6/day_3/automation_lab/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test("if movie can be added", async () => {
    let formInput = driver.findElement(By.xpath("//input"))
    //console.log(formInput)
    formInput.sendKeys('brave new world\n')
    await driver.sleep(3000)
    let text2 = await driver.findElement(By.xpath('//span')).getText()
    //console.log(";lkjklj")
    //console.log(text2 + ";lkjlk;lkj;lk;lkj")
    expect(text2).toEqual("brave new world")
})

test("deleting movie", async () => {
    // let formInput = driver.findElement(By.xpath("//input"))
    
    // formInput.sendKeys('brave new world\n')
    // await driver.sleep(3000)
    let newMovie = driver.findElement(By.xpath('//span'))
    let delete_btn = driver.findElement(By.xpath('//li/button'))
    await delete_btn.click()
    await driver.sleep(3000)
    expect(newMovie).toBeUndefined
})

test("checking movie", async () => {
    let formInput = driver.findElement(By.xpath("//input"))
    
    formInput.sendKeys('brave new world\n')
    await driver.sleep(3000)
    let newMovie = driver.findElement(By.xpath('//span'))
    await newMovie.click()
    await driver.sleep(3000)
    let movieclass = await newMovie.getAttribute('class')
    expect(movieclass).toEqual('checked')
})
