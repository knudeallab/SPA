args <- commandArgs(TRUE)
a <- as.double(args[1])
b <- as.double(args[2])
 
source("./rscripts/1.R")
 
val <- log_a_b(a, b)
cat(val)