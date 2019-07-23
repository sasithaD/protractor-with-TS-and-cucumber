Feature: validation of calculator & Angularjs applications

@calculatorTesting
Scenario Outline: calculator add functionality testing

Given navigate to the "calc" site
When  entering the input fields "<key>" and "<key2>"
Then output will be "<key3>"

Examples:
| key | key2 | key3 |
| 9  | 1  | 10 |
| 3  | 5  |  8 |


@angularTesting
Scenario: angularjs page testing

Given navigate to the "ang" site
When you click on the header link
Then enter "Hello" in the search box