
//
// CetusDictionaryColor.h
//
// Do not edit directly
// Generated on Thu, 31 Jan 2019 14:07:27 GMT
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
ColorShadow,
ColorTextBase,
ColorTextSecondary
};

@interface CetusDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(CetusDictionaryColorName)color;
@end
