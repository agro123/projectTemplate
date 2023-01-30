import React, {FC, useRef, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  ImageSourcePropType,
} from 'react-native';
import useSytles from './styles';
// import {LOGO_IMG} from '@assets/media'; //need a default source
import {Colors} from '@theme/index';

const exampleImages = [
  {
    uri: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    uri: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2425&q=80',
  },
  {
    uri: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80',
  },
  {
    uri: 'https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    uri: 'https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80',
  },
  {
    uri: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
  },
  {
    uri: 'https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80',
  },
];
interface Props {
  images?: ImageSourcePropType[];
  children?: JSX.Element | JSX.Element[];
  height?: number | string;
}

const Carousel: FC<Props> = props => {
  const {images = exampleImages, height = '100%', children} = props;
  const styles = useSytles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const {width} = useWindowDimensions();
  let flatListRef = useRef<FlatList<ImageSourcePropType>>(null);
  const onViewRef = useRef(({changed}: {changed: any}) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });
  return (
    <View
      style={[
        styles.container,
        {
          height: height,
        },
      ]}>
      <FlatList
        horizontal
        data={images}
        decelerationRate={0}
        snapToInterval={width}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        maxToRenderPerBatch={5}
        ref={flatListRef}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 95}}
        onViewableItemsChanged={onViewRef.current}
        renderItem={({item, index}) => (
          <Image
            key={index}
            //defaultSource={LOGO_IMG}
            source={item}
            resizeMode="cover"
            style={{width: width, height}}
          />
        )}
        pagingEnabled
      />
      {children && <View style={[styles.actionsView]}>{children}</View>}
      <View style={styles.dotView}>
        {images.map(({}, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === currentIndex ? Colors.SKYBLUE_500 : Colors.WHITE,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};
export default Carousel;
