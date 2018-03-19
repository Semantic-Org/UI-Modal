### Version 2.3.1 - Mar 19, 2018

> **A Special Message about Flex Modals**
> There will be an update shortly to resolve issues related to flex modals when using multiple modals and `detachable: false`, in order to not hold up this release, we've decided to move forward without a fix.

### Version 2.3.0 - Feb 20, 2018

- **Modal** - Modal has been rewritten to use `flexbox`. No need to call `refresh()` to recalculate vertical centering.
- **Modal** - Modals now have a setting `centered` which can be used to disable vertical centering. This can be useful for modals with content that changes dynamically to prevent content from jumping in position.
- **Modal** - You can now modify `closable` setting after init **Thanks @mdehoog** [#3396](https://github.com/Semantic-Org/Semantic-UI/issues/3396)
- **Modal** - Modal `autofocus` setting now checks to see if currently focused element is in modal, avoiding issues where focus could be set in `onVisible` or `onShow`

### Version 2.2.14 - Jan 29, 2018

- **Modal** - Fixes issue where an oversized modal would appear behind an existing modal when using `allowMultiple: true` and a second modal that is larger than the screen height. [#2423](https://github.com/Semantic-Org/Semantic-UI/issues/2423)

### Version 2.2.12 - Aug 07, 2017

- **Modal** - Modal will now take into account absolutely positioned elements inside a modal when determining if scrolling is necessary. [#5578](https://github.com/Semantic-Org/Semantic-UI/issues/5578) **Thanks @lulalala**
- **Modal** - Fixes issue where init order matters when multiple modals are shown at same time and `allowMultiple: true` is used [#5559](https://github.com/Semantic-Org/Semantic-UI/issues/5559)

### Version 2.2.11 - July 11, 2017

- **Modal** - Using multiple modals with different `inverted` `blurring` or `closable` settings will now function normally in all cases [#4368](https://github.com/Semantic-Org/Semantic-UI/issues/4368)
- **Modal** - Fixed issue where modal `refresh` was being called on modals even if they are hidden, causing display issues when multiple modals are shown. **Thanks @p2kmgcl** [#5319](https://github.com/Semantic-Org/Semantic-UI/issues/5319)
- **Modal** - Adds new `scrolling content` variation to have a modal with content that scrolls
- **Modal** - Adds `tiny` and `mini` sized modals **Thanks @Banandrew** [#5123](https://github.com/Semantic-Org/Semantic-UI/issues/5123)

### Version 2.2.10 - March 28, 2017

- **Modal** - `onDeny` and `onApprove` callbacks can no longer occur multiple times if you rapidly click a approve/deny button in a. #4479

### Version 2.2.3 - August 21, 2016

- **Modal** - Modal now includes setting to enable/disable keyboard shortcuts
- **Modal** - Modal will now focus first tabable element, not just `input` [#4370](https://github.com/Semantic-Org/Semantic-UI/issues/4370)

### Version 2.2.2 - July 07, 2016

- **Dimmer/Modal** - Fixed a bug which could cause a modal's dimmer to not obey `inverted: true` or `blurring: true` when initializing modals with *then afterwards* without either setting.

### Version 2.2.0 - June 26, 2016

- **Modal** - RGB values set for dimmer `background-color` were not being correctly interpreted [#3665](https://github.com/Semantic-Org/Semantic-UI/issues/3665) **Thanks @larsbo**
- **Modal/Dimmer** - Fixed issue with `destroy` not properly removing events from dimmer [#3200](https://github.com/Semantic-Org/Semantic-UI/issues/3200)

### Version 2.1.5 - Nov 1, 2015

- **Modal** - `onHide` callback can now cancel event by returning false [#3168](https://github.com/Semantic-Org/Semantic-UI/issues/3168) **Thanks @mdehoog**
- **Divider/Step/Modal/AD** - Fixes 1px jump at `@mobileBreakpoint` caused by incorrect edge conditions in media query [#3180](https://github.com/Semantic-Org/Semantic-UI/issues/3180) **Thanks @mdehoog**

#### Bugs

- **Modal** - Fix autofocus setting in modal not working due to improper selector [#2737](https://github.com/Semantic-Org/Semantic-UI/issues/2737)
- **Modal** - Increased `close` specificity, modal will now only close on `> .close` [#2736](https://github.com/Semantic-Org/Semantic-UI/issues/2736)

### Version 2.0.4 - July 17, 2015

- **Modal** - Modal `action` now uses a more specific selector to prevent modifying `comment action`

### Version 2.0.3 - July 8, 2015

- **Modal** - Modal that is larger than page height will now correctly reset body height on remove [#2576](https://github.com/Semantic-Org/Semantic-UI/issues/2576)

### Version 2.0.1 - July 6, 2015

- **Modal** - `scrolling modal` now correctly inherits rules so that it appears at top of screen on mobile
- **Modal** - Removed legacy JS animation settings still accidentally in docs

### Version 2.0.0 - June 30, 2015

- **Modal** - If you are using a modal with image content, you will need to use `image content` on the parent element. This is because `flex` rules require parent styling that the previous `table-row` rules did not.
- **Modal** - Modal will now only close on buttons matching `deny` or `approve` selector. Any button that should hide modal on click should either match one of these selectors, or call `$('.ui.modal').modal('hide')` `onclick`.
- **Modal** - Added new settings `blurring` and `inverted` which automatically set a modal's dimmer to either inverted or blurring.
- **Modal** - Modal now uses an adjusted `scale in` transition in the default theme, that should be more subtle and work better with long modal content.
- **Modal** - Modal `onApprove` and `onDeny` now receive the activating element as the first parameter. Added documentation about using `return false` to avoid hiding element on click.
- **Modal** - Modal content now uses flex, image content now requires `image content` class on parent to allow for flex stylings.
- **Modal** - Modal no longer hides page scroll bar causing dimmed page content to jump positions.
- **Modal** - Fixed bug where clicking an element detached from dom would cause modal to hide prematurely
- **Modal** - Clicking on other modals will no longer close open modal when `allowMultiple: true`
- **Modal** - Fixed `scrolling` class not being removed after opening a normal modal after a `scrolling` modal.
- **Modal** - `scrollable modal` now correctly adds padding below modal
- **Modal** - Modal with `detachable: false` inside `ui sidebar`  `pusher` element will now show correctly
- **Modal** - Modals now used fixed widths and not percentage widths. Widths might be slightly different.
- **Modal** - Modal no longer observes DOM changes by default, added setting to enable

### Version 1.11.2 - March 6, 2015

- **Modal** - Fixes modal `buttons` on mobile devices to not have extra bottom padding.

### Version 1.11.0 - March 3, 2015

- **Modal** - Modal no longer hides and reshows dimmer when opening a modal with another modal open with `exclusive: true`
- **Modal** - Fixed issue with modal not appearing when calling `show` during another modal `hide`

### Version 1.9.2 - February 19, 2015

- **Modal** - Fixes typo causing `middle aligned` image not to work correctly.

### UI Changes

- **Modal** - Modal now swaps to `scrolling modal` when `close icon` no longer can be displayed, instead of modal `content`
- Fixed bug with chinese mirror modal appearing on every page load when selecting chinese language

### Version 1.4.0 - December 22, 2014

- **Modal** - Modal now accepts custom dimmer settings with setting `dimmerSettings``

### Version 1.3.2 - December 17, 2014

- **Modal** - Fixed issue with modal dimmer appearing cut off in some browsers, and not hiding

### Version 1.3.0 - December 17, 2014

- **Modal** - Fixed issue with modal losing scroll position on mobile
- **Modal/Dimmer** - Fixed issues with modal hiding during showing and showing during hiding, fixed issues with "hiding other" modals while a modal is mid-animation.

### Version 1.2.0 - December 08, 2014

- **Modal** - Default modal shadow now more subtle
- **Modal** - Fixes issues with multiple modals sometimes not closing dimmers
- **Modal** - When a second modal that is not scrolling is opened after a scrolling modal it no longer causes the first modal to not be scrollable
- **Modal** - "Hammer" clicking multiple times on a hiding dimmer no longer causes animation issues

### Version 1.0.0 - November 24, 2014

- **Modal** - Modal ``left`` and ``right`` sections are now replaced with ``image`` and ``description``
- **Modal** - allowMultiple (allowing multiple modals at once) is now set to **false** by default.

### Version 0.19.1 - Sep 5, 2014

- **Modal** - (Backport from 1.0 branch) Fixes issue where modal sometimes appears too low on second show

### Version 0.18.0 - June 6, 2014

- **Modal** - Modals now focus on first input if available **Thanks Knotix**
- **Modal** - Docs now have HTML examples

### Version 0.17.0 - May 9, 2014

- **Modal** - Element does not accurately close other modals when initialized at different times **Thanks nojhamster**
- **Modal** - Fixes javascript error for browsers that don't support CSS animations if jquery.easing is not included

### Version 0.16.0 - April 22, 2014

- **Modal** - Fixes issue where position sometimes appeared too low on second show

### Version 0.15.0 - Mar 14, 2014

- **Modal** - Modals now have an onVisible and onHidden callback for after animation ends
- **Modal** - Browsers without RequestAnimationFrame (Opera) were erroring on modal show
- **Modal** - Modal onShow and onHide occurs before transition starts, allowing for class name changes not to be reset

### Version 0.14.0 - Mar 03, 2014

- **Modal** - Modal now uses requestAnimationFrame instead of debounced callback

### Version 0.13.1 - Feb 28, 2014

- **Modal** - Fixes modal positioning appearing slightly below center on second load

### Version 0.13.0 - Feb 20, 2014

- **Modal** - Modal will now work when modal is taller than page's content
- **Modal** - Fixes z-index of modal close to appear above ``relative/absolute`` modal content on mobile

### Version 0.12.5 - Feb 04, 2014

- **Modal** - Fixes an issue where modal may not position correctly in some cases *Thanks GianlucaGuarini*
- **Modal** - Fixes modal throwing an error when transition is not included *Thanks robertoles*

### Version 0.12.1 - Jan 15, 2014

- **Modal** - Fixes possible race conditions in animations of modal **thanks dos1**

### Version 0.12.0 - Jan 06, 2014

- **Modal** - New setting ``allowMultiple`` lets you specify whether multiple modals can be shown at once
- **Modal** - New setting ``detachable`` allows you to specify whether modal DOM element can be moved (Thanks MohammadYounes)
- **Modal** - Buttons can now use both ``cancel/deny`` or ``ok/approve``, for approve/deny events to fire (Thanks MohammadYounes)
- **Menu** - Fixes z-index on fixed menu to exist just below modals

### Merry Christmas!

-**Modal**: Fixes issues with modal in IE, IE11 can now use CSS animations with modals

### Version 0.10.3 - Dec 22, 2013

- **Modal** - Fixes element detaching sometimes in case where it is already inside a dimmer

### Version 0.10.1 - Dec 06, 2013

- **Modal** - Fixes issue with modal animation regression in 0.10.0

### Version 0.9.0 - Nov 5, 2013

- **Modal** - Fixes use of unsupported comma separated :not selector
- **Modal** - Fixes left/right ui content receiving modal styles inappropriately

### Version 0.8.6 - Nov 2, 2013

- **Modal** - Fixes issue with scrollable variation on mobile, updates mobile styles

### Version 0.8.5 - Nov 2, 2013

- **Modal** - Fixed issue with modals not working in 0.8.4 due to mistake in transition invoke

### Version 0.8.4 - Nov 1, 2013

- **Modules** - Fixes bug where invoking a sentence behavior that has a single word match would always invoke single word match. I.e. ``show modal`` would mistakenly call ``show`` if it existed.

### Version 0.8.3 - Oct 30, 2013

- **Modal** - Adds fixes for opening modals when other modals are opened, adds a few new API behaviors

### Version 0.8.2 - Oct 28, 2013

- **Modal** - Quick Fix for modal events in IE

### Version 0.7.2 - Oct 23, 2013

- **Modal** - Fixes issue with modal hiding twice onApprove

### Version 0.7.0 - Oct 22, 2013

- **Modal** - Modal hide can be cancelled from ``onApprove`` and ``onDeny`` by returning false from callback
- **Modal** - Optimizes dimmer init on modal to occur on modal init and not modal show

### Version 0.6.5 - Oct 18, 2013

- Modal keyboard shortcuts now obey settings.closable (credit to luisrudge)

### Version 0.6.1 - Oct 15, 2013

- Adds onApprove/onDeny callbacks to modal
- Adds small/large sizing of modal, reformats default modal size to be slightly inset from page grid
- Fixes modal spacing on left/right content to match up with grid gutters
- Fixes tests not passing for modal/dimmer

### Version 0.5.1 - Oct 11, 2013

- Fixes issue with modal sometimes closing/opening multiple times caused by changes in 0.5.0

### Version 0.5.0 - Oct 10, 2013

- Fixes modal hide/show dependency issue where dimmer would not always hide modal and vice-versa

### Version 0.3.7 - Oct 8, 2013

- Fixes modal show/hide action reversal in Webkit

### Version 0.3.3 - Oct 2, 2013

- Fixes modal not working due to destroy teardown in dimmer Issue #153

### Version 0.3.2 - Oct 2, 2013

- Adds attach events method to modal for attaching modal events to other elements
- Adds input focus/blur to modal, see Issue #124
- Updates modal to refocus elements after close

### Version 0.2.5 - Sep 28, 2013

- Modal no longer uses inline css to center when in fixed position mode

### Version 0.2.3 - Sep 28, 2013

- Fixes issues with modal not swapping to absolutely positioned from fixed when content cannot fit in viewport

### Version 0.2.2 - Sep 28, 2013

- Fixes invoke returning found function instead of results of found function in dropdown, modal

### Version 0.2.1 - Sep 28, 2013

- Modals can now have an icon in its left content that will be automatically formatted
- Refactored modal and dimmer components
- Modal will now resize when browser window resizes if vertical height changes
- Fixes issues with dimmer settings sticking between separate modals with the same dimmer.

### Version 0.2.0 - Sep 28, 2013

- Adds responsive modal styling, modal always now sits with 5% gutters under page grid responsive styling
- Adds basic modal variation
- Issue with modal active state not being removed correctly from modals
- Swaps modal and dropdown to use same variable naming pattern as rest of modules

### Version 0.1.0 - Sep 25, 2013