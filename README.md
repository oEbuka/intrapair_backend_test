Documentation for task 3

#Pickup Date Generation API
Endpoint
##POST /generate_pickup_dates

Request
json
```
{
    "pickup_day": "Saturday",
    "recurrence": 4
}
```
Parameters
pickup_day (string) - The day of the week for pickup. Must be one of "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
recurrence (int) - The number of pickups per month. Must be one of 1, 2, or 4.
Response
json
```
{
  "pickup_dates": [
    {
      "date": "2021-07-24T22:41:50.219+00:00",
      "readable_date": "24 July 2021"
    },
    {
      "date": "2021-07-31T22:41:50.219+00:00",
      "readable_date": "31 July 2021"
    },
    {
      "date": "2021-08-07T22:41:50.219+00:00",
      "readable_date": "7 August 2021"
    },
    {
      "date": "2021-08-14T22:41:50.219+00:00",
      "readable_date": "14 August 2021"
    }
  ]
}
```
##Response fields
pickup_dates (array) - An array of pickup dates and their human-readable versions. Each element in the array is an object with the following fields:
date (string) - The pickup date in ISO-8601 format
readable_date (string) - The pickup date in a human-readable format (e.g. "24 July 2021")
Example
graphql
```
curl -X POST https://your-api-endpoint.com/generate_pickup_dates -d '{"pickup_day": "Saturday", "recurrence": 4}'
```
This will generate the next 4 pickup dates starting from the current date.

##Error Responses
400 Bad Request - If the pickup_day or recurrence parameters are invalid.
500 Internal Server Error - If there is an error generating the pickup dates.
Notes
~The API will return the next pickup dates in the future starting from the current date.
~The API will return the pickup dates only for the current month.
