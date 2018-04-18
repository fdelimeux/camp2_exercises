curl "https://postman-echo.com/post" -F "foo=bar" | jq .form > 02_postman_api_post.result
