--Write a query to get Product name and quantity per unit.
SELECT ProductName, QuantityPerUnit FROM Products;

--Write a query to get the discontinued Product list (ProductID and Name).
SELECT ProductID, ProductName FROM Products
WHERE Discontinued = 'true';

------------------------------------------
--              EXTRA                   --
------------------------------------------

--The name, and plural of all products
-- SELECT Name, Plural FROM Product;

        -- RESULT --
--------------------------------
-- Name        |   Plural      |
--------------------------------
-- Apple       |   Apples      |
-- Orange      |   Oranges     |
-- Strawberry  |   Strawberries|
-- Grape       |   Grapes      |
-- Banana      |   Bananas     |
--------------------------------

--The plural of the Orange.
-- SELECT Plural FROM Product
-- WHERE Name LIKE 'Orange';

        -- RESULT --
----------------
-- Plural      |
----------------
-- Oranges     |
----------------