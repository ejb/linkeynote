## Linkeynote

**Turn a list of URLs into a slick presentation.** Ideal for showing off a bunch of links without fumbling around with browser tabs. First used at [Hacks/Hackers DK](http://www.meetup.com/Hacks-Hackers-DK/events/225233828/).

### Setup

1. Download a copy of this repository
2. Install [Electron](http://electron.atom.io/#get-started)

        npm install electron-prebuilt -g

3. Customise **links.txt**
4. Edit the CSS in **viewer.html**
5. Run Electron in the current directory:

        electron .

6. Press right/left on the keyboard to go forward and back.

### FAQ

#### How do I edit slides?

Slides are defined by **links.txt**.

- Lines with links (with `http` prefix) are turned into webviews
- Lines with text become standard text-based slides
- Blank lines are ignored

#### Why use Electron?

Webviews in Electron don't have CORS problems like proper iframes. Also, having it as a separate app stops your presentation from getting mixed up with other browser windows in the heat of a presentation.

### Contributing

Linkeynote is very small and (so far) short on features. And the code is a bit dubious in places. If you happen to use it yourself and make some improvements, please consider submitting them as a pull request. Thank you!