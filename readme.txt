===============================
Breeze++ Version 3.0.2 README

Breeze++ is a derivative of NSBreeze, adding and modifying functionality for modern military gameplay in Nationstates.

Author: Vincent W. Drake
NSBreeze Original Author: Shizensky
Special Thanks to: Roavin and Shizensky

Questions?  Technical Problems?
Vincent Drake#3952 on Discord

================================
KEY LIST:

A (x2) = View the Activity Page with Filters World, Move+Member+Endo (Hit A again to view it without filters)
B = Bring up Artificial Solar System
B (x2) = View Artificial Solar System (Hit B again to move there)
C = Cross (Endorse) with the Selected Nation
D = Doss the Selected Nation
E = Endorse the Selected Nation
G = Check if a GCR is updating (same as A x2 but much faster)
H = View the Ajax2 version of region happenings (you can chase off this page)
M (x2) = View region (Hit M again to move there)
N = Refresh the Selected Page
P (x4) = Prep Switchers (Hit P 4 times to view WA page, apply, view ASS, move to ASS)
R = View the region you are currently in
T = Toggle a region or nation page between template and no template
U = Check if your nation has updated anywhere
V = Doss the Selected Nation
W = View that Region's Current WA Delegate (Does nothing if the region has no delegate)
Z = Zombie Control
? = File GHR
' (x2) = View the WA page (Hit ' again to resign or apply depending on your current WA status.  Pair this with ENTER when the confirmation box appears, the full sequence to resign and apply is 5 keystrokes: ' ' ENTER ' ' )
< = Go Back (Do NOT use right after dossing!)
Spacebar (x2) = View the Reports Page with no template (Hit Spacebar again to view the Ajax2 version of reports, you can chase off this page)

===============================
CHANGELOG

v3.0.2
.Removed ActiveTab permissions as it should be uneeded
.Hopefully fixed the Ajax2 page bounce upon refresh

v3.0.1
.Fixed an issue with resigning WA

v3.0.0
.Updated the default jump point to Artificial Solar System
.Added G key for checking what is updating
.Added H key for region happenings
.Added P key for prepping switchers
.Added T key for toggling templates on and off
.Removed 1-5 number keys for disuse
.Enabled the R key to work on pages without a template
.When using the W key and the region has no delegate, it now pops a confirmation box telling you there's no delegate
.Added 2nd spacebar tap for Ajax2 reports
.Cleaned up a bunch of awful 2017 code

(No versions between 2.1.4 and 3.0.0 existed)

v2.1.4
.Added Z key for Zombie Control

v2.1.3
.Rolled back the N key expansion, due to user privacy concerns.

v2.1.2
.Restored the R key by popular demand.  All that demand that didn't vote in the usage poll...
.The N key now works universally, on every domain on the internet.

v2.1.1
.I totally didn't break the script and have to quickly push a fix or anything...

v2.1
.Changed the U key from Activity+filters to Ajax Feed+filters (Loads faster than Activity)
.Added ''ENTER'' (5 keystrokes) for WA page, Resign WA, Confirm, WA page, Apply to WA.
.Removed unpopular/seldom used keys: R
.Changed function of 1, 2, 3, 4, 5 number keys.  They now select nations off the Activity or Reports Page on the left side of 2 part happenings.  Keypad number keys 1, 2, 3, 4, 5 now select nations off the Activity or Reports Page on the right side of 2 part happenings.  Hit them twice in order to doss those nations.  This is kind of hard to explain in a changelog, but basically it's the same logic as normal nation selection and dossing, except you don't need to click on the nation you want, just hit a number based on its order in the activity feed, and use a different set of number keys depending on which side of the happening the nation is.  If the happening you want drops below the 5th position of the feed or your keyboard doesn't have a right side keypad, some or all of this functionality will not work.  If a 3 part happening interrupts a chain of 2 part happenings, you must skip a number or you will end up selecting the 3 part happening and probably go to a region page that you don't want.

v2.0
.Added to Chrome Web Store.
.Cleaned up the codebase more.

v1.93
.Excluded the ALT key from performing Breeze++ actions.
.Removed unpopular/seldom used keys: I, F, >, ALT.
.Went through older versions to add their changes to this log.
.Removed activity style since I never ended up using it.

v1.92
.Fixed an issue where the move action failed to work when using the "Century" theme.
.Cleaned up the codebase more.

v1.9
.Fixed an issue where CTRL+Key or SHIFT+Key triggered Breeze++ actions.
.Extended E to work with Roavin's chase move+endo script.
.Made the no-template reports page pretty.
.Cleaned up the codebase.
.Improved the documentation.

v1.8
.Made links on reports larger so they are easier to click on.

v1.7
.Certain keys now perform different actions depending on what page you are viewing.  Added x2 M, x2 Number keys 1-5, x2 A, x2 B.
.Removed S in favor of A x2, removed Z in favor of X x2.
.Added actual documentation.
.Migrated all keys from keypress event to keyup event.

(No 1.6 version existed)

v1.5
.Added <, >, ?, Z, X.

(No 1.4 version existed)

v1.3
.Added Spacebar, ALT, A, S, B, C, V.

(No 1.2 version existed)

v1.1
.Added N key.

v1.0
.Got NS Breeze's original code to run as a separate extension.



