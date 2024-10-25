SELECT customer_name, COUNT(*),
FROM payments
GROUP BY customer_name
ORDER BY count DESC;

