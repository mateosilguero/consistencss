import React, { ReactNode } from 'react';
import {
  Text as RNText,
  TextProps,
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
  View as RNView,
  ViewProps,
} from 'react-native';
import { components } from './constants';
import { apply } from './';

interface Props {
  children?: ReactNode;
}

export const Text = ({ children, style = {}, ...rest }: Props & TextProps) => (
  <RNText style={apply(components.Text, style)} {...rest}>
    {children}
  </RNText>
);

export const TouchableOpacity = ({
  children,
  style = {},
  ...rest
}: Props & TouchableOpacityProps) => (
  <RNTouchableOpacity
    style={apply(components.TouchableOpacity, style)}
    {...rest}
  >
    {children}
  </RNTouchableOpacity>
);

export const View = ({ children, style = {}, ...rest }: Props & ViewProps) => (
  <RNView style={apply(components.View, style)} {...rest}>
    {children}
  </RNView>
);
