//
//  ViewController.h
//  safari_coverage_plugin
//
//  Created by Gopi on 10/19/19.
//  Copyright © 2019 gopiballava. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@interface ViewController : NSViewController

@property (weak, nonatomic) IBOutlet NSTextField * appNameLabel;

- (IBAction)openSafariExtensionPreferences:(id)sender;

@end

