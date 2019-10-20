//
//  AppDelegate.m
//  safari_coverage_plugin
//
//  Created by Gopi on 10/19/19.
//  Copyright © 2019 gopiballava. All rights reserved.
//

#import "AppDelegate.h"

@interface AppDelegate ()

@end

@implementation AppDelegate

- (void)applicationDidFinishLaunching:(NSNotification *)aNotification {
    // Insert code here to initialize your application
    NSLog(@"Hello there, we launched. %s", __FILE__);
    NSString *foo = [NSString stringWithCString:__FILE__ encoding:NSUTF8StringEncoding];
    NSString *dynamic = [[foo stringByDeletingLastPathComponent] stringByAppendingPathComponent:@"main.m"];
    
    NSError *someError;
    NSURL *url = [NSURL URLWithString:@"http://localhost:8000/dynamic_execution.js"];
    NSString *fileContents = [NSString stringWithContentsOfURL:url encoding:NSUTF8StringEncoding error:&someError];
    NSLog(@"File %@  read with error %@ contents: %@", dynamic, someError, fileContents);
/*
    NSString *fileContents = [NSString stringWithContentsOfFile:dynamic encoding:NSUTF8StringEncoding error:&someError];
    NSLog(@"File %@  read with error %@ contents: %@", dynamic, someError, fileContents);
*/
}

- (void)applicationWillTerminate:(NSNotification *)aNotification {
    // Insert code here to tear down your application
}

@end
