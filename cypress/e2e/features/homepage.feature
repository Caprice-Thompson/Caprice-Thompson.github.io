Feature: Home page

	Scenario: Test - Verify user can access all links on navbar
		Given I open the Application
		And I am presented with the Home Page
		When I select the Service Navbar option
		Then I am presented with the Services Page