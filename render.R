# render_todo.R
library(rmarkdown)

# Renderizar las páginas principales
render_site()

# Renderizar todos los .Rmd dentro de /posts
setwd("posts/")
render_site()