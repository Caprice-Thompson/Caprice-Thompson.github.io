Feature: Home page

	# Background:
	# 	Given I open the application
	Scenario: Test - General
		Given I open the application
		And I am presented with the Landing page
		When I navigate to the Design page
		Then I am presented with the Design Page
		And I navigate to the Pricing page
		And I navigate to the Contact Us Page
		And I navigate to the Catering page
		And I am presented with the Catering page
		And I click the Read More button
		And I view Catering Profile Modal
			| I'm Henry and I love to cook food My Knowledge is limited please be patient |
