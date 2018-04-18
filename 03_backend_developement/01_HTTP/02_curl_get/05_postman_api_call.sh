#$dateToSend = date '+%Y%m%d'`
#echo $dateToSend
curl "https://postman-echo.com/time/valid?timestamp=$(date +%Y-%m-%d)" > 05_postman_api_call.result
