import pandas as pd

# Full paths to your CSV files
results_path = '/Users/ndainoran/Documents/ROHIT/results.csv'
results1_path = '/Users/ndainoran/Documents/ROHIT/results1.csv'

# Read CSVs
results = pd.read_csv(results_path)
results1 = pd.read_csv(results1_path)

# Use the correct column name
results['TableName'] = results['TableName'].astype(str)
results1['TableName'] = results1['TableName'].astype(str)

# Find tables in results.csv not present in results1.csv
diff = results[~results['TableName'].isin(results1['TableName'])]

print("Tables present in results.csv but not in results1.csv:")
print(diff)

# Optionally, save the difference to a new CSV
diff.to_csv('/Users/ndainoran/Documents/ROHIT/tables_not_in_results1.csv', index=False)
print("\nSaved difference to 'tables_not_in_results1.csv'")
