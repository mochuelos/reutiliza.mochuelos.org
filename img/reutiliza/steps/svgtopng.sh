#!/bin/sh

svgexport src/1.svg 1.png 1000:1000
svgexport src/2.svg 2.png 1000:1000
svgexport src/3.svg 3.png 1000:1000
svgexport src/4.svg 4.png 1000:1000
svgexport src/5.svg 5.png 1000:1000
svgexport src/6.svg 6.png 1000:1000

convert 1.png -trim 1.png
convert 2.png -trim 2.png
convert 3.png -trim 3.png
convert 4.png -trim 4.png
convert 5.png -trim 5.png
convert 6.png -trim 6.png
