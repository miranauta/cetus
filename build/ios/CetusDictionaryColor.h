
//
// CetusDictionaryColor.h
//
// Do not edit directly
// Generated on Mon, 11 Feb 2019 11:48:34 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, CetusDictionaryColorName) {
colorBluePrimary,
colorBlueLight,
colorBlueLighter,
colorRedPrimary,
colorRedLight,
colorRedLighter,
colorGreenPrimary,
colorGreenLight,
colorGreenLighter,
colorYellowPrimary,
colorYellowLight,
colorYellowLighter,
colorOrangePrimary,
colorOrangeLight,
colorOrangeLighter,
colorGraybluePrimary,
colorGrayblueLight,
colorGrayblueLighter,
colorGrayPrimary,
colorGrayLight,
colorBlack20,
colorBlack75,
colorShadow,
colorTextBase,
colorTextSecondary
};

@interface CetusDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(CetusDictionaryColorName)color;
@end
