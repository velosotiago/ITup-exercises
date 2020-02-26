--Write a query that returns the possible contact’s titles of the Customers in alphabetical order.
SELECT ContactTitle FROM Customers
ORDER BY ContactTitle;

--Write a query that returns the address from the Customers sorted by the City in reverse alphabetical order.
SELECT City FROM Customers
ORDER BY City DESC;

--Write a query that returns the region's names in reverse alphabetical order.
SELECT Region FROM Customers
ORDER BY Region DESC;