#!/bin/bash -e

SVG_PATH=assets/images/svg
PNG_PATH=build/assets/images/png
VECTOR_PATH=cetus/src/main/res/drawable

svgexport() {
  image=$(basename ${1})
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
  rm -rf ${PNG_PATH}

  find ${SVG_PATH} -name '*.svg' | \
    while read file; do \
      svgexport $file 2x; \
      svgexport $file 4x @2x; \
      svgexport $file 6x @3x; \
    done
}

svg2vector() {
  rm -rf ${VECTOR_PATH}

  npx s2v -f ${SVG_PATH} -o ${VECTOR_PATH}
}

build_svg() {
  svg2png
  svg2vector
}

main() {
  build_svg
}
main
