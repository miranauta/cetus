#!/bin/bash -e

SVG_PATH=assets/images/svg
PNG_PATH=build/assets/images/png

svgexport() {
  image=`basename ${1}`
  size=${2}
  imageSize=${3:-''}

  echo
  echo ${@}

  npx svgexport \
    "${SVG_PATH}/${image}" \
    "${PNG_PATH}/${image%.*}${imageSize}.png" \
    "${size}"
}

svg2png() {
  find ${SVG_PATH} -name '*.svg' | \
    while read file; do \
      svgexport $file 2x; \
      svgexport $file 4x @2x; \
      svgexport $file 6x @3x; \
    done
}

svg2vector() {
  npx s2v -f ${SVG_PATH} -o cetus/src/main/res/drawable/
}

build_svg() {
  svg2png
  svg2vector
}

main() {
  build_svg
}
main
