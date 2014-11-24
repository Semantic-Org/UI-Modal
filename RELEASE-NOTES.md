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

- **Modal** - Fixes element detatching sometimes in case where it is already inside a dimmer

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

- Fixes issues with modal not swapping to absoultely positioned from fixed when content cannot fit in viewport

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