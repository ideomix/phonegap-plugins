/*
 * PhoneGap is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) 2005-2010, Nitobi Software Inc.
 * Copyright (c) 2010, IBM Corporation
 */

/**
 * Constructor
 */
function ChildBrowser() {
}

/**
 * Display a new browser with the specified URL.
 *
 * @param url           The url to load
 * @param usePhoneGap   Load url in PhoneGap webview [optional]
 */
ChildBrowser.prototype.showWebPage = function(url, usePhoneGap) {
    PhoneGap.exec(null, null, "ChildBrowser", "showWebPage", [url, usePhoneGap]);
};

/**
 * Load ChildBrowser
 */
PhoneGap.addConstructor(function() {
    PhoneGap.addPlugin("childBrowser", new ChildBrowser());
    PluginManager.addService("ChildBrowser", "com.phonegap.plugins.childBrowser.ChildBrowser");
});
