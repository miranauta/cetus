
//
// CetusDictionaryColor.h
//
// Do not edit directly
// Generated on Sat, 05 Jan 2019 18:03:17 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, CetusDictionaryColorName) {
ColorBluePrimary,
ColorBlueLight,
ColorBlueLighter,
ColorRedPrimary,
ColorRedLight,
ColorRedLighter,
ColorGreenPrimary,
ColorGreenLight,
ColorGreenLighter,
ColorYellowPrimary,
ColorYellowLight,
ColorYellowLighter,
ColorOrangePrimary,
ColorOrangeLight,
ColorOrangeLighter,
ColorGraybluePrimary,
ColorGrayblueLight,
ColorGrayblueLighter,
ColorGrayPrimary,
ColorGrayLight,
ColorBlack20,
ColorBlack75,
ColorTextBase,
ColorTextSecondary
};

@interface CetusDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(CetusDictionaryColorName)color;
@end
