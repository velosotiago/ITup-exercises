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
select * from territories;
select * from region;
INSERT INTO Territories
VALUES ((SELECT Max(TerritoryID)+1 FROM Territories), 'Farwest', (
        SELECT RegionID
        FROM Region
        WHERE RegionDescription = 'Faraway'
));

-- d. Change all Territories to be from Region "Faraway".
select * from Region;
UPDATE Territories
SET RegionID = (SELECT RegionID WHERE RegionDescription = 'Faraway')