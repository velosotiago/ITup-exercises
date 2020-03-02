-- a. List the product name and supplier id for all products supplied by Exotic Liquids, Grandma Kelly's Homestead, and Tokyo Traders.
SELECT Products.ProductName, Products.SupplierID
FROM Products, (
  SELECT SupplierID
  FROM Suppliers
  WHERE CompanyName IN ('Exotic Liquids', 'Grandma Kelly''s Homestead', 'Tokyo Traders')
) AS FilteredSuppliers
WHERE Products.SupplierID = FilteredSuppliers.SupplierID;

-- b. List all company names from France who do not have any orders.
SELECT CompanyName
FROM Customers
WHERE Country = 'France' AND Customers.CustomerID NOT IN (
  SELECT DISTINCT Orders.CustomerID
  FROM Orders
);

-- c. Insert a new Territory named "Farwest" which is of region "Faraway".
INSERT INTO Territories
VALUES ((SELECT Max(TerritoryID)+1 FROM Territories), 'Farwest', (
  SELECT RegionID
  FROM Region
  WHERE RegionDescription = 'Faraway'
  )
);

-- d. Change all Territories to be from Region "Faraway".
UPDATE Territories
SET RegionID = (
  SELECT RegionID
  FROM REGION
  WHERE RegionDescription = 'Faraway'
 );

-- e. Update the UnitPrice of all products that are of category "Condiments" to be the current price multiplied by 0.1.
select * from products;
select * from categories;

UPDATE Products
SET UnitPrice = (
  SELECT UnitPrice * 0.1
  FROM Products AS NewProducts
  WHERE NewProducts.ProductID = Products.ProductID
)
WHERE Products.CategoryID = (SELECT CategoryID FROM Categories WHERE CategoryName = 'Condiments');

-----------
-- EXTRA --
-----------

-- 1a. The Name of the Countries that do not have Warehouses.
SELECT Name
FROM Country
WHERE Id NOT IN (
  SELECT DISTINCT CountryId
  FROM Warehouse
)

-- 2a. The Name of the Teachers that don’t teach any class.
SELECT Name
FROM Teachers
WHERE ID NOT IN (
  SELECT DISTINCT TeacherID
  FROM Classes
)
