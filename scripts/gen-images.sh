#!/bin/bash
# Generate brand-consistent healthcare imagery (photorealistic, no text/watermarks)
set -u
IMG="/home/z/my-project/public/images"
STYLE="premium healthcare editorial photography, photorealistic, natural soft lighting, shallow depth of field, warm neutral and deep teal interior tones, high quality, no text, no watermark, no logo"

gen() {
  local name="$1"; local size="$2"; local prompt="$3"
  if [ -f "$IMG/$name.png" ] && [ -s "$IMG/$name.png" ]; then
    echo "SKIP $name (exists)"
    return 0
  fi
  echo "=== Generating $name ($size) ==="
  z-ai image -p "$prompt, $STYLE" -s "$size" -o "$IMG/$name.png" 2>&1 | tail -1
}

gen hero        1440x720 "professional photograph of an experienced Indian female doctor in white coat with stethoscope warmly consulting a smiling elderly Indian male patient seated across a desk in a bright modern hospital consultation room, large windows with soft daylight"
gen emergency   1344x768 "photograph of a modern hospital emergency entrance exterior at dusk, an ambulance with soft lights parked near the entrance, warm glowing lights, gentle blue hour sky"
gen imaging     1152x864 "photograph of a modern hospital radiology imaging room with an MRI scanner, pristine clean interior, soft ambient lighting"
gen reception   1344x768 "photograph of a bright modern hospital reception and waiting lounge, warm wooden panels, comfortable seating, indoor plants, spacious calm atmosphere"
gen checkup     1344x768 "photograph of an Indian doctor in white coat measuring the blood pressure of a middle-aged Indian man during a routine health checkup in a bright clinic room"
gen nutrition   1344x768 "overhead photograph of a healthy balanced Indian vegetarian meal with fresh vegetables, whole grains, lentils, fruits arranged beautifully on a clean table"
gen heart       1344x768 "professional close-up photograph of a stethoscope resting beside a smooth red heart-shaped object on a clean bright surface, minimalist medical concept"
gen seniors     1344x768 "photograph of a happy healthy senior Indian couple in comfortable clothes taking a brisk morning walk together in a green park, golden sunlight"
gen hygiene     1344x768 "close-up photograph of a person washing hands thoroughly with soap under running water at a clean sink, personal hygiene concept"
gen momcare     864x1152 "photograph of a caring Indian gynaecologist in white coat consulting a young pregnant woman in a bright modern clinic room, warm reassuring atmosphere"
gen bones       1344x768 "photograph of an orthopaedic specialist examining a senior man's knee joint in a bright modern clinic, professional medical consultation"

echo "ALL GENERATIONS DONE"
