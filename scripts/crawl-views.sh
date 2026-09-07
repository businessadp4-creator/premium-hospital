#!/bin/bash
# Crawl all site views; report HTTP-less SPA checks: title + broken images + basic errors
set -u
VIEWS=(
  "/" "/about" "/specialities" "/specialities/cardiology" "/specialities/paediatrics"
  "/doctors" "/doctors/dr-priya-nair" "/services" "/facilities" "/health-packages"
  "/patient-information" "/appointments" "/blog" "/blog/monsoon-fever-prevention-family-guide"
  "/contact" "/emergency" "/privacy-policy" "/terms" "/medical-disclaimer" "/nonexistent-page"
)
for v in "${VIEWS[@]}"; do
  agent-browser eval "window.location.hash='#$v'; 'ok'" >/dev/null 2>&1
  sleep 1.6
  title=$(agent-browser get title 2>/dev/null)
  broken=$(agent-browser eval "(()=>{const b=[...document.querySelectorAll('img')].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src); return b.length})()" 2>/dev/null)
  h1=$(agent-browser eval "(()=>{const h=document.querySelector('h1'); return h? h.textContent.slice(0,45):'NO H1'})()" 2>/dev/null)
  echo "[$v] broken-imgs=$broken | h1=$h1 | title=$title"
done
echo "CRAWL DONE"
