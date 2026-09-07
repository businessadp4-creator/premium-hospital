#!/bin/bash
# Fetch premium healthcare photography via z-ai image-search, then download locally.
set -u
IMG_DIR="/home/z/my-project/public/images"
JSON_DIR="/home/z/my-project/scripts/img"
mkdir -p "$IMG_DIR" "$JSON_DIR"

search() {
  local name="$1"; local query="$2"; local count="$3"
  echo "=== Searching: $name ==="
  z-ai image-search -q "$query" -c "$count" --gl us -o "$JSON_DIR/$name.json" 2>&1 | tail -1
}

# Key brand imagery (captions on for selection quality)
search hero        "Indian doctor warmly consulting elderly patient in modern bright hospital" 6
search team        "team of doctors and nurses walking in modern hospital corridor professional" 5
search doc_m1      "professional headshot portrait of Indian male doctor in white coat smiling" 8
search doc_f1      "professional headshot portrait of Indian female doctor in white coat smiling" 8

# Facilities
search lobby       "modern hospital reception lobby interior bright clean design" 5
search room        "modern private hospital patient room interior clean bed" 5
search icu         "modern hospital intensive care unit with monitoring equipment" 5
search ot          "modern hospital operation theatre surgical room equipment" 5
search lab         "medical laboratory technician analyzing blood test samples modern laboratory" 5
search imaging     "modern hospital MRI scanner radiology imaging room" 5
search pharmacy    "pharmacist at hospital pharmacy counter with medicines" 5
search emergency   "hospital emergency sign with ambulance at hospital entrance" 5

# Support / CTA imagery
search consult     "doctor holding elderly patient hand compassion care hospital" 5
search checkup     "doctor measuring blood pressure of patient health checkup" 5
search child       "pediatrician examining happy child with mother in clinic" 5
search wellness    "healthy fresh vegetables and fruits balanced diet nutrition" 5
search heart       "stethoscope with red heart health checkup concept" 5
search senior      "senior indian couple morning walk exercise park healthy" 5

echo "ALL SEARCHES DONE"
