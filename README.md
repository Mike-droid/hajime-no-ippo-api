# Hajime No Ippo API Documentation

## Introduction

The Hajime No Ippo API provides access to a collection of boxers from the anime "Hajime No Ippo." This documentation guide will explain how to use the API to retrieve information about boxers.

## API Endpoints

### Retrieve All Boxers

To retrieve a list of all boxers, send an HTTP GET request to the following endpoint:

`https://hajime-no-ippo-api.onrender.com/ts/api/v1/boxers`

The API will respond with an array of boxers, each containing information such as their name, age, weight class, and statistics.

### Retrieve a Specific Boxer

To retrieve information about a specific boxer, send an HTTP GET request to the following endpoint:

`https://hajime-no-ippo-api.onrender.com/ts/api/v1/boxers/:id`

Replace `:id` in the endpoint URL with the desired ID of the boxer you want to retrieve. The ID ranges from '1' to '16' for the available boxers in the API.

The API will respond with detailed information about the requested boxer, including their name, age, weight class, statistics, and other relevant data.

## Usage Example

Here's an example of how to use the API endpoints:

### Retrieve All Boxers

Send an HTTP GET request to:

`https://hajime-no-ippo-api.onrender.com/ts/api/v1/boxers`

The API will respond with an array of boxers:

```typescript
[
  {
    "id": 1,
    "name": "Makunouchi Ippo",
    "age": 17,
    "weightClass": "Featherweight",
    "statistics": {
      "wins": 23,
      "losses": 1,
      "draws": 0
    }
    ...
  },
  {
    "id": 2,
    "name": "Takamura Mamoru",
    "age": 24,
    "weightClass": "Middleweight",
    "statistics": {
      "wins": 55,
      "losses": 0,
      "draws": 0
    }
    ...
  },
  ...
]
```

### Retrieve a Specific Boxer

To retrieve information about a specific boxer, send an HTTP GET request to:

`https://hajime-no-ippo-api.onrender.com/ts/api/v1/boxers/3`

The API will respond with the details of the boxer with ID '3':

```json
{
  "id": 3,
  "name": "Miyata Ichirou",
  "age": 18,
  "weightClass": "Featherweight",
  "statistics": {
    "wins": 21,
    "losses": 0,
    "draws": 0
  }
}
```

## Conclusion

The Hajime No Ippo API allows you to retrieve information about boxers from the anime. By using the provided endpoints, you can access a list of all boxers or retrieve details about a specific boxer based on their ID. Use this API to integrate Hajime No Ippo boxer data into your applications or projects.
