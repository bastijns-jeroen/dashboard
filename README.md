# Dashboard

This dashboard currently shows the weather and Belgian trains leaving from one station to another.
The weather is refreshed every 15 minutes, the trains every 30 seconds.

## Installation

run jspm install in the root folder to install the project.

## Configuration

Provide a config.json file in the app directory with the following contents:

```
{
  weatherConfiguration: {
    apiToken : 'Your api token', //get one at http://openweathermap.org/
    city : 'Tienen'
  },
  trainConfiguration: {
    from : 'Tienen',
    to : 'Brussels-Central'
  }
}
```

## Running

Install live-server via 'npm install -g live-server'.
Run the app by running 'live-server' from the root folder.