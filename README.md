# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## RESTful CRUD API
GET: 
app.get
"/api/:restaurantName/reviews/"

Input/parameters: { reviews_id }

POST:
"/api/:restaurantName/reviews"


PUT: 
"/api/reviews/:restaurantName"


DELETE:
"/api/reviews/:restaurantName"

CREATE/POST:
Input: { reviews_id }

READ/GET:
Input: { user_id, restaurant_id, review, overall, food, service, ambience, value, noise, would_recommend, date }

UPDATE/PUT:
Input: { reviews_id, user_id, restaurant_id, review, overall, food, service, ambience, value, noise, would_recommend, date }

DELETE/DELETE: 
Input: { reviews_id, }
