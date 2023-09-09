LOGOS = basic_dark basic_light square_dark square_light
LOGOS_SRC_PNG = $(LOGOS:%=logos/rgb/transparent/IDIO_%.png)
LOGOS_SRC_SVG = $(LOGOS:%=logos/rgb/transparent/IDIO_%.svg)
LOGOS_DEST_PNG = $(LOGOS:%=%.png)
LOGOS_DEST_SVG = $(LOGOS:%=%.svg)
CSS_MINI = base.min.css style.min.css

all: clean logos favicon.svg $(CSS_MINI)

install:
	npm install

.PHONY: logos
logos: $(LOGOS_SRC_PNG) $(LOGOS_SRC_SVG) $(LOGOS_DEST_PNG) $(LOGOS_DEST_SVG)

%.svg:
	cp logos/rgb/transparent/IDIO_basic_dark.svg logo_$@
%.png:
	cp logos/rgb/transparent/IDIO_basic_dark.png logo_$@

%.min.css:
	node_modules/postcss-cli/index.js --no-map css/$*.css -u postcss-import -u postcss-url -u autoprefixer -u cssnano -o $*.min.css

favicon.svg:
	cp logos/rgb/color/IDIO_circle_orange.svg favicon.svg

clean:
	rm -rf *.png
	rm -rf *.svg
	rm -rf *.min.css
