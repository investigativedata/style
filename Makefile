LOGOS = basic_dark basic_light square_dark square_light
LOGOS_SRC_PNG = $(LOGOS:%=static/logos/rgb/transparent/IDIO_%.png)
LOGOS_SRC_SVG = $(LOGOS:%=static/logos/rgb/transparent/IDIO_%.svg)
LOGOS_DEST_PNG = $(LOGOS:%=build/%.png)
LOGOS_DEST_SVG = $(LOGOS:%=build/%.svg)
CSS_MINI = base.min.css fonts.min.css mkdocs.min.css

all: clean logos favicon.svg $(CSS_MINI)

install:
	npm install

.PHONY: logos
logos: $(LOGOS_SRC_PNG) $(LOGOS_SRC_SVG) $(LOGOS_DEST_PNG) $(LOGOS_DEST_SVG)

%.svg: build
	cp static/logos/rgb/transparent/cropped/IDIO_$*.svg build/logo_$@
%.png: build
	cp static/logos/rgb/transparent/IDIO_$*.png build/logo_$@

%.min.css: build
	node_modules/postcss-cli/index.js --no-map css/$*.css -u postcss-import -u postcss-url -u postcss-dropdupedvars -u autoprefixer -u cssnano -o build/$*.min.css

favicon.svg: build
	cp static/logos/rgb/color/IDIO_circle_orange.svg build/favicon.svg

clean:
	rm -rf build

build:
	mkdir -p build
