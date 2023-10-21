Feature: Home page

	# Background:
	# 	Given I open the application
	Scenario: Test - General
		Given I open the application
		And I am presented with the Landing page
		And I open the Get Started Modal
		And The Introductory Offer form is displayed
		And The Introductory Offer form is text is verified
			| Please send card details for your chance to win a handwritten letter. |
		And I close the modal
		# And I click the Join Us Now Button
		When I am presented with the About page
		And I verify About page content
			| Global Dynasty Investments Inc.. |
		Then I click the Read More button
		And I am presented with the modal content

		And I am presented with the Pricing Page
		And I click the Read More button
		And I am on the listing modal
			| Buy House Now! Limited Time Only |
		And I close the modal
		And I navigate to the Catering page
		And I am presented with the Catering page
		And I click the Read More button
		And I view Catering Profile Modal
			| I'm Henry and I love to cook food/My Knowledge is limited please be patient |
		And I navigate to the Contact Us Page
		And I am presented with the Contact Us Page
