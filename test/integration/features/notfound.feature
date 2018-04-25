Feature: Resource not found
	As an API consumer
	I want to be informed when I request non-existing resources
	So I can learn the API and fix my errors quickly

	Scenario: I should get an error when I request a non-existing resource
		When I GET /blah
		Then response code should be 404
        And response header Content-Type should be application/json
        And response body path $.code should be 404.01.001
        And response body path $.message should be Resource not found
        And response body path $.info should be https://developers.apigee.com/errors/404.01.001
