# Gmail Spam Slayer: No Phone, No Convo, No Mercy

## What’s This Thing Do?

Look, we’ve all been there—some rando slides into your inbox with a “once-in-a-lifetime” offer to buy your nonexistent business for eleventy billion dollars. But where’s the phone number? Where’s the proof they’re not a bot or your cousin’s latest pyramid scheme? If they’re not in your contacts and they didn’t drop a digits bomb in the email, this script yeets them straight out of your inbox and slaps a “no convo - no phone” label on ‘em. Because if they’re too cheap to give you a number to yell at, they don’t deserve your eyeballs.

- **Scans your Primary inbox** (none of that Social or Promotions nonsense).
- **Checks for prior chit-chat** with the sender—because strangers don’t get a free pass.
- **Hunts for a phone number**—no 555-123-4567, no dice.
- **Labels and archives** the offenders faster than you can say “unsubscribe.”

## How to Use It

1. **Plop this bad boy into Google Apps Script**:
   - Open your Gmail, click that little gear, and find “See all settings.” Nah, just kidding—go to [script.google.com](https://script.google.com), start a new project, and paste the code.
2. **Run `filterEmails`** manually to test it—or don’t, live dangerously.
3. **Set up `setupTrigger`** if you want it to run hourly and keep your inbox pristine while you sip coffee and judge people.
   - Pro tip: Tweak the `everyHours(1)` bit if you’re paranoid and want it checking every 5 minutes.

## The Code, Explained (Sorta)

- **Label Magic**: Creates a “no convo - no phone” label if it doesn’t exist. Sounds judgy because it is.
- **Inbox Only**: Ignores Social, Promotions, and other Gmail tabs—because spam doesn’t deserve a category.
- **Phone Number Radar**: Uses a regex so fancy it could star in a spy movie. Catches stuff like `123-456-7890`, `+1 (555) 555-5555`, or `8675309` (Jenny, you’re safe).
- **Conversation Check**: If you’ve never swapped emails with this clown before, they’re suspect.
- **The Ban Hammer**: No convo *or* no phone? Labeled and archived. Buh-bye.

## Why This Exists

Because you’re tired of “Dear [FirstName], I’d like to offer you $1M for your Etsy shop” emails with no way to call and scream, “I DON’T EVEN0W0N A SHOP!” If they’re legit, they’ll give you a number. If not, they’re spammy McSpamface, and this script’s got your back.

## Tweaks & Shenanigans

- Change `50` in `GmailApp.search` to `500` if your inbox is a dumpster fire and you need to process more emails.
- Edit the `phoneRegex` if you’re dealing with weird international formats—or if you just like regex flexing.
- Swap `moveToArchive` for `moveToTrash` if you’re feeling extra savage.

## Disclaimer

I’m not responsible if you accidentally banish your boss’s email because they’re too cool to include a phone number. Test it first, ya goof. Also, Google might throttle you if you run it too hard—don’t blame me when they lock you out for being a script kiddie.

## Contributions

Got a funnier regex? A sassier label name? Fork it, tweak it, PR it. Let’s make spam cry together.
