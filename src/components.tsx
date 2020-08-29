import React, { ReactNode } from 'react';
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

interface Props {
  children?: ReactNode;
}

export const Text = ({ children, style = {}, ...rest }: Props & TextProps) => (
  <RNText style={apply(components.text, style)} {...rest}>
    {children}
  </RNText>
);

export const TextInput = ({ style = {}, ...rest }: TextInputProps) => (
  <RNTextInput style={apply(components.textinput, style)} {...rest} />
);

export const TouchableOpacity = ({
  children,
  style = {},
  ...rest
}: Props & TouchableOpacityProps) => (
  <RNTouchableOpacity
    style={apply(components.touchableopacity, style)}
    {...rest}
  >
    {children}
  </RNTouchableOpacity>
);

export const View = ({ children, style = {}, ...rest }: Props & ViewProps) => (
  <RNView style={apply(components.view, style)} {...rest}>
    {children}
  </RNView>
);
