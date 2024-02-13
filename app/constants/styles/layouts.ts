import {ViewStyle, Dimensions, PixelRatio, Platform} from 'react-native';

import {} from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
const designWidth = screenWidth > 600 ? 700 : 375;

export const px = (value: number) => {
  const ratio = screenWidth / designWidth;
  return PixelRatio.roundToNearestPixel(value * ratio);
};

export const spacing = {
  xs: px(2),
  sm: px(4),
  md: px(8),
  lg: px(10),
  mlg: px(12),
  mmlg: px(14),
  xl: px(16),
  xxl: px(24),
  xxxl: px(32),
  bigxl: px(500),
};

const layouts = {
  // **** Flexbox alignment ****
  row: {flexDirection: 'row'} as ViewStyle,
  rowReversed: {flexDirection: 'row-reverse'} as ViewStyle,
  justifyBetween: {justifyContent: 'space-between'} as ViewStyle,
  justifyAround: {justifyContent: 'space-around'} as ViewStyle,
  justifyStart: {justifyContent: 'flex-start'} as ViewStyle,
  justifyEnd: {justifyContent: 'flex-end'} as ViewStyle,
  xCentered: {justifyContent: 'center'} as ViewStyle,
  yCentered: {alignItems: 'center'} as ViewStyle,
  alignedEnd: {alignItems: 'flex-end'} as ViewStyle,
  alignStart: {alignItems: 'flex-start'} as ViewStyle,
  flexed: {flex: 1} as ViewStyle,
  flexGrow: {flexGrow: 1} as ViewStyle,
  allCentered: {justifyContent: 'center', alignItems: 'center'} as ViewStyle,
  selfStart: {alignSelf: 'flex-start'} as ViewStyle,
  selfCenter: {alignSelf: 'center'} as ViewStyle,
  contentStart: {alignContent: 'flex-start'} as ViewStyle,

  // Padding
  ps: {
    xs: {paddingStart: spacing.xs},
    sm: {paddingStart: spacing.sm},
    md: {paddingStart: spacing.md},
    lg: {paddingStart: spacing.lg},
    mlg: {paddingStart: spacing.mlg},
    mmlg: {paddingStart: spacing.mmlg},
    xl: {paddingStart: spacing.xl},
    xxl: {paddingStart: spacing.xxl},
    xxxl: {paddingStart: spacing.xxxl},
  },

  pe: {
    xs: {paddingEnd: spacing.xs},
    sm: {paddingEnd: spacing.sm},
    md: {paddingEnd: spacing.md},
    lg: {paddingEnd: spacing.lg},
    mlg: {paddingEnd: spacing.mlg},
    mmlg: {paddingEnd: spacing.mmlg},
    xl: {paddingEnd: spacing.xl},
    xxl: {paddingEnd: spacing.xxl},
    xxxl: {paddingEnd: spacing.xxxl},
  },

  pt: {
    xs: {paddingTop: spacing.xs},
    sm: {paddingTop: spacing.sm},
    md: {paddingTop: spacing.md},
    lg: {paddingTop: spacing.lg},
    mlg: {paddingTop: spacing.mlg},
    mmlg: {paddingTop: spacing.mmlg},
    xl: {paddingTop: spacing.xl},
    xxl: {paddingTop: spacing.xxl},
    xxxl: {paddingTop: spacing.xxxl},
  },

  pb: {
    xs: {paddingBottom: spacing.xs},
    sm: {paddingBottom: spacing.sm},
    md: {paddingBottom: spacing.md},
    lg: {paddingBottom: spacing.lg},
    mlg: {paddingBottom: spacing.mlg},
    mmlg: {paddingBottom: spacing.mmlg},
    xl: {paddingBottom: spacing.xl},
    xxl: {paddingBottom: spacing.xxl},
    xxxl: {paddingBottom: spacing.xxxl},
    bigxl: {paddingBottom: spacing.bigxl},
  },

  px: {
    xs: {paddingHorizontal: spacing.xs},
    sm: {paddingHorizontal: spacing.sm},
    md: {paddingHorizontal: spacing.md},
    lg: {paddingHorizontal: spacing.lg},
    mlg: {paddingHorizontal: spacing.mlg},
    mmlg: {paddingHorizontal: spacing.mmlg},
    xl: {paddingHorizontal: spacing.xl},
    xxl: {paddingHorizontal: spacing.xxl},
    xxxl: {paddingHorizontal: spacing.xxxl},
  },

  py: {
    xs: {paddingVertical: spacing.xs},
    sm: {paddingVertical: spacing.sm},
    md: {paddingVertical: spacing.md},
    lg: {paddingVertical: spacing.lg},
    mlg: {paddingVertical: spacing.mlg},
    mmlg: {paddingVertical: spacing.mmlg},
    xl: {paddingVertical: spacing.xl},
    xxl: {paddingVertical: spacing.xxl},
    xxxl: {paddingVertical: spacing.xxxl},
  },

  // Margin

  ms: {
    xs: {marginStart: spacing.xs},
    sm: {marginStart: spacing.sm},
    md: {marginStart: spacing.md},
    lg: {marginStart: spacing.lg},
    mlg: {marginStart: spacing.mlg},
    xl: {marginStart: spacing.xl},
    xxl: {marginStart: spacing.xxl},
    xxxl: {marginStart: spacing.xxxl},
  },

  me: {
    xs: {marginEnd: spacing.xs},
    sm: {marginEnd: spacing.sm},
    md: {marginEnd: spacing.md},
    lg: {marginEnd: spacing.lg},
    mlg: {marginEnd: spacing.mlg},
    mmlg: {marginEnd: spacing.mmlg},
    xl: {marginEnd: spacing.xl},
    xxl: {marginEnd: spacing.xxl},
    xxxl: {marginEnd: spacing.xxxl},
  },

  mt: {
    xs: {marginTop: spacing.xs},
    sm: {marginTop: spacing.sm},
    md: {marginTop: spacing.md},
    lg: {marginTop: spacing.lg},
    mlg: {marginTop: spacing.mlg},
    mmlg: {marginTop: spacing.mmlg},
    xl: {marginTop: spacing.xl},
    xxl: {marginTop: spacing.xxl},
    xxxl: {marginTop: spacing.xxxl},
  },

  mb: {
    xs: {marginBottom: spacing.xs},
    sm: {marginBottom: spacing.sm},
    md: {marginBottom: spacing.md},
    lg: {marginBottom: spacing.lg},
    mlg: {marginBottom: spacing.mlg},
    mmlg: {marginBottom: spacing.mmlg},
    xl: {marginBottom: spacing.xl},
    xxl: {marginBottom: spacing.xxl},
    xxxl: {marginBottom: spacing.xxxl},
  },

  mx: {
    xs: {marginHorizontal: spacing.xs},
    sm: {marginHorizontal: spacing.sm},
    md: {marginHorizontal: spacing.md},
    lg: {marginHorizontal: spacing.lg},
    mlg: {marginHorizontal: spacing.mlg},
    xl: {marginHorizontal: spacing.xl},
    xxl: {marginHorizontal: spacing.xxl},
  },

  my: {
    xs: {marginVertical: spacing.xs},
    sm: {marginVertical: spacing.sm},
    md: {marginVertical: spacing.md},
    lg: {marginVertical: spacing.lg},
    mlg: {marginVertical: spacing.mlg},
    mmlg: {marginVertical: spacing.mmlg},
    xl: {marginVertical: spacing.xl},
    xxl: {marginVertical: spacing.xxl},
  },

  // Action sheet spacing
  actionSheetSpacing: {
    paddingHorizontal: px(16),
    paddingTop: px(32),
    paddingBottom: px(42),
  },
  actionSheetContainer: {
    marginHorizontal: spacing.xl,
    marginBottom: spacing.xxl,
  },
  actionSheetRadius: {
    borderTopLeftRadius: px(20),
    borderTopRightRadius: px(20),
  },

  // Absolute positioning
  relative: {position: 'relative'} as ViewStyle,
  absolute: {position: 'absolute'} as ViewStyle,
  block: {display: 'flex'} as ViewStyle,
  fullHeight: {height: '100%'} as ViewStyle,
  fullWidth: {width: '100%'} as ViewStyle,

  // **** Borders ****
  noBorder: {borderWidth: 0},
  border: {borderWidth: 1},
  bordered: {borderColor: 'black', borderWidth: 1},
  horizontalBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  borderRounded: {
    bottomLeft: {borderBottomLeftRadius: px(10)},
    topLeft: {borderTopLeftRadius: px(10)},
    bottomRight: {borderBottomRightRadius: px(10)},
    topRight: {borderTopRightRadius: px(10)},
  },

  topRounded: {borderTopStartRadius: px(10), borderTopEndRadius: px(10)},
  rounded: {borderRadius: px(10)},
  halfRounded: {borderRadius: px(5)},
  scrollViewBottomSpacing: {paddingBottom: px(100)},
  scrollViewHorizontalSpacing: {paddingHorizontal: px(10)},
};

export default layouts;
