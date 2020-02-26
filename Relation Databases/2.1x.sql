--      Using expressions and conditional expressions      --

/* Write a query to get the Product name and whether to order the product or not for the
products that are almost out of stock: If the UnitsInStock is less than 20 then return
the text “Order Now” otherwise return an empty text “”. */

SELECT ProductName, 
CASE WHEN UnitsInStock < 20 THEN 'Order Now'
     ELSE ''
END AS 'Should Order'
FROM Products;

/* Write a query to get the Product name and its value in stock (multiply the UnitPrice by
the UnitsInStock) and give it the name ValueInStock. */
SELECT ProductName, UnitPrice*UnitsInStock AS 'ValueInStock'
FROM Products;


--      Using aggregate functions      --

-- Write a query to get the maximum value of the UnitPrice. Give it the name MaxUnitPrice.
SELECT MAX(UnitPrice) AS MaxUnitPrice FROM Products;

-- Write a query to get the minimum value of the UnitPrice. Give it the name MinUnitPrice.
SELECT MIN(UnitPrice) AS MinUnitPrice FROM Products;

-- Write a query to get the average value of the UnitPrice. Give it the name AvgUnitPrice.
SELECT AVG(UnitPrice) AS AvgUnitPrice FROM Products;

-- Write a query to get the sum of the number of units in stock. Give it the name SumUnitsInStock.
SELECT SUM(UnitsInStock) AS SumUnitsInStock FROM Products;

-- Write a query to get the total number of Products. Give it the name NumberOfProducts.
SELECT COUNT(*) AS NumberOfProducts FROM Products;

-- Do items a. to e. in a single query with multiple columns, but only taking into account Products for which there is stock.
SELECT MAX(UnitPrice) AS MaxUnitPrice, MIN(UnitPrice) AS MinUnitPrice, AVG(UnitPrice) AS AvgUnitPrice,
        SUM(UnitsInStock) AS SumUnitsInStock, COUNT(*) AS NumberOfProducts FROM Products;
        

--      Grouping data      --

-- Write a query that counts how many Customers there are for each ContactTitle.
SELECT ContactTitle, COUNT(CustomerID) AS 'NumberOfCustomers'
FROM Customers
GROUP BY ContactTitle;

-- Write a query that counts how many Customers from France there are for each ContactTitle.
SELECT ContactTitle, COUNT(CustomerID) AS 'NumberOfCustomers'
FROM Customers
WHERE Country LIKE 'France'
GROUP BY ContactTitle;

/* Write a query that counts how many Customers there are with a certain ContactTitle
in a certain Country. Show the ContactTitle, the Country and the number of
customers. Only return records where the number of customers is greater than 2. */
SELECT ContactTitle, Country, COUNT(CustomerID) AS 'NumberOfCustomers'
FROM Customers
GROUP BY ContactTitle, Country;


--      Distinct Values      --

-- Write a query that returns the possible contact’s titles of the Customers, with no repetitions.
SELECT DISTINCT ContactTitle
FROM Customers;

-- Write a query that returns the possible contact’s titles of the Customers, with no repetitions in alphabetical order.
SELECT DISTINCT ContactTitle
FROM Customers
ORDER BY ContactTitle;

-- Write a query that returns the contact’s title and name from the Customers ordered by the contact’s title and name.
SELECT ContactTitle, ContactName
FROM Customers
ORDER BY ContactTitle, ContactName;

-- Write a query that returns the total number of different contact titles of Customers.
SELECT COUNT(DISTINCT ContactTitle) AS NumberOfContactTitles FROM Customers;