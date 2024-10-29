import numpy as np
from scipy.stats import entropy
import pandas as pd
from scipy.stats import gaussian_kde
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import seaborn as sns

distributions = [np.random.dirichlet(np.ones(10), size=1).flatten() for _ in range(5)]

#print(type(distributions))

# Read the CSV file
df = pd.read_csv("lang_df.csv")

# Create a dictionary with languages as keys and lists of proportions as values
proportion_dict = df.groupby('language')['proportion'].apply(list).to_dict()

# Define a common grid
x_grid = np.linspace(0, 1, 100)

# Calculate KDE for each language and evaluate on the grid
density_dict = {}
for language, values in proportion_dict.items():
    kde = gaussian_kde(values, bw_method=0.2)  # Bandwidth can be adjusted
    density_dict[language] = kde(x_grid)

# Convert density_dict to a DataFrame for clustering
density_df = pd.DataFrame(density_dict, index=x_grid)

# Transpose the DataFrame for clustering
density_df_transposed = density_df.T

# Debug: Check the contents of the transposed DataFrame
print("Transposed density DataFrame:")
print(density_df_transposed.head())

# Ensure that the DataFrame is not empty and has the correct shape
print("Shape of transposed density DataFrame:", density_df_transposed.shape)

# Perform K-means clustering
n_clusters = 2  # Number of clusters can be adjusted
kmeans = KMeans(n_clusters=n_clusters, random_state=42)

# Debug: Check the input to KMeans before fitting
print("Input to KMeans (first few rows):")
print(density_df_transposed.head())

# Try fitting the model and catch potential errors
try:
    clusters = kmeans.fit_predict(density_df_transposed)
    density_df_transposed['Cluster'] = clusters

    # Plot the density distributions with cluster labels
    plt.figure(figsize=(12, 8))
    for cluster in range(n_clusters):
        cluster_data = density_df_transposed[density_df_transposed['Cluster'] == cluster].drop('Cluster', axis=1)
        for language in cluster_data.index:
            plt.plot(x_grid, cluster_data.loc[language], label=f"{language} (Cluster {cluster})")
    plt.xlabel('Proportion')
    plt.ylabel('Density')
    plt.title('Density Distributions of Proportion Values by Language with Clusters')
    plt.legend()
    plt.show()
except Exception as e:
    print("Error during KMeans fitting:", str(e))