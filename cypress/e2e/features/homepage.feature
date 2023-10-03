Feature: Home page

	Background:
		Given I open the application
	Scenario: Test - Verify user can access all links on navbar
		Given I open the application
		And I am presented with the Landing page
		When I navigate to the Services page
		Then I am presented with the Services Page