Feature: Arithmetic Operations
  As a user of the calculator
  I would like access to basic arithmetic operations
  So that I can perform simple calculations

  Scenario: Add numbers and Historic
    Given The calculator is open
     When I calculate 1 + 2
	 And I calculate 3 + 4
     Then the table should have 2 results
