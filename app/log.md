#TODOS:

* add footer (done, UX needs work)

* add social media stuff (added to footer)

* add form page (done, css needs work)

* structure backend for serving files and template server-side rendering process (testing done, connected with AWS api gateway, lambda, and dynamoDB; server-side/isomorphic stuff needs to be done)

* setup aws lambda structure for dynamoDB connection for forms(testing done, needs to be fleshed out more, and production policies and users constructed)

* correctly path pics with galleries/slideshows(construct logic and directory paths for pictures; convert to png/svg if possible)

* redux/redux-saga mosted fused, state is flowing through components correctly (also checkout react-router-redux) (done)

* get input from Erbelia

* not rehydrating correctly on refresh (now it is, but verrry strange, might have been a module issue) (done)

* state not altering correctly: update - window state is undefined, and is being passed in configure store function, so it takes precedence over return of reducers. Codingbox isomorphic example has good solution to this. (done)

* Something wrong with state or components updating, when changing around routes it gets stuck on one, especially the contact component, that complete halts navigation. (done)

* Toying around with image galleries, not all that satisfied. 

* Mobile sizing needs to be looked at across the board.

* Menu bar should not be translucent when in mobile or when scrolling/not top position (done, but mobile menu not collapsing when route chosen)

* Replace news with presentations component (done)

* Create dance info on the following dances, with appropriate pictures:
Valicha, Huaylarsh, Festejo (Lando y Alcatraz), Marinera Nortena, marinera limena, tondero, carnaval de qatqa, carnaval de imilla muniri, pacasito, umapata, tuntuna, selva, abancay, El vals criollo, zamacueca

* Add map with corresponding regions that dances are from

* Mailgun mostly setup (ready for testing)

* Setup more thorough validation
