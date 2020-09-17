import React, { FC } from 'react';
import {
  Text as RNText,
  TextProps,
  TextInput as RNTextInput,
  TextInputProps,
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
  View as RNView,
  ViewProps,
} from 'react-native';
import { components } from './constants';
import { apply } from './core';

export const Text: FC<TextProps> = ({ children, style = {}, ...rest }) => (
  <RNText style={apply(components.text, style)} {...rest}>
    {children}
  </RNText>
);

export const TextInput = ({ style = {}, ...rest }: TextInputProps) => (
  <RNTextInput style={apply(components.textinput, style)} {...rest} />
);

export const TouchableOpacity: FC<TouchableOpacityProps> = ({
  children,
  style = {},
  ...rest
}) => (
  <RNTouchableOpacity
    style={apply(components.touchableopacity, style)}
    {...rest}
  >
    {children}
  </RNTouchableOpacity>
);

export const View: FC<ViewProps> = ({ children, style = {}, ...rest }) => (
  <RNView style={apply(components.view, style)} {...rest}>
    {children}
  </RNView>
);
