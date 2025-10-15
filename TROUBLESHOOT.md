# Troubleshooting - When Things Go Wrong

Stuff breaks. Here's how to fix it.

## "npm run dev" Isn't Working

**Error: ENOENT package.json**
- You're in the wrong folder
- Fix: `cd ai-resume-builder` then try again

**Error: Port 5173 already in use**
- You already have it running somewhere
- Fix: Close the other terminal or use a different port

**Error: Missing dependencies**
- You didn't install packages
- Fix: `npm install` then `npm run dev`

## Website Won't Load

**"Refused to connect" in browser**
- Server isn't running
- Fix: Run `npm run dev` first
- Or double-click `RUN_ME.bat` if you're on Windows

**Blank page / white screen**
- Check browser console (F12) for errors
- Usually a JavaScript error
- Try: Clear cache, hard refresh (Ctrl+Shift+R)

## AI Features Not Working

**"Failed to generate About Me"**
1. Check your internet connection
2. API key might be wrong/expired
3. Groq service might be down (rare but happens)
4. Check console for actual error

**AI takes forever**
- Groq free tier can be slow sometimes
- Wait 5-10 seconds
- If it fails, there's a fallback that still works

**"Model decommissioned" error**
- The AI model changed/updated
- Fix: Update the MODEL constant in `src/utils/ai.js`
- Current working model: `llama-3.3-70b-versatile`

## PDF Problems

**PDF doesn't download**
- Check browser's pop-up blocker
- Try a different browser
- Console might have errors (F12)

**PDF looks different from preview**
- This shouldn't happen anymore (we fixed it)
- If it does, make sure you're using latest code
- Try different browser

**PDF is huge file size**
- If you uploaded a massive profile picture, that's why
- Keep images under 2MB

## Template Issues

**Template looks broken**
- Try a different template
- Some templates handle lots of content better than others
- Check if you're missing required fields

**Icons misaligned in PDF**
- Old bug that's been fixed
- Make sure you have latest code

## Form Issues

**Can't move to next step**
- Required fields probably empty
- Red text will tell you what's missing
- Some fields like name and email are mandatory

**Auto-capitalization not working**
- Type something, then click outside the field (blur event)
- It happens on blur, not while typing

**Skill suggestions not showing**
- Pick a profession first from dropdown
- If still nothing, check console for errors

## React/Build Errors

**"React is not defined"**
- Vite should handle this
- Try: Delete `node_modules`, run `npm install` again

**Tailwind classes not working**
- Build issue
- Fix: Restart dev server
- Check `tailwind.config.js` exists

**"Module not found" errors**
- Missing import or wrong path
- Check file paths are correct
- Case-sensitive on Linux/Mac

## General Debugging Steps

When something's broken and you don't know why:

1. **Check the console** (F12 in browser)
   - Red errors tell you what's wrong
   - Read the error message (seriously, read it)

2. **Restart the dev server**
   - Stop it (Ctrl+C)
   - Start it again (`npm run dev`)
   - Clears a lot of weird caching issues

3. **Clear browser cache**
   - Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
   - Or clear all cache in browser settings

4. **Check the terminal**
   - Where you ran `npm run dev`
   - Errors show up there too

5. **Try a different browser**
   - If it works in Chrome but not Firefox, now you know

6. **Update dependencies**
   - `npm update`
   - Sometimes packages fix bugs

## Still Broken?

If none of this helps:

1. Check if you modified any code recently
2. Compare with original code from repo
3. Try the nuclear option: delete everything, clone fresh, `npm install`, try again
4. Google the error message (seriously, someone's had this problem before)

## Common "It's Not a Bug" Situations

**"The AI wrote something weird"**
- Yeah, it does that sometimes
- You can edit it manually
- Or regenerate and hope for better

**"Only 7 steps? I want more!"**
- That's... by design
- 7 steps covers everything a resume needs
- More steps = more tedious

**"Why can't I save my resume?"**
- No authentication system (it's a demo)
- Just download the PDF
- Want to edit later? Fill it again (it's quick)

**"Template X looks weird on mobile"**
- Some templates are more mobile-friendly than others
- Use Modern or Classic for mobile
- Or just use desktop to build it

## Emergency Contact

If you're reading this during a demo and something's broken:

1. Don't panic
2. Switch to showing the Examples page (that's static, always works)
3. Talk about the features instead of demoing them
4. Have a backup PDF ready

Remember: "It works on my machine" is a valid excuse during demos.

---

**Pro Tip**: 90% of issues are fixed by restarting the dev server. The other 10% are fixed by clearing browser cache.
