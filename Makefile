LOGOS = basic_dark basic_light square_dark square_light
LOGOS_SRC_PNG = $(LOGOS:%=logos/rgb/transparent/IDIO_%.png)
LOGOS_SRC_SVG = $(LOGOS:%=logos/rgb/transparent/IDIO_%.svg)
LOGOS_DEST_PNG = $(LOGOS:%=%.png)
LOGOS_DEST_SVG = $(LOGOS:%=%.svg)

all: logos favicon.svg style.min.css

install:
	npm install

.PHONY: logos
logos: $(LOGOS_SRC_PNG) $(LOGOS_SRC_SVG) $(LOGOS_DEST_PNG) $(LOGOS_DEST_SVG)

%.svg:
	cp logos/rgb/transparent/IDIO_basic_dark.svg $@
%.png:
	cp logos/rgb/transparent/IDIO_basic_dark.png $@

favicon.svg:
	cp logos/rgb/color/IDIO_circle_orange.svg favicon.svg

style.min.css:
	node_modules/postcss-cli/index.js --no-map style.css -u cssnano > style.min.css
