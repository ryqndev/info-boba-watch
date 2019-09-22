const faq = [
    {
        title: `How do I download the app?`,
        desc: `Check below for instructions on how to install the web app on your device:
            <br />
            <h2>iOS:</h2> 
            Open up <a href="https://boba.watch">https://boba.watch</a> in Safari (not Chrome). 
            <br />
            &emsp;1. Click on the [ + ] icon on the bottom.
            <br />
            &emsp;2. Find the 'Add to Home Screen' option 
            <br />
            &emsp;3. Confirm 'Add'
            <div class="images images-ios">
                <div id="ios-1" class="image"></div>
                <div id="ios-2" class="image"></div>
                <div id="ios-3" class="image"></div>
            </div>
            After the download, the start icon should be visible on your home screen.
            <br />
            <h2>Android:</h2> 
            Open up <a href="https://boba.watch">https://boba.watch</a> in Chrome. 
            <br />
            &emsp;1. Select the 3 dot icon in the top-right corner
            <br />
            &emsp;2. Find the 'Add to Home screen' option
            <br />
            &emsp;3. Confirm 'Add'
            <br />
            <div class="images images-android">
                <div id="android-1" class="image"></div>
                <div id="android-2" class="image"></div>
                <div id="android-3" class="image"></div>
            </div>
            After the download, the start icon should be visible on your home screen.
        `
    },
    {
        title: `Why do I need a Facebook account to login?`,
        desc: `We don't want people to abuse our app by making a billion accounts and taking
        the service down for everyone so we currently use Facebook's login system since they 
        a ton of security precautions in place to prevent these things. Your privacy is 
        important to us and the only data we use from your Facebook account is your name
        and your most recent profile picture. (We do plan on adding a Google and Twitter sign up
        in the near future)
        <br />
        Also who likes remembering another password with numbers, special symbols, both upper and
        lower case letters and a mininmum length of 25 characters? Definately not me.`
    },
    {
        title: `When will desktop mode come out?`,
        desc: `Desktop mode is a feature that we are currently working on. 
        Since we're only a small team of 3, it takes time to design, develop, 
        and ship a functionality we want to include. It's a priority and we hope 
        to have it done soon! In the meantime, you can shape your browser into
        the corresponding mobile dimensions to get the same effect`
    },
    {
        title: `Drinks aren't updated on new device`,
        desc: `Logging out and logging back in will ensure that your app makes a new call
        to our server to retrieve the latest information stored on your account.
        To log out, click on your user profile on the top right corner and click logout.`
    },
    {
        title: `Public / private profile issues`,
        desc: `Toggling the public setting on your user settings and getting a successful 
        alert message will ensure that our database gets a new setting change. This problem
        usually arises when you're using multiple devices and one has not updated.`
    },
    {
        title: `Suggestions and Features`,
        desc: `We would LOVE to hear from the community to see what kind of features you 
        would like to see. Let us know on our <a href="https://www.facebook.com/bobawatch/">
         facebook page </a> and we'll try to get back to you!`
    }
];

export default faq;