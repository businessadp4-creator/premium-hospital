#!/bin/bash
# Crawl all views and report title + h1 + overflow
VIEWS=(
"/" "Home"
"/about" "About"
"/specialities" "Specialities"
"/specialities/orthopaedics" "Ortho"
"/specialities/paediatrics" "Paeds"
"/doctors" "Doctors"
"/doctors/dr-kavitha-reddy" "DoctorProfile"
"/services" "Services"
"/facilities" "Facilities"
"/health-packages" "Packages"
"/patient-information" "PatientInfo"
"/contact" "Contact"
"/blog" "BlogList"
"/blog/diabetes-small-daily-habits" "BlogDetail"
"/blog/child-nutrition-myths" "BlogDetail2"
"/emergency" "Emergency"
"/privacy-policy" "Privacy"
"/terms" "Terms"
"/medical-disclaimer" "Disclaimer"
"/nonexistent-page" "NotFound"
)
for entry in "${VIEWS[@]}"; do
  path="${entry%% *}"
  name="${entry##* }"
  agent-browser open "http://localhost:3000/#${path}" > /dev/null 2>&1
  agent-browser wait --load networkidle > /dev/null 2>&1
  title=$(agent-browser get title 2>/dev/null | tail -1)
  h1=$(agent-browser eval "document.querySelector('h1')?.textContent?.trim()?.slice(0,60) || 'NO-H1'" 2>/dev/null | tail -1)
  overflow=$(agent-browser eval "document.documentElement.scrollWidth - document.documentElement.clientWidth" 2>/dev/null | tail -1)
  echo "$name | title: ${title:0:55} | h1: ${h1:0:55} | overflow: $overflow"
done
