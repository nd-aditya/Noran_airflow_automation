import pandas as pd

# Read both CSV files
results = pd.read_csv('results.csv')
results1 = pd.read_csv('results1.csv')

# Assuming both CSVs have columns: 'table_name' and 'row_count'
# Convert table_name to string in case of type differences
results['table_name'] = results['table_name'].astype(str)
results1['table_name'] = results1['table_name'].astype(str)

# Find tables in results.csv not present in results1.csv
diff = results[~results['table_name'].isin(results1['table_name'])]

# Print the result
print("Tables present in results.csv but not in results1.csv:")
print(diff)