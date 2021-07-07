# flag-server acts as a unleash-server

## How to start

```bash
npm install
npm run start

# or

yarn
yarn start
```

## Connection Information

- Port Number: 4242
- Login Id: admin
- Login Password: unleash4all
- API URI: <http://localhost:4242/api>

## How to create API Key

1. Login `http://localhost:4242`
2. Click `Menu`
3. Click `Admin`
4. Click API `ACCESS` tab
5. Click `ADD NEW API KEY` button
6. Input a sort of `Username`
7. Click `CREATE NEW KEY`
8. Copy `Secert` key

## How to add Feature Flags

This configuration will be used in `react-app` application.

1. Login `http://localhost:4242`
2. Click `Menu`
3. Click `Feature Toggls`
4. Click `CREATE FEATURE TOGGLE`
5. Input Name as `test-flag`
6. Click `CREATE` button

## Reference

- <https://docs.getunleash.io/deploy/getting_started/>
