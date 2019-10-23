//
//  SafariExtensionHandler.m
//  safari_coverage_plugin Extension
//
//  Created by Gopi on 10/19/19.
//  Copyright © 2019 gopiballava. All rights reserved.
//

#import "SafariExtensionHandler.h"
#import "SafariExtensionViewController.h"

@interface SafariExtensionHandler ()

@end

@implementation SafariExtensionHandler

- (void)messageReceivedWithName:(NSString *)messageName fromPage:(SFSafariPage *)page userInfo:(NSDictionary *)userInfo {
    // This method will be called when a content script provided by your extension calls safari.extension.dispatchMessage("message").
    [page getPagePropertiesWithCompletionHandler:^(SFSafariPageProperties *properties) {
        NSLog(@"The extension received a message (%@) from a script injected into (%@) with userInfo (%@)", messageName, properties.url, userInfo);
        [page dispatchMessageToScriptWithName:@"executeThis" userInfo:@{@"js_code":@"console.log(\"Woohoohoo\");"}];

        NSString *foo = [NSString stringWithCString:__FILE__ encoding:NSUTF8StringEncoding];
        NSString *dynamic = [[foo stringByDeletingLastPathComponent] stringByAppendingPathComponent:@"dynamic_execution.js"];
        NSError *someError;
        NSURL *url = [NSURL URLWithString:@"http://localhost:8000/dynamic_execution.js"];
        NSString *fileContents = [NSString stringWithContentsOfURL:url encoding:NSUTF8StringEncoding error:&someError];
        NSLog(@"File %@  read with error %@ contents: %@", dynamic, someError, fileContents);

        NSString *message = [NSString stringWithFormat:@"Error was: %@", someError];
        [page dispatchMessageToScriptWithName:@"printTHis" userInfo:@{@"error_code":message}];
        [page dispatchMessageToScriptWithName:@"executeThis" userInfo:@{@"js_code":fileContents}];

        url = [NSURL URLWithString:@"http://199.21.105.5/"];
        fileContents = [NSString stringWithContentsOfURL:url encoding:NSUTF8StringEncoding error:&someError];
        NSLog(@"File %@  read with error %@ contents: %@", dynamic, someError, fileContents);
        
        message = [NSString stringWithFormat:@"Error was: %@", someError];
        [page dispatchMessageToScriptWithName:@"fromMDSA" userInfo:@{@"error_code":message}];
    }];
}

- (void)toolbarItemClickedInWindow:(SFSafariWindow *)window {
    // This method will be called when your toolbar item is clicked.
    NSLog(@"The extension's toolbar item was clicked");
}

- (void)validateToolbarItemInWindow:(SFSafariWindow *)window validationHandler:(void (^)(BOOL enabled, NSString *badgeText))validationHandler {
    // This method will be called whenever some state changes in the passed in window. You should use this as a chance to enable or disable your toolbar item and set badge text.
    validationHandler(YES, nil);
}

- (SFSafariExtensionViewController *)popoverViewController {
    return [SafariExtensionViewController sharedController];
}

@end
