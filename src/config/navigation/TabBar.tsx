import React from 'react';
import {Pressable, Text, View, StyleSheet, Platform} from 'react-native';
import {Colors} from 'assets/theme/index';
//import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: 4,
    paddingHorizontal: 10,
    backgroundColor: Colors.WHITE,
    paddingBottom: Platform.OS === 'ios' ? 12 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  btnTabs: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  active: {
    borderRadius: 10,
  },
  activeText: {
    fontWeight: '600',
    color: Colors.SKYBLUE_500,
    fontSize: 11,
    marginTop: 3,
  },
  text: {
    marginTop: 3,
    fontWeight: '400',
    color: Colors.GRAYSCALE_300,
    fontSize: 11,
  },
});

function TabsContent(props: any) {
  const {descriptors, state, navigation} = props;
  const focusedOptions = descriptors[state?.routes[state?.index]?.key]?.options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes?.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        //const renderImage = (propRoute: any) => {
        //  const renderFocus = isFocused
        //    ? Colors.SKYBLUE_500
        //    : Colors.GRAYSCALE_300;
        //  switch (propRoute.name) {
        //    case 'Home':
        //      return <MCI name="home" size={24} color={renderFocus} />;
        //    default:
        //      return null;
        //  }
        //};

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            key={`${index}-tab`}
            onPress={onPress}
            onLongPress={onLongPress}
            style={
              isFocused ? [styles.btnTabs, styles.active] : styles.btnTabs
            }>
            {/* renderImage(route) */}
            <Text style={isFocused ? styles.activeText : styles.text}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default TabsContent;
