# Examples Page & Hover Effects - Done!

Okay so... this was actually pretty fun to implement. You know how sometimes you hover over something and the UI just feels *right*? Yeah, that's what I was going for here.

## What I Built

**The Problem:**
The preview button was literally hiding behind the photo placeholder. Like, what's the point of having a button if nobody can see it? Also, having all those example templates crammed into the landing page was making it look... cluttered. Not ideal.

**The Fix:**
Made some changes that I'm actually proud of:

1. Fixed those janky hover effects (photo fades out, button fades in—smooth as butter)
2. Created a whole separate page just for browsing examples
3. Slapped a "See Examples" button on the homepage
4. Built a simple navigation system so you can jump between pages

## The Hover Thing

You know what? This took me longer than I'd like to admit.

**Before:** Button was hiding under the photo like it was playing hide and seek. Not helpful.

**After:** When you hover over a template card:
- Photo placeholder gently fades away (300ms transition—feels natural)
- Dark overlay slides in
- "Preview Template" button appears front and center
- Move your cursor away and everything reverses

Here's the code bit that makes it work:
```jsx
{/* Photo Placeholder - disappears when you hover */}
<div className="... transition-opacity duration-300 group-hover:opacity-0">
  {/* Your photo and name stuff */}
</div>

{/* Preview Button - appears when you hover */}
<div className="... opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <button>Preview Template</button>
</div>
```

The `group-hover` thing is a Tailwind CSS trick. Basically, when you hover over the parent (the card), it affects the children. Pretty neat, right?

## Examples Page (The New Kid)

Created `ExamplesPage.jsx` from scratch. It's got:

- A header with a back button (top-left, where it should be)
- Some stats showing off that we have 17 templates across 6 categories
- The full template showcase with all the filtering goodness
- A footer CTA that basically says "okay cool, now go back or start building"

The page flow is simple: Land on it → Browse templates → Filter by category if you want → Hover to see the button → Click to preview → Use the template or bounce back home.

## Landing Page Clean-up

Ripped out the template showcase from the landing page. Why? Because it was taking up too much space and honestly, the landing page should be about getting people excited, not overwhelming them with choices right off the bat.

Added a "See Examples" button next to "Build My Resume Now" in the hero section. Two clear paths: jump right in, or browse first. User's choice.

## Navigation System

This part was... interesting. Didn't want to add a whole routing library (seemed like overkill for three views), so I just used React state.

```jsx
const [currentView, setCurrentView] = useState('landing');

// Show different components based on what view we're in
if (currentView === 'landing') return <Landing ... />;
if (currentView === 'examples') return <ExamplesPage ... />;
// Otherwise show the builder
```

Simple, but it works! No router needed, no extra dependencies, just plain old state management.

## The Flow

Here's how someone would actually use this:

**Option 1 - The Decisive User:**
Landing page → "Build My Resume Now" → Straight to the builder → Fill out forms → Pick template later

**Option 2 - The Browser:**
Landing page → "See Examples" → Examples page loads → Filters through categories → Hovers over cards (smooth animations kick in) → Clicks one → Preview modal → "Use This Template" → Builder opens with template already selected → Fill out their info → Done

**Option 3 - The Wanderer:**
Examples page → "Nah, I'll just go back" → Landing page → Maybe they'll come back later

## Files I Touched

Created:
- `src/components/ExamplesPage.jsx` - The whole examples browsing experience

Modified:
- `src/components/TemplateShowcase.jsx` - Fixed those hover effects
- `src/components/Landing.jsx` - Removed the showcase, added the button
- `src/App.jsx` - Navigation logic

## Things That Could've Gone Wrong (But Didn't)

- Z-index issues with the hover effects (classic CSS nightmare)
- State not persisting when navigating between views
- Template selection not carrying over to the builder
- The fade animations feeling laggy or unnatural

Thankfully, everything works smoothly. The 300ms transition timing feels just right—not too slow, not too snappy.

## What I Learned

Hover effects are deceptively tricky. You'd think "just fade one thing out and another in" would be easy, but getting the timing, the z-index layers, and the overall feel right took some tweaking.

Also, sometimes the simplest solution is the best. I almost went with React Router, but state-based navigation ended up being cleaner for what we needed.

## Test It Yourself

If you've got the dev server running (`npm run dev`), head to http://localhost:5173 and:

1. Click "See Examples"
2. Hover over any template card
3. Watch the magic happen
4. Click around, navigate back and forth
5. Try using a template

Should feel smooth and intuitive. If it doesn't, well... something broke 😅

---

**Status:** Everything's working. No errors. Clean code. Happy with how it turned out.

Built this feature in one sitting. Coffee count: 2. Bugs encountered: more than I'd like to admit. Final result: actually pretty good!
