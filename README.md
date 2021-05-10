Riff Learning metrics
=====================

Riff metrics (visualizations and tables) and presentation dashboard

## Package exports

### React components

#### Helper components
- `ChartCard`
- `A11y.ChartTable` - A table that is intended to be hidden that should contain a representation
  of a visual chart that is a more screen reader friendly presentation.

#### A specific Meeting Dashboard for selecting a user's meeting and displaying metrics
- `Dashboard` - Allows selection of a meeting and presents the general info and charts of
  the metrics for that meeting (currently all of the metrics components that are exported)
- `MeetingList` - Displays a list of meetings and allows selection. Used by the Dashboard.
  Also available to be used when creating your own dashboard of metrics.

#### The individual meeting metric visualization components
- `Affirmations`
- `Influence`
- `Interruptions`
- `MeetingInfo` - Presents general information about a particular riff meeting. ie room name,
  date/time of the meeting, length of the meeting, attendees
- `SpeakingTime`
- `Timeline`

### Constants
- `EStatus`
- `GraphDatasetTypes`
- `GraphTypes`

### Associated sass styles
When using one of the exported components, there are associated sass styles that should
also be used. They should be imported into the applications `main.scss` so they can be
compiled with it.

These are all sass partial files (hence the underscore (_) prefix.

- `sass/_affirmations.scss`
- `sass/_chart_card.scss`
- `sass/_chart_table.scss`
- `sass/_dashboard.scss`
- `sass/_influence.scss`
- `sass/_interruptions.scss`
- `sass/_meeting_info.scss`
- `sass/_meeting_list.scss`
- `sass/_speaking_time.scss`
- `sass/_timeline.scss`

### Utilities
**--Temporary--** Currently the generic utilities are being exported in the object `riffUtils`.
This is temporary because they belong in their own package, but that won't get created for a
while. Therefore they are being made available from this riff-metrics package. Only generic
utilities are being exported. Utilities that are specifically for dealing with metrics are not.

The exported utilities are:

- `logger` : simple console logger w/ log levels
- `color` : Riff color utilities
    - Colors
    - PeerColors
    - getColorForOther
    - getColorForSelf
    - getColorMap
    - getCountOtherColors
    - rgbaColor
- `collection` : collection utilities to make replacing/not using lodash easier
    - cmpObjectProp
    - countByPropertyValue
    - groupByPropertyValue
    - mapObject
    - reverseCmp
- `time`
    - TimeConversions
- `Chars` : named character constants


## How to use this package

This package is a published as a private package to the GitHub npm registry so you will
have to configure npm to retrieve it from there. See the [GitHub documentation on installing
packages][npm-install-from-gpr].
One option is to tell npm your GPR credentials using and enter your username, the
GitHub token you created for your user, and your email address.
```
npm login --scope=@rifflearning --registry=https://npm.pkg.github.com
```

```
npm install @rifflearning/metrics
```

### Initialization

You must initialize the riff-metrics before using any of the components.
Call the provided initialize function when your app starts such as in the top level component's
constructor. You must supply:
- a feathersjs app connected to the riffdata server
- redux action types for user login and logout
- redux selectors to get the current user id, get the riff-metrics package's state, and to
  determine if the feathersjs app is authenticated to the riffdata server

You must combine the riff-metrics reducer with your app's redux reducers.

```js
import { metricsRedux } from '@rifflearning/riff-metrics';
import { menu } from './menu';
import { user } from './user';

export const rootReducer = combineReducers({
    menu,
    metrics: metricsRedux.reducer,
    user,
});
```

### Components

It should be possible to use the Riff Metrics components individually and create your own
dashboard (actually not at this time as the required actions have not been exported) but
it is recommended that you just use the Dashboard component.

The Dashboard component may be given child react nodes which will be rendered before the
Dashboard. Currently this has been used to instantiate `Helmet` to provide a browser page title,
and a post-meeting survey in an iframe overlay.

```js
import { Dashboard } from '@rifflearning/riff-metrics';

render() {
    return (
        <Dashboard>
            <HelmetComponent/>
            {postMeetingSurvey}
        </Dashboard>
    );
}
```

### Styles

Note that _@use_ / _@forward_ is replacing _@import_ but the semantics are different so
you may want to [read up on it][sass-import-deprecated]. In addition you should be using
the `sass` (dart-sass) package and not the `node-sass` package.

You only need to `@use` the styles for the components you are using.

e.g.
**main.scss**
```scss
/*...*/
@use 'vendors/riff-metrics';
/*...*/
```

**vendors/_riff-metrics.scss**
```scss
//@use "node_modules/@rifflearning/riff-metrics/sass/affirmations";
//@use "node_modules/@rifflearning/riff-metrics/sass/chart_card";
//@use "node_modules/@rifflearning/riff-metrics/sass/chart_table";
@use "node_modules/@rifflearning/riff-metrics/sass/dashboard";
//@use "node_modules/@rifflearning/riff-metrics/sass/influence";
//@use "node_modules/@rifflearning/riff-metrics/sass/interruptions";
//@use "node_modules/@rifflearning/riff-metrics/sass/meeting_info";
//@use "node_modules/@rifflearning/riff-metrics/sass/meeting_list";
//@use "node_modules/@rifflearning/riff-metrics/sass/speaking_time";
//@use "node_modules/@rifflearning/riff-metrics/sass/timeline";

/* Example Style overrides
// style overrides for a dark mode dashboard
.dashboard-view-component {
    background-image: linear-gradient(-90deg,#282725 0,#282725 50%,#282725 100%);
}

.meeting-info-component {
    .meeting-title {
        color: white;
    }

    .meeting-details {
        color: #ffffffcc;

        h2 {
            i {
                color: rgba(255, 255, 255, 0.87);
            }
        }
    }
}
*/
```

### Example usage in riff-rtc

#### Initialization
- see [src/components/App/App.jsx](https://github.com/rifflearning/riff-rtc/blob/3.0.0-dev.29/src/components/App/App.jsx#L26)
- see [src/redux/reducers/index.js](https://github.com/rifflearning/riff-rtc/blob/3.0.0-dev.29/src/redux/reducers/index.js#L21)

#### Components
Using the Dashboard component:

- see [src/components/Dashboard/DashboardView.jsx](https://github.com/rifflearning/riff-rtc/blob/3.0.0-dev.29/src/components/Dashboard/DashboardView.jsx)

Using the ChartCard and A11y.ChartTable components:

- see [src/components/Chat/Meeting/MeetingSidebar/MeetingMediator.jsx](https://github.com/rifflearning/riff-rtc/blob/3.0.0-dev.29/src/components/Chat/Meeting/MeetingSidebar/MeetingMediator.jsx)

#### Styles
- see [src/sass/vendors/_riff-metrics.scss](https://github.com/rifflearning/riff-rtc/blob/3.0.0-dev.29/src/sass/vendors/_riff-metrics.scss)

[npm-install-from-gpr]: <https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#installing-a-package> "Installing npm packages from the GitHub Package Registry"
[sass-import-deprecated]: <https://sass-lang.com/documentation/at-rules/import> "Sass Import Rule. see Heads up!"


## How to publish this package

There is a GitHub Actions `release` workflow that will publish this package when a tag
with a 'v' prefix is pushed.

This package is published to the GitHub npm Registry
([configuration instructions][config-github-npm])

You can test what would be published by running `make pack` which will produce a _tarball_,
a `*.tgz` file named with the package name and version from package.json.

[config-github-npm]: <https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages>


## TODO

- Add MeetingMediator as a metrics_realtime (making the current metrics really metrics_postmeeting)
- extract the riffdata library to its own package (riffdata-client) and add feathersjs connection
  functionality.
- extract the riff utils to its own package.
