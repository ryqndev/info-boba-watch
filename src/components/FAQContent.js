const faq = [
    {
        title: `How do I download the app?`,
        desc: `Check below for instructions on how to install the web app on your device:
            <br />
            <h2>iOS:</h2> 
            Open up <a href="https://boba.watch">https://boba.watch</a> in Safari. 
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
        to our server to retrieve the latest information stored on your account.`
    },
    {
        title: `Public/private profile issues`,
        desc: `Toggling the public setting on your user settings and getting a successful 
        alert message will ensure that our database gets a new setting change. This problem
        usually arises when you're using multiple devices and one has not updated.`
    }
];

export default faq;