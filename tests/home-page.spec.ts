import { test, expect } from '@playwright/test'

test('test home page basic elements', async ({ page }) => {
	// Go to http://localhost:3000/
	await page.goto('http://localhost:3000/')

	// Click text=Hi, my name is
	await page.locator('text=Hi, my name is').click()

	// Click h2:has-text("Yuniel Acosta.")
	await page.locator('h2:has-text("Yuniel Acosta.")').click()

	// Click #phrase
	await page.locator('#phrase').click()

	// Click text=Get in touch
	await page.locator('text=Get in touch').click()
	await expect(page).toHaveURL('http://localhost:3000/')

	// Click img[alt="Yuniel Acosta Pérez"]
	await page.locator('img[alt="Yuniel Acosta Pérez"]').click()

	// Click text=Where I've Worked
	await page.locator("text=Where I've Worked").click()

	// Click text=Built by Yuniel Acosta
	await page.locator('text=Built by Yuniel Acosta').click()
})
