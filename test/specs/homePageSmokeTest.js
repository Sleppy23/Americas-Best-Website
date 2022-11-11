
describe('americas best website smoke test', () => {
    it('should load the home page', async () => {
      await browser.url('http://americasbesthi.com')
      let mainLogo = $('.u_1682003560.small-12.dmRespCol.large-2.medium-2.has-one-widget-only')
      await expect(mainLogo).toBeExisting()
    })
})


