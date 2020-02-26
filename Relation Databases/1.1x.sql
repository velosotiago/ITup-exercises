--Write a query to get all Products.
SELECT * FROM Products;

--Write a query to get current (not discontinued) Product list.
SELECT * FROM Products WHERE Discontinued = 'false';

--Write a query to get the Products whose unit price is greater than 20.
SELECT * FROM Products WHERE UnitPrice > 20;

--Write a query to get the Products whose unit price is equal to 21.
SELECT * FROM Products WHERE UnitPrice = 21;

--Write a query to get the Products whose unit price is greater or equal to 20 but less or equal to 50.
SELECT * FROM Products WHERE UnitPrice BETWEEN 20 AND 50;

--Write a query to get the Products that have “Queso” in their names.
SELECT * FROM Products WHERE ProductName LIKE '%Queso%';

--Write a query to get the Customers that have “Sales” in their contact’s title.
SELECT * FROM Customers WHERE ContactTitle LIKE '%Sales%';

--Write a query to get the Customers whose contact’s title starts with “Sales”.
SELECT * FROM Customers WHERE ContactTitle LIKE 'Sales%';

--Write a query to get the Products that have “beer” or “bier” in their names.
SELECT * FROM Products WHERE ProductName LIKE '%beer%' OR ProductName LIKE '%bier%';

--Write a query to get the Products whose ProductId is 1 or 2 or 5.
SELECT * FROM Products WHERE ProductID = 1 OR ProductID = 2 OR ProductID = 5;

--Write a query to get the Products whose ProductId is not 1 nor 2 nor 5.
SELECT * FROM Products WHERE ProductID <> 1 AND ProductID <> 2 AND ProductID <> 5;

--Write a query to get the Products whose unit price is greater than 21 and have some units in stock.
SELECT * FROM Products WHERE UnitPrice > 21 AND UnitsInStock > 0;

--Write a query to get the Products whose quantity per unit is “24 - 12 oz bottles” and
--the unit price is greater than 15 and also the Products whose units in stock are less than 10.
SELECT * FROM Products WHERE (QuantityPerUnit LIKE '24 - 12 oz bottles' AND UnitPrice > 15) OR UnitsInStock < 10;