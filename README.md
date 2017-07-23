In the previous report we analysed the process of design thinking and how it helped us better understand the problem to arrive at a solution by thinking from the perspective of a user.

The next step was a creating an execution plan to develop the solution which in our case was an Android application based on React Native.

Expo or Create React Native App provided us with a head start. Next, sample data (which infact is real data from sources such as the Formula E website and provided resources) was collected and organised. (Information Architecture).

For the prototype, this data represents the actual data stored on databases.
The production version will also be able to fetch it via GraphQL queries while Apollo Client will provide persistence (i.e. offline storage) whenever updates are made prior to the next race event. This (as mentioned earlier) eliminates the need to push updates to the app store. (Dynamic, not static)