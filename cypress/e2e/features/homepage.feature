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
			| We are more than just cats; we are shrewd business moguls, determined to climb the corporate tree to reach the summit of financial success. |
		And I navigate to the Services page
		And I am presented with the Services Page
		And I navigate to the Teams page
		And I am presented with the Teams Page
			| Our hard working team keeps your lights on |
		And I navigate to the Contact Us Page
		And I am presented with the Contact Us Page

