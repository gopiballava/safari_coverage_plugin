//
//  ViewController.m
//  safari_coverage_plugin
//
//  Created by Gopi on 10/19/19.
//  Copyright © 2019 gopiballava. All rights reserved.
//

#import "ViewController.h"
#import <SafariServices/SFSafariApplication.h>

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.appNameLabel.stringValue = @"safari_coverage_plugin";
}

- (IBAction)openSafariExtensionPreferences:(id)sender {
    [SFSafariApplication showPreferencesForExtensionWithIdentifier:@"ninja.flaherty.mac.safari-coverage-plugin-Extension" completionHandler:^(NSError * _Nullable error) {
        if (error) {
            // Insert code to inform the user something went wrong.
        }
    }];
}

@end
