# Directory

> *_Directory_* *[dih-rek-tuh-ree]*: a book listing individuals or organizations alphabetically or thematically with details such as names, addresses, and telephone numbers.

[![build status](https://src.temando.io/Freeman/Directory/badges/master/build.svg)](https://src.temando.io/Freeman/Directory/commits/master)
## Install
```bash
npm install @temando/directory --save-dev
```  
or  
```bash
yarn add @temando/directory -D
```

## Usage
Directory exposes:
- 2 prebuilt objects: FULL, TOP6, which contains addresses for all and 6 countries, respectively.
- A function (`getAddresses`) that allows user to supply an array of country codes and returns an object of corresponding addresses.

```javascript
export { FULL, TOP6, getAddresses };
```

All addresses conform to [address+v4](https://src.temando.io/carrier-framework/carrier-gateway/blob/master/lib/refs/generic/address+v4.schema.json)

```json
{
  "AU": {
    "countryCode": "AU",
    "locality": "Sydney",
    "administrativeArea": "NSW",
    "postalCode": "0200",
    "addressLines": [
      "11 Hickson Rd"
    ],
    "phone": {
      "number": "+61 2 8298 9999"
    }
  }
}
```

For more references, see `test` and source code.

## Data source
https://docs.google.com/a/temando.com/spreadsheets/d/1UhxkvESgvLg596El3hlpd9NRzmH5KU8iqy10Zface_A/edit?usp=sharing
