import {Dimensions, PixelRatio,TextStyle} from 'react-native';
const widthPercentageToDP = (widthPercent:string) => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const heightPercentageToDP = (heightPercent:string) => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};
const PixelToDP = (heightPixel:any) => {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  // const dimension =Dimensions.get('window');
  // console.log("dimension :",dimension);
  // Convert string input to decimal number
  //const elemHeight =
  // return screenWidth/PixelRatio.get();
  return PixelRatio.getPixelSizeForLayoutSize(
    (heightPixel * (screenHeight / PixelRatio.get())) / 640,
  );
  // return PixelRatio.getPixelSizeForLayoutSize(
  //     (heightPixel * ((screenHeight * screenWidth) / PixelRatio.get())) / 240*320,
  // );
};

 const responsiveFontSize = (f:any) => {
  const {height,width} = Dimensions.get('window');
  return  parseInt(Math.sqrt(height * height + width * width) * (f / 100));
}
export type fonts ={
    fontSize: number,
        fontWeight: string,
        color: string,
}
export function commonFortSize(weight:string,size:number,color:string):TextStyle{
    return {
        fontSize:size,
        fontWeight:weight,
        color:color,
    }
}

export {widthPercentageToDP, heightPercentageToDP, PixelToDP, responsiveFontSize};