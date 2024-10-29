extractValue <- function(s) {
  # Split the string by double quotes which will segment the JSON-like structure
  parts <- strsplit(s, "\"")[[1]]
  # The value after "Q0" should be at the fourth position based on the splitting pattern
  if (length(parts) >= 4) {
    return(parts[4])
  } else {
    return(NA)  # Return NA if the expected structure isn't met
  }
}


solidity_map <- c("solid" = 0, "non-solid" = 1, "unclear/unknown" = 2)
categorical_map <- c("color" = 2, "material" = 1, "shape" = 0, "none of these" = 3)
syntax_map <- c("count noun" = 0, "mass noun" = 1, "unclear/unknown" = 2)  # Assumin

# Define a function to map categories to numeric levels
map_categories <- function(category, block) {
  if (block == "solidity") {
    return(solidity_map[category])
  } else if (block == "category_organization") {
    return(categorical_map[category])
  } else if (block == "count_mass") {
    return(syntax_map[category])
  } else {
    return(NA)  # Handle cases where block is not recognized
  }
}